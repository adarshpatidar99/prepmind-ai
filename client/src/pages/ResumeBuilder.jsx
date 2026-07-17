// import React, { useState } from 'react'
// import Navbar from '../components/common/Navbar'
// import { IoSaveSharp } from "react-icons/io5";
// import { FaFileDownload } from "react-icons/fa";

// const ResumeBuilder = () => {

//    const [addExperience, setAddExperience ] = useState(false);
//    const [fullName, setFullName] = useState("");
//    const [email, setEmail] = useState("");
//    const [linkedinUrl, setLinkedinUrl] = useState("");
//    const [github, setGithub] = useState("");
//    const [professionalSummary, setProfessionalSummary] = useState("");
//    const [skills, setSkills] = useState("");
//    const [company, setCompany] = useState("");
//    const [startDate, setStartDate] = useState("");
//    const [experience, setExperience] = useState("");
//    const [endDate, setEndDate] = useState("");
//    const [position, setPosition] = useState("");
//    const [setEduStartDate, setEduStartDate] = useState("");
//    const [setEduEndDate, setEduEndDate] = useState("");
//    const [education, setEducation] = useState("");


//   return (
//     <>
     
//      <div className='min-h-screen px-6 py-10 text-white bg-gradient-to-br from-purple-900 via-black to-indigo-900'>

//           <div className=''>
//          <Navbar />
//          </div>

//          <section className=''>

//             <div className=''>
//               <h1 className=''>
//                Resume Builder
//               </h1>
//             </div>

//             <div className=''>
//               <span className=''><button>Form</button> <button className=''>Markdown</button></span>
//             </div>

//             <div className=''>
//               <div className=''>
//                <button className=''><IoSaveSharp />Save</button>
//                <span className=''><FaFileDownload /><button className=''>Download PDF</button></span>
//               </div>
//             </div>

//             <div className=''>
               
//                <div className=''>
//                  <h3 className='' >Full Name</h3>
//                  <input type='text' onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder='adarsh patidar' />
//                </div>
               
//                <div className=''>
//                  <h3 className='' >Email</h3>
//                  <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='my@gmail.com' />
//                </div>

//                <div className=''>
//                  <h3 className='' >LinkedIn URL</h3>
//                  <input type='url' onChange={(e) => setLinkedinUrl(e.target.value)} value={linkedinUrl} placeholder='http://linkedin.com/in/adarsh patidar' />
//                </div>

//                <div className=''>
//                  <h3 className='' >Github URL</h3>
//                  <input type='url' placeholder='http://github.com/in/adarsh patidar9' />
//                </div>

//             </div>


//              <div className=''>
               
//                 <div className=''>
//                  <h3 className='' >Professional Summary</h3>
//                  <textarea type='text' rows={4} cols={10} placeholder='write you professional summary...' />
//                </div>

//             </div>


//                <div className=''>
               
//                <div className=''>
//                  <h3 className='' >Skills</h3>
//                  <textarea type='text' rows={2} cols={8} placeholder=' write your skills...' />
//                </div>

//             </div>

    
//              {/* work expience */}
       
//             <div className=''>
//                <h3 className='' >Work Experience</h3>  
               
//                <div className=''>
                  
//                   <h2 className=''>
//                      Add Experience
//                   </h2>

//                   <input type='text' placeholder='Position/Title' value={position} onChange={(e) => setPosition(e.target.value)} />

//                   <input type='text' placeholder='Company/Organization' value={company} onChange={(e) => setCompany(e.target.value)} />

//                   <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />

//                   <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />

//                   <h3 className=''>Current Experience</h3>
//                   <textarea type='text' value={experience}
//                   onChange={(e) => setExperience(e.target.value)}
//                   placeholder='Description of your Professional Experience' />

//                   <div className=''>
//                      <button className=''>Improve with Ai</button>
//                   </div>

//                   <div className=''>
//                      <button className=''>
//                        Cancel
//                      </button>
//                      <button className=''>
//                        Add
//                      </button>
//                   </div>

//                </div>


                        
//             </div>          
  

//             {/* education */}

//              <div className=''>
//                <h3 className='' >Education</h3>  
               
//                <div className=''>
                  
//                   <h2 className=''>
//                      Add Education
//                   </h2>

//                   <input type='text' placeholder='Position/Title' value={position} onChange={(e) => setPosition(e.target.value)} />

//                   <input type='text' placeholder='Company/Organization' value={company} onChange={(e) => setCompany(e.target.value)} />

