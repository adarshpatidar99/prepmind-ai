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
import { aiCorrectResume, aiSuggestions, analyzeResumeWithAi } from "../services/aiService.js";


export const createResume = catchAsyncError(async (req, res, next) => {

  const {
    fullName, email, phone, location,
    linkedin, github, jobRole,
    experience, summary, skills,
    education, projects, workExperience, achievements, profileImg , username
  } = req.body;

  const requiredFields = [
    fullName, email, location, summary, skills, username,
    education, projects, achievements,
    experience, jobRole, workExperience, github, linkedin
  ];
                                             
  if (requiredFields.some(field => !field)) {
    return next(new ErrorHandler("All fields are required", 400));          
  }

  // resume.username = username;
  // resume.save();

  const image = req.files.profileImg;
 
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"]; 

  if(!allowedMimeTypes.includes(image.mimetype)) {
      return next (new ErrorHandler("PLease provide image in valid format...", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(
    image.tempFilePath,
    {folder: "PrepMind-Ai-Resume"}
  )

  if(!cloudinaryResponse || !cloudinaryResponse.secure_url) {
    return next(new ErrorHandler("Failed to upload profile image on cloudinary...", 400))
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return next(new ErrorHandler("Invalid email format", 400));
  }

  if (phone) {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      return next(new ErrorHandler("Invalid phone number", 400));
    }
  }

  const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.+)?$/;

  if (!urlRegex.test(linkedin)) {
    return next(new ErrorHandler("Invalid LinkedIn URL", 400));
  }

  if (!urlRegex.test(github)) {
    return next(new ErrorHandler("Invalid GitHub URL", 400));
  }

  const existing = await Resume.findOne({ user: req.user._id });

  if (existing) {
    return next(new ErrorHandler("Resume already exists", 400));
  }

  const getUser = req.user._id;

  if (!getUser) {
    return next(new ErrorHandler("user not come", 404));
  }


  let parsedSkills = [];
let parsedEducation = [];
let parsedProjects = [];
let parsedWorkExperience = [];
let parsedAchievements = [];

try {
  parsedSkills = JSON.parse(skills);
  parsedEducation = JSON.parse(education);
  parsedProjects = JSON.parse(projects);
  parsedWorkExperience = JSON.parse(workExperience);
  parsedAchievements = JSON.parse(achievements);
} catch (err) {
  return next(new ErrorHandler("Invalid JSON format in fields", 400));
}


  const resume = await Resume.create({
    user: getUser,
    fullName: fullName,
    username: username,
    email: email,
    phone: phone,
    location: location,
    linkedin: linkedin,
    github: github,
    jobRole: jobRole,
    experience,
    summary: summary,
    skills: parsedSkills,
    education: parsedEducation,
    projects: parsedProjects,
    workExperience: parsedWorkExperience,
    achievements: parsedAchievements,
    profileImg: {
       public_id: cloudinaryResponse.public_id,
       url: cloudinaryResponse.secure_url
    }
  });

  res.status(201).json({
    success: true,
    message: "Resume created successfully",
    resume
  });

});



export const getPublicResume = catchAsyncError(async (req, res, next) => {

  const {username} = req.params;

  const resume = await Resume.findOne({username});

  if(!resume) {
     return next (new ErrorHandler("Resume not found...", 404));
  }

  let html;

  if(resume.resumeTemplate === "modern") {
     html = modernTemplate(resume);
  } else if (resume.resumeTemplate === "classic") {
     html = classicTemplate(resume);
  } else {
     html = minimalTemplate(resume);
  }

  resume.views = (resume.views || 0) + 1;
  resume.lastViewed = new Date();

  resume.downloads = (resume.downloads || 0) + 1;

  await resume.save();

  res.setHeader("Content-Type", "text/html");
  res.send(html);

})



export const generateResumePdf = catchAsyncError(async (req, res, next) => {

  const resume = await Resume.findOne({ user: req.user.id });

  if (!resume) {
    return next(new ErrorHandler("Please create resume first...", 404));
  }

  let html;

  // Select template
  if (resume.resumeTemplate === "modern") {                    
    html = modernTemplate(resume);

  } else if (resume.resumeTemplate === "classic") {
    html = classicTemplate(resume);

  } else {
    html = minimalTemplate(resume);
  }

  // Generate PDF
  const filePath = await generatePdfFromHtml(html);

  // Save pdf path in DB
  resume.generatedPdfUrl = filePath;
  resume.generatedAt = Date.now();
  resume.downloadCount = (resume.downloadCount || 0) + 1;

  await resume.save();

  // Send file to user  
  res.download(filePath, "resume.pdf");

  res.status(200).json({
    success: true,
    message: "Resume generated successfully...",
    downloadCount: resume.downloadCount,
    generatedAt: resume.generatedAt,
    filePath
  });

});



export const changeTemplate = catchAsyncError(async (req, res, next) => {

    const { id } = req.params;
    const { template } = req.body;

    const resume = await Resume.findById(id);

    if (!resume) {
        return next(new ErrorHandler("Resume not found...", 404));
    }

    const allowedTemplates = ["classic", "modern", "minimal"];

    if (!allowedTemplates.includes(template)) {
        return next(new ErrorHandler("Please give a valid template...", 400));
    }

    resume.resumeTemplate = template;

    await resume.save();

    res.status(200).json({
        success: true,
        message: "Template changed successfully...",
        resume
    });

});



export const getResume = catchAsyncError(async (req, res, next) => {

  // Safety check (optional but good practice)
  if (!req.user || !req.user.id) {
    return next(new ErrorHandler("Unauthorized access", 401));
  }                                                   

  const resume = await Resume.findOne({ user: req.user.id });

  if (!resume) {
    return next(new ErrorHandler("Resume not found", 404));
  }

  res.status(200).json({
    success: true,                     
    message: "Resume fetched successfully",
    generatedPdfUrl,
    downloadCount,
    generatedAt,
    resume
  });

});



export const updateResume = catchAsyncError(async (req, res, next) => {

  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    return next(new ErrorHandler("Resume not found", 404));
  }

  const updatedResume = await Resume.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    success: true,
    message: "Resume updated successfully",
    resume: updatedResume
  });

});



