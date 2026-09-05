import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import Resume from "../models/resumeModel.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { buildResumeTemplate } from "../utils/resumeTemplate.js";
import { generatePdfFromHtml } from "../utils/pdfService.js";
import { classicTemplate } from "../utils/templates/classicTemplate.js";
import { modernTemplate } from "../utils/templates/modernTemplate.js";
import { minimalTemplate } from "../utils/templates/minimalTemplate.js";
import cloudinary from "../config/cloudinary.js";
import { convertResumeToText } from "../utils/resumeToText.js";
import { aiSuggestions, aiCorrectResume, analyzeResumeWithAi  } from "../services/ai/resumeAi.js";
import { checkAICredits, deductAICredits } from "../services/ai/creditServiceAi.js";

import logger from "../utils/logger.js";


export const createResume = catchAsyncError(
  async (req, res, next) => {

    if (!req.user || !req.user._id) {
      logger.warn("Unauthorized resume creation attempt");

      return next(
        new ErrorHandler("User not logged in", 401)
      );
    }

    const userId = req.user._id.toString();

    logger.info("Resume creation started", {
      userId,
    });

    // ... your existing code ...

    const resume = await Resume.create({
      user: userId,
      resumeTitle,
      fullName,
      email,
      phone,
      location,
      linkedin,
      github,
      jobRole,
      experience,
      summary,
      skills: parsedSkills,
      education: parsedEducation,
      projects: parsedProjects,
      workExperience: parsedWorkExperience,
      achievements: parsedAchievements,
    });

    logger.info("Resume created successfully", {
      userId,
      resumeId: resume._id.toString(),
    });

    return res.status(201).json({
      success: true,
      message: "Resume created successfully",
      resume,
    });
  }
);


export const getPublicResume = catchAsyncError(
  async (req, res, next) => {

    const { username } = req.params;

    logger.info("Public resume requested", {
      username,
    });

    const resume = await Resume.findOne({ username });

    if (!resume) {
      logger.warn("Public resume not found", {
        username,
      });

      return next(
        new ErrorHandler(
          "Resume not found...",
          404
        )
      );
    }

    let html;

    if (resume.resumeTemplate === "modern") {
      html = modernTemplate(resume);
    } else if (resume.resumeTemplate === "classic") {
      html = classicTemplate(resume);
    } else {
      html = minimalTemplate(resume);
    }

    resume.views = (resume.views || 0) + 1;
    resume.lastViewed = new Date();

    await resume.save();

    logger.info("Public resume viewed successfully", {
      username,
      resumeId: resume._id.toString(),
    });

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  }
);


