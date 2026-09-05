import axios from "axios";

export const handleBuyPlan = async ({
  plan,
  dispatch,
  currentToken,
  onSuccess,
  onError,
}) => {
  try {
    // 1. Create Razorpay order
    const res = await axios.post(
      "http://localhost:5000/api/v1/payment/create-order",
      {
        plan,
      },
      {
        withCredentials: true,
      }
    );

    // 2. Get order details
    const { order, keyId } = res.data;

    console.log("Order:", order);

    // 3. Razorpay options
    const options = {
      key: keyId,
      amount: order.amount,
      currency: order.currency,

      name: "PrepMind AI",
      description:
        plan === "starter"
          ? "300 AI Credits"
          : "PrepMind Pro",

      order_id: order.id,

      // 4. Successful payment
      handler: async (response) => {
        console.log("Payment successful:", response);

        try {
          // 5. Verify payment
          const verifyResponse = await axios.post(
            "http://localhost:5000/api/v1/payment/verify",
            {
              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,

              plan,
            },
            {
              withCredentials: true,
            }
          );

          console.log(
            "Payment verified:",
            verifyResponse.data
          );

          // 6. Update Redux user
          if (verifyResponse.data.user) {
            dispatch({
              type: "auth/setUser",
              payload: {
                user: verifyResponse.data.user,
                token: currentToken,
              },
            });
          }

          // 7. Tell component payment succeeded
          if (onSuccess) {
            onSuccess(verifyResponse.data);
          }

        } catch (error) {
          console.error(
            "Payment verification failed:",
            error.response?.data || error
          );

          if (onError) {
            onError(
              error.response?.data?.message ||
                "Payment verification failed."
            );
          }
        }
      },

      theme: {
        color: "#0A66C2",
      },
    };

    // 8. Open Razorpay
    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (error) {
    console.error(
      "Create order error:",
      error.response?.data || error
    );

    if (onError) {
      onError(
        error.response?.data?.message ||
          "Unable to start payment."
      );
    }
  }
};



// export const handleBuyPro = async ({

//   onSuccess,
//   onError,
// }) => {
//   try {
//     // 1. Create subscription from backend
//     const res = await axios.post(
//       "http://localhost:5000/api/v1/payment/create-subscription",
//       {},
//       {
//         withCredentials: true,
//       }
//     );

//     // 2. Get subscription details
//     const { subscription, keyId } = res.data;

//     console.log("Subscription:", subscription);

//     // 3. Razorpay subscription options
//     const options = {
//       key: keyId,

//       subscription_id: subscription.id,

//       name: "PrepMind AI",

//       description: "Pro Monthly Subscription",

//       handler: function (response) {
//         console.log("Subscription payment successful:");
//         console.log(response);

//         if (onSuccess) {
//           onSuccess(response);
//         }
//       },

//       theme: {
//         color: "#0A66C2",
//       },
//     };

//     // 4. Open Razorpay
//     const razorpay = new window.Razorpay(options);

//     razorpay.open();

//   } catch (error) {
//     console.error( 
//       "Create subscription error:",
//       error.response?.data || error
//     );

//     if (onError) {
//       onError(
//         error.response?.data?.message ||
//         "Unable to start Pro subscription."
//       );
//     }
//   }
// };






export const handleBuyPro = async ({ onSuccess, onError }) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/payment/create-subscription",
      {},
      {
        withCredentials: true,
      }
    );

    const { subscription, keyId } = res.data;

    console.log("Subscription:", subscription);

    const options = {
      key: keyId,

      subscription_id: subscription.id,

      name: "PrepMind AI",

      description: "Pro Monthly Subscription",

      handler: function (response) {
        console.log("Pro payment response:", response);

        if (onSuccess) {
          onSuccess(response);
        }
      },

      theme: {
        color: "#0A66C2",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();


    





  } catch (error) {
    console.error(
      "Subscription error:",
      error.response?.data || error
    );

    if (onError) {
      onError(
        error.response?.data?.message ||
        "Unable to start Pro subscription."
      );
    }
  }
};