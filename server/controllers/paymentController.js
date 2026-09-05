import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

import Payment from "../models/paymentModel.js";
import User from "../models/userModel.js";

import { razorpay } from "../utils/razorpay.js";
import CREDIT_COSTS from "../utils/creditCost.js";
import logger from "../utils/logger.js";

import crypto from "crypto";

                         
export const createOrder = catchAsyncError(
  async (req, res, next) => {

    // 1. Authentication

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to create payment order"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    logger.info(
      "Payment order creation started",
      {
        userId,
      }
    );


    // 2. Get plan

    const { plan } = req.body;

    if (!plan) {

      logger.warn(
        "Payment order creation failed: plan missing",
        {
          userId,
        }
      );

      return next(
        new ErrorHandler(
          "Please select a plan.",
          400
        )
      );
    }


    // 3. Plans

    const plans = {

      starter: {
        name: "Starter",
        amount: 99,
        credits: 300,
        validityDays: 60,
      },

      pro: {
        name: "Pro",
        amount: 199,
        credits: 0,
        validityDays: 30,
      },

    };


    // 4. Find selected plan

    const selectedPlan =
      plans[plan];

    if (!selectedPlan) {

      logger.warn(
        "Invalid payment plan selected",
        {
          userId,
          plan,
        }
      );

      return next(
        new ErrorHandler(
          "Invalid plan selected.",
          400
        )
      );
    }


    logger.info(
      "Payment plan selected",
      {
        userId,
        plan,
        amount: selectedPlan.amount,
      }
    );


    // 5. Razorpay order options

    const options = {

      amount:
        selectedPlan.amount * 100,

      currency: "INR",

      receipt:
        `prep_${Date.now()}`,

      notes: {
        userId,
        plan,
      },

    };


    // 6. Create Razorpay order

    try {

      const order =
        await razorpay.orders.create(
          options
        );


      logger.info(
        "Razorpay order created successfully",
        {
          userId,
          plan,
          orderId: order.id,
          amount: order.amount,
        }
      );


      // 7. Response

      return res.status(200).json({

        success: true,

        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        },

        plan: {
          name:
            selectedPlan.name,

          credits:
            selectedPlan.credits,

          validityDays:
            selectedPlan.validityDays,
        },

        keyId:
          process.env.RAZORPAY_KEY_ID,

      });

    } catch (error) {

      logger.error(
        "Razorpay order creation failed",
        {
          userId,
          plan,
          error:
            error.message,
        }
      );

      return next(
        new ErrorHandler(
          "Razorpay order creation failed.",
          500
        )
      );
    }
  }
);


export const verifyPayment =
  catchAsyncError(
    async (req, res, next) => {

      // 1. Authentication

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized payment verification request"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const userId =
        req.user._id.toString();


      // 2. Get payment details

      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      } = req.body;


      // 3. Validate

      if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature
      ) {

        logger.warn(
          "Payment verification details missing",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "Payment verification details are missing.",
            400
          )
        );
      }


      // 4. Generate signature

      const generatedSignature =
        crypto
          .createHmac(
            "sha256",
            process.env.RAZORPAY_KEY_SECRET
          )
          .update(
            `${razorpay_order_id}|${razorpay_payment_id}`
          )
          .digest("hex");


      // 5. Compare signatures

      if (
        generatedSignature !==
        razorpay_signature
      ) {

        logger.warn(
          "Payment signature verification failed",
          {
            userId,
            orderId:
              razorpay_order_id,
            paymentId:
              razorpay_payment_id,
          }
        );

        return next(
          new ErrorHandler(
            "Payment verification failed.",
            400
          )
        );
      }


      // 6. Prevent duplicate payment

      const existingPayment =
        await Payment.findOne({
          razorpayPaymentId:
            razorpay_payment_id,
        });


      if (existingPayment) {

        logger.warn(
          "Duplicate payment verification attempt",
          {
            userId,
            paymentId:
              razorpay_payment_id,
          }
        );

        return next(
          new ErrorHandler(
            "This payment has already been processed.",
            400
          )
        );
      }


      // 7. Find user

      const user =
        await User.findById(
          req.user._id
        );


      if (!user) {

        logger.error(
          "User not found during payment verification",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "User not found.",
            404
          )
        );
      }


      // 8. Starter plan

      const creditsToAdd =
        300;


      // 9. Add credits

      user.credits +=
        creditsToAdd;


      // 10. Set plan

      user.plan =
        "starter";


      // 11. Set expiry

      const expiryDate =
        new Date();

      expiryDate.setDate(
        expiryDate.getDate() + 60
      );

      user.creditExpiry =
        expiryDate;


      // 12. Save user

      await user.save();


      // 13. Save payment history

      const payment =
        await Payment.create({

          user:
            user._id,

          razorpayOrderId:
            razorpay_order_id,

          razorpayPaymentId:
            razorpay_payment_id,

          razorpaySignature:
            razorpay_signature,

          plan:
            "starter",

          amount:
            99,

          currency:
            "INR",

          paymentType:
            "one-time",

          creditsAdded:
            creditsToAdd,

          status:
            "success",

        });


      logger.info(
        "Starter payment verified successfully",
        {
          userId,
          paymentId:
            razorpay_payment_id,
          creditsAdded:
            creditsToAdd,
        }
      );


      // 14. Response

      return res.status(200).json({

        success: true,

        message:
          "Payment verified successfully.",

        payment: {
          id:
            payment._id,

          plan:
            "starter",

          creditsAdded:
            creditsToAdd,
        },

        user: {
          credits:
            user.credits,

          plan:
            user.plan,

          creditExpiry:
            user.creditExpiry,
        },

      });
    }
  );