export const generateResumePdf = catchAsyncError(
  async (req, res, next) => {

    const { id } = req.params;

    if (!id) {
      logger.warn("Resume PDF generation: missing resume ID");

      return next(
        new ErrorHandler(
          "Resume ID is required.",
          400
        )
      );
    }

    if (!req.user?.id) {
      logger.warn(
        "Resume PDF generation: unauthenticated request"
      );

      return next(
        new ErrorHandler(
          "User is not authenticated.",
          401
        )
      );
    }

    const userId = req.user.id.toString();

    logger.info("Resume PDF generation started", {
      userId,
      resumeId: id,
    });

    // =========================================
    // FIND RESUME
    // =========================================

    const resume = await Resume.findOne({
      _id: id,
      user: userId,
    }).lean();

    if (!resume) {

      logger.warn("Resume not found for PDF generation", {
        userId,
        resumeId: id,
      });

      return next(
        new ErrorHandler(
          "Resume not found or you are not authorized to access this resume.",
          404
        )
      );
    }

    logger.info("Resume found for PDF generation", {
      userId,
      resumeId: id,
      template: resume.resumeTemplate,
    });

    // =========================================
    // GENERATE HTML
    // =========================================

    let html;

    try {

      logger.info("Resume HTML generation started", {
        userId,
        resumeId: id,
      });

      if (resume.resumeTemplate === "modern") {
        html = modernTemplate(resume);
      } else if (resume.resumeTemplate === "minimal") {
        html = minimalTemplate(resume);
      } else {
        html = classicTemplate(resume);
      }

      logger.info("Resume HTML generated successfully", {
        userId,
        resumeId: id,
        htmlLength: html?.length,
      });

    } catch (error) {

      logger.error("Resume HTML generation failed", {
        userId,
        resumeId: id,
        error: error.message,
        stack: error.stack,
      });

      return next(
        new ErrorHandler(
          "Failed to generate resume HTML.",
          500
        )
      );
    }

    if (!html || typeof html !== "string") {

      logger.error(
        "Resume template returned invalid HTML",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume template did not generate valid HTML.",
          500
        )
      );
    }

    // =========================================
    // GENERATE PDF
    // =========================================

    let filePath;

    try {

      logger.info("Resume PDF generation started", {
        userId,
        resumeId: id,
      });

      filePath = await generatePdfFromHtml(html);

      logger.info("Resume PDF generated successfully", {
        userId,
        resumeId: id,
      });

    } catch (error) {

      logger.error("Resume PDF generation failed", {
        userId,
        resumeId: id,
        error: error.message,
        stack: error.stack,
      });

      return next(
        new ErrorHandler(
          "PDF generation failed.",
          500
        )
      );
    }

    if (!filePath) {

      logger.error("PDF file path is empty", {
        userId,
        resumeId: id,
      });

      return next(
        new ErrorHandler(
          "Failed to generate PDF file.",
          500
        )
      );
    }

    // =========================================
    // UPDATE DATABASE
    // =========================================

    const newDownloadCount =
      (resume.downloadCount || 0) + 1;

    try {

      await Resume.findByIdAndUpdate(
        resume._id,
        {
          generatedPdfUrl: filePath,
          generatedAt: new Date(),
          downloadCount: newDownloadCount,
        },
        {
          new: true,
        }
      );

      logger.info(
        "Resume PDF information saved to database",
        {
          userId,
          resumeId: id,
          downloadCount: newDownloadCount,
        }
      );

    } catch (error) {

      logger.error(
        "Failed to update resume after PDF generation",
        {
          userId,
          resumeId: id,
          error: error.message,
          stack: error.stack,
        }
      );

      return next(
        new ErrorHandler(
          "Failed to update resume.",
          500
        )
      );
    }

    // =========================================
    // DOWNLOAD
    // =========================================

    logger.info("Sending resume PDF to user", {
      userId,
      resumeId: id,
    });

    return res.download(
      filePath,
      "resume.pdf",
      (error) => {

        if (error) {

          logger.error(
            "Resume PDF download failed",
            {
              userId,
              resumeId: id,
              error: error.message,
              stack: error.stack,
            }
          );

          if (!res.headersSent) {
            return next(
              new ErrorHandler(
                "Failed to download generated PDF.",
                500
              )
            );
          }

          return;
        }

        logger.info(
          "Resume PDF downloaded successfully",
          {
            userId,
            resumeId: id,
          }
        );
      }
    );
  }
);


export const changeTemplate = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to change resume template"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    const { id } = req.params;
    const { template } = req.body;

    logger.info(
      "Resume template change request started",
      {
        userId,
        resumeId: id,
        template,
      }
    );

    // =========================================
    // 2. FIND RESUME
    // =========================================

    const resume =
      await Resume.findOne({
        _id: id,
        user: userId,
      });

    if (!resume) {

      logger.warn(
        "Resume not found or unauthorized template change",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 3. VALIDATE TEMPLATE
    // =========================================

    const allowedTemplates = [
      "classic",
      "modern",
      "minimal",
    ];

    if (
      !allowedTemplates.includes(template)
    ) {

      logger.warn(
        "Invalid resume template provided",
        {
          userId,
          resumeId: id,
          template,
        }
      );

      return next(
        new ErrorHandler(
          "Please provide a valid template.",
          400
        )
      );
    }

    // =========================================
    // 4. UPDATE TEMPLATE
    // =========================================

    resume.resumeTemplate =
      template;

    await resume.save();

    logger.info(
      "Resume template changed successfully",
      {
        userId,
        resumeId: id,
        template,
      }
    );

    // =========================================
    // 5. RESPONSE
    // =========================================

    return res.status(200).json({

      success: true,

      message:
        "Template changed successfully.",

      resume,
    });
  }
);


