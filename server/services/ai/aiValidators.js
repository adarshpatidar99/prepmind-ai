const isObject = (value) => {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
};


const isStringArray = (value) => {
  return (
    Array.isArray(value) &&
    value.every(
      (item) => typeof item === "string"
    )
  );
};


export const parseAIJSON = (response) => {
  if (typeof response !== "string") {
    throw new Error("AI response must be a string");
  }

  try {
    return JSON.parse(response);
  } catch (error) {
    console.error("Invalid AI JSON:", response);

    throw new Error("AI returned invalid JSON");
  }
};


export const validateResumeAnalysis = (data) => {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid resume analysis response");
  }

  if (
    typeof data.overallScore !== "number" ||
    data.overallScore < 0 ||
    data.overallScore > 100
  ) {
    throw new Error("Invalid overallScore");
  }

  if (!Array.isArray(data.strengths)) {
    throw new Error("Invalid strengths");
  }

  if (!Array.isArray(data.weaknesses)) {
    throw new Error("Invalid weaknesses");
  }

  if (!Array.isArray(data.suggestions)) {
    throw new Error("Invalid suggestions");
  }

  if (typeof data.summary !== "string") {
    throw new Error("Invalid summary");
  }

  return data;
};


export const validateResumeCorrection = (data) => {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid resume correction response");
  }

  if (typeof data.summary !== "string") {
    throw new Error("Invalid correction summary");
  }

  if (!Array.isArray(data.improvements)) {
    throw new Error("Invalid improvements");
  }

  if (!Array.isArray(data.correctedSections)) {
    throw new Error("Invalid corrected sections");
  }

  return data;
};


export const validateResumeSuggestions = (data) => {

  // 1. Response must be an object
  if (!isObject(data)) {
    throw new Error(
      "Invalid resume suggestions response"
    );
  }


  // 2. Validate improvements
  if (!isStringArray(data.improvements)) {
    throw new Error(
      "Invalid improvements from AI"
    );
  }


  // 3. Validate keywords
  if (!isStringArray(data.keywords)) {
    throw new Error(
      "Invalid keywords from AI"
    );
  }


  // 4. Validate missing sections
  if (!isStringArray(data.missingSections)) {
    throw new Error(
      "Invalid missingSections from AI"
    );
  }


  // 5. Validate skills gap
  if (!isStringArray(data.skillsGap)) {
    throw new Error(
      "Invalid skillsGap from AI"
    );
  }


  // 6. Validate grammar fixes
  if (!isStringArray(data.grammarFixes)) {
    throw new Error(
      "Invalid grammarFixes from AI"
    );
  }


  return data;
};


export const validateInterviewQuestions = (data) => {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid interview questions response");
  }

  if (!Array.isArray(data.questions)) {
    throw new Error("AI questions must be an array");
  }

  if (data.questions.length === 0) {
    throw new Error("AI returned no questions");
  }

  data.questions.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      throw new Error(
        `Invalid question at index ${index}`
      );
    }

    if (
      typeof item.question !== "string" ||
      !item.question.trim()
    ) {
      throw new Error(
        `Invalid question text at index ${index}`
      );
    }

    if (
      !["easy", "medium", "hard"].includes(
        item.difficulty
      )
    ) {
      throw new Error(
        `Invalid difficulty at index ${index}`
      );
    }

    if (typeof item.topic !== "string") {
      throw new Error(
        `Invalid topic at index ${index}`
      );
    }
  });

  return data;
};


export const validateInterviewAnswer = (data) => {
  if (!data || typeof data !== "object") {
    throw new Error(
      "Invalid interview evaluation response"
    );
  }

  if (
    typeof data.score !== "number" ||
    data.score < 0 ||
    data.score > 100
  ) {
    throw new Error("Invalid answer score");
  }

  const requiredStrings = [
    "correctness",
    "technicalKnowledge",
    "relevance",
    "clarity",
    "completeness",
    "idealAnswer",
  ];

  for (const field of requiredStrings) {
    if (typeof data[field] !== "string") {
      throw new Error(
        `Invalid ${field}`
      );
    }
  }

  if (!Array.isArray(data.strengths)) {
    throw new Error("Invalid strengths");
  }

  if (!Array.isArray(data.weaknesses)) {
    throw new Error("Invalid weaknesses");
  }

  if (!Array.isArray(data.suggestions)) {
    throw new Error("Invalid suggestions");
  }

  return data;
};


