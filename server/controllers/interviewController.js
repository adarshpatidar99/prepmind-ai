import Interview from "../models/interviewModel.js";
import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

import { generateInterviewQuestions,  } from "../services/ai/interviewAi.js";
import { generateMCQs } from "../services/ai/mcqAi.js";
import { evaluateInterviewAnswer } from "../services/ai/interviewAi.js";

import {
  hrQuestions,
  technicalQuestions,
  behavioralQuestions,
  customQuestions,
} from "../data/interviewQuestions.js";

import { technicalMCQQuestions } from "../data/mcq/technicalMCQ.js";
import { hrMCQQuestions } from "../data/mcq/hrMCQ.js";
import { behavioralMCQQuestions } from "../data/mcq/behavioralMCQ.js";
import { customMCQQuestions } from "../data/mcq/customMCQ.js";
import logger from "../utils/logger.js";


export const createInterview = catchAsyncError(
  async (req, res, next) => {

    if (!req.user || !req.user._id) {

      logger.warn("Unauthorized interview creation attempt");

      return next(
        new ErrorHandler("Unauthorized access.", 401)
      );
    }

    const userId = req.user._id;

    logger.info("Interview creation started", {
      userId: userId.toString(),
    });

    const {
      role,
      company,
      interviewType,
      questionType,
      duration,
      questionsCount,
      techStack,
      experience,
    } = req.body;


    // ----------------------------------------------------------
    // 2. Validate required fields
    // ----------------------------------------------------------

    if (
      !role ||
      !interviewType ||
      !questionType ||
      !questionsCount
    ) {

      logger.warn("Interview creation validation failed", {
        userId: userId.toString(),
        reason: "Missing required fields",
      });

      return next(
        new ErrorHandler(
          "Please fill all required fields.",
          400
        )
      );
    }


    // ----------------------------------------------------------
    // 3. Validate question count
    // ----------------------------------------------------------

    const parsedQuestionsCount = Number(questionsCount);

    if (
      !Number.isInteger(parsedQuestionsCount) ||
      parsedQuestionsCount <= 0
    ) {

      logger.warn("Invalid interview question count", {
        userId: userId.toString(),
        questionsCount,
      });

      return next(
        new ErrorHandler(
          "Questions count must be a positive number.",
          400
        )
      );
    }


    // ----------------------------------------------------------
    // 4. Validate interview type
    // ----------------------------------------------------------

    const validInterviewTypes = [
      "technical",
      "hr",
      "behavioral",
      "custom",
    ];

    if (!validInterviewTypes.includes(interviewType)) {

      logger.warn("Invalid interview type", {
        userId: userId.toString(),
        interviewType,
      });

      return next(
        new ErrorHandler(
          "Invalid interview type.",
          400
        )
      );
    }


    // ----------------------------------------------------------
    // 5. Validate question type
    // ----------------------------------------------------------

    const validQuestionTypes = [
      "mcq",
      "descriptive",
    ];

    if (!validQuestionTypes.includes(questionType)) {

      logger.warn("Invalid question type", {
        userId: userId.toString(),
        questionType,
      });

      return next(
        new ErrorHandler(
          "Invalid question type.",
          400
        )
      );
    }


    // ----------------------------------------------------------
    // 6. Select static questions
    // ----------------------------------------------------------

    let selectedQuestions = [];

    if (questionType === "mcq") {

      switch (interviewType) {

        case "technical":
          selectedQuestions = technicalMCQQuestions;
          break;

        case "hr":
          selectedQuestions = hrMCQQuestions;
          break;

        case "behavioral":
          selectedQuestions = behavioralMCQQuestions;
          break;

        case "custom":
          selectedQuestions = customMCQQuestions;
          break;

        default:

          logger.warn("Invalid interview type during MCQ selection", {
            userId: userId.toString(),
            interviewType,
          });

          return next(
            new ErrorHandler(
              "Invalid interview type.",
              400
            )
          );
      }

    } else {

      switch (interviewType) {

        case "technical":
          selectedQuestions = technicalQuestions;
          break;

        case "hr":
          selectedQuestions = hrQuestions;
          break;

        case "behavioral":
          selectedQuestions = behavioralQuestions;
          break;

        case "custom":
          selectedQuestions = customQuestions;
          break;

        default:

          logger.warn("Invalid interview type during question selection", {
            userId: userId.toString(),
            interviewType,
          });

          return next(
            new ErrorHandler(
              "Invalid interview type.",
              400
            )
          );
      }
    }


    // ----------------------------------------------------------
    // 7. Select requested number of questions
    // ----------------------------------------------------------

    selectedQuestions = selectedQuestions.slice(
      0,
      parsedQuestionsCount
    );


    // ----------------------------------------------------------
    // 8. Convert questions into DB format
    // ----------------------------------------------------------

    const interviewItems = selectedQuestions.map((item) => ({
      question: item.question,

      category:
        item.category || interviewType,

      difficulty:
        item.difficulty || "Medium",

      options:
        item.options || [],

      correctAnswer:
        item.correctAnswer || "",

      userAnswer: "",

      isCorrect: false,

      timeTaken: 0,

      score: 0,

      feedback: "",
    }));


    // ----------------------------------------------------------
    // 9. Create interview
    // ----------------------------------------------------------

    const interview = await Interview.create({

      user: userId,

      role,

      company: company || "",

      interviewType,

      questionType,

      techStack: Array.isArray(techStack)
        ? techStack
        : [],

      experience:
        experience || "Fresher",

      duration:
        Number(duration) || 30,

      questionsCount:
        interviewItems.length,

      currentQuestion: 0,

      interviewItems,

      finalScore: 0,

      aiReport: {
        overallScore: 0,
        technicalScore: 0,
        communicationScore: 0,
        confidenceScore: 0,
        strengths: [],
        weaknesses: [],
        suggestions: [],
        summary: "",
      },

      interviewStatus: "started",
    });


    // ----------------------------------------------------------
    // 10. Log successful creation
    // ----------------------------------------------------------

    logger.info("Interview created successfully", {
      userId: userId.toString(),
      interviewId: interview._id.toString(),
      interviewType,
      questionType,
      questionsCount: interviewItems.length,
    });


    // ----------------------------------------------------------
    // 11. Response
    // ----------------------------------------------------------

    return res.status(201).json({

      success: true,

      message:
        "Interview created successfully.",

      interviewId:
        interview._id,

      interview,
    });
  }
);