export const getResume = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to fetch resume"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    const { id } = req.params;

    logger.info(
      "Resume fetch request started",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 2. FIND RESUME
    // =========================================

    const resume =
      await Resume.findOne({
        _id: id,
        user: userId,
      });

    if (!resume) {

      logger.warn(
        "Resume not found",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 3. RESPONSE
    // =========================================

    logger.info(
      "Resume fetched successfully",
      {
        userId,
        resumeId: id,
      }
    );

    return res.status(200).json({

      success: true,

      message:
        "Resume fetched successfully",

      resume,
    });
  }
);


export const updateResume = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to update resume"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    const { id } = req.params;

    logger.info(
      "Resume update request started",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 2. FIND RESUME
    // =========================================

    const resume =
      await Resume.findOne({
        _id: id,
        user: userId,
      });

    if (!resume) {

      logger.warn(
        "Resume not found or unauthorized update",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 3. UPDATE RESUME
    // =========================================

    const updatedResume =
      await Resume.findOneAndUpdate(
        {
          _id: id,
          user: userId,
        },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    // =========================================
    // 4. RESPONSE
    // =========================================

    logger.info(
      "Resume updated successfully",
      {
        userId,
        resumeId: id,
      }
    );

    return res.status(200).json({

      success: true,

      message:
        "Resume updated successfully",

      resume:
        updatedResume,
    });
  }
);


export const deleteResume = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to delete resume"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    const { id } = req.params;

    logger.info(
      "Resume deletion request started",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 2. FIND + DELETE USER'S RESUME
    // =========================================

    const deletedResume =
      await Resume.findOneAndDelete({
        _id: id,
        user: userId,
      });

    if (!deletedResume) {

      logger.warn(
        "Resume not found for deletion",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 3. SUCCESS
    // =========================================

    logger.info(
      "Resume deleted successfully",
      {
        userId,
        resumeId: id,
      }
    );

    return res.status(200).json({

      success: true,

      message:
        "Resume deleted successfully.",

      resume:
        deletedResume,
    });
  }
);


export const previewResume = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to preview resume"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    logger.info(
      "Resume preview request started",
      {
        userId,
      }
    );

    // =========================================
    // 2. FIND RESUME
    // =========================================

    const resume =
      await Resume.findOne({
        user: userId,
      });

    if (!resume) {

      logger.warn(
        "Resume not found for preview",
        {
          userId,
        }
      );

      return next(
        new ErrorHandler(
          "Please create a resume before previewing.",
          404
        )
      );
    }

    // =========================================
    // 3. GENERATE HTML
    // =========================================

    const htmlTemplate =
      buildResumeTemplate(resume);

    logger.info(
      "Resume preview generated successfully",
      {
        userId,
        resumeId: resume._id,
      }
    );

    // =========================================
    // 4. SEND HTML
    // =========================================

    return res
      .status(200)
      .set("Content-Type", "text/html")
      .send(htmlTemplate);
  }
);


export const getAllResumes = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to fetch resumes"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    logger.info(
      "Fetching user's resumes",
      {
        userId,
      }
    );

    // =========================================
    // 2. FIND ALL RESUMES
    // =========================================

    const allResume =
      await Resume.find({
        user: userId,
      }).sort({
        createdAt: -1,
      });

    // =========================================
    // 3. CHECK EMPTY RESULT
    // =========================================

    if (allResume.length === 0) {

      logger.info(
        "No resumes found for user",
        {
          userId,
        }
      );

      return next(
        new ErrorHandler(
          "No resumes found.",
          404
        )
      );
    }

    // =========================================
    // 4. SUCCESS
    // =========================================

    logger.info(
      "User resumes fetched successfully",
      {
        userId,
        count: allResume.length,
      }
    );

    return res.status(200).json({

      success: true,

      message:
        "All resumes fetched successfully.",

      count:
        allResume.length,

      resumes:
        allResume,
    });
  }
);


export const resumeDashboard = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request for resume dashboard"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    logger.info(
      "Resume dashboard request started",
      {
        userId,
      }
    );

    // =========================================
    // 2. FIND USER RESUMES
    // =========================================

    const resumes =
      await Resume.find({
        user: userId,
      });

    // =========================================
    // 3. CALCULATE ANALYTICS
    // =========================================

    let totalViews = 0;
    let totalDownloads = 0;
    let lastViewed = null;

    for (const resume of resumes) {

      totalViews +=
        resume.views || 0;

      totalDownloads +=
        resume.downloads || 0;

      if (resume.lastViewed) {

        if (
          !lastViewed ||
          resume.lastViewed > lastViewed
        ) {
          lastViewed =
            resume.lastViewed;
        }
      }
    }

    const totalResumes =
      resumes.length;

    // =========================================
    // 4. LOG SUCCESS
    // =========================================

    logger.info(
      "Resume dashboard fetched successfully",
      {
        userId,
        totalResumes,
        totalViews,
        totalDownloads,
      }
    );

    // =========================================
    // 5. RESPONSE
    // =========================================

    return res.status(200).json({

      success: true,

      message:
        "Resume dashboard fetched successfully.",

      totalResumes,

      totalViews,

      totalDownloads,

      lastViewed,
    });
  }
);