export const createSubscription =
  catchAsyncError(
    async (req, res, next) => {

      // 1. Authentication

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized request to create subscription"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const userId =
        req.user._id.toString();


      // 2. Get Pro plan ID

      const planId =
        process.env.RAZORPAY_PRO_PLAN_ID;


      if (!planId) {

        logger.error(
          "Razorpay Pro plan ID is not configured"
        );

        return next(
          new ErrorHandler(
            "Razorpay Pro plan is not configured.",
            500
          )
        );
      }


      // 3. Create subscription

      try {

        const subscription =
          await razorpay.subscriptions.create({

            plan_id:
              planId,

            total_count:
              12,

            customer_notify:
              1,

            notes: {
              userId,
              plan:
                "pro",
            },

          });


        logger.info(
          "Pro subscription created successfully",
          {
            userId,
            subscriptionId:
              subscription.id,
            status:
              subscription.status,
          }
        );


        // 4. Response

        return res.status(200).json({

          success: true,

          message:
            "Subscription created successfully.",

          subscription: {
            id:
              subscription.id,

            planId:
              subscription.plan_id,

            status:
              subscription.status,
          },

          keyId:
            process.env.RAZORPAY_KEY_ID,

        });

      } catch (error) {

        logger.error(
          "Razorpay subscription creation failed",
          {
            userId,
            error:
              error.message,
          }
        );

        return next(
          new ErrorHandler(
            "Razorpay subscription creation failed.",
            500
          )
        );
      }
    }
  );


export const cancelSubscription =
  catchAsyncError(
    async (req, res, next) => {

      // 1. Authentication

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized subscription cancellation request"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const userId =
        req.user._id.toString();


      // 2. Find user

      const user =
        await User.findById(
          req.user._id
        );


      if (!user) {

        logger.warn(
          "User not found during subscription cancellation",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "User not found.",
            404
          )
        );
      }


      if (
        !user.razorpaySubscriptionId
      ) {

        logger.warn(
          "No active subscription found",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "No active subscription found.",
            404
          )
        );
      }


      // 3. Cancel subscription

      try {

        const subscription =
          await razorpay.subscriptions.cancel(
            user.razorpaySubscriptionId,
            {
              cancel_at_cycle_end:
                1,
            }
          );


        // 4. Update database

        user.subscriptionStatus =
          "cancelled";

        await user.save();


        logger.info(
          "Subscription cancellation scheduled",
          {
            userId,
            subscriptionId:
              subscription.id,
          }
        );


        // 5. Response

        return res.status(200).json({

          success: true,

          message:
            "Subscription cancellation scheduled successfully.",

          subscription: {
            id:
              subscription.id,

            status:
              subscription.status,

            currentEnd:
              subscription.current_end,
          },

        });

      } catch (error) {

        logger.error(
          "Razorpay subscription cancellation failed",
          {
            userId,
            error:
              error.message,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to cancel subscription.",
            500
          )
        );
      }
    }
  );