//                   <input type='date' value={startDate} onChange={(e) => setEduStartDate(e.target.value)} />

//                   <input type='date' value={endDate} onChange={(e) => setEduEndDate(e.target.value)} />

//                   <h3 className=''>Current Education</h3>
//                   <textarea type='text' value={education}
//                   onChange={(e) => setEducation(e.target.value)}
//                   placeholder='Description of your  Education' />                 

//                   <div className=''>
//                      <button className=''>Improve with Ai</button>
//                   </div>

//                   <div className=''>
//                      <button className=''>
//                        Cancel
//                      </button>
//                      <button className=''>
//                        Add
//                      </button>
//                   </div>

//                </div>


                        
//             </div>  



//               <div className=''>
//                <h3 className='' >Projects</h3>  
               
//                <div className=''>
                  
//                   <h2 className=''>
//                      Add Projects
//                   </h2>

//                   <input type='text' placeholder='Position/Title' value={position} onChange={(e) => setPosition(e.target.value)} />

//                   <input type='text' placeholder='Company/Organization' value={company} onChange={(e) => setCompany(e.target.value)} />

//                   <input type='date' value={startDate} onChange={(e) => setEduStartDate(e.target.value)} />

//                   <input type='date' value={endDate} onChange={(e) => setEduEndDate(e.target.value)} />

//                   <h3 className=''>Current Education</h3>
//                   <textarea type='text' value={education}
//                   onChange={(e) => setEducation(e.target.value)}
//                   placeholder='Description of your  Education' />                 

//                   <div className=''>
//                      <button className=''>Improve with Ai</button>
//                   </div>

//                   <div className=''>
//                      <button className=''>
//                        Cancel
//                      </button>
//                      <button className=''>
//                        Add
//                      </button>
//                   </div>

//                </div>


                        
//             </div>  
           

//          </section>

//      </div>

   
    
//     </>
//   )
// }

// export default ResumeBuilder








// import React, { useState } from "react";
// import Navbar from "../components/common/Navbar";
// import { IoSaveSharp } from "react-icons/io5";
// import { FaFileDownload } from "react-icons/fa";

// const ResumeBuilder = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [linkedinUrl, setLinkedinUrl] = useState("");
//   const [github, setGithub] = useState("");
//   const [professionalSummary, setProfessionalSummary] = useState("");
//   const [skills, setSkills] = useState("");

//   const [company, setCompany] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [experience, setExperience] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [position, setPosition] = useState("");

//   const [eduStartDate, setEduStartDate] = useState("");
//   const [eduEndDate, setEduEndDate] = useState("");
//   const [education, setEducation] = useState("");

//   const [projects, setProjects] = useState("");
//   const [projectExperience, seProjectExperience] = useState("");

//   const [achievements, setAchievements] = useState("");

//   const [openAddExp, setOpenAddExp] = useState(false);
  
//   const [formOpen, setFormOpen] = useState(true);
//   const [previewOpen, setPreviewOpen] = useState(false);

  

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen px-6 py-24 text-white bg-gradient-to-br from-purple-900 via-black to-indigo-900">

//         {/* HEADER */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

//           <div>
//             <h1 className="text-4xl font-bold">
//               Resume{" "}
//               <span className="text-indigo-300">
//                 Builder
//               </span>
//             </h1>

//             <p className="text-gray-400 mt-2 text-sm">
//               Build ATS friendly resumes with AI assistance
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-3">

//               <div className="">
//                <span className="">
//                   <button onClick={setFormOpen(!formOpen)} className="">Form</button>
//                   <button className="ml-5" onClick={setPreviewOpen(!previewOpen)} >Preview</button></span>
//             </div>

//             <button
//               className="flex items-center gap-2 px-4 py-2 rounded-xl
//               bg-white/10 border border-white/10 hover:bg-white/20 transition"
//             >
//               <IoSaveSharp />
//               Save
//             </button>

//             <button
//               className="flex items-center gap-2 px-4 py-2 rounded-xl
//               bg-indigo-500 hover:bg-indigo-600 transition"
//             >
//               <FaFileDownload />
//               Download PDF
//             </button>

          

//           </div>

//         </div>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* LEFT SIDE FORM */}
         
//            { formOpen ? (
//             <>
             
//                <div className="space-y-6">

//             {/* PERSONAL INFO */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <h2 className="text-xl font-semibold mb-5">
//                 Personal Information
//               </h2>

//               <div className="space-y-4">

