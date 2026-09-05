// import axios from 'axios';
// import React, { useState } from 'react'
// import { ChevronDown, Sparkles, Loader2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const industries = [
//   "Software Development", "Data Science", "Artificial Intelligence", "Cyber Security",
//   "Finance", "Marketing", "Product Management", "Human Resources"
// ];

// const specializations = [
//   "Frontend Developer", "Backend Developer", "Full Stack Developer", 
//   "Machine Learning Engineer", "Data Analyst", "DevOps Engineer"
// ];

// const experienceLevels = ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"]

// const container = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.08 } }
// }

// const item = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
// }

// const CompleteProfile = () => {

//   const [openDropdown, setOpenDropdown] = useState(null)
//   const [industry, setIndustry] = useState("")
//   const [specialization, setSpecialization] = useState("")
//   const [experience, setExperience] = useState("")
//   const [skills, setSkills] = useState("")
//   const [bio, setBio] = useState("")
//   const [loading, setLoading] = useState(false)

//   const navigate = useNavigate()
//   const closeAll = () => setOpenDropdown(null)

//   const handleCompleteProfile = async (e) => {
//     e.preventDefault()
//     closeAll()
//     if (!industry || !specialization || !skills || !experience) {
//       return toast.error("Please fill all required fields")
//     }
//     try {
//       setLoading(true)
//       await axios.post(
//         'http://localhost:5000/api/v1/user/profile',
//         { industry, specialization, experience, skills: skills.split(",").map(s => s.trim()), bio },
//         { headers: { "Content-Type": "application/json" }, withCredentials: true }
//       )
//       toast.success("Profile completed successfully 🚀")
//       navigate("/dashboard")
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Profile update failed ❌")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const Dropdown = ({ label, value, placeholder, options, name }) => (
//     <motion.div variants={item} className="relative">
//       <h2 className="text-sm font-medium mb-2 text-gray-700">{label} *</h2>
//       <div
//         onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === name ? null : name) }}
//         className="flex justify-between items-center px-4 py-3 rounded-lg border-gray-200 bg-white cursor-pointer hover:border-[#0A66C2]"
//       >
//         <span className={value ? "text-gray-900 text-sm" : "text-gray-400 text-sm"}>
//           {value || placeholder}
//         </span>
//         <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openDropdown === name ? "rotate-180 text-[#0A66C2]" : ""}`} />
//       </div>
//       <AnimatePresence>
//         {openDropdown === name && (
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             onClick={(e) => e.stopPropagation()}
//             className="absolute w-full mt-2 bg-white border-gray-200 rounded-lg max-h-48 overflow-y-auto z-50 shadow-lg"
//           >
//             {options.map((item, i) => (
//               <div key={i} 
//                 onClick={() => {
//                   if(name === 'industry') setIndustry(item)
//                   if(name === 'specialization') setSpecialization(item)
//                   if(name === 'experience') setExperience(item)
//                   setOpenDropdown(null)
//                 }}
//                 className="px-4 py-2 hover:bg-[#F7F9FC] cursor-pointer text-sm text-gray-700">
//                 {item}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )

//   return (
//     <section 
//       onClick={closeAll}
//       className="w-full h-screen flex items-center justify-center bg-[#F7F9FC] px-4 py-4 sm:py-10"
//     >

//       <motion.div
//         initial={{ opacity: 0, scale: 0.98 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         onClick={(e) => e.stopPropagation()}
//         className="w-full max-w-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-xl bg-white border-gray-200 shadow-lg" // KEY: flex-col
//       >

//         {/* 1. FIXED HEADER */}
//         <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
//           <Sparkles className="w-6 h-6 text-[#0A66C2]" />
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Complete Your Profile</h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Unlock AI-powered career insights and personalized mock interviews
//             </p>
//           </div>
//         </div>

//         {/* 2. SCROLLABLE CONTENT ONLY */}
//         <motion.form
//           variants={container}
//           initial="hidden"
//           animate="show"
//           onSubmit={handleCompleteProfile}
//           className="flex-1 overflow-y-auto p-6 sm:p-8" // KEY: flex-1 overflow-y-auto
//         >
//           <div className="grid sm:grid-cols-2 gap-5">

//             <Dropdown label="Industry" name="industry" value={industry} placeholder="Select industry" options={industries} />
//             <Dropdown label="Specialization" name="specialization" value={specialization} placeholder="Select specialization" options={specializations} />
//             <Dropdown label="Experience" name="experience" value={experience} placeholder="Select experience" options={experienceLevels} />

//             {/* SKILLS */}
//             <motion.div variants={item}>
//               <h2 className="text-sm font-medium mb-2 text-gray-700">Top Skills *</h2>
//               <input
//                 type="text"
//                 placeholder="React, Node.js, MongoDB"
//                 value={skills}
//                 onChange={(e) => setSkills(e.target.value)}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0A66C2] outline-none"
//               />
//             </motion.div>

//             {/* BIO - full width */}
//             <motion.div variants={item} className="sm:col-span-2">
//               <h2 className="text-sm font-medium mb-2 text-gray-700">Bio</h2>
//               <textarea
//                 placeholder="Tell us about your career goals..."
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//                 rows={3}
//                 className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0A66C2] outline-none resize-none"
//               />
//             </motion.div>