export const handleRazorpayWebhook =
  catchAsyncError(
    async (req, res, next) => {

      try {

        // 1. Get signature

        const signature =
          req.headers[
            "x-razorpay-signature"
          ];


        if (!signature) {

          logger.warn(
            "Razorpay webhook signature missing"
          );

          return res.status(400).json({

            success: false,

            message:
              "Webhook signature missing.",

          });
        }


        // 2. Verify signature

        const expectedSignature =
          crypto
            .createHmac(
              "sha256",
              process.env.RAZORPAY_WEBHOOK_SECRET
            )
            .update(req.rawBody)
            .digest("hex");


        if (
          signature !==
          expectedSignature
        ) {

          logger.warn(
            "Invalid Razorpay webhook signature"
          );

          return res.status(400).json({

            success: false,

            message:
              "Invalid webhook signature.",

          });
        }


        // 3. Get event

        const event =
          req.body;


        logger.info(
          "Razorpay webhook received",
          {
            event:
              event.event,
          }
        );


        // 4. Handle events

        switch (event.event) {


          // ---------------------------------
          // Subscription activated
          // ---------------------------------

          case "subscription.activated": {

            const subscription =
              event.payload
                .subscription
                .entity;


            const userId =
              subscription
                .notes?.userId;


            if (!userId) {

              logger.warn(
                "Webhook subscription activated: user ID missing",
                {
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            const user =
              await User.findById(
                userId
              );


            if (!user) {

              logger.error(
                "Webhook user not found",
                {
                  userId,
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            user.plan =
              "pro";

            user.subscriptionStatus =
              "active";

            user.razorpaySubscriptionId =
              subscription.id;

            user.subscriptionExpiry =
              new Date(
                subscription.current_end *
                1000
              );


            await user.save();


            await Payment.create({

              user:
                user._id,

              razorpaySubscriptionId:
                subscription.id,

              plan:
                "pro",

              amount:
                199,

              currency:
                "INR",

              paymentType:
                "subscription",

              creditsAdded:
                0,

              status:
                "success",

            });


            logger.info(
              "Pro subscription activated",
              {
                userId,
                subscriptionId:
                  subscription.id,
              }
            );

            break;
          }


          // ---------------------------------
          // Subscription charged
          // ---------------------------------

          case "subscription.charged": {

            const subscription =
              event.payload
                .subscription
                .entity;


            const userId =
              subscription
                .notes?.userId;


            if (!userId) {

              logger.warn(
                "Subscription charged webhook: user ID missing",
                {
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            const user =
              await User.findById(
                userId
              );


            if (!user) {

              logger.error(
                "User not found during subscription renewal",
                {
                  userId,
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            user.plan =
              "pro";

            user.subscriptionStatus =
              "active";

            user.subscriptionExpiry =
              new Date(
                subscription.current_end *
                1000
              );


            await user.save();


            logger.info(
              "Pro subscription renewed",
              {
                userId,
                subscriptionId:
                  subscription.id,
              }
            );

            break;
          }


          // ---------------------------------
          // Subscription cancelled
          // ---------------------------------

          case "subscription.cancelled": {

            const subscription =
              event.payload
                .subscription
                .entity;


            const user =
              await User.findOne({

                razorpaySubscriptionId:
                  subscription.id,

              });


            if (!user) {

              logger.warn(
                "User not found for cancelled subscription",
                {
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            user.subscriptionStatus =
              "cancelled";


            await user.save();


            logger.info(
              "Subscription cancelled",
              {
                userId:
                  user._id.toString(),

                subscriptionId:
                  subscription.id,
              }
            );

            break;
          }


          // ---------------------------------
          // Subscription completed
          // ---------------------------------

          case "subscription.completed": {

            const subscription =
              event.payload
                .subscription
                .entity;


            const user =
              await User.findOne({

                razorpaySubscriptionId:
                  subscription.id,

              });


            if (!user) {

              logger.warn(
                "User not found for completed subscription",
                {
                  subscriptionId:
                    subscription.id,
                }
              );

              break;
            }


            user.plan =
              "free";

            user.subscriptionStatus =
              "expired";

            user.subscriptionEndsAt =
              null;

            user.razorpaySubscriptionId =
              null;


            await user.save();


            logger.info(
              "Subscription completed and user downgraded",
              {
                userId:
                  user._id.toString(),

                subscriptionId:
                  subscription.id,
              }
            );

            break;
          }


          // ---------------------------------
          // Payment failed
          // ---------------------------------

          case "payment.failed": {

            const payment =
              event.payload
                .payment
                .entity;


            logger.warn(
              "Razorpay payment failed",
              {
                paymentId:
                  payment.id,

                errorCode:
                  payment.error_code,

                errorDescription:
                  payment.error_description,
              }
            );

            break;
          }


          // ---------------------------------
          // Default
          // ---------------------------------

          default: {

            logger.info(
              "Unhandled Razorpay webhook event",
              {
                event:
                  event.event,
              }
            );

          }

        }


        // 5. Response

        return res.status(200).json({

          success: true,

          message:
            "Webhook received.",

        });

      } catch (error) {

        logger.error(
          "Razorpay webhook processing failed",
          {
            error:
              error.message,
          }
        );

        return res.status(500).json({

          success: false,

          message:
            "Webhook processing failed.",

        });
      }
    }
  );


export const getPaymentHistory =
  catchAsyncError(
    async (req, res, next) => {

      // 1. Authentication

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized request for payment history"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }


      const userId =
        req.user._id.toString();


      // 2. Find payments

      const payments =
        await Payment.find({
          user:
            req.user._id,
        })
          .sort({
            createdAt: -1,
          });


      logger.info(
        "Payment history fetched successfully",
        {
          userId,
          paymentCount:
            payments.length,
        }
      );


      // 3. Response

      return res.status(200).json({

        success: true,

        message:
          "Payment history fetched successfully.",

        count:
          payments.length,

        payments,

      });
    }
  );


export const useCredits =
  catchAsyncError(
    async (req, res, next) => {

      // 1. Authentication

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized request to use credits"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }


      const userId =
        req.user._id.toString();


      // 2. Get feature

      const { feature } =
        req.body;


      if (!feature) {

        logger.warn(
          "Credit usage failed: feature missing",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "Feature is required.",
            400
          )
        );
      }


      // 3. Find cost

      const cost =
        CREDIT_COSTS[feature];


      if (!cost) {

        logger.warn(
          "Credit usage failed: invalid feature",
          {
            userId,
            feature,
          }
        );

        return next(
          new ErrorHandler(
            "Invalid feature.",
            400
          )
        );
      }


      // 4. Find user

      const user =
        await User.findById(
          req.user._id
        );


      if (!user) {

        logger.error(
          "User not found while using credits",
          {
            userId,
          }
        );

        return next(
          new ErrorHandler(
            "User not found.",
            404
          )
        );
      }


      // 5. Check expiry

      if (
        user.creditExpiry &&
        new Date() >
          new Date(
            user.creditExpiry
          )
      ) {

        logger.warn(
          "Credit usage failed: credits expired",
          {
            userId,
            feature,
          }
        );

        return next(
          new ErrorHandler(
            "Your credits have expired.",
            400
          )
        );
      }


      // 6. Check balance

      if (
        user.credits < cost
      ) {

        logger.warn(
          "Credit usage failed: insufficient credits",
          {
            userId,
            feature,
            requiredCredits:
              cost,
            availableCredits:
              user.credits,
          }
        );

        return next(
          new ErrorHandler(
            `Insufficient credits. You need ${cost} credits.`,
            400
          )
        );
      }


      // 7. Deduct credits

      user.credits -=
        cost;


      // 8. Save

      await user.save();


      logger.info(
        "Credits deducted successfully",
        {
          userId,
          feature,
          creditsUsed:
            cost,
          remainingCredits:
            user.credits,
        }
      );


      // 9. Response

      return res.status(200).json({

        success: true,

        message:
          "Credits deducted successfully.",

        feature,

        creditsUsed:
          cost,

        remainingCredits:
          user.credits,

      });
    }
  );