//                 <div>
//                   <label className="text-sm text-gray-300">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Adarsh Patidar"
//                     className="w-full mt-2 px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="my@gmail.com"
//                     className="w-full mt-2 px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">
//                     LinkedIn URL
//                   </label>

//                   <input
//                     type="url"
//                     value={linkedinUrl}
//                     onChange={(e) => setLinkedinUrl(e.target.value)}
//                     placeholder="linkedin.com/in/adarsh"
//                     className="w-full mt-2 px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">
//                     GitHub URL
//                   </label>

//                   <input
//                     type="url"
//                     value={github}
//                     onChange={(e) => setGithub(e.target.value)}
//                     placeholder="github.com/adarsh"
//                     className="w-full mt-2 px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />
//                 </div>

//               </div>
//             </div>

//             {/* SUMMARY */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <h2 className="text-xl font-semibold mb-5">
//                 Professional Summary
//               </h2>

              

//               <textarea
//                 rows={5}
//                 value={professionalSummary}
//                 onChange={(e) =>
//                   setProfessionalSummary(e.target.value)
//                 }
//                 placeholder="Write your professional summary..."
//                 className="w-full px-4 py-3 rounded-xl
//                 bg-white/5 border border-white/10 outline-none
//                 focus:border-indigo-400 resize-none"
//               />
//                 <button
//                   className="px-4 py-2 rounded-lg
//                   bg-indigo-500 hover:bg-indigo-600 transition text-sm"
//                 >
//                   Improve with AI
//                 </button>

//             </div>

//             {/* SKILLS */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <h2 className="text-xl font-semibold mb-5">
//                 Skills
//               </h2>

//               <textarea
//                 rows={3}
//                 value={skills}
//                 onChange={(e) => setSkills(e.target.value)}
//                 placeholder="React, Node.js, MongoDB, AWS..."
//                 className="w-full px-4 py-3 rounded-xl
//                 bg-white/5 border border-white/10 outline-none
//                 focus:border-indigo-400 resize-none"
//               />

//             </div>

//             {/* EXPERIENCE */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <div className="flex items-center justify-between mb-5">
//                 <h2 className="text-xl font-semibold">
//                   Work Experience
//                 </h2>

         
//               </div>

//               <div className="space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Position / Title"
//                   value={position}
//                   onChange={(e) => setPosition(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Company / Organization"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400"
//                 />

//                 <div className="grid grid-cols-2 gap-4">

//                   <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                   <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                 </div>

//                 <textarea
//                   rows={4}
//                   value={experience}
//                   onChange={(e) => setExperience(e.target.value)}
//                   placeholder="Describe your professional experience..."
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400 resize-none"
//                 />

//                   <button
//                   className="px-4 py-2 rounded-lg
//                   bg-indigo-500 hover:bg-indigo-600 transition text-sm"
//                 >
//                   Improve with AI
//                 </button>

//               </div>
//             </div>

//             {/* EDUCATION */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <h2 className="text-xl font-semibold mb-5">
//                 Education
//               </h2>


//               <div className="space-y-4">

//                 <input
//                   type="text"
//                   placeholder="College / University"
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400"
//                 />

//                 <div className="grid grid-cols-2 gap-4">

//                   <input
//                     type="date"
//                     value={eduStartDate}
//                     onChange={(e) => setEduStartDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                   <input
//                     type="date"
//                     value={eduEndDate}
//                     onChange={(e) => setEduEndDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                 </div>

//                 <textarea
//                   rows={4}
//                   value={education}
//                   onChange={(e) => setEducation(e.target.value)}
//                   placeholder="Describe your education..."
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400 resize-none"
//                 />

//               </div>
//             </div>

//             {/* PROJECTS */}
//              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <div className="flex items-center justify-between mb-5">
//                 <h2 className="text-xl font-semibold">
//                    Projects
//                 </h2>

                
//               </div>

//               <div className="space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Name / Title"
//                   value={projects}
//                   onChange={(e) => setProjects(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400"
//                 />

//                 {/* <input
//                   type="text"
//                   placeholder="Company / Organization"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400"
//                 /> */}

//                 <div className="grid grid-cols-2 gap-4">

//                   <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                   <input
//                     type="date"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                     className="px-4 py-3 rounded-xl
//                     bg-white/5 border border-white/10 outline-none
//                     focus:border-indigo-400"
//                   />

//                 </div>

//                 <textarea
//                   rows={4}
//                   value={projectExperience}
//                   onChange={(e) => setProjectExperience(e.target.value)}
//                   placeholder="Describe your project experience..."
//                   className="w-full px-4 py-3 rounded-xl
//                   bg-white/5 border border-white/10 outline-none
//                   focus:border-indigo-400 resize-none"
//                 />

