import rateLimit from "express-rate-limit";

export const aiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 20,

  message: {
    success: false,
    message: "Too many AI requests. Please try again later.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

export const paymentRateLimiter = rateLimit({

     windowMs: 15 * 60 * 1000,
     max: 10,
     message: {
        success: false,
        message: "Too many payment requests. Please try again later...",
     },
     standardHeaders: true,
     legacyHeaders: false 

})

export const authRateLimiter = rateLimit({

   windowMs: 15 * 60 * 1000,
   max: 10,

   message: {
     success: false,
     message: "Too many authentication attempts. Please try again later...",
   },

   standardHeaders: true,
   legacyHeaders: false,
})

