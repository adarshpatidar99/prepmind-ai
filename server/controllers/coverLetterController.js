import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import CoverLetter from "../models/coverLetterModel.js";
import logger from "../utils/logger.js";


export const createCoverLetter = catchAsyncError(
  async (req, res, next) => {

    const {
      fullName,
      email,
      phone,
      location,
      linkedinUrl,
      github,

      jobRole,
      professionalSummary,

      skills,
      projects,
      experiences,
      achievements,

      jobTitle,
      company,
      companyName,
      jobLocation,
      hiringManagerName,
      jobDescription,

      whyThisRole,
      whyThisCompany,
      coverLetterContent,

      resumeId,
    } = req.body;


    if (
      typeof jobTitle !== "string" ||
      !jobTitle.trim()
    ) {

      logger.warn("Cover letter creation failed", {
        userId: req.user?._id?.toString(),
        reason: "Job title is required",
      });

      return next(
        new ErrorHandler(
          "Job title is required",
          400
        )
      );
    }


    // =====================================================
    // SKILLS
    // =====================================================

    const formattedSkills =
      (skills || []).map((skill) => ({
        category: skill.category || "",

        items: Array.isArray(skill.items)
          ? skill.items
          : skill.items
          ? skill.items
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
      }));


    // =====================================================
    // PROJECTS
    // =====================================================

    const formattedProjects =
      (projects || []).map((project) => ({
        title: project.title || "",

        description:
          project.description || "",

        techStack: Array.isArray(
          project.techStack
        )
          ? project.techStack
          : project.techStack
          ? project.techStack
              .split(",")
              .map((tech) => tech.trim())
              .filter(Boolean)
          : [],

        startDate:
          project.startDate || "",

        endDate:
          project.endDate || "",

        link:
          project.link || "",
      }));


    // =====================================================
    // EXPERIENCES
    // =====================================================

    const formattedExperiences =
      (experiences || []).map(
        (experience) => ({
          company:
            experience.company || "",

          position:
            experience.position || "",

          startDate:
            experience.startDate || "",

          endDate:
            experience.endDate || "",

          desc:
            experience.desc || "",
        })
      );


    // =====================================================
    // ACHIEVEMENTS
    // =====================================================

    const formattedAchievements =
      Array.isArray(achievements)
        ? achievements.map(
            (achievement) => ({
              description:
                achievement.description || "",
            })
          )
        : achievements
        ? achievements
            .split("\n")
            .map(
              (achievement) =>
                achievement.trim()
            )
            .filter(Boolean)
            .map((description) => ({
              description,
            }))
        : [];


    // =====================================================
    // CREATE DATA
    // =====================================================

    const coverLetterData = {

      user: req.user._id,

      // Personal Information
      fullName: fullName || "",
      email: email || "",
      phone: phone || "",
      location: location || "",
      linkedinUrl: linkedinUrl || "",
      github: github || "",

      // Career Information
      jobRole: jobRole || "",

      professionalSummary:
        professionalSummary || "",

      skills: formattedSkills,

      projects: formattedProjects,

      experiences: formattedExperiences,

      achievements:
        formattedAchievements,

      // Job Information
      jobTitle:
        jobTitle.trim(),

      company:
        company ||
        companyName ||
        "",

      jobLocation:
        jobLocation || "",

      hiringManagerName:
        hiringManagerName || "",

      jobDescription:
        jobDescription || "",

      // AI Information
      whyThisRole:
        whyThisRole || "",

      whyThisCompany:
        whyThisCompany || "",

      coverLetterContent:
        coverLetterContent || "",
    };


    // =====================================================
    // RESUME ID
    // =====================================================

    if (resumeId) {
      coverLetterData.resumeId =
        resumeId;
    }


    // =====================================================
    // CREATE
    // =====================================================

    const coverLetter =
      await CoverLetter.create(
        coverLetterData
      );


    // =====================================================
    // LOG SUCCESS
    // =====================================================

    logger.info(
      "Cover letter created successfully",
      {
        userId:
          req.user._id.toString(),

        coverLetterId:
          coverLetter._id.toString(),

        resumeId:
          resumeId || null,
      }
    );


    // =====================================================
    // RESPONSE
    // =====================================================

    return res.status(201).json({
      success: true,

      message:
        "Cover letter created successfully",

      coverLetter,
    });
  }
);