export const getInterview = catchAsyncError(
  async (req, res, next) => {

    // ----------------------------------------------------------
    // 1. Authentication
    // ----------------------------------------------------------

    if (!req.user || !req.user._id) {
      logger.warn("Unauthorized attempt to access interview");

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId = req.user._id;
    const { id } = req.params;

    // ----------------------------------------------------------
    // 2. Log request
    // ----------------------------------------------------------

    logger.info("Fetching interview", {
      userId: userId.toString(),
      interviewId: id,
    });

    // ----------------------------------------------------------
    // 3. Find interview
    // ----------------------------------------------------------

    const interview =
      await Interview.findById(id);

    // ----------------------------------------------------------
    // 4. Interview not found
    // ----------------------------------------------------------

    if (!interview) {

      logger.warn("Interview not found", {
        userId: userId.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "Interview not found.",
          404
        )
      );
    }

    // ----------------------------------------------------------
    // 5. Ownership check
    // ----------------------------------------------------------

    if (
      interview.user.toString() !==
      userId.toString()
    ) {

      logger.warn("Unauthorized interview access attempt", {
        userId: userId.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "You are not authorized to access this interview.",
          403
        )
      );
    }

    // ----------------------------------------------------------
    // 6. Success log
    // ----------------------------------------------------------

    logger.info("Interview fetched successfully", {
      userId: userId.toString(),
      interviewId: id,
    });

    // ----------------------------------------------------------
    // 7. Response
    // ----------------------------------------------------------

    return res.status(200).json({
      success: true,
      interview,
    });
  }
);


export const generateQuestions = catchAsyncError(
  async (req, res, next) => {

    // ----------------------------------------------------------
    // 1. Authentication
    // ----------------------------------------------------------

    if (!req.user || !req.user._id) {

      logger.warn("Unauthorized request to generate questions");

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const { id } = req.params;
    const { noOfQuestions } = req.body;

    logger.info("Generate interview questions request", {
      userId: req.user._id.toString(),
      interviewId: id,
      requestedQuestions: noOfQuestions,
    });

    // ----------------------------------------------------------
    // 2. Validate question count
    // ----------------------------------------------------------

    const questionCount =
      Number(noOfQuestions);

    if (
      !Number.isInteger(questionCount) ||
      questionCount <= 0
    ) {

      logger.warn("Invalid question count", {
        userId: req.user._id.toString(),
        interviewId: id,
        requestedQuestions: noOfQuestions,
      });

      return next(
        new ErrorHandler(
          "Number of questions must be a positive number.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 3. Find interview
    // ----------------------------------------------------------

    const interview =
      await Interview.findById(id);

    if (!interview) {

      logger.warn("Interview not found", {
        userId: req.user._id.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "Interview not found.",
          404
        )
      );
    }

    // ----------------------------------------------------------
    // 4. Ownership
    // ----------------------------------------------------------

    if (
      interview.user.toString() !==
      req.user._id.toString()
    ) {

      logger.warn("Unauthorized interview modification attempt", {
        userId: req.user._id.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "You are not authorized to modify this interview.",
          403
        )
      );
    }

    // ----------------------------------------------------------
    // 5. Get interview information
    // ----------------------------------------------------------

    const {
      role,
      techStack,
      experience,
      interviewType,
      questionType,
    } = interview;

    logger.info("Interview question generation started", {
      userId: req.user._id.toString(),
      interviewId: id,
      role,
      interviewType,
      questionType,
      questionCount,
    });

    let questions = [];

    // ==========================================================
    // 6. MCQ
    // ==========================================================

    if (questionType === "mcq") {

      logger.info("Generating MCQ questions", {
        interviewId: id,
        questionCount,
      });

      const mcqQuestions =
        await generateMCQs(
          role,
          experience,
          techStack,
          questionCount
        );

      if (
        !Array.isArray(mcqQuestions) ||
        mcqQuestions.length === 0
      ) {

        logger.error("MCQ question generation failed", {
          userId: req.user._id.toString(),
          interviewId: id,
        });

        return next(
          new ErrorHandler(
            "Failed to generate MCQ questions.",
            500
          )
        );
      }

      questions = mcqQuestions
        .slice(0, questionCount)
        .map((q) => ({
          question: q.question,

          category:
            q.category || interviewType,

          difficulty:
            q.difficulty || "Medium",

          options:
            Array.isArray(q.options)
              ? q.options
              : [],

          correctAnswer:
            q.answer ||
            q.correctAnswer ||
            "",

          userAnswer: "",

          isCorrect: false,

          score: 0,

          feedback: "",

          timeTaken: 0,
        }));
    }

    // ==========================================================
    // 7. DESCRIPTIVE
    // ==========================================================

    else if (questionType === "descriptive") {

      logger.info("Generating descriptive questions", {
        interviewId: id,
        questionCount,
      });

      const questionsArray =
        await generateInterviewQuestions(
          role,
          techStack,
          experience,
          questionCount
        );

      if (
        !Array.isArray(questionsArray) ||
        questionsArray.length === 0
      ) {

        logger.error(
          "Descriptive question generation failed",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to generate questions.",
            500
          )
        );
      }

      questions = questionsArray
        .slice(0, questionCount)
        .map((q) => ({
          question:
            typeof q === "string"
              ? q
              : q.question,

          category:
            typeof q === "object"
              ? q.category || interviewType
              : interviewType,

          difficulty:
            typeof q === "object"
              ? q.difficulty || "Medium"
              : "Medium",

          options: [],

          correctAnswer: "",

          userAnswer: "",

          isCorrect: false,

          score: 0,

          feedback: "",

          timeTaken: 0,
        }));
    }

    // ----------------------------------------------------------
    // 8. Invalid question type
    // ----------------------------------------------------------

    else {

      logger.warn("Invalid interview question type", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionType,
      });

      return next(
        new ErrorHandler(
          "Invalid question type.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 9. Make sure questions exist
    // ----------------------------------------------------------

    if (questions.length === 0) {

      logger.error("No questions were generated", {
        userId: req.user._id.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "No questions were generated.",
          500
        )
      );
    }

    // ----------------------------------------------------------
    // 10. Save questions
    // ----------------------------------------------------------

    interview.interviewItems =
      questions;

    interview.questionsCount =
      questions.length;

    interview.currentQuestion = 0;

    interview.interviewStatus =
      "in-progress";

    // Reset score
    interview.finalScore = 0;

    await interview.save();

    // ----------------------------------------------------------
    // 11. Success log
    // ----------------------------------------------------------

    logger.info("Interview questions generated successfully", {
      userId: req.user._id.toString(),
      interviewId: id,
      questionType,
      generatedQuestions: questions.length,
    });

    // ----------------------------------------------------------
    // 12. Response
    // ----------------------------------------------------------

    return res.status(200).json({
      success: true,
      message:
        "Questions generated successfully.",
      interview,
    });
  }
);


export const submitAnswer = catchAsyncError(
  async (req, res, next) => {

    // ----------------------------------------------------------
    // 1. Authentication
    // ----------------------------------------------------------

    if (!req.user || !req.user._id) {

      logger.warn("Unauthorized request to submit interview answer");

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const { id } = req.params;

    const {
      questionIndex,
      userAnswer,
      timeTaken,
    } = req.body;

    logger.info("Interview answer submission started", {
      userId: req.user._id.toString(),
      interviewId: id,
      questionIndex,
    });

    // ----------------------------------------------------------
    // 2. Validate question index
    // ----------------------------------------------------------

    const index = Number(questionIndex);

    if (
      questionIndex === undefined ||
      questionIndex === null ||
      !Number.isInteger(index)
    ) {

      logger.warn("Invalid question index", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex,
      });

      return next(
        new ErrorHandler(
          "Valid question index is required.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 3. Validate answer
    // ----------------------------------------------------------

    if (
      typeof userAnswer !== "string" ||
      !userAnswer.trim()
    ) {

      logger.warn("Empty interview answer submitted", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex: index,
      });

      return next(
        new ErrorHandler(
          "Answer is required.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 4. Find interview
    // ----------------------------------------------------------

    const interview =
      await Interview.findById(id);

    if (!interview) {

      logger.warn("Interview not found while submitting answer", {
        userId: req.user._id.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "Interview not found.",
          404
        )
      );
    }

    // ----------------------------------------------------------
    // 5. Ownership
    // ----------------------------------------------------------

    if (
      interview.user.toString() !==
      req.user._id.toString()
    ) {

      logger.warn("Unauthorized interview answer submission", {
        userId: req.user._id.toString(),
        interviewId: id,
      });

      return next(
        new ErrorHandler(
          "You are not authorized to access this interview.",
          403
        )
      );
    }

    // ----------------------------------------------------------
    // 6. Check question type
    // ----------------------------------------------------------

    if (interview.questionType !== "descriptive") {

      logger.warn("Wrong question type for descriptive answer endpoint", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionType: interview.questionType,
      });

      return next(
        new ErrorHandler(
          "Use the MCQ answer endpoint for MCQ interviews.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 7. Check interview status
    // ----------------------------------------------------------

    if (
      interview.interviewStatus ===
      "completed"
    ) {

      logger.warn("Answer submitted to completed interview", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex: index,
      });

      return next(
        new ErrorHandler(
          "Interview has already been completed.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 8. Validate question index
    // ----------------------------------------------------------

    if (
      index < 0 ||
      index >= interview.interviewItems.length
    ) {

      logger.warn("Question index out of range", {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex: index,
        totalQuestions: interview.interviewItems.length,
      });

      return next(
        new ErrorHandler(
          "Invalid question index.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 9. Get question
    // ----------------------------------------------------------

    const question =
      interview.interviewItems[index];

    // ----------------------------------------------------------
    // 10. Save answer
    // ----------------------------------------------------------

    question.userAnswer =
      userAnswer.trim();

    question.timeTaken =
      Number(timeTaken) >= 0
        ? Number(timeTaken)
        : 0;

    // ----------------------------------------------------------
    // 11. Update current question
    // ----------------------------------------------------------

    interview.currentQuestion =
      index + 1;

    // ----------------------------------------------------------
    // 12. If last question -> complete
    // ----------------------------------------------------------

    if (
      index ===
      interview.interviewItems.length - 1
    ) {

      interview.interviewStatus =
        "completed";

      logger.info("Interview completed after final answer", {
        userId: req.user._id.toString(),
        interviewId: id,
        totalQuestions: interview.interviewItems.length,
      });

    } else {

      interview.interviewStatus =
        "in-progress";
    }

    // ----------------------------------------------------------
    // 13. Save interview
    // ----------------------------------------------------------

    await interview.save();

    // ----------------------------------------------------------
    // 14. Success log
    // ----------------------------------------------------------

    logger.info("Interview answer submitted successfully", {
      userId: req.user._id.toString(),
      interviewId: id,
      questionIndex: index,
      currentQuestion: interview.currentQuestion,
      interviewStatus: interview.interviewStatus,
    });

    // ----------------------------------------------------------
    // 15. Response
    // ----------------------------------------------------------

    return res.status(200).json({
      success: true,

      message:
        "Answer submitted successfully.",

      questionIndex: index,

      currentQuestion:
        interview.currentQuestion,

      interviewStatus:
        interview.interviewStatus,
    });
  }
);


export const submitMcqAnswer = catchAsyncError(
  async (req, res, next) => {

    // ----------------------------------------------------------
    // 1. Authentication
    // ----------------------------------------------------------

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to submit MCQ answer"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const { id } = req.params;

    const {
      questionIndex,
      userAnswer,
    } = req.body;

    logger.info(
      "MCQ answer submission started",
      {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex,
      }
    );

    // ----------------------------------------------------------
    // 2. Validate index
    // ----------------------------------------------------------

    const index = Number(questionIndex);

    if (
      questionIndex === undefined ||
      questionIndex === null ||
      !Number.isInteger(index)
    ) {

      logger.warn(
        "Invalid MCQ question index",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionIndex,
        }
      );

      return next(
        new ErrorHandler(
          "Valid question index is required.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 3. Validate answer
    // ----------------------------------------------------------

    if (
      typeof userAnswer !== "string" ||
      !userAnswer.trim()
    ) {

      logger.warn(
        "Empty MCQ answer submitted",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionIndex: index,
        }
      );

      return next(
        new ErrorHandler(
          "Answer is required.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 4. Find interview
    // ----------------------------------------------------------

    const interview =
      await Interview.findById(id);

    if (!interview) {

      logger.warn(
        "Interview not found while submitting MCQ answer",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Interview not found.",
          404
        )
      );
    }

    // ----------------------------------------------------------
    // 5. Ownership
    // ----------------------------------------------------------

    if (
      interview.user.toString() !==
      req.user._id.toString()
    ) {

      logger.warn(
        "Unauthorized MCQ interview access attempt",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      return next(
        new ErrorHandler(
          "You are not authorized to access this interview.",
          403
        )
      );
    }

    // ----------------------------------------------------------
    // 6. Check question type
    // ----------------------------------------------------------

    if (interview.questionType !== "mcq") {

      logger.warn(
        "MCQ endpoint used for non-MCQ interview",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionType: interview.questionType,
        }
      );

      return next(
        new ErrorHandler(
          "This is not an MCQ interview.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 7. Check status
    // ----------------------------------------------------------

    if (
      interview.interviewStatus ===
      "completed"
    ) {

      logger.warn(
        "MCQ answer submitted to completed interview",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionIndex: index,
        }
      );

      return next(
        new ErrorHandler(
          "Interview has already been completed.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 8. Check index
    // ----------------------------------------------------------

    if (
      index < 0 ||
      index >= interview.interviewItems.length
    ) {

      logger.warn(
        "MCQ question index out of range",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionIndex: index,
          totalQuestions:
            interview.interviewItems.length,
        }
      );

      return next(
        new ErrorHandler(
          "Invalid question index.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 9. Get question
    // ----------------------------------------------------------

    const question =
      interview.interviewItems[index];

    // ----------------------------------------------------------
    // 10. Check duplicate answer
    // ----------------------------------------------------------

    if (question.userAnswer) {

      logger.warn(
        "Duplicate MCQ answer submission",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          questionIndex: index,
        }
      );

      return next(
        new ErrorHandler(
          "This question has already been answered.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 11. Compare answer
    // ----------------------------------------------------------

    const submittedAnswer =
      userAnswer.trim();

    const correctAnswer =
      (question.correctAnswer || "").trim();

    const isCorrect =
      submittedAnswer === correctAnswer;

    // ----------------------------------------------------------
    // 12. Save answer
    // ----------------------------------------------------------

    question.userAnswer =
      submittedAnswer;

    question.isCorrect =
      isCorrect;

    // 10 points per correct answer
    question.score =
      isCorrect ? 10 : 0;

    question.feedback =
      isCorrect
        ? "Correct answer."
        : "Incorrect answer.";

    // ----------------------------------------------------------
    // 13. Update current question
    // ----------------------------------------------------------

    interview.currentQuestion =
      index + 1;

    // ----------------------------------------------------------
    // 14. Check completion
    // ----------------------------------------------------------

    if (
      interview.currentQuestion >=
      interview.interviewItems.length
    ) {

      interview.interviewStatus =
        "completed";

      // Calculate total score
      const totalScore =
        interview.interviewItems.reduce(
          (total, item) =>
            total + (Number(item.score) || 0),
          0
        );

      // Convert to percentage
      interview.finalScore =
        interview.interviewItems.length > 0
          ? Math.round(
              (totalScore /
                (interview.interviewItems.length * 10)) *
                100
            )
          : 0;

      logger.info(
        "MCQ interview completed",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          finalScore: interview.finalScore,
          totalQuestions:
            interview.interviewItems.length,
        }
      );

    } else {

      interview.interviewStatus =
        "in-progress";
    }

    // ----------------------------------------------------------
    // 15. Save interview
    // ----------------------------------------------------------

    await interview.save();

    // ----------------------------------------------------------
    // 16. Success log
    // ----------------------------------------------------------

    logger.info(
      "MCQ answer submitted successfully",
      {
        userId: req.user._id.toString(),
        interviewId: id,
        questionIndex: index,
        isCorrect,
        score: question.score,
        currentQuestion:
          interview.currentQuestion,
        interviewStatus:
          interview.interviewStatus,
      }
    );

    // ----------------------------------------------------------
    // 17. Response
    // ----------------------------------------------------------

    return res.status(200).json({
      success: true,

      message: isCorrect
        ? "Correct answer."
        : "Answer submitted.",

      isCorrect,

      score: question.score,

      currentQuestion:
        interview.currentQuestion,

      interviewStatus:
        interview.interviewStatus,

      finalScore:
        interview.finalScore,
    });
  }
);


export const evaluateInterview = catchAsyncError(
  async (req, res, next) => {

    // ----------------------------------------------------------
    // 1. Authentication
    // ----------------------------------------------------------

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to evaluate interview"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const { id } = req.params;

    logger.info(
      "Interview evaluation started",
      {
        userId: req.user._id.toString(),
        interviewId: id,
      }
    );

    // ----------------------------------------------------------
    // 2. Find interview
    // ----------------------------------------------------------

    const interview =
      await Interview.findById(id);

    if (!interview) {

      logger.warn(
        "Interview not found during evaluation",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Interview not found.",
          404
        )
      );
    }

    // ----------------------------------------------------------
    // 3. Ownership
    // ----------------------------------------------------------

    if (
      interview.user.toString() !==
      req.user._id.toString()
    ) {

      logger.warn(
        "Unauthorized interview evaluation attempt",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      return next(
        new ErrorHandler(
          "You are not authorized to evaluate this interview.",
          403
        )
      );
    }

    // ----------------------------------------------------------
    // 4. Check questions
    // ----------------------------------------------------------

    if (
      !interview.interviewItems ||
      interview.interviewItems.length === 0
    ) {

      logger.warn(
        "Evaluation attempted without interview questions",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      return next(
        new ErrorHandler(
          "No interview questions found.",
          400
        )
      );
    }

    // ----------------------------------------------------------
    // 5. Check answers
    // ----------------------------------------------------------

    const hasEmptyAnswer =
      interview.interviewItems.some(
        (item) =>
          !item.userAnswer ||
          !item.userAnswer.trim()
      );

    if (hasEmptyAnswer) {

      logger.warn(
        "Interview evaluation attempted with unanswered questions",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          totalQuestions:
            interview.interviewItems.length,
        }
      );

      return next(
        new ErrorHandler(
          "Please answer all questions first.",
          400
        )
      );
    }

    // ==========================================================
    // MCQ
    // ==========================================================

    if (interview.questionType === "mcq") {

      logger.info(
        "Starting MCQ interview evaluation",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          totalQuestions:
            interview.interviewItems.length,
        }
      );

      let correctCount = 0;

      interview.interviewItems.forEach(
        (item) => {

          const isCorrect =
            item.userAnswer.trim() ===
            (item.correctAnswer || "").trim();

          item.isCorrect =
            isCorrect;

          item.score =
            isCorrect ? 10 : 0;

          item.feedback =
            isCorrect
              ? "Correct answer."
              : "Incorrect answer.";

          if (isCorrect) {
            correctCount++;
          }
        }
      );

      const totalQuestions =
        interview.interviewItems.length;

      interview.finalScore =
        totalQuestions > 0
          ? Math.round(
              (correctCount /
                totalQuestions) *
                100
            )
          : 0;

      interview.interviewStatus =
        "completed";

      await interview.save();

      logger.info(
        "MCQ interview evaluated successfully",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          correctAnswers: correctCount,
          totalQuestions,
          finalScore:
            interview.finalScore,
        }
      );

      return res.status(200).json({
        success: true,

        message:
          "MCQ interview evaluated successfully.",

        finalScore:
          interview.finalScore,

        correctAnswers:
          correctCount,

        totalQuestions,

        interview,
      });
    }

    // ==========================================================
    // DESCRIPTIVE
    // ==========================================================

    if (
      interview.questionType ===
      "descriptive"
    ) {

      logger.info(
        "Starting AI evaluation for descriptive interview",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          totalQuestions:
            interview.interviewItems.length,
        }
      );

      const interviewData = {
        role:
          interview.role,

        company:
          interview.company || "",

        interviewType:
          interview.interviewType,

        questionType:
          interview.questionType,

        experience:
          interview.experience,

        techStack:
          interview.techStack,

        duration:
          interview.duration,

        questions:
          interview.interviewItems.map(
            (item, index) => ({
              questionNumber:
                index + 1,

              question:
                item.question,

              userAnswer:
                item.userAnswer,

              correctAnswer:
                item.correctAnswer || "",

              category:
                item.category || "",

              difficulty:
                item.difficulty ||
                "Medium",

              score:
                item.score || 0,

              timeTaken:
                item.timeTaken || 0,

              feedback:
                item.feedback || "",
            })
          ),
      };

      // --------------------------------------------------------
      // AI evaluation
      // --------------------------------------------------------

      const aiStartTime =
        Date.now();

      const aiReport =
        await evaluateInterviewAnswer(
          interviewData
        );

      const aiDuration =
        Date.now() - aiStartTime;

      if (!aiReport) {

        logger.error(
          "AI interview evaluation failed",
          {
            userId: req.user._id.toString(),
            interviewId: id,
            durationMs: aiDuration,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to evaluate interview.",
            500
          )
        );
      }

      logger.info(
        "AI interview evaluation completed",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          durationMs: aiDuration,
        }
      );

      // --------------------------------------------------------
      // Save individual question results
      // --------------------------------------------------------

      if (
        Array.isArray(aiReport.scores)
      ) {

        interview.interviewItems.forEach(
          (item, index) => {

            item.score =
              Number(
                aiReport.scores[index]
              ) || 0;

            if (
              Array.isArray(
                aiReport.feedback
              )
            ) {

              item.feedback =
                aiReport.feedback[index] ||
                "";
            }
          }
        );
      }

      // --------------------------------------------------------
      // Save AI report
      // --------------------------------------------------------

      interview.aiReport =
        aiReport;

      // --------------------------------------------------------
      // Update final score
      // --------------------------------------------------------

      interview.finalScore =
        Number(
          aiReport.overallScore ??
          aiReport.finalScore ??
          0
        );

      interview.interviewStatus =
        "completed";

      // --------------------------------------------------------
      // Save interview
      // --------------------------------------------------------

      await interview.save();

      logger.info(
        "Descriptive interview evaluated successfully",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          finalScore:
            interview.finalScore,
        }
      );

      // --------------------------------------------------------
      // Response
      // --------------------------------------------------------

      return res.status(200).json({
        success: true,

        message:
          "Interview evaluated successfully.",

        finalScore:
          interview.finalScore,

        aiReport:
          interview.aiReport,

        interview,
      });
    }

    // ----------------------------------------------------------
    // Invalid question type
    // ----------------------------------------------------------

    logger.warn(
      "Invalid question type during interview evaluation",
      {
        userId: req.user._id.toString(),
        interviewId: id,
        questionType:
          interview.questionType,
      }
    );

    return next(
      new ErrorHandler(
        "Invalid question type.",
        400
      )
    );
  }
);


export const generateInterviewReport =
catchAsyncError(
    async (req, res, next) => {

      // --------------------------------------------------------
      // 1. Authentication
      // --------------------------------------------------------

      if (!req.user || !req.user._id) {

        logger.warn(
          "Unauthorized request to generate interview report"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const { id } = req.params;

      if (!id) {

        logger.warn(
          "Interview report generation requested without interview ID",
          {
            userId: req.user._id.toString(),
          }
        );

        return next(
          new ErrorHandler(
            "Interview ID is required.",
            400
          )
        );
      }

      logger.info(
        "Interview report generation started",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      // --------------------------------------------------------
      // 2. Find interview
      // --------------------------------------------------------

      const interview =
        await Interview.findById(id);

      if (!interview) {

        logger.warn(
          "Interview not found while generating report",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Interview not found.",
            404
          )
        );
      }

      // --------------------------------------------------------
      // 3. Ownership
      // --------------------------------------------------------

      if (
        interview.user.toString() !==
        req.user._id.toString()
      ) {

        logger.warn(
          "Unauthorized attempt to generate interview report",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "You are not authorized to generate this report.",
            403
          )
        );
      }

      // --------------------------------------------------------
      // 4. Check completion
      // --------------------------------------------------------

      if (
        interview.interviewStatus !==
        "completed"
      ) {

        logger.warn(
          "Report generation attempted for incomplete interview",
          {
            userId: req.user._id.toString(),
            interviewId: id,
            interviewStatus:
              interview.interviewStatus,
          }
        );

        return next(
          new ErrorHandler(
            "Interview is not completed yet.",
            400
          )
        );
      }

      // --------------------------------------------------------
      // 5. Check questions
      // --------------------------------------------------------

      if (
        !interview.interviewItems ||
        interview.interviewItems.length === 0
      ) {

        logger.warn(
          "Cannot generate report because interview has no questions",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "No interview questions found.",
            400
          )
        );
      }

      // --------------------------------------------------------
      // 6. Check unanswered questions
      // --------------------------------------------------------

      const unansweredQuestion =
        interview.interviewItems.some(
          (item) =>
            !item.userAnswer ||
            !item.userAnswer.trim()
        );

      if (unansweredQuestion) {

        logger.warn(
          "Cannot generate report because some questions are unanswered",
          {
            userId: req.user._id.toString(),
            interviewId: id,
            totalQuestions:
              interview.interviewItems.length,
          }
        );

        return next(
          new ErrorHandler(
            "Please answer all interview questions first.",
            400
          )
        );
      }

      // --------------------------------------------------------
      // 7. Return existing report
      // --------------------------------------------------------

      if (
        interview.aiReport &&
        interview.aiReport.summary
      ) {

        logger.info(
          "Returning existing interview report",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return res.status(200).json({
          success: true,

          message:
            "Interview report already generated.",

          report:
            interview.aiReport,
        });
      }

      // --------------------------------------------------------
      // 8. Prepare AI data
      // --------------------------------------------------------

      const interviewData = {

        role:
          interview.role,

        company:
          interview.company || "",

        interviewType:
          interview.interviewType,

        questionType:
          interview.questionType,

        experience:
          interview.experience,

        techStack:
          interview.techStack,

        duration:
          interview.duration,

        questions:
          interview.interviewItems.map(
            (item, index) => ({

              questionNumber:
                index + 1,

              question:
                item.question,

              userAnswer:
                item.userAnswer,

              correctAnswer:
                item.correctAnswer || "",

              category:
                item.category || "",

              difficulty:
                item.difficulty ||
                "Medium",

              score:
                item.score || 0,

              timeTaken:
                item.timeTaken || 0,

              feedback:
                item.feedback || "",
            })
          ),
      };

      logger.info(
        "Interview data prepared for AI report generation",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          totalQuestions:
            interviewData.questions.length,
        }
      );

      // --------------------------------------------------------
      // 9. Generate AI report
      // --------------------------------------------------------

      const aiStartTime =
        Date.now();

      const aiReport =
        await evaluateInterviewWithAi(
          interviewData
        );

      const aiDuration =
        Date.now() - aiStartTime;

      if (!aiReport) {

        logger.error(
          "AI failed to generate interview report",
          {
            userId: req.user._id.toString(),
            interviewId: id,
            durationMs:
              aiDuration,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to generate interview report.",
            500
          )
        );
      }

      logger.info(
        "AI interview report generated successfully",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          durationMs:
            aiDuration,
          overallScore:
            aiReport.overallScore ??
            aiReport.finalScore ??
            0,
        }
      );

      // --------------------------------------------------------
      // 10. Save individual question feedback
      // --------------------------------------------------------

      if (
        Array.isArray(
          aiReport.scores
        )
      ) {

        interview.interviewItems.forEach(
          (item, index) => {

            item.score =
              Number(
                aiReport.scores[index]
              ) || 0;

            if (
              Array.isArray(
                aiReport.feedback
              )
            ) {

              item.feedback =
                aiReport.feedback[index] ||
                "";
            }
          }
        );
      }

      // --------------------------------------------------------
      // 11. Save report
      // --------------------------------------------------------

      interview.aiReport =
        aiReport;

      // --------------------------------------------------------
      // 12. Update final score
      // --------------------------------------------------------

      if (
        aiReport.overallScore !==
        undefined
      ) {

        interview.finalScore =
          Number(
            aiReport.overallScore
          ) || 0;

      } else if (
        aiReport.finalScore !==
        undefined
      ) {

        interview.finalScore =
          Number(
            aiReport.finalScore
          ) || 0;
      }

      await interview.save();

      logger.info(
        "Interview report saved successfully",
        {
          userId: req.user._id.toString(),
          interviewId: id,
          finalScore:
            interview.finalScore,
        }
      );

      // --------------------------------------------------------
      // 13. Response
      // --------------------------------------------------------

      return res.status(200).json({

        success: true,

        message:
          "Interview report generated successfully.",

        report:
          interview.aiReport,

        finalScore:
          interview.finalScore,
      });
    }
);


export const deleteInterview =
  catchAsyncError(
    async (req, res, next) => {

      // --------------------------------------------------------
      // 1. Authentication
      // --------------------------------------------------------

      if (!req.user || !req.user._id) {

        logger.warn(
          "Unauthorized request to delete interview"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const { id } = req.params;

      logger.info(
        "Interview deletion requested",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      // --------------------------------------------------------
      // 2. Find interview
      // --------------------------------------------------------

      const interview =
        await Interview.findById(id);

      if (!interview) {

        logger.warn(
          "Interview not found while deleting",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Interview not found.",
            404
          )
        );
      }

      // --------------------------------------------------------
      // 3. Ownership
      // --------------------------------------------------------

      if (
        interview.user.toString() !==
        req.user._id.toString()
      ) {

        logger.warn(
          "Unauthorized attempt to delete interview",
          {
            userId: req.user._id.toString(),
            interviewId: id,
          }
        );

        return next(
          new ErrorHandler(
            "You are not authorized to delete this interview.",
            403
          )
        );
      }

      // --------------------------------------------------------
      // 4. Delete
      // --------------------------------------------------------

      await interview.deleteOne();

      // --------------------------------------------------------
      // 5. Log success
      // --------------------------------------------------------

      logger.info(
        "Interview deleted successfully",
        {
          userId: req.user._id.toString(),
          interviewId: id,
        }
      );

      // --------------------------------------------------------
      // 6. Response
      // --------------------------------------------------------

      return res.status(200).json({
        success: true,

        message:
          "Interview deleted successfully.",
      });
    }
  );


export const getUserInterviews =
  catchAsyncError(
    async (req, res, next) => {

      // --------------------------------------------------------
      // 1. Authentication
      // --------------------------------------------------------

      if (!req.user || !req.user._id) {

        logger.warn(
          "Unauthorized request to fetch user interviews"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const userId =
        req.user._id;

      logger.info(
        "Fetching user interviews",
        {
          userId: userId.toString(),
        }
      );

      // --------------------------------------------------------
      // 2. Find interviews
      // --------------------------------------------------------

      const interviews =
        await Interview.find({
          user: userId,
        }).sort({
          createdAt: -1,
        });

      // --------------------------------------------------------
      // 3. No interviews
      // --------------------------------------------------------

      if (interviews.length === 0) {

        logger.info(
          "No interviews found for user",
          {
            userId: userId.toString(),
          }
        );

        return next(
          new ErrorHandler(
            "No interview found.",
            404
          )
        );
      }

      // --------------------------------------------------------
      // 4. Log successful fetch
      // --------------------------------------------------------

      logger.info(
        "User interviews fetched successfully",
        {
          userId: userId.toString(),
          interviewCount:
            interviews.length,
        }
      );

      // --------------------------------------------------------
      // 5. Response
      // --------------------------------------------------------

      return res.status(200).json({
        success: true,

        message:
          "User's interviews fetched successfully.",

        interviews,
      });
    }
  );


  export const getInterviewReport = catchAsyncError(async (req, res, next) => {

  // =========================================
  // 1. AUTHENTICATION
  // =========================================

  if (!req.user || !req.user._id) {

    logger.warn(
      "Unauthorized interview report request"
    );

    return next(
      new ErrorHandler(
        "Unauthorized access.",
        401
      )
    );
  }

  const userId = req.user._id.toString();
  const { id } = req.params;

  logger.info(
    "Interview report request started",
    {
      userId,
      interviewId: id,
    }
  );


  // =========================================
  // 2. FIND INTERVIEW + CHECK OWNERSHIP
  // =========================================

  const interview = await Interview.findOne({
    _id: id,
    user: userId,
  });

  if (!interview) {

    logger.warn(
      "Interview not found or unauthorized report attempt",
      {
        userId,
        interviewId: id,
      }
    );

    return next(
      new ErrorHandler(
        "Interview not found.",
        404
      )
    );
  }


  // =========================================
  // 3. CHECK INTERVIEW STATUS
  // =========================================

  if (interview.interviewStatus !== "completed") {

    logger.warn(
      "Interview report requested before completion",
      {
        userId,
        interviewId: id,
        status: interview.interviewStatus,
      }
    );

    return next(
      new ErrorHandler(
        "Interview is not completed yet.",
        400
      )
    );
  }


  // =========================================
  // 4. CHECK REPORT EXISTS
  // =========================================

  if (!interview.aiReport) {

    logger.warn(
      "Interview report not found",
      {
        userId,
        interviewId: id,
      }
    );

    return next(
      new ErrorHandler(
        "Interview report is not available.",
        404
      )
    );
  }


  // =========================================
  // 5. RETURN REPORT
  // =========================================

  logger.info(
    "Interview report fetched successfully",
    {
      userId,
      interviewId: id,
    }
  );

  return res.status(200).json({

    success: true,

    message: "Interview report fetched successfully.",

    report: interview.aiReport,

    finalScore: interview.finalScore,

    interviewStatus: interview.interviewStatus,

    interviewId: interview._id,

  });

});