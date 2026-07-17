import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export const generateQuestionsWithAi = async (
  selectRole,
  techStack,
  experience,
  noOfQuestions
) => {

  console.log("🔥 Mock Descriptive Questions Called");

  const baseQuestions = [
    "Explain the architecture of a MERN stack application.",
    "How does React manage state and what are the different ways to handle it?",
    "Explain the event loop in Node.js.",
    "How does MongoDB differ from relational databases?",
    "What is REST API and how do you design a scalable API?",
    "Explain authentication and authorization using JWT.",
    "How would you optimize performance in a full-stack application?",
    "Explain middleware in Express.js with an example.",
    "What are the differences between synchronous and asynchronous programming?",
    "How would you design a real-time chat application?"
  ];

  // ✅ Return only required number
  return baseQuestions.slice(0, noOfQuestions);
};




// export const generateQuestionsWithAi = async (selectRole, techStack, experience) => {
//   // Prompt for AI
//   const prompt = `
// Generate ${noOfQuestions} mock interview questions for a candidate.

// Role: ${selectRole}
// Tech Stack: ${techStack.join(", ")}
// Experience: ${experience} years

// Return the questions as a numbered list in plain text or JSON array.
// `;

//   // Call OpenAI
//   const response = await openai.chat.completions.create({
//     model: 'gpt-4o',
//     messages: [
//       {
//         role: "system",
//         content: "You are a professional mock interview question generator."
//       },
//       {
//         role: "user",
//         content: prompt
//       }
//     ]
//   });

//   const rawText = response.choices[0].message.content;

//   // Try to parse as JSON array if AI returns JSON
//   try {
//     const questions = JSON.parse(rawText);
//     return questions;
//   } catch {
//     // Fallback: split numbered list if AI returns text
//     return rawText
//       .split(/\d+\.\s/) // split by "1. ", "2. ", etc.
//       .filter(q => q.trim().length > 0)
//       .map(q => q.trim());
//   }
// };





export const generateMcqWithAi = async (
  selectRole,
  experience,
  techStack,
  noOfQuestions
) => {

  console.log("🔥 Mock MCQ Generator Called");

  const baseQuestions = [
    {
      question: "What is React mainly used for?",
      options: ["Frontend Development", "Database Management", "Backend API", "Machine Learning"],
      answer: "Frontend Development"
    },
    {
      question: "Which of the following is a Node.js framework?",
      options: ["Django", "Spring", "Express", "Laravel"],
      answer: "Express"
    },
    {
      question: "MongoDB is a ______ database?",
      options: ["Relational", "NoSQL", "Graph", "Key-Value"],
      answer: "NoSQL"
    },
    {
      question: "Which HTTP method is used to update data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "PUT"
    },
    {
      question: "What does JWT stand for?",
      options: ["Java Web Token", "JSON Web Token", "JavaScript Web Token", "JSON Wide Token"],
      answer: "JSON Web Token"
    },
    {
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useEffect"
    },
    {
      question: "Which method is used to fetch data in JavaScript?",
      options: ["getData()", "fetch()", "axios()", "request()"],
      answer: "fetch()"
    },
    {
      question: "What is Express.js used for?",
      options: ["Frontend UI", "Backend Server", "Database", "Testing"],
      answer: "Backend Server"
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      answer: "const"
    },
    {
      question: "Which of the following is used for authentication?",
      options: ["JWT", "HTML", "CSS", "Bootstrap"],
      answer: "JWT"
    },
    {
      question: "What is the default port of MongoDB?",
      options: ["27017", "3000", "8080", "5000"],
      answer: "27017"
    },
    {
      question: "Which array method is used to transform elements?",
      options: ["map()", "filter()", "reduce()", "forEach()"],
      answer: "map()"
    },
    {
      question: "Which status code means 'Not Found'?",
      options: ["200", "201", "404", "500"],
      answer: "404"
    },
    {
      question: "Which database is used in MERN stack?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
      answer: "MongoDB"
    },
    {
      question: "Which React hook is used for state management?",
      options: ["useState", "useEffect", "useContext", "useRef"],
      answer: "useState"
    },
    {
      question: "Which method is used to delete data?",
      options: ["GET", "POST", "DELETE", "PUT"],
      answer: "DELETE"
    },
    {
      question: "Which of the following is asynchronous?",
      options: ["console.log", "setTimeout", "var", "let"],
      answer: "setTimeout"
    },
    {
      question: "Which protocol is used in web APIs?",
      options: ["FTP", "HTTP", "SMTP", "SSH"],
      answer: "HTTP"
    },
    {
      question: "Which tool is used for version control?",
      options: ["Git", "Docker", "Jenkins", "Webpack"],
      answer: "Git"
    },
    {
      question: "Which keyword is used to handle errors in JS?",
      options: ["try-catch", "if-else", "switch", "loop"],
      answer: "try-catch"
    }
  ];

  // ✅ Return only requested number
  return baseQuestions.slice(0, noOfQuestions);
};

  
// export const generateMcqWithAi = async (selectRole, experience, techStack, noOfQuestions) => {

//   try {
//     const prompt = `
// Generate no of questions ${noOfQuestions} multiple-choice questions (MCQs).

// Return ONLY in valid JSON format like this:
// [
//   {
//     "question": "string",
//     "options": ["option1", "option2", "option3", "option4"],
//     "answer": "correct option"
//   }
// ]

// Rules:
// - Each question must have 4 options
// - One correct answer only
// - Do NOT return anything except JSON

// Role: ${selectRole}
// Experience: ${experience}
// TechStack: ${techStack}
// `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // fast + cost-effective
//       messages: [
//         {
//           role: "system",
//           content: "You are a professional mock interview question generator."
//         },
//         {
//           role: "user",
//           content: prompt
//         }
//       ],
//       temperature: 0.7
//     });

//     const rawText = response.choices[0].message.content.trim();

//     // ✅ Strict JSON validation
//     if (!rawText.startsWith("[")) {
//       throw new Error("Invalid JSON format received from AI");
//     }

//     const questions = JSON.parse(rawText);

//     // ✅ Extra validation (very important in production)
//     if (!Array.isArray(questions) || questions.length !== noOfQuestions) {
//       throw new Error("Invalid number of questions");
//     }

//     for (const q of questions) {
//       if (
//         !q.question ||
//         !Array.isArray(q.options) ||
//         q.options.length !== 4 ||
//         !q.answer
//       ) {
//         throw new Error("Invalid question structure");
//       }
//     }

//     return questions;

//   } catch (error) {
//     console.error("AI MCQ Generation Error:", error.message);
//     throw new Error("Failed to generate MCQ questions");
//   }
// };









export const evaluateInterviewWithAi = async (qaText) => { 

   const prompt = `
You are a professional mock interview evaluator.

Analyze the following questions and answers.

Provide:
1. Score for each question (0-10)
2. Feedback for each answer
3. Final overall score (0-100)
4. Short summary

Return response ONLY in JSON format like:

{
  "scores": [8, 7, 6],
  "feedback": ["Good answer", "Needs improvement", "Clear explanation"],
  "finalScore": 75,
  "summary": "Strong basics but needs improvement in depth"
}

Interview Data:
${qaText}
`;

   const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      message: [
        {
          role: "system",
          content: "you are a professional mock interviewer..."
        },

        {
          role: "user",
          content: prompt
        }
      ]
   });

   const rawText = response.choices[0].message.content;

   let result;        
                     
   try {
    result = JSON.parse(rawText);
   } catch (error) {
    throw new Error("Ai response is not valid json...");
   }

   return result;

}


