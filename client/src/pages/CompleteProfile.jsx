// import React from 'react'
// import { IoChevronDown } from "react-icons/io5";

// const CompleteProfile = () => {
//   return (
//    <>
   
//     <section className=''>  
//        <div className=''>

//             <div className=''>
//                <h2 className=''>
//                  Complete Your Profile
//                </h2>
//             </div>

//             <div className=''>
//                <div className=''>
//                   <p className=''>Select your industry to unlock AI-powered career insights and recommendations</p>
//                </div>

//                <div className="w-full max-w-sm">

//   {/* Heading */}
//   <div className="mb-2">
//     <h2 className="text-sm text-gray-300">Industry</h2>
//   </div>

//   {/* Select Box */}
//   <div 
//     onClick={() => setOpen(!open)}
//     className="flex items-center justify-between px-4 py-3 rounded-xl 
//     bg-white/10 border border-white/20 cursor-pointer 
//     hover:bg-white/20 transition"
//   >
//     <span className={`${selected ? "text-white" : "text-gray-400"}`}>
//       {selected || "Select an Industry"}
//     </span>

//     <IoChevronDown 
//       className={`text-sm transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
//     />
//   </div>

//   {/* Dropdown */}
//   {open && (
//     <div className="mt-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md max-h-40 overflow-y-auto">

//       {industries.map((item, index) => (
//         <div
//           key={index}
//           onClick={() => {
//             setSelected(item)
//             setOpen(false)
//           }}
//           className="px-4 py-2 text-sm text-gray-200 hover:bg-white/20 cursor-pointer transition"
//         >
//           {item}
//         </div>
//       ))}

//     </div>
//   )}

// </div>

//             </div>
        
//        </div>
//     </section>
   
//    </>
    

//   )
// }

// export default CompleteProfile



// import React, { useState } from 'react'
// import { IoChevronDown } from "react-icons/io5";

// const industries = [
//   "Software Development",
//   "Data Science",
//   "Artificial Intelligence",
//   "Cyber Security",
//   "Finance",
//   "Marketing",
//   "Product Management",
//   "Human Resources"
// ];

// const CompleteProfile = () => {

//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState("")

//   return (
//     <div className="w-full max-w-sm mx-auto">

//       {/* Label */}
//       <h2 className="text-sm mb-2 text-gray-300">Industry</h2>

//       {/* Select Box */}
//       <div 
//         onClick={() => setOpen(!open)}
//         className="flex items-center justify-between px-4 py-3 rounded-xl 
//         bg-white/10 border border-white/20 cursor-pointer 
//         hover:bg-white/20 transition"
//       >
//         <span className={`${selected ? "text-white" : "text-gray-400"}`}>
//           {selected || "Select an industry"}
//         </span>

//         <IoChevronDown 
//           className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
//         />
//       </div>

//       {/* Dropdown */}
//       {open && (
//         <div className="mt-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md max-h-48 overflow-y-auto">

//           {industries.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 setSelected(item)
//                 setOpen(false)
//               }}
//               className="px-4 py-2 hover:bg-white/20 cursor-pointer transition text-sm"
//             >
//               {item}
//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   )
// }

// export default CompleteProfile



// import React, { useState } from 'react'
// import { IoChevronDown } from "react-icons/io5";

// const industries = [
//   "Software Development",
//   "Data Science",
//   "Artificial Intelligence",
//   "Cyber Security",
//   "Finance",
//   "Marketing",
//   "Product Management",
//   "Human Resources"
// ];

// const specializations = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Full Stack Developer",
//   "Machine Learning Engineer",
//   "Data Analyst",
//   "DevOps Engineer"
// ];

// const CompleteProfile = () => {

//   const [industryOpen, setIndustryOpen] = useState(false)
//   const [industry, setIndustry] = useState("")

//   const [specOpen, setSpecOpen] = useState(false)
//   const [specialization, setSpecialization] = useState("")

//   const [experience, setExperience] = useState("")
//   const [skills, setSkills] = useState("")
//   const [bio, setBio] = useState("")

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">

//       <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)] space-y-5">

//         {/* Heading */}
//         <div>
//           <h2 className="text-xl font-semibold">Complete Your Profile</h2>
//           <p className="text-sm text-gray-400">
//             Unlock AI-powered career insights
//           </p>
//         </div>

