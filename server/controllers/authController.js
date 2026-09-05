import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import User from "../models/userModel.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import sendToken from "../utils/sendToken.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";


export const signup = catchAsyncError(
  async (req, res, next) => {

    const {
      name,
      email,
      password
    } = req.body;


    // -----------------------------------------
    // CHECK EXISTING USER
    // -----------------------------------------

    const existingUser =
      await User.findOne({ email });


    if (existingUser) {

      logger.warn(
        "Signup attempt with existing email",
        {
          email,
        }
      );

      return next(
        new ErrorHandler(
          "User already exists with this email",
          400
        )
      );
    }


    // -----------------------------------------
    // CREATE USER
    // -----------------------------------------

    const user = await User.create({
      name,
      email,
      password,
    });


    logger.info(
      "User signup successful",
      {
        userId: user._id,
      }
    );


    // -----------------------------------------
    // SEND TOKEN
    // -----------------------------------------

    sendToken(
      user,
      200,
      res,
      "User Signup successfully"
    );
  }
);


export const signin = catchAsyncError(
  async (req, res, next) => {

    const {
      email,
      password
    } = req.body;


    // -----------------------------------------
    // VALIDATE INPUT
    // -----------------------------------------

    if (!email || !password) {

      logger.warn(
        "Signin attempt with missing credentials"
      );

      return next(
        new ErrorHandler(
          "Email and password are required",
          400
        )
      );
    }


    // -----------------------------------------
    // FIND USER
    // -----------------------------------------

    const user =
      await User
        .findOne({ email })
        .select("+password");


    if (!user) {

      logger.warn(
        "Signin attempt for unregistered email",
        {
          email,
        }
      );

      return next(
        new ErrorHandler(
          "User not registered",
          404
        )
      );
    }


    // -----------------------------------------
    // CHECK PASSWORD
    // -----------------------------------------

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );


    if (!isMatch) {

      logger.warn(
        "Invalid password attempt",
        {
          userId: user._id,
        }
      );

      return next(
        new ErrorHandler(
          "Incorrect password",
          400
        )
      );
    }


    // -----------------------------------------
    // SUCCESS
    // -----------------------------------------

    logger.info(
      "User signin successful",
      {
        userId: user._id,
      }
    );


    return sendToken(
      user,
      200,
      res,
      "Signin Successful"
    );
  }
);


export const logout = catchAsyncError(
  async (req, res) => {

    logger.info(
      "User logout",
      {
        userId: req.user?._id,
      }
    );


    res.cookie(
      "token",
      "",
      {
        httpOnly: true,
        expires: new Date(Date.now()),
      }
    );


    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  }
);


export const getCurrentUser = catchAsyncError(
  async (req, res, next) => {

    if (!req.user) {

      logger.warn(
        "Get current user without authentication"
      );

      return next(
        new ErrorHandler(
          "User not logged in",
          401
        )
      );
    }


    const user =
      await User
        .findById(req.user.id)
        .select("-password");


    if (!user) {

      logger.warn(
        "Authenticated user not found",
        {
          userId: req.user.id,
        }
      );

      return next(
        new ErrorHandler(
          "User not found",
          404
        )
      );
    }


    logger.info(
      "Current user fetched",
      {
        userId: user._id,
      }
    );


    res.status(200).json({
      success: true,
      user,
    });
  }
);


export const completeProfile = catchAsyncError(
  async (req, res, next) => {

    const {
      industry,
      specialization,
      skills,
      experience,
      bio
    } = req.body;


    // -----------------------------------------
    // VALIDATION
    // -----------------------------------------

    if (
      !industry ||
      !specialization ||
      !skills ||
      !experience ||
      !bio
    ) {

      return next(
        new ErrorHandler(
          "All fields are required",
          400
        )
      );
    }


    // -----------------------------------------
    // HANDLE SKILLS
    // -----------------------------------------

    let skillsArray = skills;


    if (!Array.isArray(skills)) {

      skillsArray =
        skills
          .split(",")
          .map(
            skill => skill.trim()
          );
    }


    // -----------------------------------------
    // PROFILE IMAGE
    // -----------------------------------------

    let profileImageData = {};


    if (
      req.files &&
      req.files.profileImage
    ) {

      const image =
        req.files.profileImage;


      const allowedMimeTypes = [
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/jpg"
      ];


      if (
        !allowedMimeTypes.includes(
          image.mimetype
        )
      ) {

        logger.warn(
          "Invalid profile image format",
          {
            userId: req.user.id,
            mimetype: image.mimetype,
          }
        );

        return next(
          new ErrorHandler(
            "Please provide image in valid format (png, jpeg, webp, jpg)",
            400
          )
        );
      }


      // -----------------------------------------
      // CLOUDINARY UPLOAD
      // -----------------------------------------

      const cloudinaryResponse =
        await cloudinary.uploader.upload(
          image.tempFilePath,
          {
            folder: "Prepmind-Ai"
          }
        );


      if (
        !cloudinaryResponse ||
        !cloudinaryResponse.secure_url
      ) {

        logger.error(
          "Profile image upload failed",
          {
            userId: req.user.id,
          }
        );

        return next(
          new ErrorHandler(
            "Image upload failed",
            500
          )
        );
      }


      profileImageData = {
        public_id:
          cloudinaryResponse.public_id,

        url:
          cloudinaryResponse.secure_url
      };
    }


    // -----------------------------------------
    // UPDATE USER
    // -----------------------------------------

    const user =
      await User.findByIdAndUpdate(
        req.user.id,
        {
          industry,
          specialization,
          skills: skillsArray,
          experience,
          bio,
          isProfileCompleted: true,

          ...(profileImageData.url && {
            profileImage:
              profileImageData
          })
        },
        {
          returnDocument: "after"
        }
      );


    logger.info(
      "User profile completed",
      {
        userId: req.user.id,
      }
    );


    res.status(200).json({
      success: true,
      user,
      message:
        "Profile completed successfully 🚀"
    });
  }
);


