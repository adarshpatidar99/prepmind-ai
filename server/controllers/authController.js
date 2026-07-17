import catchAsyncError from "../middlewares/catchAsyncErrorMiddleware.js";
import User from "../models/userModel.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import sendToken from "../utils/sendToken.js";       
import cloudinary from "../config/cloudinary.js";     
import bcrypt from "bcryptjs";

export const Register = catchAsyncError(async(req, res, next) => {
  
  const { name, email, password } = req.body;

  // if (!req.files || !req.files.profileImage) {
  //   return next(new ErrorHandler("profileImage is required, please provide ProfileImage", 400));
  // }                                       

  // const image = req.files.profileImage;

  // CORRECT MIME TYPES
  // const allowedMimeTypes = ["image/png", "image/jpeg", "image/webp", "image/jpg"];

  // if (!allowedMimeTypes.includes(image.mimetype)) {
  //   return next(
  //     new ErrorHandler("Please provide profileImage in valid format: png, jpeg, webp, jpg", 400)
  //   );
  // }

// console.log(req.files);
//   // UPLOAD TO CLOUDINARY
//   const cloudinaryResponse = await cloudinary.uploader.upload(
//   image.tempFilePath,
//   { folder: "PrepMind-Ai" }
//   );                             
 
  // if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
  //   return next(new ErrorHandler("Failed to upload profileImage on Cloudinary...", 500));
  // }      

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return next(new ErrorHandler("User already exists with this email", 400));

  const user = await User.create({
    name,
    email,
    // username,
    password,
    // profileImage: {
    //   public_id: cloudinaryResponse.public_id,
    //   url: cloudinaryResponse.secure_url,
    // },
    // bio, 
    // skills, 
    // experienceLevel
  });

  sendToken(user, 200, res, "User registered successfully");

})

   

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Email and password are required", 400));
  const user = await User.findOne({ email }).select("+password"); 

  if (!user)
    return next(new ErrorHandler("User not registered", 404));
                                                        
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect password", 400));
    sendToken(user, 200, res, "Login successful");
});

                                              

export const logout = catchAsyncError(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});



export const getCurrentUser = catchAsyncError(async (req, res, next) => {
  if (!req.user)
    return next(new ErrorHandler("User not logged in", 401));

  const user = await User.findById(req.user.id).select("-password");

  if (!user)       
    return next(new ErrorHandler("User not found", 404));

  res.status(200).json({
    success: true,
    user,
  });
});




export const completeProfile = catchAsyncError(async (req, res, next) => {

  const { industry, specialization, skills, experience, bio } = req.body;

  // ✅ validation
  if (!industry || !specialization || !skills || !experience || !bio) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  // ✅ handle skills (string → array)
  let skillsArray = skills;
  if (!Array.isArray(skills)) {
    skillsArray = skills.split(",").map(skill => skill.trim());
  }

  // ✅ image upload (optional but safe check)
  let profileImageData = {};

  if (req.files && req.files.profileImage) {

    const image = req.files.profileImage;

    const allowedMimeTypes = ["image/png", "image/jpeg", "image/webp", "image/jpg"];

    if (!allowedMimeTypes.includes(image.mimetype)) {
      return next(
        new ErrorHandler("Please provide image in valid format (png, jpeg, webp, jpg)", 400)
      );
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
      image.tempFilePath,
      {
        folder: "Prepmind-Ai"
      }
    );

    if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
      return next(new ErrorHandler("Image upload failed", 500));
    }

    profileImageData = {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url
    };
  }

  // ✅ UPDATE USER (MAIN STEP 🔥)
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      industry,
      specialization,
      skills: skillsArray,
      experience,
      bio,
      isProfileCompleted: true,
      ...(profileImageData.url && { profileImage: profileImageData })
    },
    { new: true }
  );

  res.status(200).json({
    success: true,
    user,
    message: "Profile completed successfully 🚀"
  });

});