export const fetchAnalyze = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. CHECK AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized request to fetch resume analysis"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access.",
          401
        )
      );
    }

    const userId =
      req.user._id.toString();

    const { id } =
      req.params;

    logger.info(
      "Resume analysis fetch started",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 2. FIND RESUME
    // =========================================

    const resume =
      await Resume.findById(id);

    if (!resume) {

      logger.warn(
        "Resume not found while fetching analysis",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 3. CHECK OWNERSHIP
    // =========================================

    if (
      resume.user.toString() !==
      userId
    ) {

      logger.warn(
        "Unauthorized resume analysis access attempt",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "You are not authorized to access this resume.",
          403
        )
      );
    }

    // =========================================
    // 4. GET ANALYSIS
    // =========================================

    const aiAnalysis =
      resume.aiAnalysis;

    const analyzedAt =
      resume.analyzedAt;

    logger.info(
      "Resume analysis fetched successfully",
      {
        userId,
        resumeId: id,
        analyzedAt,
      }
    );

    // =========================================
    // 5. RESPONSE
    // =========================================

    return res.status(200).json({

      success: true,

      message:
        "Resume analysis fetched successfully.",

      aiAnalysis,

      analyzedAt,
    });
  }
);


export const resumeCorrection =
catchAsyncError(
    async (req, res, next) => {

      // =========================================
      // 1. AUTHENTICATION
      // =========================================

      if (!req.user || !req.user._id) {

        logger.warn(
          "Unauthorized resume correction request"
        );

        return next(
          new ErrorHandler(
            "Unauthorized access.",
            401
          )
        );
      }

      const userId =
        req.user._id.toString();

      const { id } =
        req.params;

      const { jobDescription } =
        req.body;

      logger.info(
        "Resume correction request started",
        {
          userId,
          resumeId: id,
        }
      );

      // =========================================
      // 2. VALIDATE JOB DESCRIPTION
      // =========================================

      if (
        typeof jobDescription !== "string" ||
        !jobDescription.trim()
      ) {

        logger.warn(
          "Invalid job description for resume correction",
          {
            userId,
            resumeId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Job description is required.",
            400
          )
        );
      }

      // =========================================
      // 3. FIND RESUME
      // =========================================

      const resume =
        await Resume.findById(id);

      if (!resume) {

        logger.warn(
          "Resume not found for correction",
          {
            userId,
            resumeId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Resume not found.",
            404
          )
        );
      }

      // =========================================
      // 4. OWNERSHIP
      // =========================================

      if (
        resume.user.toString() !==
        userId
      ) {

        logger.warn(
          "Unauthorized resume correction attempt",
          {
            userId,
            resumeId: id,
          }
        );

        return next(
          new ErrorHandler(
            "You are not authorized to modify this resume.",
            403
          )
        );
      }

      // =========================================
      // 5. DUPLICATE REQUEST
      // =========================================

      if (
        resume.correctionStatus ===
        "correcting"
      ) {

        logger.warn(
          "Resume correction already in progress",
          {
            userId,
            resumeId: id,
          }
        );

        return next(
          new ErrorHandler(
            "Resume correction is already in progress.",
            409
          )
        );
      }

      // =========================================
      // 6. CHECK CREDITS
      // =========================================

      await checkAICredits(
        req.user._id,
        "resumeCorrection"
      );

      // =========================================
      // 7. CONVERT RESUME
      // =========================================

      const resumeText =
        await convertResumeToText(
          resume
        );

      // =========================================
      // 8. MARK PROCESSING
      // =========================================

      resume.correctionStatus =
        "correcting";

      await resume.save();

      try {

        // =====================================
        // 9. AI CALL
        // =====================================

        const aiCorrection =
          await aiCorrectResume(
            resumeText,
            jobDescription.trim()
          );

        // =====================================
        // 10. DEDUCT CREDITS
        // =====================================

        const creditResult =
          await deductAICredits(
            req.user._id,
            "resumeCorrection"
          );

        // =====================================
        // 11. SAVE RESULT
        // =====================================

        resume.correctResume =
          JSON.stringify(
            aiCorrection
          );

        resume.correctionStatus =
          "completed";

        await resume.save();

        logger.info(
          "Resume correction completed successfully",
          {
            userId,
            resumeId: id,
          }
        );

        // =====================================
        // 12. RESPONSE
        // =====================================

        return res.status(200).json({

          success: true,

          message:
            "Resume corrected successfully.",

          correctResume:
            aiCorrection,

          remainingCredits:
            creditResult.remainingCredits,
        });

      } catch (error) {

        resume.correctionStatus =
          "failed";

        await resume.save();

        logger.error(
          "Resume correction AI failed",
          {
            userId,
            resumeId: id,
            error: error.message,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to correct resume.",
            500
          )
        );
      }
    }
);
       