export const validateInterviewFollowUp = (data) => {
  // Response must be an object
  if (!data || typeof data !== "object") {
    throw new Error(
      "Invalid interview follow-up response"
    );
  }

  // followUpQuestion must exist
  if (
    typeof data.followUpQuestion !== "string" ||
    !data.followUpQuestion.trim()
  ) {
    throw new Error(
      "Invalid followUpQuestion"
    );
  }

  // reason must exist
  if (
    typeof data.reason !== "string" ||
    !data.reason.trim()
  ) {
    throw new Error(
      "Invalid follow-up reason"
    );
  }

  return data;
};


export const validateInterviewReport = (data) => {

  // Response must be an object
  if (!data || typeof data !== "object") {
    throw new Error(
      "Invalid interview report response"
    );
  }


  // ===================================================
  // Overall Score
  // ===================================================

  if (
    typeof data.overallScore !== "number" ||
    data.overallScore < 0 ||
    data.overallScore > 100
  ) {
    throw new Error(
      "Invalid overallScore"
    );
  }


  // ===================================================
  // Interview Readiness
  // ===================================================

  const validReadiness = [
    "Beginner",
    "Developing",
    "Interview Ready",
    "Strong",
  ];

  if (
    typeof data.interviewReadiness !== "string" ||
    !validReadiness.includes(
      data.interviewReadiness
    )
  ) {
    throw new Error(
      "Invalid interviewReadiness"
    );
  }


  // ===================================================
  // Summary
  // ===================================================

  if (
    typeof data.summary !== "string" ||
    !data.summary.trim()
  ) {
    throw new Error(
      "Invalid summary"
    );
  }


  // ===================================================
  // Category Scores
  // ===================================================

  if (
    !data.categoryScores ||
    typeof data.categoryScores !== "object"
  ) {
    throw new Error(
      "Invalid categoryScores"
    );
  }

  const categories = [
    "technicalKnowledge",
    "problemSolving",
    "communication",
    "answerQuality",
  ];

  for (const category of categories) {

    const score =
      data.categoryScores[category];

    if (
      typeof score !== "number" ||
      score < 0 ||
      score > 100
    ) {
      throw new Error(
        `Invalid ${category} score`
      );
    }
  }


  // ===================================================
  // Strengths
  // ===================================================

  if (!Array.isArray(data.strengths)) {
    throw new Error(
      "Invalid strengths"
    );
  }


  // ===================================================
  // Weaknesses
  // ===================================================

  if (!Array.isArray(data.weaknesses)) {
    throw new Error(
      "Invalid weaknesses"
    );
  }


  // ===================================================
  // Areas To Improve
  // ===================================================

  if (!Array.isArray(data.areasToImprove)) {
    throw new Error(
      "Invalid areasToImprove"
    );
  }


  // ===================================================
  // Recommended Topics
  // ===================================================

  if (!Array.isArray(data.recommendedTopics)) {
    throw new Error(
      "Invalid recommendedTopics"
    );
  }


  // ===================================================
  // Final Feedback
  // ===================================================

  if (
    typeof data.finalFeedback !== "string" ||
    !data.finalFeedback.trim()
  ) {
    throw new Error(
      "Invalid finalFeedback"
    );
  }


  // ===================================================
  // Everything is valid
  // ===================================================

  return data;
};


