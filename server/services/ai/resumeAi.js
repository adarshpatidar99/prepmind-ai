import OpenAI from "openai";

import { validateResumeAnalysis, validateResumeSuggestions, validateResumeCorrection } from "./aiValidators.js";
import { validateResumeInput } from "../../validators/aiInputValidators.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



export const analyzeResumeWithAi = async (
  resumeText,
  jobDescription
) => {

  validateResumeInput(
    resumeText,
    jobDescription
  )

  try {

    const prompt = `
You are an expert ATS resume analyzer and career advisor.

Analyze the following resume against the job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return the result ONLY as valid JSON with this structure:

{
  "resumeScore": number,
  "atsScore": number,
  "grammarIssues": [],
  "sentenceImprovement": [],
  "missingSections": [],
  "keywordSuggestion": [],
  "skillsGap": [],
  "suggestions": []
}

Rules:

- resumeScore must be between 0 and 100
- atsScore must be between 0 and 100
- Be specific and practical
- Do not invent experience
- Compare the resume directly with the job description
`;

    // =================================================
    // 1. CALL AI
    // =================================================

    const result = await generateAIResponse(prompt);


    // =================================================
    // 2. PARSE AI RESPONSE
    // =================================================

    const parsedResult = JSON.parse(result);


    // =================================================
    // 3. VALIDATE AI RESPONSE
    // =================================================

    validateResumeAnalysis(parsedResult);


    // =================================================
    // 4. RETURN VALIDATED RESULT
    // =================================================

    return parsedResult;

  } catch (error) {

    console.error(
      "AI Resume Analysis Error:",
      error
    );

    throw new Error(
      "Failed to analyze resume with AI"
    );
  }
};


export const aiSuggestions = async (
  resumeText,
  jobDescription
) => {

 
   validateResumeInput(
    resumeText,
    jobDescription
   )


  try {

    const prompt = `
You are an expert resume coach.

Analyze this resume and job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Provide practical suggestions to improve the resume.

Return ONLY valid JSON:

{
  "improvements": [],
  "keywords": [],
  "missingSections": [],
  "skillsGap": [],
  "grammarFixes": []
}

Focus on:

- ATS optimization
- Job description keywords
- Strong action verbs
- Measurable achievements
- Missing skills
- Grammar
- Resume structure

Do not invent information about the candidate.
`;


    // =================================================
    // 1. CALL AI
    // =================================================

    const result = await generateAIResponse(prompt);


    // =================================================
    // 2. PARSE AI RESPONSE
    // =================================================

    const parsedResult = JSON.parse(result);


    // =================================================
    // 3. VALIDATE AI RESPONSE
    // =================================================

    validateResumeSuggestions(parsedResult);


    // =================================================
    // 4. RETURN VALIDATED RESULT
    // =================================================

    return parsedResult;

  } catch (error) {

    console.error(
      "AI Suggestions Error:",
      error
    );

    throw new Error(
      "Failed to generate AI suggestions"
    );
  }
};


export const aiCorrectResume = async (
  resumeText,
  jobDescription
) => {

  validateResumeInput(
    resumeText,
    jobDescription
  );

  try {

    const prompt = `
You are an expert resume editor and ATS optimization specialist.

Review the resume below against the job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return ONLY valid JSON:

{
  "resumeScore": number,
  "atsScore": number,
  "grammarIssues": [],
  "sentenceImprovement": [],
  "missingSections": [],
  "keywordSuggestion": [],
  "skillsGap": [],
  "suggestions": []
}

Rules:

1. Scores must be between 0 and 100.
2. Identify actual problems in the resume.
3. Suggest stronger wording.
4. Identify relevant missing keywords.
5. Identify skills missing compared with the job description.
6. Never invent candidate experience.
7. Keep recommendations realistic.
`;


    // =================================================
    // 1. CALL AI
    // =================================================

    const result = await generateAIResponse(prompt);


    // =================================================
    // 2. PARSE AI RESPONSE
    // =================================================

    const parsedResult = JSON.parse(result);


    // =================================================
    // 3. VALIDATE AI RESPONSE
    // =================================================

    validateResumeCorrection(parsedResult);


    // =================================================
    // 4. RETURN VALIDATED RESULT
    // =================================================

    return parsedResult;

  } catch (error) {

    console.error(
      "AI Resume Correction Error:",
      error
    );

    throw new Error(
      "Failed to correct resume with AI"
    );
  }
};



