// import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
// import ErrorHandler from "../middlewares/errorMiddleware.js";
// import CareerAdvisor from "../models/careerAdvisorModel.js";


// export const sendCareerMessage = catchAsyncError(
//   async (req, res, next) => {
//     const { message } = req.body;

//     // Validate user message
//     if (!message || !message.trim()) {
//       return next(
//         new ErrorHandler("Message is required", 400)
//       );
//     }

//     // Find user's existing chat
//     let careerAdvisor = await CareerAdvisor.findOne({
//       user: req.user._id,
//     });

//     // Create chat if it doesn't exist
//     if (!careerAdvisor) {
//       careerAdvisor = new CareerAdvisor({
//         user: req.user._id,
//         messages: [],
//       });
//     }

//     // Add USER message
//     careerAdvisor.messages.push({
//       role: "user",
//       content: message.trim(),
//     });

//     // Temporary AI response
//     // AI will be integrated later
//     const aiResponse =
//       "Thanks for your question. I am your AI Career Advisor. Personalized AI career guidance will be available soon.";

//     // Add ASSISTANT message
//     careerAdvisor.messages.push({
//       role: "assistant",
//       content: aiResponse,
//     });

//     // Save
//     await careerAdvisor.save();

//     res.status(200).json({
//       success: true,
//       message: "Career message sent successfully",
//       userMessage: {
//         role: "user",
//         content: message.trim(),
//       },
//       assistantMessage: {
//         role: "assistant",
//         content: aiResponse,
//       },
//     });
//   }
// );

         
// export const getCareerChats = catchAsyncError(async (req, res, next) => {
  
//       const careerChats = await CareerAdvisor.find({
//         user: req.user._id,
//       }).sort({createdAt: -1});
 
//       res.status(200).json({
//         success: true,
//         careerChats
//       }) 
 
// }) 



import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import CareerAdvisor from "../models/careerAdvisorModel.js";
import logger from "../utils/logger.js";


// =====================================================
// SEND CAREER MESSAGE
// =====================================================

export const sendCareerMessage = catchAsyncError(
  async (req, res, next) => {

    const { message } = req.body;

    // =====================================================
    // 1. VALIDATE MESSAGE
    // =====================================================

    if (
      typeof message !== "string" ||
      !message.trim()
    ) {
      logger.warn("Career message validation failed", {
        userId: req.user?._id?.toString(),
        reason: "Message is required",
      });

      return next(
        new ErrorHandler(
          "Message is required",
          400
        )
      );
    }


    // =====================================================
    // 2. FIND EXISTING CHAT
    // =====================================================

    let careerAdvisor =
      await CareerAdvisor.findOne({
        user: req.user._id,
      });


    // =====================================================
    // 3. CREATE CHAT IF NOT EXISTS
    // =====================================================

    if (!careerAdvisor) {

      careerAdvisor = new CareerAdvisor({
        user: req.user._id,
        messages: [],
      });

      logger.info("New career advisor chat created", {
        userId: req.user._id.toString(),
      });
    }


    // =====================================================
    // 4. ADD USER MESSAGE
    // =====================================================

    const userMessage = message.trim();

    careerAdvisor.messages.push({
      role: "user",
      content: userMessage,
    });


    // =====================================================
    // 5. AI RESPONSE
    // =====================================================

    // Temporary AI response
    // Replace this later with careerChat()
    const aiResponse =
      "Thanks for your question. I am your AI Career Advisor. Personalized AI career guidance will be available soon.";


    // =====================================================
    // 6. ADD ASSISTANT MESSAGE
    // =====================================================

    careerAdvisor.messages.push({
      role: "assistant",
      content: aiResponse,
    });


    // =====================================================
    // 7. SAVE CHAT
    // =====================================================

    await careerAdvisor.save();


    // =====================================================
    // 8. SUCCESS LOG
    // =====================================================

    logger.info("Career message processed successfully", {
      userId: req.user._id.toString(),
      messageLength: userMessage.length,
    });


    // =====================================================
    // 9. RESPONSE
    // =====================================================

    return res.status(200).json({
      success: true,

      message:
        "Career message sent successfully",

      userMessage: {
        role: "user",
        content: userMessage,
      },

      assistantMessage: {
        role: "assistant",
        content: aiResponse,
      },
    });
  }
);


// =====================================================
// GET CAREER CHATS
// =====================================================

export const getCareerChats =
  catchAsyncError(async (req, res, next) => {

    const careerChats =
      await CareerAdvisor.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });


    // =====================================================
    // LOG
    // =====================================================

    logger.info("Career chats fetched", {
      userId: req.user._id.toString(),
      chatCount: careerChats.length,
    });


    // =====================================================
    // RESPONSE
    // =====================================================

    return res.status(200).json({
      success: true,
      careerChats,
    });
  });