export const updatePassword = catchAsyncError(
  async (req, res, next) => {

    // -----------------------------------------
    // CHECK AUTHENTICATION
    // -----------------------------------------

    if (!req.user) {

      return next(
        new ErrorHandler(
          "User not logged in",
          401
        )
      );
    }


    // -----------------------------------------
    // GET PASSWORD DATA
    // -----------------------------------------

    const {
      oldPassword,
      newPassword,
      confirmPassword
    } = req.body;


    // -----------------------------------------
    // VALIDATE REQUIRED FIELDS
    // -----------------------------------------

    if (
      !oldPassword ||
      !newPassword ||
      !confirmPassword
    ) {

      return next(
        new ErrorHandler(
          "All password fields are required",
          400
        )
      );
    }


    // -----------------------------------------
    // CHECK PASSWORD MATCH
    // -----------------------------------------

    if (
      newPassword !== confirmPassword
    ) {

      return next(
        new ErrorHandler(
          "New password and confirm password do not match",
          400
        )
      );
    }


    // -----------------------------------------
    // PASSWORD LENGTH
    // -----------------------------------------

    if (newPassword.length < 6) {

      return next(
        new ErrorHandler(
          "Password must be at least 6 characters long",
          400
        )
      );
    }


    // -----------------------------------------
    // FIND USER
    // -----------------------------------------

    const user =
      await User
        .findById(req.user.id)
        .select("+password");


    if (!user) {

      return next(
        new ErrorHandler(
          "User not found",
          404
        )
      );
    }


    // -----------------------------------------
    // CHECK OLD PASSWORD
    // -----------------------------------------

    const isPasswordCorrect =
      await bcrypt.compare(
        oldPassword,
        user.password
      );


    if (!isPasswordCorrect) {

      logger.warn(
        "Incorrect old password during password update",
        {
          userId: req.user.id,
        }
      );

      return next(
        new ErrorHandler(
          "Old password is incorrect",
          401
        )
      );
    }


    // -----------------------------------------
    // PREVENT SAME PASSWORD
    // -----------------------------------------

    const isSamePassword =
      await bcrypt.compare(
        newPassword,
        user.password
      );


    if (isSamePassword) {

      return next(
        new ErrorHandler(
          "New password must be different from old password",
          400
        )
      );
    }


    // -----------------------------------------
    // HASH PASSWORD 
    // -----------------------------------------

    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );


    user.password =
      hashedPassword;


    // -----------------------------------------
    // SAVE USER
    // -----------------------------------------

    await user.save();


    logger.info(
      "User password updated",
      {
        userId: req.user.id,
      }
    );


    // -----------------------------------------
    // RESPONSE
    // -----------------------------------------

    res.status(200).json({

      success: true,

      message:
        "Password updated successfully"

    });
  }
);


export const updateProfile = catchAsyncError(
  async (req, res, next) => {

    // -----------------------------------------
    // CHECK AUTHENTICATION
    // -----------------------------------------

    if (!req.user) {

      return next(
        new ErrorHandler(
          "User not logged in",
          401
        )
      );
    }


    const {
      name,
      industry,
      specialization,
      skills,
      experience,
      bio
    } = req.body;


    // -----------------------------------------
    // FIND USER
    // -----------------------------------------

    const user =
      await User.findById(
        req.user.id
      );


    if (!user) {

      return next(
        new ErrorHandler(
          "User not found",
          404
        )
      );
    }


    // -----------------------------------------
    // UPDATE NAME
    // -----------------------------------------

    if (name !== undefined) {
      user.name = name;
    }


    // -----------------------------------------
    // UPDATE INDUSTRY
    // -----------------------------------------

    if (industry !== undefined) {
      user.industry = industry;
    }


    // -----------------------------------------
    // UPDATE SPECIALIZATION
    // -----------------------------------------

    if (
      specialization !== undefined
    ) {

      user.specialization =
        specialization;
    }


    // -----------------------------------------
    // UPDATE EXPERIENCE
    // -----------------------------------------

    if (experience !== undefined) {
      user.experience = experience;
    }


    // -----------------------------------------
    // UPDATE BIO
    // -----------------------------------------

    if (bio !== undefined) {
      user.bio = bio;
    }


    // -----------------------------------------
    // UPDATE SKILLS
    // -----------------------------------------

    if (skills !== undefined) {

      let skillsArray = skills;


      if (
        typeof skills === "string"
      ) {

        skillsArray =
          skills
            .split(",")
            .map(
              skill => skill.trim()
            )
            .filter(
              skill => skill !== ""
            );
      }


      if (
        !Array.isArray(skillsArray)
      ) {

        return next(
          new ErrorHandler(
            "Skills must be an array or comma-separated string",
            400
          )
        );
      }


      user.skills =
        skillsArray;
    }


    // -----------------------------------------
    // SAVE UPDATED USER
    // -----------------------------------------

    const updatedUser =
      await user.save();


    // -----------------------------------------
    // REMOVE PASSWORD
    // -----------------------------------------

    const userResponse =
      updatedUser.toObject();


    delete userResponse.password;


    logger.info(
      "User profile updated",
      {
        userId: req.user.id,
      }
    );


    // -----------------------------------------
    // RESPONSE
    // -----------------------------------------

    res.status(200).json({

      success: true,

      message:
        "Profile updated successfully",

      user:
        userResponse

    });
  }
);