export const getCoverLetter =
  catchAsyncError(
    async (req, res, next) => {

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized cover letter access",
          {
            route:
              "getCoverLetter",
          }
        );

        return next(
          new ErrorHandler(
            "Unauthorized access",
            401
          )
        );
      }


      const { id } =
        req.params;


      const coverLetter =
        await CoverLetter.findOne({
          _id: id,
          user: req.user._id,
        });


      if (!coverLetter) {

        logger.warn(
          "Cover letter not found",
          {
            userId:
              req.user._id.toString(),

            coverLetterId: id,
          }
        );

        return next(
          new ErrorHandler(
            "CoverLetter not found",
            404
          )
        );
      }


      logger.info(
        "Cover letter fetched successfully",
        {
          userId:
            req.user._id.toString(),

          coverLetterId:
            coverLetter._id.toString(),
        }
      );


      return res.status(200).json({
        success: true,

        message:
          "CoverLetter fetched successfully",

        coverLetter,
      });
    }
  );


export const getAllCoverLetter =
  catchAsyncError(
    async (req, res, next) => {

      const allCoverLetters =
        await CoverLetter.find({
          user: req.user._id,
        });


      logger.info(
        "All cover letters fetched",
        {
          userId:
            req.user._id.toString(),

          count:
            allCoverLetters.length,
        }
      );


      return res.status(200).json({
        success: true,

        message:
          "All Cover letters fetched successfully",

        allCoverLetters,
      });
    }
  );


export const deleteCoverLetter =
  catchAsyncError(
    async (req, res, next) => {

      const { id } =
        req.params;


      // IMPORTANT:
      // Delete only the specific cover letter
      // belonging to the logged-in user.

      const deletedCoverLetter =
        await CoverLetter.findOneAndDelete({
          _id: id,
          user: req.user._id,
        });


      if (!deletedCoverLetter) {

        logger.warn(
          "Cover letter deletion failed",
          {
            userId:
              req.user._id.toString(),

            coverLetterId: id,

            reason:
              "Cover letter not found",
          }
        );

        return next(
          new ErrorHandler(
            "Cover Letter not found",
            404
          )
        );
      }


      logger.info(
        "Cover letter deleted successfully",
        {
          userId:
            req.user._id.toString(),

          coverLetterId:
            deletedCoverLetter._id.toString(),
        }
      );


      return res.status(200).json({
        success: true,

        message:
          "Cover Letter deleted successfully",

        deleteCoverLetter:
          deletedCoverLetter,
      });
    }
  );


export const updateCoverLetter =
  catchAsyncError(
    async (req, res, next) => {

      if (
        !req.user ||
        !req.user._id
      ) {

        logger.warn(
          "Unauthorized cover letter update",
          {
            route:
              "updateCoverLetter",
          }
        );

        return next(
          new ErrorHandler(
            "Unauthorized access",
            401
          )
        );
      }


      const { id } =
        req.params;


      // =====================================================
      // CHECK EXISTENCE + OWNERSHIP
      // =====================================================

      const coverLetter =
        await CoverLetter.findOne({
          _id: id,
          user: req.user._id,
        });


      if (!coverLetter) {

        logger.warn(
          "Cover letter update failed",
          {
            userId:
              req.user._id.toString(),

            coverLetterId: id,

            reason:
              "Cover letter not found",
          }
        );

        return next(
          new ErrorHandler(
            "Cover letter not found",
            404
          )
        );
      }


      // =====================================================
      // UPDATE
      // =====================================================

      const updatedCoverLetter =
        await CoverLetter.findOneAndUpdate(
          {
            _id: id,
            user: req.user._id,
          },

          req.body,

          {
            returnDocument: "after",
            runValidators: true,
          }
        );


      // =====================================================
      // LOG SUCCESS
      // =====================================================

      logger.info(
        "Cover letter updated successfully",
        {
          userId:
            req.user._id.toString(),

          coverLetterId:
            updatedCoverLetter._id.toString(),
        }
      );


      // =====================================================
      // RESPONSE
      // =====================================================

      return res.status(200).json({
        success: true,

        message:
          "CoverLetter updated successfully",

        coverLetter:
          updatedCoverLetter,
      });
    }
  );



