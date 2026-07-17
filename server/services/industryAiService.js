import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


// export const analyzeIndustry = async (selectRole, experience) => {
  
//   const prompt = `
// You are a tech industry expert.

// Provide industry insights based on the following role and experience:

// Role: ${selectRole, experience}

// Include:
// 1. Top in-demand skills
// 2. Trending technologies
// 3. Average salary range in India
// 4. Top hiring companies
// 5. Career tips

// Return ONLY in JSON format:

// {
//   "topSkills": [],
//   "missingSkills": [],
//   "trendingTechnologies": [],
//   "averageSalary": "",
//   "topCompanies": [],
//   "tips": [],
//   "marketDemand": [low / medium / high],
//   "roadmap": [],
//   "futureTrends": [],
//   "tools": [],
//   "help": []
// }
// `;

//   const response = await openai.chat.completions.create({
//     model: 'gpt-4o',
//     messages: [
//       {
//         role: "system",
//         content: "You are an expert in tech industry trends and career guidance."
//       },
//       {
//         role: "user",
//         content: prompt
//       }
//     ]
//   });

//   const rawText = response.choices[0].message.content;

//   // Parse JSON safely
//   let result;
//   try {
//     result = JSON.parse(rawText);
//   } catch (error) {
//     throw new Error("AI response is not valid JSON");
//   }

//   return result;
// };




export const analyzeIndustry = async (selectRole, experience) => {

  console.log("Ai industry analyze called...");
 
  return {
  topSkills: ["JavaScript", "React", "DSA"],
  missingSkills: ["System Design"],
  trendingTechnologies: ["Next.js", "AI Tools"],
  averageSalary: "8-15 LPA",
  topCompanies: ["Amazon", "Google", "Microsoft"],
  tips: ["Practice DSA daily", "Build projects"],
  marketDemand: "high",
  roadmap: ["Learn JS → React → Projects → Apply"],
  futureTrends: ["AI Integration in Frontend"],
  tools: ["VS Code", "Postman", "GitHub"],
  help: ["Focus on consistency"]
};
  
};