export const deleteResume = catchAsyncError(async (req, res, next) => {

    const deleteResume = await Resume.findOneAndDelete({user:req.user._id})
    
    if(!deleteResume) {
       return next(new ErrorHandler("Resume not found for deleting...", 404));
    }

    res.status(200).json
    ({
      success: true,
      message: "Resume deleted succcessfully...",
      deleteResume
    })

})



export const previewResume = catchAsyncError(async (req, res, next) => {
   
    const resume = await Resume.findOne({ user: req.user._id});

    if(!resume) {
       return next(new ErrorHandler("Please give resume for preview...", 404));
    }

    const htmlTemplate = buildResumeTemplate(resume);
    res.status(200).set("Content-Type", "text/html").send(htmlTemplate)

})

    

export const getAllResumes = catchAsyncError(async (req, res, next) => {

     const allResume = await Resume.find({user: req.user._id});

     if(!allResume){
       return next(new ErrorHandler("Resume not found", 404));
     }

     res.status(200).json({
      success: true,
      message: "All resumes fetch successfully...",
      allResume
     })

})



export const resumeAnalyze = catchAsyncError(async (req, res, next) => {

  const { id } = req.params;
  const { jobDescription } = req.body;

  if (!jobDescription) {
    return next(new ErrorHandler("Job description is required", 400));
  }

  const resume = await Resume.findById(id);

  if (!resume) {
    return next(new ErrorHandler("Resume not found...", 404));
  }                                                                

  if (resume.user.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("Unauthorized", 403));
  }

  const convertResumeText = await convertResumeToText(resume);
                                                                      
  const analyze = await analyzeResumeWithAi(
    convertResumeText,
    jobDescription
  );

  resume.analyzedAt = new Date();

  resume.aiAnalysis = JSON.stringify(analyze);

  await resume.save();   // ✅ important

  res.status(200).json({
    success: true,
    message: "Resume analyzed successfully...",
    analyze
  });

});
 

export const fetchAnalyze = catchAsyncError(async (req, res, next) => {

   const {id} = req.params;
   
   const findResume = await Resume.findById(id);

   if(!findResume){
     return next (new ErrorHandler("Resume not found...", 404));
   }

   const aiAnalysis = findResume.aiAnalysis;
   const analyzedAt = findResume.analyzedAt;

   res.status(200).json({
    success: true,
    message: "resume analyze... score",
    aiAnalysis,
    analyzedAt
   })
   
})



export const resumeDashboard = catchAsyncError(async (req, res, next) => {

  // find all resumes of logged in user
  const resumes = await Resume.find({ user: req.user.id });

  let totalViews = 0;
  let totalDownloads = 0;
  let lastViewed = null;

  // calculate analytics
  for (const resume of resumes) {
  
    totalViews += resume.views || 0;
    totalDownloads += resume.downloads || 0;

    if (resume.lastViewed) {
      if (!lastViewed || resume.lastViewed > lastViewed) {
        lastViewed = resume.lastViewed;
      }
    }

  }

  const totalResumes = resumes.length;

  res.status(200).json({
    success: true,
    message: "Fetch Resume Dashboard successfully...",
    totalResumes,
    totalViews,
    totalDownloads,
    lastViewed
  });

});



export const resumeCorrection = catchAsyncError(async (req, res, next) => {
     
   const { id } = req.params;
   const { jobDescription } = req.body;

   // ✅ 1. Validate input
   if (!jobDescription) {
     return next(new ErrorHandler("Job description is required", 400));
   }

   // ✅ 2. Find resume by ID (correct way)
   const resume = await Resume.findById(id);

   if (!resume) {
     return next(new ErrorHandler("Resume not found...", 404));
   }

   // ✅ 3. Authorization check (VERY IMPORTANT)
   if (resume.user.toString() !== req.user._id.toString()) {
     return next(new ErrorHandler("Unauthorized", 403));
   }

   // ✅ 4. Convert resume → text
   const convertText = await convertResumeToText(resume);

   // ✅ 5. AI Correction (mock or real)
   const aiCorrection = await aiCorrectResume(convertText, jobDescription);

   // ✅ 6. Save result
   resume.correctResume = JSON.stringify(aiCorrection);;
   resume.updatedAt = new Date();
                                                  
   await resume.save();

   // ✅ 7. Response
   return res.status(200).json({
     success: true,
     message: "Resume corrected successfully...",
     correctResume: aiCorrection
   });

});

                   

export const resumeSuggestions = catchAsyncError(async (req, res, next) => {
  
   const { id } = req.params;
   const { jobDescription } = req.body;   

   const resume = await Resume.findById(id);

    if (!resume) {
     return next(new ErrorHandler("Resume not found...", 404));
   }

   if(resume.user.toString() !== req.user._id.toString()) {
      return next (new ErrorHandler("unauthorized user...", 403));
   }

   const convertText = await convertResumeToText(resume);

   const result = await aiSuggestions(convertText, jobDescription);

   resume.aiSuggestions = result;
   await resume.save();

   res.status(200).json({
    success: true,
    message: "Resume suggestions generated successfully",
    result
   })

})