//                 <button
//                   className="px-4 py-2 rounded-lg
//                   bg-indigo-500 hover:bg-indigo-600 transition text-sm"
//                 >
//                   Improve with AI
//                 </button>

//               </div>
//             </div>

//               {/* ACHIEVEMENTS */}
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

//               <h2 className="text-xl font-semibold mb-5">
//                 Achievements
//               </h2>

//               <textarea
//                 rows={6}
//                 value={achievements}
//                 onChange={(e) => setAchievements(e.target.value)}
//                 placeholder="React, Node.js, MongoDB, AWS..."
//                 className="w-full px-4 py-3 rounded-xl
//                 bg-white/5 border border-white/10 outline-none
//                 focus:border-indigo-400 resize-none"
//               />

//                <button
//                   className="px-4 py-2 rounded-lg
//                   bg-indigo-500 hover:bg-indigo-600 transition text-sm"
//                 >
//                   Improve with AI
//                 </button>

//             </div>

//           </div>

//             </>
//            ) 
                    
//            }
         



          

//           {/* RIGHT SIDE PREVIEW */}

//           { previewOpen ? (
//             <>
            
//                         <div className="sticky top-24 h-fit">

//             <div className="bg-white text-black rounded-2xl p-8 shadow-2xl">

//               <h1 className="text-3xl font-bold">
//                 {fullName || "Your Name"}
//               </h1>

//               <p className="text-gray-600 mt-1">
//                 {email || "your@email.com"}
//               </p>

//               <div className="mt-6">

//                 <h2 className="text-lg font-semibold border-b pb-2">
//                   Professional Summary
//                 </h2>

//                 <p className="text-sm mt-3 text-gray-700">
//                   {professionalSummary ||
//                     "Your professional summary will appear here..."}
//                 </p>

//               </div>

//               <div className="mt-6">

//                 <h2 className="text-lg font-semibold border-b pb-2">
//                   Skills
//                 </h2>

//                 <p className="text-sm mt-3 text-gray-700">
//                   {skills || "Your skills will appear here..."}
//                 </p>

//               </div>

//               <div className="mt-6">

//                 <h2 className="text-lg font-semibold border-b pb-2">
//                   Experience
//                 </h2>

//                 <div className="mt-3">
//                   <h3 className="font-semibold">
//                     {position || "Position"}
//                   </h3>

//                   <p className="text-sm text-gray-600">
//                     {company || "Company"}
//                   </p>

//                   <p className="text-sm mt-2 text-gray-700">
//                     {experience ||
//                       "Your experience details will appear here..."}
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
            
//             </>
//           )}


//         </div>

//       </div>
//     </>
//   );
// };

// export default ResumeBuilder;













// import React, { useState } from "react";
// import Navbar from "../components/common/Navbar";
// import { IoSaveSharp } from "react-icons/io5";
// import { FaFileDownload, FaEye } from "react-icons/fa";

// const ResumeBuilder = () => {

//   const [showPreview, setShowPreview] = useState(false);

//   // PERSONAL INFO
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [linkedinUrl, setLinkedinUrl] = useState("");
//   const [github, setGithub] = useState("");

//   // SUMMARY
//   const [professionalSummary, setProfessionalSummary] = useState("");

//   // SKILLS
//   const [skills, setSkills] = useState("");

//   // EXPERIENCE
//   const [company, setCompany] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [position, setPosition] = useState("");
//   const [experience, setExperience] = useState("");

//   // EDUCATION
//   const [education, setEducation] = useState("");
//   const [eduStartDate, setEduStartDate] = useState("");
//   const [eduEndDate, setEduEndDate] = useState("");

//   // PROJECTS
//   const [projects, setProjects] = useState("");
//   const [projectExperience, setProjectExperience] = useState("");

