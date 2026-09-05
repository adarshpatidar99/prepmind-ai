import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

import { analyzeIndustry } from "../services/ai/industryAi.js";  

import logger from "../utils/logger.js";

import { validateIndustryInput } from "../validators/aiInputValidators.js";


export const getIndustryInsights = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK USER AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request for industry insights"
      );

      return next(
        new ErrorHandler(
          "User not authenticated",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    logger.info(
      "Industry insights request started",
      {
        userId,
      }
    );

    // =========================================
    // 2. GET DATA FROM REQUEST
    // =========================================

    const {
      selectRole,
      experience,
    } = req.body;

    // =========================================
    // 3. VALIDATE + CLEAN INPUT
    // =========================================

    let validatedInput;

    try {

      validatedInput =
        validateIndustryInput(
          selectRole,
          experience
        );

    } catch (error) {

      logger.warn(
        "Invalid industry insights input",
        {
          userId,
          error: error.message,
        }
      );

      return next(
        new ErrorHandler(
          error.message,
          400
        )
      );
    }

    logger.info(
      "Industry insights input validated",
      {
        userId,
        role:
          validatedInput.selectRole,
        experience:
          validatedInput.experience,
      }
    );

    // =========================================
    // 4. CALL AI SERVICE
    // =========================================

    const aiStartTime =
      Date.now();

    const result =
      await analyzeIndustry(
        validatedInput.selectRole,
        validatedInput.experience
      );

    const aiDuration =
      Date.now() - aiStartTime;

    if (!result) {

      logger.error(
        "Industry AI returned empty result",
        {
          userId,
          role:
            validatedInput.selectRole,
          durationMs:
            aiDuration,
        }
      );

      return next(
        new ErrorHandler(
          "Failed to generate industry insights.",
          500
        )
      );
    }

    logger.info(
      "Industry insights generated successfully",
      {
        userId,
        role:
          validatedInput.selectRole,
        durationMs:
          aiDuration,
      }
    );

    // =========================================
    // 5. SEND RESPONSE
    // =========================================

    return res.status(200).json({
      success: true,

      message:
        "Industry insights generated successfully",

      result,
    });
  }
);
