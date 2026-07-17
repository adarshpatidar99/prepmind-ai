import OpenAi from 'openai';

const openai = new OpenAi({
     apiKey: process.env.OPENAI_API_KEY
});


// export const analyzeResumeWithAi = async (resumeText, jobDescription) => {

//   const prompt = `
// Return ONLY valid JSON. Do NOT add any extra text.

// {
//   "resumeScore": number,
//   "atsScore": number,
//   "grammarIssues": [],
//   "sentenceImprovement": [],
//   "missingSections": [],
//   "keywordSuggestion": [],
//   "skillsGap": [],
//   "suggestions": []
// }

// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}
// `;

//   const response = await openai.chat.completions.create({
//     model: "gpt-5.4-mini",
//     messages: [
//       {
//         role: "system",
//         content: "You are a professional ATS Resume Analyzer",
//       },
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//     max_tokens: 400,
//   });

//   let analyze;

//   try {
//     const raw = response.choices[0].message.content;

//     // Extract only JSON part
//     const jsonStart = raw.indexOf("{");
//     const jsonEnd = raw.lastIndexOf("}") + 1;
//     const cleanJson = raw.slice(jsonStart, jsonEnd);

//     analyze = JSON.parse(cleanJson);

//   } catch (error) {
//     console.error("❌ JSON Parse Error:", error);

//     // fallback response (VERY IMPORTANT)
//     analyze = {
//       resumeScore: 0,
//       atsScore: 0,
//       grammarIssues: [],
//       sentenceImprovement: [],
//       missingSections: [],
//       keywordSuggestion: [],
//       skillsGap: [],
//       suggestions: ["AI parsing failed. Please try again."]
//     };
//   }

//   return analyze;
// };

export const analyzeResumeWithAi = async (resumeText, jobDescription) => {

  console.log("🔥 AI Function Called");
  console.log("Resume:", resumeText.slice(0, 100));
  console.log("JD:", jobDescription);

  // Mock response
  return {
    resumeScore: 85,                                               
    atsScore: 78,
    grammarIssues: ["Minor grammar mistakes"],
    sentenceImprovement: ["Use action verbs"],
    missingSections: ["Add certifications"],
    keywordSuggestion: ["React", "Node.js", "MongoDB"],
    skillsGap: ["System Design"],
    suggestions: [
      "Improve project descriptions",
      "Add measurable achievements",
      "Optimize keywords"
    ]
  };
};







// export const aiSuggestions = async (resumeText, jobDescription) => {

//   const prompt = `
// You are a professional resume coach.

// Analyze the following resume and job description and give suggestions to improve the resume.

// Provide:

// 1. Suggestions to improve resume impact
// 2. Better action verbs for experience
// 3. Missing sections in the resume
// 4. Grammar or sentence improvements
// 5. Keywords missing from the job description
// 6. Skills gap compared to the job description
// 7. Ways to add measurable achievements

// Return suggestions in bullet points.

// Resume:
// ${resumeText}
                                                                
// Job Description:
// ${jobDescription}
// `;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "system",
//         content: "You are an expert ATS resume analyzer and career coach."
//       },
//       {
//         role: "user",
//         content: prompt
//       }
//     ]
//   });

//   const aiImprovement = response.choices[0].message.content;

//   return aiImprovement;
// };


// export const aiCorrectResume = async (resumeText, jobDescription) => {

//   const prompt = `
// You are a professional resume coach and ATS expert.

// Analyze the following resume and job description and optimize the resume according to the job description.

// Tasks:
// 1. Improve sentence quality and grammar
// 2. Add relevant keywords from the job description
// 3. Strengthen action verbs in experience
// 4. Suggest measurable achievements where possible
// 5. Improve the skills section
// 6. Ensure the resume is ATS friendly

// Return the improved resume.

// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}
// `;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "system",
//         content: "You are an expert ATS resume analyzer and career coach."
//       },
//       {
//         role: "user",
//         content: prompt
//       }
//     ]
//   });

//   const aiCorrections = response.choices[0].message.content;

//   return aiCorrections;
// };

export const aiSuggestions = async (resumeText, jobDescription) => {

  console.log("🔥 AI Suggestions Mock Called");

  return {
    improvements: [
      "Use strong action verbs like 'Developed', 'Optimized'",
      "Add measurable achievements (e.g., improved performance by 30%)",
      "Make project descriptions more impact-focused"
    ],
    keywords: ["React", "Node.js", "MongoDB", "REST API"],
    missingSections: ["Certifications", "Open Source Contributions"],
    skillsGap: ["System Design", "Scalability"],
    grammarFixes: [
      "Avoid repeated sentence structures",
      "Use consistent past tense in experience"
    ]
  };
};









export const aiCorrectResume = async (resumeText, jobDescription) => {

  console.log("🔥 AI Function Called");
  console.log("Resume:", resumeText.slice(0, 100));
  console.log("JD:", jobDescription);

  // 🔥 Make it dynamic (more realistic)
  const keywords = ["React", "Node.js", "MongoDB", "Express", "REST API"];
  const detectedSkills = keywords.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const missingSkills = keywords.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const resumeScore = 60 + detectedSkills.length * 5;  // dynamic score
  const atsScore = 65 + detectedSkills.length * 4;

  return {
    resumeScore: Math.min(resumeScore, 95),
    atsScore: Math.min(atsScore, 90),

    grammarIssues: [
      "Some sentences are too generic",
      "Inconsistent tense usage in experience section"
    ],

    sentenceImprovement: [
      "Use strong action verbs like 'Developed', 'Built', 'Optimized'",
      "Avoid repetitive sentence structure"
    ],

    missingSections: [
      "Certifications",
      "Open Source Contributions"
    ],

    keywordSuggestion: missingSkills,

    skillsGap: missingSkills,

    suggestions: [
      "Add measurable achievements (e.g., improved performance by 30%)",
      "Improve project descriptions with impact",
      "Align skills with job description keywords",
      "Use bullet points for better readability"
    ]
  };
};