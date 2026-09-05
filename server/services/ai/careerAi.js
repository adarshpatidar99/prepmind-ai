import { generateAIResponse } from "./openaiClient.js";

import {
  validateCareerChat
} from "./aiValidators.js";
import { validateCareerChatInput } from "../../validators/aiInputValidators.js";


export const careerChat = async (message) => {

  const validatedMessage = 
  validateCareerChatInput(message);

  try {

    const prompt = `
You are an expert AI Career Advisor inside PrepMind AI.

Your job is to help users with:
- Career planning
- Career roadmaps
- Learning paths
- Skills to learn
- Resume and job search advice
- Interview preparation
- Career transitions
- Industry and role guidance
- Entry-level software development careers

User's message:
${message}

Instructions:

1. Give practical and clear advice.
2. Understand the user's question before answering.
3. If the user asks for a roadmap, provide it step by step.
4. If the user asks what skills to learn, prioritize the most important skills.
5. Do not invent personal information about the user.
6. Do not guarantee a job or salary.
7. Keep the response professional and easy to understand.
8. Use headings and bullet points when they improve readability.
9. If the question is not related to careers, politely explain that you are focused on career guidance.

Answer the user directly.
`;


    // =================================================
    // 1. CALL AI
    // =================================================

    const result =
      await generateAIResponse(prompt);


    // =================================================
    // 2. VALIDATE AI RESPONSE
    // =================================================

    validateCareerChat(result);


    // =================================================
    // 3. RETURN RESPONSE
    // =================================================

    return result;


  } catch (error) {

    console.error(
      "Career AI Error:",
      error
    );

    throw new Error(
      "Failed to generate career advice"
    );
  }
};
