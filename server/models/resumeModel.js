// import mongoose from "mongoose";

// const resumeSchema = new mongoose.Schema(
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
//     // PERSONAL INFORMATION
//     // =========================================

//     fullName: {
//       type: String,
//       trim: true,
//     },

//     email: {
//       type: String,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       trim: true,
//     },

//     location: {
//       type: String,
//       trim: true,
//     },

//     linkedin: {
//       type: String,
//       trim: true,
//     },

//     github: {
//       type: String,
//       trim: true,
//     },

//     // =========================================
//     // CAREER INFORMATION
//     // =========================================

//     jobRole: {
//       type: String,
//       trim: true,
//     },

//     experience: {
//       type: String,
//       trim: true,
//     },

//     summary: {
//       type: String,
//       trim: true,
//     },

//     // =========================================
//     // SKILLS
//     // =========================================

//     skills: [
//       {
//          category: {
//            type: String,
//            default: "",
//          },
//          items: [
//           { 
//             type: String
//           },
//          ],
//       },
//     ],

//     // AI RESUME DATA
//     correctResume: {
//       type: String,
//     },

//     aiSuggestions: {
//       type: Object,
//     },

//     aiAnalysis: {
//       type: String,
//     },

//     resumeScore: {
//       type: Number,
//       default: 0,
//     },

//     atsScore: {
//       type: Number,
//       default: 0,
//     },

//     analyzedAt: {
//       type: Date,
//     },

//     // EDUCATION
//     education: [
//       {
//         degree: String,
//         college: String,
//         year: String,
//       },
//     ],

//     // PROJECTS
//     projects: [
//       {
//         title: String,
//         description: String,
//         techStack: [String],
//         duration: String,
//         link: String,
//       },
//     ],

//     // WORK EXPERIENCE
//     workExperience: [
//       {
//         company: String,
//         role: String,
//         duration: String,
//         description: String,
//       },
//     ],

//     // ACHIEVEMENTS
    // achievements: [
    //   {
    //     description: String,
    //   },
    // ],

//     // =========================================
//     // RESUME TEMPLATE
//     // =========================================

//     resumeTemplate: {
//       type: String,
//       enum: ["modern", "classic", "minimal"],
//       default: "classic",
//     },

//     // =========================================
//     // PROFILE IMAGE
//     // =========================================

//     profileImg: {
//       public_id: String,
//       url: String,
//     },

//     // =========================================
//     // GENERATED PDF
//     // =========================================

//     generatedPdfUrl: String,

//     generatedAt: Date,

//     // =========================================
//     // RESUME STATISTICS
//     // =========================================

//     downloadCount: {
//       type: Number,
//       default: 0,
//     },

//     views: {
//       type: Number,
//       default: 0,
//     },

//     lastViewed: {
//       type: Date,
//     },

//     downloads: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Resume = mongoose.model("Resume", resumeSchema);

// export default Resume;












// import mongoose from "mongoose";

// const resumeSchema = new mongoose.Schema(
//   {
//     // =========================================
//     // USER
//     // =========================================

//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     resumeTitle: {
//         type: String,
//         required: true,
//         trim: true
//     },

//     fullName: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     email: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     phone: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     location: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     linkedinUrl: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     github: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     jobRole: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     experience: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     professionalSummary: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     skills: [
//       {
//         category: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         items: {
//           type: [String],
//           default: [],
//         },
//       },
//     ],

//     education: [
//       {
//         degree: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         college: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         startDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         endDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },
//       },
//     ],

//     projects: [
//       {
//         title: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         description: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         techStack: {
//           type: [String],
//           default: [],
//         },

//         startDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         endDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         link: {
//           type: String,
//           trim: true,
//           default: "",
//         },
//       },
//     ],

//     experiences: [
//       {
//         company: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         position: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         startDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         endDate: {
//           type: String,
//           trim: true,
//           default: "",
//         },

//         desc: {
//           type: String,
//           trim: true,
//           default: "",
//         },
//       },
//     ],
  

//         achievements: [
//       {
//         description: String,
//       },
//     ],

//     // =========================================
//     // RESUME TEMPLATE
//     // =========================================

//     resumeTemplate: {
//       type: String,
//       enum: ["modern", "classic", "minimal"],
//       default: "classic",
//     },

//     // =========================================
//     // PROFILE IMAGE
//     // =========================================

//     profileImg: {
//       public_id: {
//         type: String,
//         default: "",
//       },

//       url: {
//         type: String,
//         default: "",
//       },
//     },

//     // =========================================
//     // AI RESUME DATA
//     // =========================================

//     correctResume: {
//       type: String,
//       default: "",
//     },