export const validateResumeReport = (data) => {

  // ===================================================
  // 1. Validate main response
  // ===================================================

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    throw new Error(
      "Invalid resume report response"
    );
  }


  // ===================================================
  // 2. Validate overallScore
  // ===================================================

  if (
    typeof data.overallScore !== "number" ||
    data.overallScore < 0 ||
    data.overallScore > 100
  ) {
    throw new Error(
      "Invalid overallScore"
    );
  }


  // ===================================================
  // 3. Validate ATS score
  // ===================================================

  if (
    typeof data.atsScore !== "number" ||
    data.atsScore < 0 ||
    data.atsScore > 100
  ) {
    throw new Error(
      "Invalid atsScore"
    );
  }


  // ===================================================
  // 4. Validate summary
  // ===================================================

  if (
    typeof data.summary !== "string" ||
    !data.summary.trim()
  ) {
    throw new Error(
      "Invalid summary"
    );
  }


  // ===================================================
  // 5. Validate sections
  // ===================================================

  if (
    !data.sections ||
    typeof data.sections !== "object" ||
    Array.isArray(data.sections)
  ) {
    throw new Error(
      "Invalid sections"
    );
  }


  // ===================================================
  // 6. Validate individual sections
  // ===================================================

  const sectionNames = [
    "summary",
    "skills",
    "projects",
    "experience",
    "education",
  ];


  for (const sectionName of sectionNames) {

    const section =
      data.sections[sectionName];


    // Section must exist
    if (
      !section ||
      typeof section !== "object" ||
      Array.isArray(section)
    ) {
      throw new Error(
        `Invalid ${sectionName} section`
      );
    }


    // Section score
    if (
      typeof section.score !== "number" ||
      section.score < 0 ||
      section.score > 100
    ) {
      throw new Error(
        `Invalid ${sectionName} score`
      );
    }


    // Section feedback
    if (
      typeof section.feedback !== "string" ||
      !section.feedback.trim()
    ) {
      throw new Error(
        `Invalid ${sectionName} feedback`
      );
    }
  }


  // ===================================================
  // 7. Validate strengths
  // ===================================================

  if (!Array.isArray(data.strengths)) {
    throw new Error(
      "Invalid strengths"
    );
  }


  // ===================================================
  // 8. Validate weaknesses
  // ===================================================

  if (!Array.isArray(data.weaknesses)) {
    throw new Error(
      "Invalid weaknesses"
    );
  }


  // ===================================================
  // 9. Validate missing information
  // ===================================================

  if (!Array.isArray(data.missingInformation)) {
    throw new Error(
      "Invalid missingInformation"
    );
  }


  // ===================================================
  // 10. Validate grammar issues
  // ===================================================

  if (!Array.isArray(data.grammarIssues)) {
    throw new Error(
      "Invalid grammarIssues"
    );
  }


  // ===================================================
  // 11. Validate recommendations
  // ===================================================

  if (!Array.isArray(data.recommendations)) {
    throw new Error(
      "Invalid recommendations"
    );
  }


  // ===================================================
  // 12. Validate priority improvements
  // ===================================================

  if (!Array.isArray(data.priorityImprovements)) {
    throw new Error(
      "Invalid priorityImprovements"
    );
  }


  // ===================================================
  // 13. Validate final feedback
  // ===================================================

  if (
    typeof data.finalFeedback !== "string" ||
    !data.finalFeedback.trim()
  ) {
    throw new Error(
      "Invalid finalFeedback"
    );
  }


  // ===================================================
  // 14. Everything is valid
  // ===================================================

  return data;
};


export const validateMCQs = (data) => {

  // ---------------------------------------------------
  // 1. Validate main response
  // ---------------------------------------------------

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    throw new Error("Invalid MCQ response");
  }


  // ---------------------------------------------------
  // 2. Validate topic
  // ---------------------------------------------------

  if (
    typeof data.topic !== "string" ||
    !data.topic.trim()
  ) {
    throw new Error("Invalid MCQ topic");
  }


  // ---------------------------------------------------
  // 3. Validate difficulty
  // ---------------------------------------------------

  const validDifficulties = [
    "easy",
    "medium",
    "hard",
  ];

  if (
    typeof data.difficulty !== "string" ||
    !validDifficulties.includes(
      data.difficulty.toLowerCase()
    )
  ) {
    throw new Error("Invalid MCQ difficulty");
  }


  // ---------------------------------------------------
  // 4. Validate questions
  // ---------------------------------------------------

  if (!Array.isArray(data.questions)) {
    throw new Error(
      "MCQ questions must be an array"
    );
  }


  if (data.questions.length === 0) {
    throw new Error(
      "MCQ questions cannot be empty"
    );
  }


  // ---------------------------------------------------
  // 5. Validate every question
  // ---------------------------------------------------

  data.questions.forEach((item, index) => {

    if (
      !item ||
      typeof item !== "object" ||
      Array.isArray(item)
    ) {
      throw new Error(
        `Invalid MCQ at index ${index}`
      );
    }


    // Question
    if (
      typeof item.question !== "string" ||
      !item.question.trim()
    ) {
      throw new Error(
        `Invalid question at index ${index}`
      );
    }


    // Options
    if (!Array.isArray(item.options)) {
      throw new Error(
        `Options must be an array at index ${index}`
      );
    }


    // Exactly 4 options
    if (item.options.length !== 4) {
      throw new Error(
        `MCQ at index ${index} must have exactly 4 options`
      );
    }


    // Every option must be a string
    item.options.forEach((option, optionIndex) => {

      if (
        typeof option !== "string" ||
        !option.trim()
      ) {
        throw new Error(
          `Invalid option at question ${index}, option ${optionIndex}`
        );
      }

    });


    // Correct answer
    if (
      typeof item.correctAnswer !== "string" ||
      !item.correctAnswer.trim()
    ) {
      throw new Error(
        `Invalid correctAnswer at index ${index}`
      );
    }


    // Correct answer must exist in options
    if (
      !item.options.includes(
        item.correctAnswer
      )
    ) {
      throw new Error(
        `Correct answer does not exist in options at index ${index}`
      );
    }


    // Explanation
    if (
      typeof item.explanation !== "string" ||
      !item.explanation.trim()
    ) {
      throw new Error(
        `Invalid explanation at index ${index}`
      );
    }

  });


  // ---------------------------------------------------
  // 6. Return validated data
  // ---------------------------------------------------

  return data;
};


