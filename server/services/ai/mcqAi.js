import { generateAIResponse } from "./openaiClient.js";

import { validateMCQs, validateMCQsEvaluation, validateMCQsExplanation, parseAIJSON } from "./aiValidators.js";
import { validateMCQInput } from "../../validators/aiInputValidators.js";


export const generateMCQs = async (
  topic,
  difficulty = "medium",
  numberOfQuestions = 10
) => {

  const validatedInput = 
  validateMCQInput(
     topic,
     difficulty,
     numberOfQuestions
  );

  try {
    const prompt = `
You are an expert technical interviewer and MCQ generator
for PrepMind AI.

Generate ${numberOfQuestions} multiple-choice questions.

Topic:
${topic}

Difficulty:
${difficulty}

Requirements:

1. Each question must have exactly 4 options.
2. Only one option should be correct.
3. Questions must be technically accurate.
4. Questions should match the requested topic and difficulty.
5. Do not create duplicate questions.
6. Do not make the correct answer obvious because of its length.
7. Include a short explanation for the correct answer.
8. Return ONLY valid JSON.

Return this exact structure:

{
  "topic": "${topic}",
  "difficulty": "${difficulty}",
  "questions": [
    {
      "question": "Question text",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": "Option A",
      "explanation": "Short explanation"
    }
  ]
}
`;

    const result = await generateAIResponse(prompt);
    
    const parsedResult = parseAIJSON(result);

    if(!validateMCQs(parsedResult))  {
       throw new Error("AI returned invalid MCQ structure");
    }    

    return parsedResult;

  } catch (error) {
    console.error("Generate MCQs Error:", error);

    throw new Error("Failed to generate MCQs");
  }
};


export const evaluateMCQAnswers = async (
  questions,
  userAnswers
) => {
  try {
    const prompt = `
You are an expert MCQ evaluator for PrepMind AI.

Evaluate the user's answers against the questions.

QUESTIONS:
${JSON.stringify(questions, null, 2)}

USER ANSWERS:
${JSON.stringify(userAnswers, null, 2)}

For every question determine:

- Whether the answer is correct
- The correct answer
- The user's answer
- A short explanation

Then calculate:

- Total questions
- Correct answers
- Incorrect answers
- Unanswered questions
- Score
- Percentage

Return ONLY valid JSON using this structure:

{
  "totalQuestions": 0,
  "correctAnswers": 0,
  "incorrectAnswers": 0,
  "unanswered": 0,
  "score": 0,
  "percentage": 0,
  "results": [
    {
      "question": "Question text",
      "userAnswer": "User answer",
      "correctAnswer": "Correct answer",
      "isCorrect": true,
      "explanation": "Explanation"
    }
  ]
}

Rules:

1. Do not change the correct answers.
2. Do not invent questions.
3. Treat unanswered questions as incorrect.
4. Score should equal the number of correct answers.
5. Percentage should be calculated from the total number of questions.
`;

    const result = await generateAIResponse(prompt);

    const parsedResult = JSON.parse(result);

    if(!validateMCQs(parsedResult)) {
      throw new Error("Invalid MCQ response from AI");
    };

    return parsedResult;

  } catch (error) {
    console.error("Evaluate MCQs Error:", error);

    throw new Error("Failed to evaluate MCQ answers");
  }
};


export const generateMCQExplanation = async (
  question,
  options,
  correctAnswer
) => {
  try {
    const prompt = `
You are an expert technical teacher for PrepMind AI.

Explain the following multiple-choice question.

QUESTION:
${question}

OPTIONS:
${JSON.stringify(options, null, 2)}

CORRECT ANSWER:
${correctAnswer}

Provide a clear explanation that helps a student understand
the concept.

Explain:

1. Why the correct answer is correct.
2. Why the other options are incorrect when useful.
3. The important concept the student should remember.

Return ONLY valid JSON:

{
  "correctAnswer": "${correctAnswer}",
  "explanation": "Detailed but easy-to-understand explanation",
  "keyConcept": "Important concept to remember"
}
`;

    // 1. Get response from AI
    const result = await generateAIResponse(prompt);

    // 2. Convert JSON string → JavaScript object
    const parsedResult = JSON.parse(result);

    // 3. Validate AI response
    if (!validateMCQsExplanation(parsedResult)) {
      throw new Error("Invalid MCQ explanation response from AI");
    }

    // 4. Return validated response
    return parsedResult;

  } catch (error) {
    console.error("MCQ Explanation Error:", error);

    throw new Error("Failed to generate MCQ explanation");
  }
};