//         {/* Industry */}
//         <div className="relative">
//           <h2 className="text-sm mb-2 text-gray-300">Industry</h2>

//           <div 
//             onClick={() => setIndustryOpen(!industryOpen)}
//             className="flex justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/20 cursor-pointer"
//           >
//             <span className={industry ? "text-white" : "text-gray-400"}>
//               {industry || "Select industry"}
//             </span>
//             <IoChevronDown className={`${industryOpen ? "rotate-180" : ""}`} />
//           </div>

//           {industryOpen && (
//             <div className="absolute w-full mt-2 bg-black/60 border border-white/20 rounded-xl">
//               {industries.map((item, i) => (
//                 <div key={i}
//                   onClick={() => {
//                     setIndustry(item)
//                     setIndustryOpen(false)
//                   }}
//                   className="px-4 py-2 hover:bg-white/10 cursor-pointer"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Specialization */}
//         <div className="relative">
//           <h2 className="text-sm mb-2 text-gray-300">Specialization</h2>

//           <div 
//             onClick={() => setSpecOpen(!specOpen)}
//             className="flex justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/20 cursor-pointer"
//           >
//             <span className={specialization ? "text-white" : "text-gray-400"}>
//               {specialization || "Select specialization"}
//             </span>
//             <IoChevronDown className={`${specOpen ? "rotate-180" : ""}`} />
//           </div>

//           {specOpen && (
//             <div className="absolute w-full mt-2 bg-black/60 border border-white/20 rounded-xl">
//               {specializations.map((item, i) => (
//                 <div key={i}
//                   onClick={() => {
//                     setSpecialization(item)
//                     setSpecOpen(false)
//                   }}
//                   className="px-4 py-2 hover:bg-white/10 cursor-pointer"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Experience */}
//         <div>
//           <h2 className="text-sm mb-2 text-gray-300">Years of Experience</h2>
//           <input
//             type="number"
//             placeholder="e.g. 1, 2, 3..."
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:outline-none"
//           />
//         </div>

//         {/* Skills */}
//         <div>
//           <h2 className="text-sm mb-2 text-gray-300">Skills</h2>
//           <input
//             type="text"
//             placeholder="e.g. React, Node.js, MongoDB"
//             value={skills}
//             onChange={(e) => setSkills(e.target.value)}
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:outline-none"
//           />
//         </div>

//         {/* Bio */}
//         <div>
//           <h2 className="text-sm mb-2 text-gray-300">Professional Bio</h2>
//           <textarea
//             placeholder="Tell us about your background..."
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             rows={3}
//             className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:outline-none"
//           />
//         </div>

//         {/* Button */}
//         <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold hover:scale-105 transition">
//           Complete Profile 🚀
//         </button>

//       </div>

//     </section>
//   )
// }

// export default CompleteProfile



// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { IoChevronDown } from "react-icons/io5";
// import { useDispatch } from 'react-redux';
// import { setUser } from '../redux/authSlice';
// import { toast } from 'react-toastify';

// const industries = [
//   "Software Development",
//   "Data Science",
//   "Artificial Intelligence",
//   "Cyber Security",
//   "Finance",
//   "Marketing",
//   "Product Management",
//   "Human Resources"
// ];

// const specializations = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Full Stack Developer",
//   "Machine Learning Engineer",
//   "Data Analyst",
//   "DevOps Engineer"
// ];

// const CompleteProfile = () => {

//   const [industryOpen, setIndustryOpen] = useState(false)
//   const [industry, setIndustry] = useState("")

//   const [specOpen, setSpecOpen] = useState(false)
//   const [specialization, setSpecialization] = useState("")

//   const [experience, setExperience] = useState("")
//   const [skills, setSkills] = useState("")
//   const [bio, setBio] = useState("")
   
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

  

//   const handleCompleteProfile = async(e) => {
    
//     e.preventDefault();

//    try {
//      const response = await axios.post('http://localhost:5000/api/v1/user/profile', {
//        industry, specialization, 
//         skills: skills.split(",").map(s => s.trim())
//        , bio, experience
//      }, {
//        headers: {
//           "Content-Type": "application/json"
//        }, withCredentials: true
//      })
 
//      toast.success("profile completed...");
 
//      navigate("/dashboard");

//    } catch (error) {
    
//      console.log(`Some error occured by completing profile... ${error}`);
         

//    }
  

//   }

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">