export const resumeAnalyze = catchAsyncError(async (req, res, next) => {

    if(!req.user || !req.user._id) {
       logger.warn(
        "Unthorized resume analysis request"
       );

      return next(new ErrorHandler(
        "Unauthorized access", 401
    ))
   }


   const userId = req.user._id.toString();

   const {id} = req.params;

   logger.info(
     "Resume analysis request started",
     {
       userId,
       resumeId: id,
     }
   );

   



})


export const resumeSuggestions = catchAsyncError(
  async (req, res, next) => {

    // =========================================
    // 1. AUTHENTICATION
    // =========================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized resume suggestions request"
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

    const { jobDescription } = req.body;

    logger.info(
      "Resume suggestions request started",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 2. VALIDATE JOB DESCRIPTION
    // =========================================

    if (
      typeof jobDescription !== "string" ||
      !jobDescription.trim()
    ) {

      logger.warn(
        "Invalid job description for resume suggestions",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Job description is required.",
          400
        )
      );
    }

    if (jobDescription.trim().length > 15000) {

      logger.warn(
        "Job description too long for resume suggestions",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Job description is too long.",
          400
        )
      );
    }

    // =========================================
    // 3. FIND RESUME + CHECK OWNERSHIP
    // =========================================

    const resume = await Resume.findOne({
      _id: id,
      user: userId,
    });

    if (!resume) {

      logger.warn(
        "Resume not found or unauthorized suggestions attempt",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Resume not found.",
          404
        )
      );
    }

    // =========================================
    // 4. CHECK AI CREDITS
    // =========================================

    await checkAICredits(
      req.user._id,
      "resumeSuggestions"
    );

    logger.info(
      "AI credits available for resume suggestions",
      {
        userId,
        resumeId: id,
      }
    );

    // =========================================
    // 5. CONVERT RESUME TO TEXT
    // =========================================

    let resumeText;

    try {

      resumeText =
        await convertResumeToText(resume);

    } catch (error) {

      logger.error(
        "Failed to convert resume to text for suggestions",
        {
          userId,
          resumeId: id,
          error: error.message,
        }
      );

      return next(
        new ErrorHandler(
          "Failed to process resume.",
          500
        )
      );
    }

    // =========================================
    // 6. VALIDATE RESUME TEXT
    // =========================================

    if (
      typeof resumeText !== "string" ||
      !resumeText.trim()
    ) {

      logger.warn(
        "Resume text is empty for suggestions",
        {
          userId,
          resumeId: id,
        }
      );

      return next(
        new ErrorHandler(
          "Unable to extract text from resume.",
          400
        )
      );
    }

    // =========================================
    // 7. AI SUGGESTIONS
    // =========================================

    try {

      logger.info(
        "Calling AI for resume suggestions",
        {
          userId,
          resumeId: id,
        }
      );

      const suggestions =
        await aiSuggestions(
          resumeText,
          jobDescription.trim()
        );

      // =========================================
      // 8. DEDUCT AI CREDITS
      // =========================================

      const creditResult =
        await deductAICredits(
          req.user._id,
          "resumeSuggestions"
        );

      // =========================================
      // 9. RESPONSE
      // =========================================

      logger.info(
        "Resume suggestions generated successfully",
        {
          userId,
          resumeId: id,
        }
      );

      return res.status(200).json({

        success: true,

        message:
          "Resume suggestions generated successfully.",

        suggestions,

        remainingCredits:
          creditResult.remainingCredits,
      });

    } catch (error) {

      logger.error(
        "Resume suggestions AI failed",
        {
          userId,
          resumeId: id,
          error: error.message,
        }
      );

      return next(
        new ErrorHandler(
          "Failed to generate resume suggestions.",
          500
        )
      );
    }
  }
);