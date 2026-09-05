// import mongoose from "mongoose";

// export const coverLetterSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     resumeId: {
//        type: mongoose.Schema.Types.ObjectId,
//        ref: "Resume", 
//        required: false,
//        default: null
//     },

//     // =========================
//     // Personal Information
//     // =========================

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

//     // =========================
//     // Resume Information
//     // =========================

//     jobRole: {
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

//     achievements: [
//       {
//         description: {
//           type: String,
//           trim: true,
//           default: "",
//         },
//       },
//     ],

//     // =========================
//     // Target Job Information
//     // =========================

//     jobTitle: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     company: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     jobLocation: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     hiringManagerName: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     jobDescription: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     // =========================
//     // Generated Cover Letter
//     // =========================

//     coverLetterContent: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const CoverLetter = mongoose.model("CoverLetter", coverLetterSchema);

// export default CoverLetter;









import mongoose from "mongoose";

export const coverLetterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: false,
      default: null,
    },

    // =========================
    // Personal Information
    // =========================

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

    // =========================
    // Resume Information
    // =========================

    jobRole: {
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
        description: {
          type: String,
          trim: true,
          default: "",
        },
      },
    ],

    // =========================
    // Target Job Information
    // =========================

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    jobLocation: {
      type: String,
      trim: true,
      default: "",
    },

    hiringManagerName: {
      type: String,
      trim: true,
      default: "",
    },

    jobDescription: {
      type: String,
      trim: true,
      default: "",
    },

    // =========================
    // Generated Cover Letter
    // =========================

    coverLetterContent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// =========================
// Database Indexes
// =========================

// Get user's cover letters sorted by newest first
coverLetterSchema.index({
  user: 1,
  createdAt: -1,
});

// Find cover letters associated with a resume
coverLetterSchema.index({
  resumeId: 1,
});

const CoverLetter = mongoose.model("CoverLetter", coverLetterSchema);

export default CoverLetter;