//       <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)] space-y-5 overflow-visible">

//         {/* Heading */}
//         <div>
//           <h2 className="text-xl font-semibold">Complete Your Profile</h2>
//           <p className="text-sm text-gray-400">
//             Unlock AI-powered career insights
//           </p>
//         </div>

//         {/* Industry */}
//         <div className="relative">
//           <h2 className="text-base md:text-sg mb-2  text-gray-400 font-medium">Industry</h2>

//           <div 
//             onClick={() => setIndustryOpen(!industryOpen)}
//             className={`flex justify-between items-center px-4 py-2 rounded-xl 
//             cursor-pointer transition-all duration-300
//             ${
//               industryOpen
//                 ? "bg-black/10 border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
//                 : "bg-black/40 border border-white/20 hover:border-purple-400 hover:bg-black/50"
//             }`}
//           >
//             <span className={industry ? "text-white" : "text-gray-400"}>
//               {industry || "Select industry"}
//             </span>

//             <IoChevronDown 
//               className={`transition-transform duration-300 
//               ${industryOpen ? "rotate-180 text-purple-400" : "text-gray-300"}`} 
//             />
//           </div>

//           {industryOpen && (
//             <div className="absolute left-0 w-full mt-2 rounded-xl 
//             bg-black backdrop-blur-xl border border-white/20 
//             max-h-48 overflow-y-auto shadow-2xl z-50">
 
//            {industries.map((item, i) => (
//                 <div
//                   key={i}
//                   onClick={() => {
//                     setIndustry(item)
//                     setIndustryOpen(false)
//                   }}
//                   className={`px-4 py-3 text-sm cursor-pointer transition
//                   ${
//                     industry === item
//                       ? "bg-purple-500/30 text-white"
//                       : "text-gray-300 hover:bg-white/10"
//                   }`}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Specialization */}
//         <div className="relative">
//           <h2 className="text-base md:text-sg mb-2  text-gray-400 font-medium">
//            Specialization
//           </h2>

//           <div 
//             onClick={() => setSpecOpen(!specOpen)}
//             className={`flex justify-between items-center px-4 py-2 rounded-xl 
//             cursor-pointer transition-all duration-300
//             ${
//               specOpen
//                 ? "bg-black/60 border border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
//                 : "bg-black/40 border border-white/20 hover:border-indigo-400 hover:bg-black/50"
//             }`}
//           >
//             <span className={specialization ? "text-white" : "text-gray-400"}>
//               {specialization || "Select specialization"}
//             </span>

//             <IoChevronDown 
//               className={`transition-transform duration-300 
//               ${specOpen ? "rotate-180 text-indigo-400" : "text-gray-300"}`} 
//             />
//           </div>

//           {specOpen && (
//             <div className="absolute left-0 w-full mt-2 rounded-xl 
//             bg-black backdrop-blur-xl border border-white/20 
//             max-h-48 overflow-y-auto shadow-2xl z-50">

//               {specializations.map((item, i) => (
//                 <div
//                   key={i}
//                   onClick={() => {
//                     setSpecialization(item)
//                     setSpecOpen(false)
//                   }}
//                   className={`px-4 py-3 text-sm cursor-pointer transition
//                   ${
//                     specialization === item
//                       ? "bg-indigo-500/30 text-white"
//                       : "text-gray-300 hover:bg-white/10"
//                   }`}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Experience */}   
//         <div>
//           <h2 className="text-base md:text-sg font-medium mb-2 text-gray-400">Years of Experience</h2>
//           <input
//             type="number"
//             placeholder="e.g. 1, 2, 3..."
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
//           />
//         </div>

//         {/* Skills */}
//         <div>
//           <h2 className="text-base mb-2 md:text-sg font-medium text-gray-400">Skills</h2>
//           <input
//             type="text"
//             placeholder="e.g. React, Node.js, MongoDB"
//             value={skills}
//             onChange={(e) => setSkills(e.target.value)}
//             className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
//           />
//         </div>

//         {/* Bio */}
//         <div>
//           <h2 className="text-base md:text-sg font-medium mb-2 text-gray-400">Professional Bio</h2>
//           <textarea
//             placeholder="Tell us about your background..."
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             rows={3}
//             className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
//           />
//         </div>

//         {/* Button */}
//         <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold 
//         hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300" onClick={handleCompleteProfile}> 
//           Complete Profile 🚀
//         </button>

