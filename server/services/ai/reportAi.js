import { generateAIResponse } from "./openaiClient.js";

import {
  validateInterviewReport,
  validateResumeReport,
} from "./aiValidators.js";


export const generateInterviewReport = async (
  interviewData
) => {
  try {
    const prompt = `
You are an expert technical interviewer and career coach
for PrepMind AI.

Analyze the following mock interview.

INTERVIEW DATA:
${JSON.stringify(interviewData, null, 2)}

Generate a professional interview performance report.

Analyze:

1. Overall performance
2. Technical knowledge
3. Communication
4. Problem-solving ability
5. Strengths
6. Weaknesses
7. Questions where the candidate struggled
8. Areas that need improvement
9. Recommended topics to study
10. Overall score

Return ONLY valid JSON using this structure:

{
  "overallScore": 0,

  "summary": "Overall assessment of the candidate",

  "technicalSkills": {
    "score": 0,
    "feedback": "Technical performance feedback"
  },

  "communication": {
    "score": 0,
    "feedback": "Communication feedback"
  },

  "problemSolving": {
    "score": 0,
    "feedback": "Problem-solving feedback"
  },

  "strengths": [],

  "weaknesses": [],

  "questionsToImprove": [
    {
      "question": "Question",
      "feedback": "What could be improved"
    }
  ],

  "recommendedTopics": [],

  "improvementPlan": [],

  "finalFeedback": "Final career/interview advice"
}

Rules:

- Scores must be between 0 and 100.
- Base the report only on the provided interview data.
- Do not invent candidate answers or experience.
- Give practical and specific feedback.
- Be constructive rather than overly negative.
`;

    // =================================================
    // 1. Call AI
    // =================================================

    const result = await generateAIResponse(prompt);

    // =================================================
    // 2. Convert AI JSON string → JavaScript object
    // =================================================

    const parsedResult = JSON.parse(result);

    // =================================================
    // 3. Validate AI response
    // =================================================

    const validatedResult =
      validateInterviewReport(parsedResult);

    // =================================================
    // 4. Return validated result
    // =================================================

    return validatedResult;

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


export const generateResumeReport = async (
  resumeData
) => {
  try {
    const prompt = `
You are an expert resume reviewer, ATS specialist,
and career advisor for PrepMind AI.

Analyze the following resume.

RESUME DATA:
${JSON.stringify(resumeData, null, 2)}

Generate a professional resume performance report.

Analyze:

1. Overall resume quality
2. ATS readiness
3. Resume structure
4. Professional summary
5. Skills
6. Projects
7. Work experience
8. Education
9. Achievements
10. Grammar and writing quality
11. Strengths
12. Weaknesses
13. Missing information
14. Actionable improvements

Return ONLY valid JSON using this structure:

{
  "overallScore": 0,

  "atsScore": 0,

  "summary": "Overall resume assessment",

  "sections": {
    "summary": {
      "score": 0,
      "feedback": "Feedback"
    },

    "skills": {
      "score": 0,
      "feedback": "Feedback"
    },

    "projects": {
      "score": 0,
      "feedback": "Feedback"
    },

    "experience": {
      "score": 0,
      "feedback": "Feedback"
    },

    "education": {
      "score": 0,
      "feedback": "Feedback"
    }
  },

  "strengths": [],

  "weaknesses": [],

  "missingInformation": [],

  "grammarIssues": [],

  "recommendations": [],

  "priorityImprovements": [],

  "finalFeedback": "Final resume advice"
}

Rules:

- Scores must be between 0 and 100.
- Analyze only the information provided.
- Do not invent experience, skills, projects, achievements, or education.
- Give realistic and actionable recommendations.
- Focus on ATS compatibility and recruiter readability.
`;

    // =================================================
    // 1. Call AI
    // =================================================

    const result = await generateAIResponse(prompt);

    // =================================================
    // 2. Convert AI JSON string → JavaScript object
    // =================================================

    const parsedResult = JSON.parse(result);

    // =================================================
    // 3. Validate AI response
    // =================================================

    const validatedResult =
      validateResumeReport(parsedResult);

    // =================================================
    // 4. Return validated result
    // =================================================

    return validatedResult;

  } catch (error) {

    console.error(
      "Generate Resume Report Error:",
      error
    );

    throw new Error(
      "Failed to generate resume report"
    );
  }
};