export const validateMCQsEvaluation = (data) => {

  // ---------------------------------------------------
  // 1. Validate main response
  // ---------------------------------------------------

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    throw new Error(
      "Invalid MCQ evaluation response"
    );
  }


  // ---------------------------------------------------
  // 2. Validate numeric fields
  // ---------------------------------------------------

  const numericFields = [
    "totalQuestions",
    "correctAnswers",
    "incorrectAnswers",
    "unanswered",
    "score",
    "percentage",
  ];


  for (const field of numericFields) {

    if (
      typeof data[field] !== "number" ||
      !Number.isFinite(data[field])
    ) {
      throw new Error(
        `Invalid ${field}`
      );
    }


    if (data[field] < 0) {
      throw new Error(
        `${field} cannot be negative`
      );
    }

  }


  // ---------------------------------------------------
  // 3. Validate percentage
  // ---------------------------------------------------

  if (
    data.percentage < 0 ||
    data.percentage > 100
  ) {
    throw new Error(
      "Percentage must be between 0 and 100"
    );
  }


  // ---------------------------------------------------
  // 4. Validate results
  // ---------------------------------------------------

  if (!Array.isArray(data.results)) {
    throw new Error(
      "MCQ evaluation results must be an array"
    );
  }


  // ---------------------------------------------------
  // 5. Validate total questions
  // ---------------------------------------------------

  if (
    !Number.isInteger(data.totalQuestions) ||
    data.totalQuestions <= 0
  ) {
    throw new Error(
      "totalQuestions must be a positive integer"
    );
  }


  // ---------------------------------------------------
  // 6. Validate answer counts
  // ---------------------------------------------------

  if (
    !Number.isInteger(data.correctAnswers) ||
    !Number.isInteger(data.incorrectAnswers) ||
    !Number.isInteger(data.unanswered)
  ) {
    throw new Error(
      "Answer counts must be integers"
    );
  }


  // ---------------------------------------------------
  // 7. Check answer calculation
  // ---------------------------------------------------

  const calculatedTotal =
    data.correctAnswers +
    data.incorrectAnswers +
    data.unanswered;


  if (
    calculatedTotal !==
    data.totalQuestions
  ) {
    throw new Error(
      "MCQ answer counts do not match totalQuestions"
    );
  }


  // ---------------------------------------------------
  // 8. Score must equal correct answers
  // ---------------------------------------------------

  if (
    data.score !==
    data.correctAnswers
  ) {
    throw new Error(
      "Score must equal correctAnswers"
    );
  }


  // ---------------------------------------------------
  // 9. Results length
  // ---------------------------------------------------

  if (
    data.results.length !==
    data.totalQuestions
  ) {
    throw new Error(
      "Results length must equal totalQuestions"
    );
  }


  // ---------------------------------------------------
  // 10. Validate every result
  // ---------------------------------------------------

  data.results.forEach((item, index) => {

    if (
      !item ||
      typeof item !== "object" ||
      Array.isArray(item)
    ) {
      throw new Error(
        `Invalid MCQ result at index ${index}`
      );
    }


    // Question
    if (
      typeof item.question !== "string" ||
      !item.question.trim()
    ) {
      throw new Error(
        `Invalid question at result index ${index}`
      );
    }


    // User answer
    if (
      typeof item.userAnswer !== "string"
    ) {
      throw new Error(
        `Invalid userAnswer at result index ${index}`
      );
    }


    // Correct answer
    if (
      typeof item.correctAnswer !== "string" ||
      !item.correctAnswer.trim()
    ) {
      throw new Error(
        `Invalid correctAnswer at result index ${index}`
      );
    }


    // isCorrect
    if (
      typeof item.isCorrect !== "boolean"
    ) {
      throw new Error(
        `isCorrect must be boolean at result index ${index}`
      );
    }


    // Explanation
    if (
      typeof item.explanation !== "string" ||
      !item.explanation.trim()
    ) {
      throw new Error(
        `Invalid explanation at result index ${index}`
      );
    }

  });


  // ---------------------------------------------------
  // 11. Return validated data
  // ---------------------------------------------------

  return data;
};