export const generateCoverLetterWithAI = catchAsyncError(
  async (req, res, next) => {

    // =====================================================
    // 1. AUTHENTICATION
    // =====================================================

    if (!req.user || !req.user._id) {

      logger.warn(
        "Unauthorized cover letter AI request"
      );

      return next(
        new ErrorHandler(
          "Unauthorized access",
          401
        )
      );
    }

    const userId = req.user._id.toString();

    const {
      resumeId,
      jobTitle,
      company,
      jobDescription,
    } = req.body;

    logger.info(
      "Cover letter AI generation started",
      {
        userId,
        resumeId: resumeId || null,
      }
    );


    // =====================================================
    // 2. VALIDATE INPUT
    // =====================================================

    if (
      typeof jobTitle !== "string" ||
      !jobTitle.trim()
    ) {

      logger.warn(
        "Cover letter AI generation failed",
        {
          userId,
          reason: "Job title is required",
        }
      );

      return next(
        new ErrorHandler(
          "Job title is required",
          400
        )
      );
    }


    if (
      typeof jobDescription !== "string" ||
      !jobDescription.trim()
    ) {

      logger.warn(
        "Cover letter AI generation failed",
        {
          userId,
          reason: "Job description is required",
        }
      );

      return next(
        new ErrorHandler(
          "Job description is required",
          400
        )
      );
    }


    if (jobTitle.trim().length > 200) {

      return next(
        new ErrorHandler(
          "Job title is too long",
          400
        )
      );
    }


    if (jobDescription.trim().length > 15000) {

      return next(
        new ErrorHandler(
          "Job description is too long",
          400
        )
      );
    }


    // =====================================================
    // 3. FIND RESUME
    // =====================================================

    let resume = null;

    if (resumeId) {

      resume = await Resume.findOne({
        _id: resumeId,
        user: userId,
      });

      if (!resume) {

        logger.warn(
          "Resume not found for cover letter AI",
          {
            userId,
            resumeId,
          }
        );

        return next(
          new ErrorHandler(
            "Resume not found",
            404
          )
        );
      }
    }


    // =====================================================
    // 4. CHECK AI CREDITS
    // =====================================================

    await checkAICredits(
      req.user._id,
      "coverLetter"
    );

    logger.info(
      "AI credits available for cover letter",
      {
        userId,
        resumeId: resumeId || null,
      }
    );


    // =====================================================
    // 5. PREPARE RESUME DATA
    // =====================================================

    let resumeText = "";

    if (resume) {

      try {

        resumeText =
          await convertResumeToText(resume);

      } catch (error) {

        logger.error(
          "Failed to convert resume for cover letter",
          {
            userId,
            resumeId,
            error: error.message,
          }
        );

        return next(
          new ErrorHandler(
            "Failed to process resume",
            500
          )
        );
      }


      if (
        typeof resumeText !== "string" ||
        !resumeText.trim()
      ) {

        logger.warn(
          "Resume text is empty for cover letter",
          {
            userId,
            resumeId,
          }
        );

        return next(
          new ErrorHandler(
            "Unable to extract resume information",
            400
          )
        );
      }
    }


    // =====================================================
    // 6. GENERATE COVER LETTER WITH AI
    // =====================================================

    try {

      logger.info(
        "Calling AI for cover letter generation",
        {
          userId,
          resumeId: resumeId || null,
        }
      );

      const coverLetter =
        await generateCoverLetterWithAi(
          resumeText,
          jobDescription.trim(),
          jobTitle.trim(),
          company?.trim() || ""
        );


      // ===================================================
      // 7. DEDUCT AI CREDITS
      // ===================================================

      const creditResult =
        await deductAICredits(
          req.user._id,
          "coverLetter"
        );


      // ===================================================
      // 8. RESPONSE
      // ===================================================

      logger.info(
        "Cover letter generated successfully",
        {
          userId,
          resumeId: resumeId || null,
        }
      );

      return res.status(200).json({

        success: true,

        message:
          "Cover letter generated successfully",

        coverLetter,

        remainingCredits:
          creditResult.remainingCredits,
      });

    } catch (error) {

      logger.error(
        "AI cover letter generation failed",
        {
          userId,
          resumeId: resumeId || null,
          error: error.message,
        }
      );

      return next(
        new ErrorHandler(
          "Failed to generate cover letter",
          500
        )
      );
    }
  }
);