//     aiSuggestions: {
//       type: mongoose.Schema.Types.Mixed,
//       default: {},
//     },

//     aiAnalysis: {
//       type: String,
//       default: "",
//     },

//     resumeScore: {
//       type: Number,
//       default: 0,
//     },

//     atsScore: {
//       type: Number,
//       default: 0,
//     },

//     analyzedAt: {
//       type: Date,
//       default: null,
//     },

//     analysisStatus: {
//        type: String,
//        enum: ["idle", "analyzing", "completed", "failed"],
//        default: "idle",
//     },

//     correctionStatus: {
//     type: String,
//     enum: [
//     "idle",
//     "correcting",
//     "completed",
//     "failed"
//     ],
//     default: "idle"
//     },  

//     // =========================================
//     // GENERATED PDF
//     // =========================================

//     generatedPdfUrl: {
//       type: String,
//       default: "",
//     },

//     generatedAt: {
//       type: Date,
//       default: null,
//     },

//     // =========================================
//     // RESUME STATISTICS
//     // =========================================

//     downloadCount: {
//       type: Number,
//       default: 0,
//     },

//     views: {
//       type: Number,
//       default: 0,
//     },

//     lastViewed: {
//       type: Date,
//       default: null,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Resume = mongoose.model("Resume", resumeSchema);

// export default Resume;










import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    // =========================================
    // USER
    // =========================================

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeTitle: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    linkedinUrl: {
      type: String,
      trim: true,
      default: "",
    },

    github: {
      type: String,
      trim: true,
      default: "",
    },

    jobRole: {
      type: String,
      trim: true,
      default: "",
    },

    experience: {
      type: String,
      trim: true,
      default: "",
    },

    professionalSummary: {
      type: String,
      trim: true,
      default: "",
    },

    skills: [
      {
        category: {
          type: String,
          trim: true,
          default: "",
        },

        items: {
          type: [String],
          default: [],
        },
      },
    ],

    education: [
      {
        degree: {
          type: String,
          trim: true,
          default: "",
        },

        college: {
          type: String,
          trim: true,
          default: "",
        },

        startDate: {
          type: String,
          trim: true,
          default: "",
        },

        endDate: {
          type: String,
          trim: true,
          default: "",
        },
      },
    ],

    projects: [
      {
        title: {
          type: String,
          trim: true,
          default: "",
        },

        description: {
          type: String,
          trim: true,
          default: "",
        },

        techStack: {
          type: [String],
          default: [],
        },

        startDate: {
          type: String,
          trim: true,
          default: "",
        },

        endDate: {
          type: String,
          trim: true,
          default: "",
        },

        link: {
          type: String,
          trim: true,
          default: "",
        },
      },
    ],

    experiences: [
      {
        company: {
          type: String,
          trim: true,
          default: "",
        },

        position: {
          type: String,
          trim: true,
          default: "",
        },

        startDate: {
          type: String,
          trim: true,
          default: "",
        },

        endDate: {
          type: String,
          trim: true,
          default: "",
        },

        desc: {
          type: String,
          trim: true,
          default: "",
        },
      },
    ],

    achievements: [
      {
        description: String,
      },
    ],

    // =========================================
    // RESUME TEMPLATE
    // =========================================

    resumeTemplate: {
      type: String,
      enum: ["modern", "classic", "minimal"],
      default: "classic",
    },

    // =========================================
    // PROFILE IMAGE
    // =========================================

    profileImg: {
      public_id: {
        type: String,
        default: "",
      },

      url: {
        type: String,
        default: "",
      },
    },

    // =========================================
    // AI RESUME DATA
    // =========================================

    correctResume: {
      type: String,
      default: "",
    },

    aiSuggestions: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    aiAnalysis: {
      type: String,
      default: "",
    },

    resumeScore: {
      type: Number,
      default: 0,
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    analyzedAt: {
      type: Date,
      default: null,
    },

    analysisStatus: {
      type: String,
      enum: ["idle", "analyzing", "completed", "failed"],
      default: "idle",
    },

    correctionStatus: {
      type: String,
      enum: [
        "idle",
        "correcting",
        "completed",
        "failed",
      ],
      default: "idle",
    },

    // =========================================
    // GENERATED PDF
    // =========================================

    generatedPdfUrl: {
      type: String,
      default: "",
    },

    generatedAt: {
      type: Date,
      default: null,
    },

    // =========================================
    // RESUME STATISTICS
    // =========================================

    downloadCount: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },

    lastViewed: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);


// =========================================
// DATABASE INDEXES
// =========================================

// Find a user's resumes and efficiently return
// them in newest-first order.
resumeSchema.index({
  user: 1,
  createdAt: -1,
});


const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;