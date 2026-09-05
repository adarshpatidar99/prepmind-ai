import express from 'express';
import { cancelSubscription, createOrder, createSubscription, getPaymentHistory, handleRazorpayWebhook, useCredits, verifyPayment } from '../controllers/paymentController.js';
import isAuth from '../middlewares/authMiddleware.js';
import { paymentRateLimiter } from '../middlewares/rateLimiter.js';

const router = express.Router();

router.post("/create-order", isAuth, paymentRateLimiter , createOrder);

router.post("/verify", isAuth, paymentRateLimiter , verifyPayment);

router.post("/create-subscription", isAuth, paymentRateLimiter , createSubscription);

router.post("/cancel-subscription", isAuth, paymentRateLimiter , cancelSubscription);

router.get("/history", isAuth, getPaymentHistory);

router.post("/webhook", handleRazorpayWebhook);

router.post('/use-credits', isAuth, paymentRateLimiter , useCredits);
                                 
export default router;