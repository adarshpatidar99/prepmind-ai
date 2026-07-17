import Interview from "../models/interviewModel.js";
import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { evaluateInterviewWithAi, generateMcqWithAi, generateQuestionsWithAi } from "../services/interviewAiServide.js";
import { analyzeIndustry } from "../services/industryAiService.js";


export const startInterview = catchAsyncError(async (req, res, next) => {

  const userId = req.user._id;

  const { selectRole, techStack, experience, interviewType, duration } = req.body;

  // ✅ 1. Basic validation
  if (!selectRole || !techStack || !experience || !interviewType) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  // ✅ 2. Validate interview type
  if (!["mcq", "descriptive"].includes(interviewType)) {
    return next(new ErrorHandler("Invalid interview type", 400));
  }

  // ✅ 3. Create interview
  const interview = await Interview.create({
    user: userId,
    selectRole,
    techStack,
    experience,
    interviewType,
    duration: duration || 30,

    // 🔥 Important defaults      
    interviewItems: [],
    finalScore: 0,
    aiSummary: "",

    interviewStatus: "started"   // better flow: pending → in-progress → completed
  });

  return res.status(201).json({
    success: true,
    message: "Interview created successfully",
    interviewId: interview._id
  });

});                                                                            


export const generateQuestions = catchAsyncError(async (req, res, next) => {

  const { noOfQuestions } = req.body;
  const { id } = req.params;

  const interview = await Interview.findById(id);

  if (!interview) {
    return next(new ErrorHandler("Interview not found...", 404));
  }

  if (interview.user.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("Unauthorized", 403));
  }

  if (!noOfQuestions) {
    return next(new ErrorHandler("Number of questions is required", 400));
  }

  const { selectRole, techStack, experience, interviewType } = interview;

  let questions = [];

  // 🔥 MCQ
  if (interviewType === "mcq") {

    const mcqQuestions = await generateMcqWithAi(
      selectRole,
      experience,
      techStack,
      noOfQuestions
    );

    if (!Array.isArray(mcqQuestions) || mcqQuestions.length === 0) {
      return next(new ErrorHandler("Failed to generate MCQ questions", 500));
    }

    questions = mcqQuestions.map(q => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.answer,
      userAnswer: "",
      score: 0,
      feedback: ""
    }));

  } 
  // 🔥 DESCRIPTIVE
  else {
                               
    const questionsArray = await generateQuestionsWithAi(
      selectRole,
      techStack,
      experience,
      noOfQuestions
    );

    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
      return next(new ErrorHandler("Failed to generate questions", 500));
    }

    questions = questionsArray.map(q => ({
      question: q.trim(),
      userAnswer: "",
      score: 0,
      feedback: ""
    }));
  }

  interview.interviewItems = questions;
  interview.interviewStatus = "in-progress";

  await interview.save();

  return res.status(200).json({
    success: true,
    message: "Questions generated successfully",
    interview
  });

});


export const submitAnswer = catchAsyncError(async (req, res, next) => {
                                
  const { id } = req.params;  
  const { questionIndex, userAnswer } = req.body;
  
  const interview = await Interview.findById(id);

  if (!interview) {
    return next(new ErrorHandler("Interview not found...", 404));
  }
  
  if (interview.user.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("Unauthorized", 403));
  }

  if (
    questionIndex < 0 ||
    questionIndex >= interview.interviewItems.length
  ) {
    return next(new ErrorHandler("Invalid question index", 400));
  }

  const item = interview.interviewItems[questionIndex];

  // ✅ Prevent overwrite (optional)
  if (item.userAnswer) {
    return next(new ErrorHandler("Answer already submitted", 400));
  }

  // ✅ Common field for both types
  item.userAnswer = userAnswer;

  await interview.save();

  return res.status(200).json({
    success: true,
    message: "Answer submitted successfully"
  });

});