//           </div>
//         </motion.form>

//         {/* 3. FIXED FOOTER/BUTTON */}
//         <div className="p-6 sm:p-8 border-t border-gray-100 bg-white rounded-b-xl flex-shrink-0">
//           <button
//             disabled={loading}
//             onClick={handleCompleteProfile}
//             className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2
//             bg-[#0A66C2] text-white hover:bg-blue-700
//             ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//           >
//             {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
//             {loading ? "Saving..." : "Complete Profile"}
//           </button>
//         </div>

//       </motion.div>
//     </section>
//   )
// }

// export default CompleteProfile












import axios from "axios";
import React, { useState } from "react";
import { ChevronDown, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const industries = [
  "Software Development",
  "Data Science",
  "Artificial Intelligence",
  "Cyber Security",
  "Finance",
  "Marketing",
  "Product Management",
  "Human Resources",
];

const specializations = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Machine Learning Engineer",
  "Data Analyst",
  "DevOps Engineer",
];

const experienceLevels = [
  "Fresher",
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const CompleteProfile = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [industry, setIndustry] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const closeAll = () => {
    setOpenDropdown(null);
  };

  const handleCompleteProfile = async (e) => {
    e.preventDefault();

    closeAll();

    // Validate required fields
    if (!industry || !specialization || !skills || !experience) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const skillsArray = skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");

      await axios.post(
        "http://localhost:5000/api/v1/user/profile",
        {
          industry,
          specialization,
          experience,
          skills: skillsArray,
          bio,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Profile completed successfully 🚀");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Profile update failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  const Dropdown = ({
    label,
    value,
    placeholder,
    options,
    name,
  }) => (
    <motion.div
      variants={item}
      className="relative"
    >
      <h2 className="text-sm font-medium mb-2 text-gray-700">
        {label} *
      </h2>

      <div
        onClick={(e) => {
          e.stopPropagation();

          setOpenDropdown(
            openDropdown === name ? null : name
          );
        }}
        className="flex justify-between items-center px-4 py-3 rounded-lg border-gray-200 bg-white cursor-pointer hover:border-[#0A66C2]"
      >
        <span
          className={
            value
              ? "text-gray-900 text-sm"
              : "text-gray-400 text-sm"
          }
        >
          {value || placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            openDropdown === name
              ? "rotate-180 text-[#0A66C2]"
              : ""
          }`}
        />
      </div>

      <AnimatePresence>
        {openDropdown === name && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute w-full mt-2 bg-white border-gray-200 rounded-lg max-h-48 overflow-y-auto z-50 shadow-lg"
          >
            {options.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  if (name === "industry") {
                    setIndustry(option);
                  }

                  if (name === "specialization") {
                    setSpecialization(option);
                  }

                  if (name === "experience") {
                    setExperience(option);
                  }

                  setOpenDropdown(null);
                }}
                className="px-4 py-2 hover:bg-[#F7F9FC] cursor-pointer text-sm text-gray-700"
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section
      onClick={closeAll}
      className="w-full h-screen flex items-center justify-center bg-[#F7F9FC] px-4 py-4 sm:py-10"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-[95vh] sm:h-auto sm:max-h-[90vh] flex flex-col rounded-xl bg-white border-gray-200 shadow-lg"
      >

        {/* HEADER */}
        <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
          <Sparkles className="w-6 h-6 text-[#0A66C2]" />

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Complete Your Profile
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Unlock AI-powered career insights and personalized mock interviews
            </p>
          </div>
        </div>

        {/* FORM */}
        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          onSubmit={handleCompleteProfile}
          className="flex-1 overflow-y-auto p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-5">

            {/* INDUSTRY */}
            <Dropdown
              label="Industry"
              name="industry"
              value={industry}
              placeholder="Select industry"
              options={industries}
            />

            {/* SPECIALIZATION */}
            <Dropdown
              label="Specialization"
              name="specialization"
              value={specialization}
              placeholder="Select specialization"
              options={specializations}
            />

            {/* EXPERIENCE */}
            <Dropdown
              label="Experience"
              name="experience"
              value={experience}
              placeholder="Select experience"
              options={experienceLevels}
            />

            {/* SKILLS */}
            <motion.div variants={item}>
              <h2 className="text-sm font-medium mb-2 text-gray-700">
                Top Skills *
              </h2>

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0A66C2] outline-none"
              />
            </motion.div>

            {/* BIO */}
            <motion.div
              variants={item}
              className="sm:col-span-2"
            >
              <h2 className="text-sm font-medium mb-2 text-gray-700">
                Bio
              </h2>

              <textarea
                placeholder="Tell us about your career goals..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#0A66C2] outline-none resize-none"
              />
            </motion.div>

          </div>

          {/* BUTTON */}
          <div className="pt-6 sm:pt-8 mt-6 border-t border-gray-100">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2
              bg-[#0A66C2] text-white hover:bg-blue-700
              ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading && (
                <Loader2 className="w-5 h-5 animate-spin" />
              )}

              {loading
                ? "Saving..."
                : "Complete Profile"}
            </button>
          </div>
        </motion.form>

      </motion.div>
    </section>
  );
};

export default CompleteProfile;