export const validateMCQsExplanation = (data) => {

  // ---------------------------------------------------
  // 1. Validate main response
  // ---------------------------------------------------

  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    throw new Error(
      "Invalid MCQ explanation response"
    );
  }


  // ---------------------------------------------------
  // 2. Validate correct answer
  // ---------------------------------------------------

  if (
    typeof data.correctAnswer !== "string" ||
    !data.correctAnswer.trim()
  ) {
    throw new Error(
      "Invalid correctAnswer"
    );
  }


  // ---------------------------------------------------
  // 3. Validate explanation
  // ---------------------------------------------------

  if (
    typeof data.explanation !== "string" ||
    !data.explanation.trim()
  ) {
    throw new Error(
      "Invalid explanation"
    );
  }


  // ---------------------------------------------------
  // 4. Validate key concept
  // ---------------------------------------------------

  if (
    typeof data.keyConcept !== "string" ||
    !data.keyConcept.trim()
  ) {
    throw new Error(
      "Invalid keyConcept"
    );
  }


  // ---------------------------------------------------
  // 5. Return validated data
  // ---------------------------------------------------

  return data;
};


export const validateIndustryAnalysis = (data) => {

  // 1. Check response is an object
  if (
    !data ||
    typeof data !== "object" ||
    Array.isArray(data)
  ) {
    throw new Error(
      "Invalid industry analysis response"
    );
  }


  // 2. Validate top skills
  if (!Array.isArray(data.topSkills)) {
    throw new Error(
      "Invalid topSkills from AI"
    );
  }


  // 3. Validate missing skills
  if (!Array.isArray(data.missingSkills)) {
    throw new Error(
      "Invalid missingSkills from AI"
    );
  }


  // 4. Validate trending technologies
  if (!Array.isArray(data.trendingTechnologies)) {
    throw new Error(
      "Invalid trendingTechnologies from AI"
    );
  }


  // 5. Validate average salary
  if (typeof data.averageSalary !== "string") {
    throw new Error(
      "Invalid averageSalary from AI"
    );
  }


  // 6. Validate companies
  if (!Array.isArray(data.topCompanies)) {
    throw new Error(
      "Invalid topCompanies from AI"
    );
  }


  // 7. Validate tips
  if (!Array.isArray(data.tips)) {
    throw new Error(
      "Invalid tips from AI"
    );
  }


  // 8. Validate market demand
  if (
    !["low", "medium", "high"].includes(
      data.marketDemand
    )
  ) {
    throw new Error(
      "Invalid marketDemand from AI"
    );
  }


  // 9. Validate roadmap
  if (!Array.isArray(data.roadmap)) {
    throw new Error(
      "Invalid roadmap from AI"
    );
  }


  // 10. Validate future trends
  if (!Array.isArray(data.futureTrends)) {
    throw new Error(
      "Invalid futureTrends from AI"
    );
  }


  // 11. Validate tools
  if (!Array.isArray(data.tools)) {
    throw new Error(
      "Invalid tools from AI"
    );
  }


  // 12. Validate help
  if (!Array.isArray(data.help)) {
    throw new Error(
      "Invalid help from AI"
    );
  }


  return data;
};


export const validateCareerChat = (data) => {

  // AI response must be a string
  if (typeof data !== "string") {
    throw new Error(
      "Invalid career chat response"
    );
  }

  // AI response must not be empty
  if (!data.trim()) {
    throw new Error(
      "Career AI returned an empty response"
    );
  }

  return data;
};


export const validateInterviewEvaluation = (data) => {

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Invalid interview evaluation response");
  }

  // Score
  if (
    typeof data.score !== "number" ||
    data.score < 0 ||
    data.score > 100
  ) {
    throw new Error("Invalid interview evaluation score");
  }

  // Required feedback fields
  const requiredStrings = [
    "correctness",
    "technicalKnowledge",
    "relevance",
    "clarity",
    "completeness",
    "idealAnswer",
  ];

  for (const field of requiredStrings) {
    if (
      typeof data[field] !== "string" ||
      !data[field].trim()
    ) {
      throw new Error(
        `Invalid ${field} in interview evaluation`
      );
    }
  }

  // Arrays
  const requiredArrays = [
    "strengths",
    "weaknesses",
    "suggestions",
  ];

  for (const field of requiredArrays) {
    if (!Array.isArray(data[field])) {
      throw new Error(
        `Invalid ${field} in interview evaluation`
      );
    }
  }

  // Ensure array items are strings
  for (const field of requiredArrays) {
    for (const item of data[field]) {
      if (typeof item !== "string") {
        throw new Error(
          `Invalid item inside ${field}`
        );
      }
    }
  }

  return data;
};




