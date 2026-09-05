const isNonEmptyString = (value) => {
  return (
    typeof value === "string" &&
    value.trim().length > 0
  );
};


export const validateResumeInput = (
  resumeText,
  jobDescription
) => {

  if (!isNonEmptyString(resumeText)) {
    throw new Error("Resume text is required");
  }

  if (!isNonEmptyString(jobDescription)) {
    throw new Error("Job description is required");
  }

  if (resumeText.trim().length > 20000) {
    throw new Error("Resume text is too long");
  }

  if (jobDescription.trim().length > 15000) {
    throw new Error("Job description is too long");
  }

  return {
    resumeText: resumeText.trim(),
    jobDescription: jobDescription.trim(),
  };
};


export const validateCareerChatInput = (message) => {

  if (!isNonEmptyString(message)) {
    throw new Error("Message is required");
  }

  if (message.trim().length < 2) {
    throw new Error("Message is too short");
  }

  if (message.trim().length > 5000) {
    throw new Error("Message is too long");
  }

  return message.trim();
};


export const validateIndustryInput = (
  selectRole,
  experience
) => {

  if (!isNonEmptyString(selectRole)) {
    throw new Error("Role is required");
  }

  if (!isNonEmptyString(experience)) {
    throw new Error("Experience level is required");
  }

  if (selectRole.trim().length > 200) {
    throw new Error("Role is too long");
  }

  if (experience.trim().length > 100) {
    throw new Error("Experience level is too long");
  }

  return {
    selectRole: selectRole.trim(),
    experience: experience.trim(),
  };
};



export const validateMCQInput = (
  topic,
  difficulty = "medium",
  numberOfQuestions = 10
) => {

  if (!isNonEmptyString(topic)) {
    throw new Error("MCQ topic is required");
  }

  if (topic.trim().length > 200) {
    throw new Error("MCQ topic is too long");
  }

  const allowedDifficulties = [
    "easy",
    "medium",
    "hard",
  ];

  if (
    typeof difficulty !== "string" ||
    !allowedDifficulties.includes(
      difficulty.toLowerCase()
    )
  ) {
    throw new Error(
      "Difficulty must be easy, medium, or hard"
    );
  }

  if (
    !Number.isInteger(numberOfQuestions) ||
    numberOfQuestions < 1 ||
    numberOfQuestions > 50
  ) {
    throw new Error(
      "Number of questions must be between 1 and 50"
    );
  }

  return {
    topic: topic.trim(),
    difficulty: difficulty.toLowerCase(),
    numberOfQuestions,
  };
};



export const validateInterviewInput = ({
  jobRole,
  experienceLevel,
  interviewType,
  skills = [],
  numberOfQuestions = 10,
}) => {

  if (!isNonEmptyString(jobRole)) {
    throw new Error("Job role is required");
  }

  if (!isNonEmptyString(experienceLevel)) {
    throw new Error("Experience level is required");
  }

  if (!isNonEmptyString(interviewType)) {
    throw new Error("Interview type is required");
  }

  if (jobRole.trim().length > 200) {
    throw new Error("Job role is too long");
  }

  if (experienceLevel.trim().length > 100) {
    throw new Error("Experience level is too long");
  }

  if (interviewType.trim().length > 100) {
    throw new Error("Interview type is too long");
  }

  if (!Array.isArray(skills)) {
    throw new Error("Skills must be an array");
  }

  if (skills.length > 30) {
    throw new Error("Too many skills provided");
  }

  for (const skill of skills) {

    if (!isNonEmptyString(skill)) {
      throw new Error(
        "Each skill must be a valid string"
      );
    }

    if (skill.trim().length > 100) {
      throw new Error("Skill name is too long");
    }
  }

  if (
    !Number.isInteger(numberOfQuestions) ||
    numberOfQuestions < 1 ||
    numberOfQuestions > 50
  ) {
    throw new Error(
      "Number of questions must be between 1 and 50"
    );
  }

  return {
    jobRole: jobRole.trim(),
    experienceLevel: experienceLevel.trim(),
    interviewType: interviewType.trim(),
    skills: skills.map((skill) => skill.trim()),
    numberOfQuestions,
  };
};



export const validateInterviewFollowUpInput = ({
  jobRole,
  question,
  candidateAnswer,
}) => {

  if (!isNonEmptyString(jobRole)) {
    throw new Error("Job role is required");
  }

  if (!isNonEmptyString(question)) {
    throw new Error("Interview question is required");
  }

  if (!isNonEmptyString(candidateAnswer)) {
    throw new Error("Candidate answer is required");
  }

  if (jobRole.trim().length > 200) {
    throw new Error("Job role is too long");
  }

  if (question.trim().length > 5000) {
    throw new Error("Interview question is too long");
  }

  if (candidateAnswer.trim().length > 10000) {
    throw new Error("Candidate answer is too long");
  }

  return {
    jobRole: jobRole.trim(),
    question: question.trim(),
    candidateAnswer: candidateAnswer.trim(),
  };
};



export const validateInterviewEvaluationInput = ({
  jobRole,
  question,
  candidateAnswer,
}) => {

  if (!isNonEmptyString(jobRole)) {
    throw new Error("Job role is required");
  }

  if (!isNonEmptyString(question)) {
    throw new Error("Interview question is required");
  }

  if (!isNonEmptyString(candidateAnswer)) {
    throw new Error("Candidate answer is required");
  }

  if (jobRole.trim().length > 200) {
    throw new Error("Job role is too long");
  }

  if (question.trim().length > 5000) {
    throw new Error("Interview question is too long");
  }

  if (candidateAnswer.trim().length > 10000) {
    throw new Error("Candidate answer is too long");
  }

  return {
    jobRole: jobRole.trim(),
    question: question.trim(),
    candidateAnswer: candidateAnswer.trim(),
  };
};                             

