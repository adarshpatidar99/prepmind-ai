import mongoose from "mongoose";
import validator from 'express-validator';

const resumeSchema = new mongoose.Schema({
 
  // user: ObjectId,

  user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: true
  },

  // Personal Info
  fullName: String,
  username: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  github: String,

  // Career Info
  jobRole: String,        // MERN Developer
  experience: String,    // 2 years
  summary: String,       // About me

  // Skills
  skills: [String],

  correctResume: {
     type: String
  },

  aiSuggestions: {
    type: Object
  },

  // Resume analyze
  aiAnalysis: String,
  resumeScore: Number,
  atsScore: Number,
  analyzedAt: Date,

  // Education
  education: [
    {
      degree: String,
      college: String,
      year: String
    }
  ],

  // Projects
  projects: [
    {
      title: String,
      description: String,
      techStack: [String],
      link: String
    }
  ],

  // Work Experience
  workExperience: [
    {
      company: String,
      role: String,
      duration: String,
      description: String
    }
  ],
                              
  // Achivements
  achievements: [
     {description: String}
  ],

  resumeTemplate: {

     type: String,
     enum: ["modern", "classic", "minimal"],
     default: "classic"

  },
  
  profileImg: {
     public_id: String,
     url: {type: String, required: false}
  },
 
  generatedPdfUrl: String,

  generatedAt: Date,

  downloadCount: {
     type: Number,
     default: 0
  },  

  username: {
    type: String,
    unique: true
  },

  views: {
     type: Number
  },

  lastViewed: {
     type:Date
  },

  downloads: {
    type: Number
  },

  createdAt: Date,

}, {timestamps: true});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;

     