//   // ACHIEVEMENTS
//   const [achievements, setAchievements] = useState("");

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen px-6 py-24 text-white bg-gradient-to-br from-[#12081f] via-[#050816] to-[#0f172a]">

//         {/* HEADER */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">

//           <div>
//             <h1 className="text-4xl font-bold tracking-tight">
//               Resume{" "}
//               <span className="text-indigo-400">
//                 Builder
//               </span>
//             </h1>

//             <p className="text-gray-400 mt-2">
//               Build modern ATS-friendly resumes with AI
//             </p>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-3 flex-wrap">

//             <button
//               className="flex items-center gap-2 px-5 py-3 rounded-2xl
//               bg-white/5 border border-white/10
//               hover:bg-white/10 transition-all duration-300"
//             >
//               <IoSaveSharp />
//               Save
//             </button>

//             <button
//               className="flex items-center gap-2 px-5 py-3 rounded-2xl
//               bg-indigo-500 hover:bg-indigo-600
//               transition-all duration-300"
//             >
//               <FaFileDownload />
//               Download PDF
//             </button>

//             <button
//               onClick={() => setShowPreview(true)}
//               className="flex items-center gap-2 px-5 py-3 rounded-2xl
//               bg-emerald-500 hover:bg-emerald-600
//               transition-all duration-300 shadow-lg shadow-emerald-500/20"
//             >
//               <FaEye />
//               Preview Resume
//             </button>

//           </div>

//         </div>

//         {/* FORM */}
//         <div className="max-w-5xl mx-auto space-y-6">

//           {/* PERSONAL INFO */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <h2 className="text-2xl font-semibold mb-6">
//               Personal Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-5">

//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <input
//                 type="url"
//                 placeholder="LinkedIn URL"
//                 value={linkedinUrl}
//                 onChange={(e) => setLinkedinUrl(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <input
//                 type="url"
//                 placeholder="GitHub URL"
//                 value={github}
//                 onChange={(e) => setGithub(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//             </div>

//           </div>

//           {/* SUMMARY */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <div className="flex items-center justify-between mb-5">

//               <h2 className="text-2xl font-semibold">
//                 Professional Summary
//               </h2>

//               <button
//                 className="px-4 py-2 rounded-xl
//                 bg-indigo-500 hover:bg-indigo-600
//                 text-sm transition"
//               >
//                 Improve with AI
//               </button>

//             </div>

//             <textarea
//               rows={5}
//               value={professionalSummary}
//               onChange={(e) => setProfessionalSummary(e.target.value)}
//               placeholder="Write your professional summary..."
//               className="w-full px-4 py-4 rounded-2xl
//               bg-white/5 border border-white/10
//               outline-none resize-none focus:border-indigo-400"
//             />

//           </div>

//           {/* SKILLS */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <h2 className="text-2xl font-semibold mb-5">
//               Skills
//             </h2>

//             <textarea
//               rows={3}
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//               placeholder="React, Node.js, MongoDB, AWS..."
//               className="w-full px-4 py-4 rounded-2xl
//               bg-white/5 border border-white/10
//               outline-none resize-none focus:border-indigo-400"
//             />

//           </div>

//           {/* EXPERIENCE */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <div className="flex items-center justify-between mb-5">

//               <h2 className="text-2xl font-semibold">
//                 Work Experience
//               </h2>

//               <button
//                 className="px-4 py-2 rounded-xl
//                 bg-indigo-500 hover:bg-indigo-600
//                 text-sm transition"
//               >
//                 Improve with AI
//               </button>

//             </div>

//             <div className="space-y-5">

//               <input
//                 type="text"
//                 placeholder="Position / Title"
//                 value={position}
//                 onChange={(e) => setPosition(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 value={company}
//                 onChange={(e) => setCompany(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <div className="grid md:grid-cols-2 gap-4">

//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className="px-4 py-3 rounded-2xl
//                   bg-white/5 border border-white/10
//                   outline-none focus:border-indigo-400"
//                 />

//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className="px-4 py-3 rounded-2xl
//                   bg-white/5 border border-white/10
//                   outline-none focus:border-indigo-400"
//                 />

//               </div>

//               <textarea
//                 rows={4}
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 placeholder="Describe your work experience..."
//                 className="w-full px-4 py-4 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none resize-none focus:border-indigo-400"
//               />

//             </div>

//           </div>

//           {/* EDUCATION */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <h2 className="text-2xl font-semibold mb-5">
//               Education
//             </h2>

//             <div className="space-y-5">

//               <textarea
//                 rows={4}
//                 value={education}
//                 onChange={(e) => setEducation(e.target.value)}
//                 placeholder="Describe your education..."
//                 className="w-full px-4 py-4 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none resize-none focus:border-indigo-400"
//               />

//               <div className="grid md:grid-cols-2 gap-4">

//                 <input
//                   type="date"
//                   value={eduStartDate}
//                   onChange={(e) => setEduStartDate(e.target.value)}
//                   className="px-4 py-3 rounded-2xl
//                   bg-white/5 border border-white/10
//                   outline-none focus:border-indigo-400"
//                 />

//                 <input
//                   type="date"
//                   value={eduEndDate}
//                   onChange={(e) => setEduEndDate(e.target.value)}
//                   className="px-4 py-3 rounded-2xl
//                   bg-white/5 border border-white/10
//                   outline-none focus:border-indigo-400"
//                 />

//               </div>

//             </div>

//           </div>

//           {/* PROJECTS */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <h2 className="text-2xl font-semibold mb-5">
//               Projects
//             </h2>

//             <div className="space-y-5">

//               <input
//                 type="text"
//                 placeholder="Project Name"
//                 value={projects}
//                 onChange={(e) => setProjects(e.target.value)}
//                 className="w-full px-4 py-3 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none focus:border-indigo-400"
//               />

//               <textarea
//                 rows={4}
//                 value={projectExperience}
//                 onChange={(e) => setProjectExperience(e.target.value)}
//                 placeholder="Describe your project..."
//                 className="w-full px-4 py-4 rounded-2xl
//                 bg-white/5 border border-white/10
//                 outline-none resize-none focus:border-indigo-400"
//               />

//             </div>

//           </div>

//           {/* ACHIEVEMENTS */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

//             <h2 className="text-2xl font-semibold mb-5">
//               Achievements
//             </h2>

//             <textarea
//               rows={5}
//               value={achievements}
//               onChange={(e) => setAchievements(e.target.value)}
//               placeholder="Write your achievements..."
//               className="w-full px-4 py-4 rounded-2xl
//               bg-white/5 border border-white/10
//               outline-none resize-none focus:border-indigo-400"
//             />

//           </div>

//         </div>

//       </div>

//       {/* PREVIEW MODAL */}
//       {showPreview && (

//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">

//           {/* CLOSE BACKDROP */}
//           <div
//             className="flex-1"
//             onClick={() => setShowPreview(false)}
//           ></div>

//           {/* PREVIEW PANEL */}
//           <div
//             className="w-full md:w-[720px] h-screen overflow-y-auto
//             bg-white text-black shadow-2xl"
//           >

//             {/* TOP */}
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-20">

//               <h2 className="text-2xl font-bold">
//                 Resume Preview
//               </h2>

//               <button
//                 onClick={() => setShowPreview(false)}
//                 className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
//               >
//                 Close
//               </button>

//             </div>

//             {/* CONTENT */}
//             <div className="p-10">

//               {/* HEADER */}
//               <div className="border-b pb-6">

//                 <h1 className="text-4xl font-bold">
//                   {fullName || "Your Name"}
//                 </h1>

//                 <p className="text-gray-600 mt-2">
//                   {email || "your@email.com"}
//                 </p>

//                 <div className="flex flex-wrap gap-4 mt-3 text-indigo-600 text-sm">
//                   <span>{linkedinUrl || "linkedin.com/in/username"}</span>
//                   <span>{github || "github.com/username"}</span>
//                 </div>

//               </div>

//               {/* SUMMARY */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Professional Summary
//                 </h2>

//                 <p className="mt-4 text-gray-700 leading-7">
//                   {professionalSummary || "Your summary will appear here..."}
//                 </p>

//               </div>

//               {/* SKILLS */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Skills
//                 </h2>

//                 <div className="flex flex-wrap gap-3 mt-4">

//                   {(skills
//                     ? skills.split(",")
//                     : ["React", "Node.js", "MongoDB"]
//                   ).map((skill, i) => (

//                     <span
//                       key={i}
//                       className="px-4 py-2 rounded-full
//                       bg-indigo-100 text-indigo-700 text-sm"
//                     >
//                       {skill.trim()}
//                     </span>

//                   ))}

//                 </div>

//               </div>

//               {/* EXPERIENCE */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Experience
//                 </h2>

//                 <div className="mt-4">

//                   <h3 className="text-lg font-semibold">
//                     {position || "Frontend Developer"}
//                   </h3>

//                   <p className="text-indigo-600">
//                     {company || "Company Name"}
//                   </p>

//                   <p className="text-sm text-gray-500 mt-1">
//                     {startDate || "2025"} - {endDate || "Present"}
//                   </p>

//                   <p className="mt-3 text-gray-700 leading-7">
//                     {experience || "Experience details will appear here..."}
//                   </p>

//                 </div>

//               </div>

//               {/* EDUCATION */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Education
//                 </h2>

//                 <p className="mt-4 text-gray-700 leading-7">
//                   {education || "Education details will appear here..."}
//                 </p>

//               </div>

//               {/* PROJECTS */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Projects
//                 </h2>

//                 <div className="mt-4">

//                   <h3 className="text-lg font-semibold">
//                     {projects || "AI Career Agent"}
//                   </h3>

//                   <p className="mt-3 text-gray-700 leading-7">
//                     {projectExperience || "Project details will appear here..."}
//                   </p>

//                 </div>

//               </div>

//               {/* ACHIEVEMENTS */}
//               <div className="mt-8">

//                 <h2 className="text-xl font-bold border-b pb-2">
//                   Achievements
//                 </h2>

//                 <p className="mt-4 text-gray-700 leading-7 whitespace-pre-line">
//                   {achievements || "Achievements will appear here..."}
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}

