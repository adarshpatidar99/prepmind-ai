// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true, 
//       match: [/^\S+@\S+\.\S+$/, "Invalid email format"],   
//     },

//     password: {
//       type: String,
//       minlength: [6, "Password must be at least 6 characters"],
//       select: false,
//     },

//     profileImage: {
//       public_id: String,
//       url: String,
//     },

//     bio: {
//       type: String,
//       default: ""
//     },
                    
//     skills: [String],

//     experience: {                
//       type: String,
//       enum: ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
//       default: "Fresher"
//     },

//     specialization: String,
                  
//     industry: String,
                            
//     isGoogleAccount: {
//       type: Boolean,
//       default: false
//     },

//     isProfileCompleted: {
//        type: Boolean,
//        default: false
//     },


//     plan: {
//   type: String,
//   enum: ["free", "starter", "pro"],
//   default: "free"
// },

// credits: {
//   type: Number,
//   default: 30
// },

// creditExpiry: {
//   type: Date,
//   default: null
// },

// subscriptionStatus: {
//   type: String,
//   enum: ["inactive", "active", "cancelled", "expired"],
//   default: "inactive"
// },

// subscriptionExpiry: {
//   type: Date,
//   default: null
// },

// razorpayCustomerId: {
//   type: String,
//   default: null
// },

// razorpaySubscriptionId: {
//   type: String,
//   default: null
// }


//   },
//   { timestamps: true }
// );



// // 🔐 Hash password before save (fixed)
// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) return;
//   this.password = await bcrypt.hash(this.password, 10);
// });
                                                                    
// // 🔑 Compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // 🎫 Generate JWT token
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// const User = mongoose.model("User", userSchema);
// export default User;









import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    profileImage: {
      public_id: String,
      url: String,
    },

    bio: {
      type: String,
      default: "",
    },

    skills: [String],

    experience: {
      type: String,
      enum: ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
      default: "Fresher",
    },

    specialization: String,

    industry: String,

    isGoogleAccount: {
      type: Boolean,
      default: false,
    },

    isProfileCompleted: {
      type: Boolean,
      default: false,
    },

    plan: {
      type: String,
      enum: ["free", "starter", "pro"],
      default: "free",
    },

    credits: {
      type: Number,
      default: 30,
    },

    creditExpiry: {
      type: Date,
      default: null,
    },

    subscriptionStatus: {
      type: String,
      enum: ["inactive", "active", "cancelled", "expired"],
      default: "inactive",
    },

    subscriptionExpiry: {
      type: Date,
      default: null,
    },

    razorpayCustomerId: {
      type: String,
      default: null,
    },

    razorpaySubscriptionId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);


// ========================================
// DATABASE INDEXES
// ========================================

// Used when finding a user by Razorpay subscription ID
userSchema.index({ razorpaySubscriptionId: 1 });


// ========================================
// PASSWORD HASHING
// ========================================

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});


// ========================================
// COMPARE PASSWORD
// ========================================

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// ========================================
// GENERATE JWT TOKEN
// ========================================

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


const User = mongoose.model("User", userSchema);

export default User;