export const evaluateInterview = catchAsyncError (async (req, res, next) => {
  
     const {id} = req.params;

     const interview = await Interview.findById(id);

     if(!interview) {
      return next (new ErrorHandler("interview not found...", 404));
     };

     if(interview.user.toString() !== req.user._id.toString()) {
        return next(new ErrorHandler("unauthorized", 403));
     }

     if(interview.interviewStatus ==="completed") {
         return next (new ErrorHandler("Interview already evaluated...", 400));
     }                    

     const hasEmptyAnswer = interview.interviewItems.some(item => !item.userAnswer);
     
     if(hasEmptyAnswer) {
       return next(new ErrorHandler("Please give answer of all questions first...", 400));
     }
     
     if(interview.interviewType == "mcq") {
        let score = 0;

        if(interview.interviewItems.forEach(item => {
          if(item.userAnswer === item.correctAnswer) {
             item.score = 1;
             item.feedback = "Correct",
             score++;
          }else {
             item.score = 0;
             item.feedback = "Incorrect"
          }
        }));

        interview.finalScore = score;
        interview.aiSummary = `you scored ${score} out of ${interview.interviewItems.length}`

     } else {
        
        const qText = interview.interviewItems.map((item, index) => 
          `Q ${index + 1} : ${item.question} \n A${index + 1}: ${item.userAnswer}`
        ).join("\n");

        const result = await evaluateInterviewWithAi(qText);

        interview.interviewItems.forEach((item, index) => {
            item.score = result.scores[index],
            item.feedback = result.feedback[index];
        })

        interview.finalScore = result.finalScore;
        interview.aiSummary = result.summary; 

     }

     interview.interviewStatus = "completed";

     await interview.save();
   
     res.status(200).json({
      success: true,
      message: "Interview evaluate Successfully...",
      interview 
     })

});



export const getInterviewReport = catchAsyncError(async (req, res, next) => {
  
  const { id } = req.params;

  const interview = await Interview.findById(id);

  if (!interview) {
    return next(new ErrorHandler("Interview not found...", 404));
  }

  if (interview.user.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("Unauthorized", 403));
  }

  // ✅ Check BEFORE generating report
  if (interview.interviewStatus !== "completed") {
    return next(new ErrorHandler("Interview not completed yet", 400));
  }

  const report = {
    role: interview.selectRole,
    techStack: interview.techStack,
    experience: interview.experience,
    interviewType: interview.interviewType,
    duration: interview.duration,
    status: interview.interviewStatus,
    finalScore: interview.finalScore,
    summary: interview.aiSummary,

    questionsAndAnswers: interview.interviewItems.map((item, index) => ({
      questionNumber: index + 1,
      question: item.question,
      options: item.options || [],  
      correctAnswer: item.correctAnswer,
      userAnswer: item.userAnswer,        // ✅ correct field
      score: item.score,
      feedback: item.feedback,
    }))
  };

  return res.status(200).json({
    success: true,
    message: "Report generated successfully",
    report
  });

});



export const deleteInterview = catchAsyncError(async (req, res, next) => {
  
     const {id} = req.params;

     const interview = await Interview.findById(id);

     if(!interview) {
       return next(new ErrorHandler("Interview not found...", 404));
     }

     if(interview.user.toString() !== req.user._id.toString()) {
       return next (new ErrorHandler("user is not authorized...", 403));
     }

     await interview.deleteOne();

     return res.status(200).json({
      success: true,
      message: "Interview Deleted Successfully...",
      interview
     })

});



export const getUserInterviews = catchAsyncError(async (req, res, next) => {
   
     const userId = req.user._id;
    
     const interviews = await Interview.find({ user: userId });

     if(!interviews) {
       return next(new ErrorHandler("Interviews not found...", 404));
     }                               

     if(interviews.length === 0) {
        return next(new ErrorHandler("No interview found...", 404));
     }

     return res.status(200).json({
      success: true,
      message: "user's interview fetched successfully",
      interviews
     })

})




export const getIndustryInsight = catchAsyncError(async (req, res, next) => {

   const {selectRole, experience} = req.body;

   if(!selectRole){
       return next(new ErrorHandler("Please give role and experience...", 400));
   }
                          
   const insights = await analyzeIndustry(selectRole, experience);
   
   return res.status(200).json({
      success: true,
      insights
   })
   
})