import OpenAI from "openai";
import logger from "../../utils/logger.js";

const openai = new OpenAI({
  apiKey: process.env.   OPENAI_API_KEY,
});


export class AIServiceError extends Error {
  constructor(
    message,
    statusCode = 502,
    code = "AI_ERROR"
  ) {
    super(message);

    this.name = "AIServiceError";
    this.statusCode = statusCode;
    this.code = code;
  }
}


export const generateAIResponse = async (prompt) => {
  try {

    const response =
      await openai.responses.create({
        model: process.env.OPENAI_MODEL,
        input: prompt,
      });


    if (!response.output_text) {

      throw new AIServiceError(
        "AI returned an empty response",
        502,
        "EMPTY_AI_RESPONSE"
      );
    }


    return response.output_text;


  } catch (error) {

    logger.error("OpenAI API Error", {
      message: error.message,
      status: error.status,
      code: error.code,
      stack: error.stack,
    });


    // Already our AI error
    if (error instanceof AIServiceError) {
      throw error;
    }


    // OpenAI/API error
    throw new AIServiceError(
      "AI service is temporarily unavailable. Please try again.",
      502,
      "OPENAI_ERROR"
    );
  }
};

export default openai;