//     </>
//   );
// };

// export default ResumeBuilder;






import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { IoSaveSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

const ResumeBuilder = () => {
  // =========================
  // PERSONAL INFO
  // =========================
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [github, setGithub] = useState("");

  // =========================
  // SUMMARY
  // =========================
  const [professionalSummary, setProfessionalSummary] = useState("");

  // =========================
  // SKILLS
  // =========================
  const [skills, setSkills] = useState("");

  // =========================
  // EXPERIENCE
  // =========================
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [experience, setExperience] = useState("");

  // =========================
  // EDUCATION
  // =========================
  const [college, setCollege] = useState("");
  const [eduStartDate, setEduStartDate] = useState("");
  const [eduEndDate, setEduEndDate] = useState("");
  const [education, setEducation] = useState("");

  // =========================
  // PROJECTS
  // =========================
  const [projects, setProjects] = useState("");
  const [projectExperience, setProjectExperience] = useState("");

  // =========================
  // ACHIEVEMENTS
  // =========================
  const [achievements, setAchievements] = useState("");

  // =========================
  // TOGGLE STATES
  // =========================
  const [formOpen, setFormOpen] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(true);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4 sm:px-6 py-24">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
          
          <div>
            <h1 className="text-4xl font-bold">
              Resume{" "}
              <span className="text-indigo-300">
                Builder
              </span>
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
              Build ATS friendly resumes with AI assistance
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* TOGGLE BUTTONS */}
            <div className="bg-white/10 border border-white/10 rounded-xl p-1 flex">
              
              <button
                onClick={() => {
                  setFormOpen(true);
                  setPreviewOpen(false);
                }}
                className={`px-4 py-2 rounded-lg transition ${
                  formOpen
                    ? "bg-indigo-500"
                    : "hover:bg-white/10"
                }`}
              >
                Form
              </button>

              <button
                onClick={() => {
                  setPreviewOpen(true);
                  setFormOpen(false);
                }}
                className={`px-4 py-2 rounded-lg transition ${
                  previewOpen
                    ? "bg-indigo-500"
                    : "hover:bg-white/10"
                }`}
              >
                Preview
              </button>
            </div>

            {/* SAVE BUTTON */}
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-white/10 border border-white/10 hover:bg-white/20 transition"
            >
              <IoSaveSharp />
              Save
            </button>

            {/* DOWNLOAD BUTTON */}
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-indigo-500 hover:bg-indigo-600 transition"
            >
              <FaFileDownload />
              Download PDF
            </button>
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div
          className={`grid gap-6 ${
            formOpen && previewOpen
              ? "lg:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
 
          {/* ===================================================== */}
          {/* ====================== FORM ========================= */}
          {/* ===================================================== */}

          {formOpen && (
            <div className="space-y-6">

              {/* PERSONAL INFO */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Personal Information
                </h2>

                <div className="space-y-4">

                  <div>
                    <label className="text-sm text-gray-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Adarsh Patidar"
                      className="w-full mt-2 px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="my@gmail.com"
                      className="w-full mt-2 px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">
                      LinkedIn URL
                    </label>

                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="linkedin.com/in/adarsh"
                      className="w-full mt-2 px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">
                      GitHub URL
                    </label>

                    <input
                      type="url"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="github.com/adarsh"
                      className="w-full mt-2 px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                </div>
              </div>

              {/* SUMMARY */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Professional Summary
                </h2>

                <textarea
                  rows={5}
                  value={professionalSummary}
                  onChange={(e) =>
                    setProfessionalSummary(e.target.value)
                  }
                  placeholder="Write your professional summary..."
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/5 border border-white/10 outline-none
                  focus:border-indigo-400 resize-none"
                />

                <button
                  className="mt-4 px-4 py-2 rounded-lg
                  bg-indigo-500 hover:bg-indigo-600 transition text-sm"
                >
                  Improve with AI
                </button>
              </div>

              {/* SKILLS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Skills
                </h2>

                <textarea
                  rows={3}
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, Node.js, MongoDB, AWS..."
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/5 border border-white/10 outline-none
                  focus:border-indigo-400 resize-none"
                />
              </div>

              {/* EXPERIENCE */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Work Experience
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Position / Title"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400"
                  />

                  <input
                    type="text"
                    placeholder="Company / Organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />

                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                  <textarea
                    rows={4}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Describe your professional experience..."
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400 resize-none"
                  />

                </div>
              </div>

              {/* EDUCATION */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Education
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="College / University"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <input
                      type="date"
                      value={eduStartDate}
                      onChange={(e) =>
                        setEduStartDate(e.target.value)
                      }
                      className="px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />

                    <input
                      type="date"
                      value={eduEndDate}
                      onChange={(e) =>
                        setEduEndDate(e.target.value)
                      }
                      className="px-4 py-3 rounded-xl
                      bg-white/5 border border-white/10 outline-none
                      focus:border-indigo-400"
                    />
                  </div>

                  <textarea
                    rows={4}
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Describe your education..."
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400 resize-none"
                  />
                </div>
              </div>

              {/* PROJECTS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Projects
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Project Name"
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400"
                  />

                  <textarea
                    rows={4}
                    value={projectExperience}
                    onChange={(e) =>
                      setProjectExperience(e.target.value)
                    }
                    placeholder="Describe your project..."
                    className="w-full px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10 outline-none
                    focus:border-indigo-400 resize-none"
                  />
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                
                <h2 className="text-xl font-semibold mb-5">
                  Achievements
                </h2>

                <textarea
                  rows={5}
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                  placeholder="Achievements..."
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/5 border border-white/10 outline-none
                  focus:border-indigo-400 resize-none"
                />
              </div>
            </div>
          )}

          {/* ===================================================== */}
          {/* ===================== PREVIEW ======================= */}
          {/* ===================================================== */}

          {previewOpen && (
            <div className="sticky top-24 h-fit">
              
              <div className="bg-white text-black rounded-2xl p-8 shadow-2xl">

                {/* NAME */}
                <h1 className="text-3xl font-bold">
                  {fullName || "Your Name"}
                </h1>

                {/* CONTACT */}
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  
                  <p>
                    {email || "your@email.com"}
                  </p>

                  <p>
                    {linkedinUrl || "linkedin.com/in/username"}
                  </p>

                  <p>
                    {github || "github.com/username"}
                  </p>
                </div>

                {/* SUMMARY */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Professional Summary
                  </h2>

                  <p className="text-sm mt-3 text-gray-700">
                    {professionalSummary ||
                      "Your professional summary will appear here..."}
                  </p>
                </div>

                {/* SKILLS */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Skills
                  </h2>

                  <p className="text-sm mt-3 text-gray-700">
                    {skills || "Your skills will appear here..."}
                  </p>
                </div>

                {/* EXPERIENCE */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Experience
                  </h2>

                  <div className="mt-3">

                    <h3 className="font-semibold">
                      {position || "Position"}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {company || "Company"}
                    </p>

                    <p className="text-sm text-gray-500">
                      {startDate || "Start"} -{" "}
                      {endDate || "End"}
                    </p>

                    <p className="text-sm mt-2 text-gray-700">
                      {experience ||
                        "Your experience details will appear here..."}
                    </p>
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Education
                  </h2>

                  <div className="mt-3">

                    <h3 className="font-semibold">
                      {college || "College Name"}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {eduStartDate || "Start"} -{" "}
                      {eduEndDate || "End"}
                    </p>

                    <p className="text-sm mt-2 text-gray-700">
                      {education ||
                        "Your education details will appear here..."}
                    </p>
                  </div>
                </div>

                {/* PROJECTS */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Projects
                  </h2>

                  <div className="mt-3">

                    <h3 className="font-semibold">
                      {projects || "Project Name"}
                    </h3>

                    <p className="text-sm mt-2 text-gray-700">
                      {projectExperience ||
                        "Project details will appear here..."}
                    </p>
                  </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="mt-6">
                  
                  <h2 className="text-lg font-semibold border-b pb-2">
                    Achievements
                  </h2>

                  <p className="text-sm mt-3 text-gray-700 whitespace-pre-line">
                    {achievements ||
                      "Your achievements will appear here..."}
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;