import {
  parseAIJSON,
  validateInterviewQuestions,
  validateInterviewFollowUp,
  validateInterviewAnswer,
  validateInterviewReport,
} from "./aiValidators.js";
import { validateInterviewInput } from "../../validators/aiInputValidators.js";

import { generateAIResponse } from "./openaiClient.js";


export const generateInterviewQuestions = async ({
  jobRole,
  experienceLevel,
  interviewType,
  skills = [],
  numberOfQuestions = 10,
}) => {

  // =====================================================
  // 1. VALIDATE USER INPUT
  // =====================================================

  const validatedInput = validateInterviewInput({
    jobRole,
    experienceLevel,
    interviewType,
    skills,
    numberOfQuestions,
  });

  // Use validated values
  const {
    jobRole: validJobRole,
    experienceLevel: validExperienceLevel,
    interviewType: validInterviewType,
    skills: validSkills,
    numberOfQuestions: validNumberOfQuestions,
  } = validatedInput;


  // =====================================================
  // 2. CREATE PROMPT
  // =====================================================

  const prompt = `
You are an expert technical interviewer.

Generate ${validNumberOfQuestions} interview questions for the following candidate:

Job Role:
${validJobRole}

Experience Level:
${validExperienceLevel}

Interview Type:
${validInterviewType}

Relevant Skills:
${validSkills.join(", ")}

Generate questions that are:
- Relevant to the job role
- Appropriate for the experience level
- A realistic interview difficulty
- Clear and professional
- A mix of conceptual, practical, and problem-solving questions when appropriate

Return ONLY valid JSON in this format:

{
  "questions": [
    {
      "question": "string",
      "type": "technical | behavioral | practical",
      "difficulty": "easy | medium | hard",
      "topic": "string"
    }
  ]
}
`;


  try {

    // =====================================================
    // 3. CALL AI
    // =====================================================

    const response =
      await generateAIResponse(prompt);


    // =====================================================
    // 4. PARSE AI RESPONSE
    // =====================================================

    const data =
      parseAIJSON(response);


    // =====================================================
    // 5. VALIDATE AI RESPONSE
    // =====================================================

    const validatedData =
      validateInterviewQuestions(data);


    // =====================================================
    // 6. RETURN VALIDATED DATA
    // =====================================================

    return validatedData;

  } catch (error) {

    console.error(
      "Generate Interview Questions Error:",
      error
    );

    throw new Error(
      "Failed to generate interview questions"
    );
  }
};


export const generateInterviewFollowUp = async ({
  jobRole,
  question,
  candidateAnswer,
}) => {

  const prompt = `
You are an expert interviewer conducting a realistic interview.

Job Role:
${jobRole}

Previous Interview Question:
${question}

Candidate Answer:
${candidateAnswer}

Based on the candidate's answer, generate ONE relevant follow-up question.

The follow-up question should:
- Directly relate to the candidate's answer
- Test deeper understanding
- Be realistic for an interview
- Not repeat the previous question
- Be professional

Return ONLY valid JSON:

{
  "followUpQuestion": "string",
  "reason": "string"
}
`;

  try {

    // 1. Call OpenAI
    const response =
      await generateAIResponse(prompt);

    // 2. Parse JSON
    const data =
      parseAIJSON(response);

    // 3. Validate response
    const validatedData =
      validateInterviewFollowUp(data);

    // 4. Return validated response
    return validatedData;

  } catch (error) {

    console.error(
      "Generate Interview Follow-Up Error:",
      error
    );

    throw new Error(
      "Failed to generate follow-up question"
    );
  }
};


export const evaluateInterviewAnswer = async ({
  jobRole,
  question,
  candidateAnswer,
}) => {

  const prompt = `
You are an expert technical interviewer.

Evaluate the candidate's answer.

Job Role:
${jobRole}

Interview Question:
${question}

Candidate Answer:
${candidateAnswer}

Evaluate the answer based on:

1. Correctness
2. Technical knowledge
3. Relevance
4. Clarity
5. Completeness
6. Communication

Do not give credit for information that the candidate did not actually provide.

Return ONLY valid JSON:

{
  "score": 0,
  "correctness": "string",
  "technicalKnowledge": "string",
  "relevance": "string",
  "clarity": "string",
  "completeness": "string",
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "idealAnswer": "string"
}

Rules:
- score must be between 0 and 100
- Be fair and realistic
- Do not invent candidate experience
- Explain what could be improved
`;

  try {

    // 1. Call OpenAI
    const response =
      await generateAIResponse(prompt);

    // 2. Parse JSON
    const data =
      parseAIJSON(response);

    // 3. Validate response
    const validatedData =
      validateInterviewAnswer(data);

    // 4. Return validated response
    return validatedData;

  } catch (error) {

    console.error(
      "Evaluate Interview Answer Error:",
      error
    );

    throw new Error(
      "Failed to evaluate interview answer"
    );
  }
};


export const generateInterviewReport = async ({
  jobRole,
  experienceLevel,
  interviewType,
  questions,
  answers,
}) => {

  const prompt = `
You are an expert interview evaluator.

Generate a complete interview performance report.

Job Role:
${jobRole}

Experience Level:
${experienceLevel}

Interview Type:
${interviewType}

Interview Questions and Candidate Answers:
${JSON.stringify(
  questions.map((question, index) => ({
    question,
    answer: answers[index] || "",
  })),
  null,
  2
)}

Evaluate the candidate's overall performance.

Analyze:

- Overall performance
- Technical knowledge
- Problem solving
- Communication
- Answer quality
- Strengths
- Weaknesses
- Areas for improvement
- Recommended topics to study
- Interview readiness

Return ONLY valid JSON:

{
  "overallScore": 0,
  "interviewReadiness": "Beginner | Developing | Interview Ready | Strong",
  "summary": "string",

  "categoryScores": {
    "technicalKnowledge": 0,
    "problemSolving": 0,
    "communication": 0,
    "answerQuality": 0
  },

  "strengths": [],

  "weaknesses": [],

  "areasToImprove": [],

  "recommendedTopics": [],

  "finalFeedback": "string"
}

Rules:
- All scores must be between 0 and 100
- Base the report only on the provided questions and answers
- Do not invent candidate experience
- Be constructive and realistic
`;

  try {

    // 1. Call OpenAI
    const response =
      await generateAIResponse(prompt);

    // 2. Parse JSON
    const data =
      parseAIJSON(response);

    // 3. Validate response
    const validatedData =
      validateInterviewReport(data);

    // 4. Return validated response
    return validatedData;

  } catch (error) {

    console.error(
      "Generate Interview Report Error:",
      error
    );

    throw new Error(
      "Failed to generate interview report"
    );
  }
};
