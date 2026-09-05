// import mongoose from "mongoose";

// const interviewSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     role: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     company: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     interviewType: {
//       type: String,
//       enum: ["technical", "hr", "behavioral", "custom"],
//       required: true,
//     },

//     questionType: {
//       type: String,
//       enum: ["mcq", "descriptive"],
//       required: true,
//     },

//     techStack: {
//       type: [String],
//       default: [],
//     },

//     experience: {
//       type: String,
//       enum: [
//         "Intern",
//         "Fresher",
//         "Junior",
//         "Mid-Level",
//         "Senior",
//         "Lead",
//         "Manager",
//       ],
//       default: "Fresher",
//     },

//     duration: {
//       type: Number,
//       required: true, // Minutes
//     },

//     questionsCount: {
//       type: Number,
//       required: true,
//     },

//     currentQuestion: {
//       type: Number,
//       default: 0,
//     },

//     interviewItems: [
//       {
//         question: {
//           type: String,
//           required: true,
//         },

//         category: {
//           type: String,
//           default: "",
//         },

//         difficulty: {
//           type: String,
//           enum: ["Easy", "Medium", "Hard"],
//           default: "Medium",
//         },

//         options: {
//           type: [String],
//           default: [],
//         },

//         correctAnswer: {
//           type: String,
//           default: "",
//         },

//         userAnswer: {
//           type: String,
//           default: "",
//         },

//         isCorrect: {
//           type: Boolean,
//           default: false,
//         },

//         timeTaken: {
//           type: Number,
//           default: 0, // Seconds
//         },

//         score: {
//           type: Number,
//           default: 0,
//         },

//         feedback: {
//           type: String,
//           default: "",
//         },
//       },
//     ],

//     finalScore: {
//       type: Number,
//       default: 0,
//     },

//     aiReport: {
//       overallScore: {
//         type: Number,
//         default: 0,
//       },

//       technicalScore: {
//         type: Number,
//         default: 0,
//       },

//       communicationScore: {
//         type: Number,
//         default: 0,
//       },

//       confidenceScore: {
//         type: Number,
//         default: 0,
//       },

//       strengths: {
//         type: [String],
//         default: [],
//       },

//       weaknesses: {
//         type: [String],
//         default: [],
//       },

//       suggestions: {
//         type: [String],
//         default: [],
//       },

//       summary: {
//         type: String,
//         default: "",
//       },
//     },

//     interviewStatus: {
//       type: String,
//       enum: [
//         "started",
//         "in-progress",
//         "analyzing",
//         "completed",
//       ],
//       default: "started",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Interview = mongoose.model("Interview", interviewSchema);

// export default Interview;








// import mongoose from "mongoose";

// const interviewSchema = new mongoose.Schema(
//   {
//     // =========================================
//     // USER
//     // =========================================

//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     // =========================================
//     // INTERVIEW INFORMATION
//     // =========================================

//     role: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     company: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     interviewType: {
//       type: String,
//       enum: ["technical", "hr", "behavioral", "custom"],
//       required: true,
//     },

//     questionType: {
//       type: String,
//       enum: ["mcq", "descriptive"],
//       required: true,
//     },

//     techStack: {
//       type: [String],
//       default: [],
//     },

//     experience: {
//       type: String,
//       enum: [
//         "Intern",
//         "Fresher",
//         "Junior",
//         "Mid-Level",
//         "Senior",
//         "Lead",
//         "Manager",
//       ],
//       default: "Fresher",
//     },

//     duration: {
//       type: Number,
//       required: true,
//       min: 1,
//       // minutes
//     },

//     questionsCount: {
//       type: Number,
//       required: true,
//       min: 1,
//     },

//     // =========================================
//     // INTERVIEW PROGRESS
//     // =========================================

//     currentQuestion: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     interviewStatus: {
//       type: String,
//       enum: [
//         "started",
//         "in-progress",
//         "analyzing",
//         "completed",
//       ],
//       default: "started",
//     },

//     // =========================================
//     // QUESTIONS
//     // =========================================

//     interviewItems: [
//       {
//         question: {
//           type: String,
//           required: true,
//           trim: true,
//         },

//         category: {
//           type: String,
//           default: "",
//         },

//         difficulty: {
//           type: String,
//           enum: ["Easy", "Medium", "Hard"],
//           default: "Medium",
//         },

//         // Used only for MCQ
//         options: {
//           type: [String],
//           default: [],
//         },

//         // Used only for MCQ
//         correctAnswer: {
//           type: String,
//           default: "",
//         },

//         // User's answer
//         userAnswer: {
//           type: String,
//           default: "",
//         },

