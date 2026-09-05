import { generateAIResponse } from "./openaiClient.js";

import {
  validateIndustryAnalysis
} from "./aiValidators.js";
import { validateIndustryInput } from "../../validators/aiInputValidators.js";


export const analyzeIndustry = async (
  selectRole,
  experience
) => {

  const validatedInput = 
  validateIndustryInput(
    selectRole,
    experience
  )

  try {

    console.log("🔥 AI Industry Analysis Called");

    const prompt = `
You are an expert technology industry analyst and career advisor.

Analyze the current career market for the following role.

Role:
${selectRole}

Experience Level:
${experience}

Provide useful and realistic career insights for a software developer.

Analyze:

1. Top in-demand skills
2. Skills the candidate should consider learning
3. Trending technologies
4. Expected salary range in India
5. Companies that commonly hire for this role
6. Career tips
7. Current market demand
8. Recommended learning roadmap
9. Future trends
10. Useful tools and technologies

Return ONLY valid JSON in exactly this structure:

{
  "topSkills": [],
  "missingSkills": [],
  "trendingTechnologies": [],
  "averageSalary": "",
  "topCompanies": [],
  "tips": [],
  "marketDemand": "",
  "roadmap": [],
  "futureTrends": [],
  "tools": [],
  "help": []
}

Rules:

- marketDemand must be one of:
  "low", "medium", or "high"
- Give practical and realistic recommendations.
- Consider the Indian technology job market.
- Salary should be an approximate range and should mention LPA.
- Do not guarantee salary or employment.
- Do not invent specific job openings.
- Keep the information relevant to the selected role and experience level.
- Return ONLY JSON.
`;


    const response =
      await generateAIResponse(prompt);

    const result =
      JSON.parse(response);

    validateIndustryAnalysis(result);

    return result;

  } catch (error) {

    console.error(
      "AI Industry Analysis Error:",
      error
    );

    throw new Error(
      "Failed to generate industry insights"
    );
  }
};
