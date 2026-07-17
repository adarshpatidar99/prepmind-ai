import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  selectRole: {
    type: String,
    required: true
  },

  techStack: [
    {
      type: String
    }
  ],

  experience: {
    type: String,
    enum: ["Intern", "Fresher", "Junior", "Mid-Level", "Senior", "Lead", "Manager", "Lead"],
    default: "Fresher"
  },

  interviewType: {
     type: String,
     enum: ["mcq", "descriptive"],
     required: true
  },

  duration: {
    type: Number   // duration in minutes
  },

  interviewItems: [
    {
      question: {
        type: String
      },

      options: [String],

      correctAnswer: {
         type: String
      },
      
      userAnswer: {
        type: String
      },

      score: {
        type: Number
      },

      feedback: {
        type: String
      }
    }
  ],

  finalScore: {
    type: Number
  },

  aiSummary: {
    type: String
  },

  interviewStatus: {
    type: String,
    enum: ["started", "in-progress", "completed"],
    default: "started"
  }

},
{ timestamps: true }
);
                         
const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;