//       </div>

//     </section>
//   )
// }

// export default CompleteProfile




import axios from 'axios';
import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const industries = [
  "Software Development",
  "Data Science",
  "Artificial Intelligence",
  "Cyber Security",
  "Finance",
  "Marketing",
  "Product Management",
  "Human Resources"
];

const specializations = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Machine Learning Engineer",
  "Data Analyst",
  "DevOps Engineer"
];

const CompleteProfile = () => {

  const [industryOpen, setIndustryOpen] = useState(false)
  const [industry, setIndustry] = useState("")

  const [specOpen, setSpecOpen] = useState(false)
  const [specialization, setSpecialization] = useState("")

  const [experience, setExperience] = useState("")
  const [skills, setSkills] = useState("")
  const [bio, setBio] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleCompleteProfile = async (e) => {
    e.preventDefault()

    if (!industry || !specialization || !skills || !experience) {
      return toast.error("Please fill all required fields")
    }

    try {
      setLoading(true)

      const response = await axios.post(
        'http://localhost:5000/api/v1/user/profile',
        {
          industry,
          specialization,
          skills: skills.split(",").map(s => s.trim()),
          bio,
          experience
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      )

      toast.success("Profile completed successfully 🚀")
      navigate("/")

    } catch (error) {
      toast.error(error.response?.data?.message || "Profile update failed ❌")
      console.log(error)

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">

      <div className="w-full max-w-md p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10 
      shadow-[0_0_40px_rgba(168,85,247,0.2)] space-y-5">

        {/* Heading */}
        <div>
          <h2 className="text-xl font-semibold">Complete Your Profile</h2>
          <p className="text-sm text-gray-400">
            Unlock AI-powered career insights
          </p>
        </div>

        {/* INDUSTRY */}
        <div className="relative">
          <h2 className="text-sm mb-2 text-gray-400">Industry</h2>

          <div
            onClick={() => setIndustryOpen(!industryOpen)}
            className="flex justify-between items-center px-4 py-3 rounded-xl 
            bg-black/40 border border-white/20 cursor-pointer hover:border-purple-400"
          >
            <span className={industry ? "text-white" : "text-gray-400"}>
              {industry || "Select industry"}
            </span>

            <IoChevronDown
              className={`transition-transform ${industryOpen ? "rotate-180 text-purple-400" : ""}`}
            />
          </div>

          {industryOpen && (
            <div className="absolute w-full mt-2 bg-black/80 border border-white/20 rounded-xl max-h-48 overflow-y-auto z-50">
              {industries.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setIndustry(item)
                    setIndustryOpen(false)
                  }}
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SPECIALIZATION */}
        <div className="relative">
          <h2 className="text-sm mb-2 text-gray-400">Specialization</h2>

          <div
            onClick={() => setSpecOpen(!specOpen)}
            className="flex justify-between items-center px-4 py-3 rounded-xl 
            bg-black/40 border border-white/20 cursor-pointer hover:border-indigo-400"
          >
            <span className={specialization ? "text-white" : "text-gray-400"}>
              {specialization || "Select specialization"}
            </span>

            <IoChevronDown
              className={`transition-transform ${specOpen ? "rotate-180 text-indigo-400" : ""}`}
            />
          </div>

          {specOpen && (
            <div className="absolute w-full mt-2 bg-black/80 border border-white/20 rounded-xl max-h-48 overflow-y-auto z-50">
              {specializations.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSpecialization(item)
                    setSpecOpen(false)
                  }}
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* EXPERIENCE */}
        <div>
          <h2 className="text-sm mb-2 text-gray-400">Experience (Years)</h2>
          <input
            type="number"
            placeholder="e.g. 1, 2, 3..."
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20"
          />
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-sm mb-2 text-gray-400">Skills</h2>
          <input
            type="text"
            placeholder="React, Node.js, MongoDB"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20"
          />
        </div>

        {/* BIO */}
        <div>
          <h2 className="text-sm mb-2 text-gray-400">Bio</h2>
          <textarea
            placeholder="Tell about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20"
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          onClick={handleCompleteProfile}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
          bg-gradient-to-r from-purple-500 to-indigo-500 
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"}`}
        >
          {loading ? "Saving..." : "Complete Profile 🚀"}
        </button>

      </div>

    </section>
  )
}

export default CompleteProfile