//         // Used mainly for MCQ
//         isCorrect: {
//           type: Boolean,
//           default: false,
//         },

//         // Seconds
//         timeTaken: {
//           type: Number,
//           default: 0,
//           min: 0,
//         },

//         // Score for this question
//         score: {
//           type: Number,
//           default: 0,
//           min: 0,
//         },

//         // AI-generated feedback
//         feedback: {
//           type: String,
//           default: "",
//         },
//       },
//     ],

//     // =========================================
//     // FINAL SCORE
//     // =========================================

//     finalScore: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     // =========================================
//     // AI REPORT
//     // =========================================

//     aiReport: {
//       generated: {
//         type: Boolean,
//         default: false,
//       },

//       overallScore: {
//         type: Number,
//         default: 0,
//         min: 0,
//       },

//       technicalScore: {
//         type: Number,
//         default: 0,
//         min: 0,
//       },

//       communicationScore: {
//         type: Number,
//         default: 0,
//         min: 0,
//       },

//       confidenceScore: {
//         type: Number,
//         default: 0,
//         min: 0,
//       },

//       strengths: {
//         type: [String],
//         default: [],
//       },

//       weaknesses: {
//         type: [String],
//         default: [],
//       },

//       suggestions: {
//         type: [String],
//         default: [],
//       },

//       summary: {
//         type: String,
//         default: "",
//       },
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Interview = mongoose.model("Interview", interviewSchema);

// export default Interview;






import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    // =========================================
    // USER
    // =========================================

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // =========================================
    // INTERVIEW INFORMATION
    // =========================================

    role: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    interviewType: {
      type: String,
      enum: ["technical", "hr", "behavioral", "custom"],
      required: true,
    },

    questionType: {
      type: String,
      enum: ["mcq", "descriptive"],
      required: true,
    },

    techStack: {
      type: [String],
      default: [],
    },

    experience: {
      type: String,
      enum: [
        "Intern",
        "Fresher",
        "Junior",
        "Mid-Level",
        "Senior",
        "Lead",
        "Manager",
      ],
      default: "Fresher",
    },

    duration: {
      type: Number,
      required: true,
      min: 1,
      // minutes
    },

    questionsCount: {
      type: Number,
      required: true,
      min: 1,
    },

    // =========================================
    // INTERVIEW PROGRESS
    // =========================================

    currentQuestion: {
      type: Number,
      default: 0,
      min: 0,
    },

    interviewStatus: {
      type: String,
      enum: [
        "started",
        "in-progress",
        "analyzing",
        "completed",
      ],
      default: "started",
    },

    // =========================================
    // QUESTIONS
    // =========================================

    interviewItems: [
      {
        question: {
          type: String,
          required: true,
          trim: true,
        },

        category: {
          type: String,
          default: "",
        },

        difficulty: {
          type: String,
          enum: ["Easy", "Medium", "Hard"],
          default: "Medium",
        },

        // Used only for MCQ
        options: {
          type: [String],
          default: [],
        },

        // Used only for MCQ
        correctAnswer: {
          type: String,
          default: "",
        },

        // User's answer
        userAnswer: {
          type: String,
          default: "",
        },

        // Used mainly for MCQ
        isCorrect: {
          type: Boolean,
          default: false,
        },

        // Seconds
        timeTaken: {
          type: Number,
          default: 0,
          min: 0,
        },

        // Score for this question
        score: {
          type: Number,
          default: 0,
          min: 0,
        },

        // AI-generated feedback
        feedback: {
          type: String,
          default: "",
        },
      },
    ],

    // =========================================
    // FINAL SCORE
    // =========================================

    finalScore: {
      type: Number,
      default: 0,
      min: 0,
    },

    // =========================================
    // AI REPORT
    // =========================================

    aiReport: {
      generated: {
        type: Boolean,
        default: false,
      },

      overallScore: {
        type: Number,
        default: 0,
        min: 0,
      },

      technicalScore: {
        type: Number,
        default: 0,
        min: 0,
      },

      communicationScore: {
        type: Number,
        default: 0,
        min: 0,
      },

      confidenceScore: {
        type: Number,
        default: 0,
        min: 0,
      },

      strengths: {
        type: [String],
        default: [],
      },

      weaknesses: {
        type: [String],
        default: [],
      },

      suggestions: {
        type: [String],
        default: [],
      },

      summary: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);


// =========================================
// DATABASE INDEXES
// =========================================

// Find a user's interviews and return
// the newest interviews first.
interviewSchema.index({
  user: 1,
  createdAt: -1,
});


const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;