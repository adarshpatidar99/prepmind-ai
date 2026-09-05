// import React, { useState } from "react";
// import {
//   Wand2,
//   Download,
//   Eye,
//   FileText,
//   Plus,
//   ArrowLeft,
//   Trash2,
// } from "lucide-react";
// import {
//   BsPerson,
//   BsBriefcase,
// } from "react-icons/bs";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// // =====================================================
// // REUSABLE INPUT
// // =====================================================

// const Input = ({ label, ...props }) => {
//   return (
//     <div>
//       <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
//         {label}
//       </label>

//       <input
//         {...props}
//         className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900"
//       />
//     </div>
//   );
// };

// // =====================================================
// // REUSABLE TEXTAREA
// // =====================================================

// const TextArea = ({ label, ...props }) => {
//   return (
//     <div>
//       <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
//         {label}
//       </label>

//       <textarea
//         {...props}
//         className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900 resize-none"
//       />
//     </div>
//   );
// };

// // COVER LETTER PREVIEW
// const CoverLetterPreview = ({ data }) => {
//   const today = new Date().toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div
//       className="bg-white text-[#222] mx-auto shadow-lg border border-gray-200"
//       style={{
//         width: "210mm",
//         minHeight: "297mm",
//         fontFamily: "Inter, Poppins, system-ui, sans-serif",
//       }}
//     >
//       <div className="px-10 py-10">

//         {/* YOUR INFORMATION */}
//         <div className="mb-8">
//           <h1 className="text-[24px] font-bold text-[#1a1a1a]">
//             {data.fullName || "Your Name"}
//           </h1>

//           <p className="text-[12px] text-[#555]">
//             {data.email || "your@email.com"}

//             {data.phone && ` • ${data.phone}`}

//             {data.location && ` • ${data.location}`}
//           </p>
//         </div>

//         {/* DATE */}
//         <p className="text-[12px] text-[#555] mb-6">
//           {today}
//         </p>

//         {/* HIRING MANAGER */}
//         <div className="mb-6 text-[12px] text-[#333]">

//           {data.hiringManagerName ? (
//             <p>Dear {data.hiringManagerName},</p>
//           ) : (
//             <p>Dear Hiring Manager,</p>
//           )}

//           {data.companyName && (
//             <p>{data.companyName}</p>
//           )}

//         </div>

//         {/* COVER LETTER CONTENT */}
//         <div className="space-y-4 text-[12px] leading-[1.6] text-[#333] text-justify">

//           {/* FIRST PARAGRAPH */}
//           <p>
//             I am excited to apply for the{" "}
//             <b>
//               {data.jobTitle || "[Job Title]"}
//             </b>{" "}
//             position at{" "}
//             <b>
//               {data.companyName || "[Company]"}
//             </b>
//             .{" "}

//             {data.whyThisRole}
//           </p>

//           {/* EXPERIENCE */}
//           {data.experience && (
//             <p>
//               In my previous experience,{" "}
//               {data.experience}.{" "}
//               This experience has helped me build the skills needed for this position.
//             </p>
//           )}

//           {/* SKILLS AND PROJECTS */}
//           {(data.skills || data.projects) && (
//             <p>
//               {data.skills && (
//                 <span>
//                   My key skills include {data.skills}.{" "}
//                 </span>
//               )}

//               {data.projects && (
//                 <span>
//                   I have also worked on projects such as {data.projects}.
//                 </span>
//               )}
//             </p>
//           )}

//           {/* WHY COMPANY */}
//           {data.whyThisCompany && (
//             <p>
//               {data.whyThisCompany}
//             </p>
//           )}

//           {/* CLOSING */}
//           <p>
//             Thank you for your time and consideration.
//             I look forward to the opportunity to discuss how
//             I can contribute to{" "}
//             {data.companyName || "your company"}.
//           </p>

//           {/* SIGNATURE */}
//           <p className="mt-6">
//             Sincerely,
//             <br />
//             {data.fullName || "Your Name"}
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// };

// // CREATE COVER LETTER
// const CreateCoverLetter = ({ resumeData = {} }) => {

//   // ===================================================
//   // STATES
//   // ===================================================

//   const [previewMode, setPreviewMode] = useState(false);
                            
//   const [isGenerating, setIsGenerating] = useState(false);

//   const [isDownloading, setIsDownloading] = useState(false);

//   const [data, setData] = useState(null);

//   const {id} = useParams();
                      
//   useEffect(() => {
//     if (!id) return;

//     const fetchResume = async () => {
//       try {                                 
//         const res = await axios.get(
//           `http://localhost:5000/api/v1/resume/get/${id}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const resume = res.data.resume;

//         console.log("Preview Resume:", resume);

//         // Convert backend data to frontend data format
//         setData({
//           jobRole: resume.jobRole || "",
//           fullName: resume.fullName || "",
//           email: resume.email || "",
//           phone: resume.phone || "",
//           location: resume.location || "",
//           linkedinUrl: resume.linkedin || "",
//           github: resume.github || "",
        
//           experience: resume.experience || "",
//           professionalSummary: resume.summary || "",

//           skills:
//             resume.skills?.length > 0
//               ? resume.skills.map((skill) => ({
//                   category: skill.category || "",
//                   items: Array.isArray(skill.items)
//                     ? skill.items.join(", ")
//                     : skill.items || "",
//                 }))
//               : [
//                   {
//                     category: "",
//                     items: "",
//                   },
//                 ],

//           experiences:
//             resume.workExperience?.length > 0
//               ? resume.workExperience.map((experience) => {
//                   const [startDate = "", endDate = ""] =
//                     (experience.duration || "").split(" - ");

//                   return {
//                     company: experience.company || "",
//                     position: experience.role || "",
//                     startDate,
//                     endDate,
//                     desc: experience.description || "",
//                   };
//                 })                               
//               : [
//                   {
//                     company: "",
//                     position: "",
//                     startDate: "",
//                     endDate: "",
//                     desc: "",
//                   },
//                 ],

//           education:
//             resume.education?.length > 0
//               ? resume.education.map((education) => {
//                   const [startDate = "", endDate = ""] =
//                     (education.year || "").split(" - ");

//                   return {
//                     college: education.college || "",
//                     degree: education.degree || "",
//                     startDate,
//                     endDate,
//                   };
//                 })
//               : [
//                   {
//                     college: "",
//                     degree: "",
//                     startDate: "",
//                     endDate: "",
//                   },
//                 ],

//           projects:
//             resume.projects?.length > 0
//               ? resume.projects.map((project) => ({
//                   title: project.title || "",
//                   description: project.description || "",
//                   techStack: Array.isArray(project.techStack)
//                     ? project.techStack.join(", ")
//                     : project.techStack || "",
//                   startDate: project.startDate || "",
//                   endDate: project.endDate || "",
//                   link: project.link || "",
//                 }))
//               : [
//                   {
//                     title: "",
//                     description: "",
//                     techStack: "",
//                     startDate: "",
//                     endDate: "",
//                     link: "",
//                   },
//                 ],

//           achievements:
//             resume.achievements?.length > 0
//               ? resume.achievements
//                   .map((achievement) => achievement.description)
//                   .join("\n")
//               : "",
//         });

        
//       } catch (error) {
//         console.error("Error fetching resume:", error);

//         toast.error(
//           error.response?.data?.message || "Failed to load resume"
//         );
//       }
//     };

  
//     fetchResume();
//   }, [id]);
  
//     const addExperience = () => {
//     setData((prev) => ({
//       ...prev,
//       experiences: [
//         ...prev.experiences,
//         {
//           company: "",
//           position: "",
//           startDate: "",
//           endDate: "",   
//           desc: "",
//         },
//       ],
//     }));
//   };


//   // ===================================================
//   // COVER LETTER DATA
//   // ===================================================

//   // const [data, setData] = useState({

//   //   // Personal Information
//   //   fullName: "",
//   //   email: "",
//   //   // phone: "",
//   //   // location: "",

//   //   // Job Information
//   //   jobTitle: "",
//   //   companyName: "",
//   //   jobLocation: "",
//   //   hiringManagerName: "",
//   //   jobDescription: "",

//   //   // Your Background
//   //   skills: "",
//   //   experience: "",
//   //   projects: "",

//   //   // AI Generated Content
//   //   whyThisCompany: "",
//   //   whyThisRole: "",
//   // });

//   // ===================================================
//   // UPDATE DATA
//   // ===================================================

//   const updateData = (field, value) => {

//     setData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//   };


//   const addSkills = () => {
//      setData((prev) => ({
//         ...prev,
//         skills: [
//           ...prev.skills,
//           {
//              category: "",
//              items: ""
//           }
//         ]
//      }))
//   }


//   const removeSkill = (index) => {
//        if(data.skills.length === 1) {
//          toast.info("At least one skill category is required...");
//          return;
//        }
  
//        setData((prev) => ({
//           ...prev,
//           skills: prev.skills.filter((_, i) => i !== index),
//        }))
//     }


//      const addProject = () => {
//     setData((prev) => ({
//       ...prev,
//       projects: [
//         ...prev.projects,
//         {
//           title: "",
//           description: "",
//           techStack: "",
//           startDate: "",
//           endDate: "",
//           link: ""
//         },
//       ],
//     }));
//   };

//   // ===================================================
//   // GENERATE WITH AI
//   // ===================================================
                  
//   const handleGenerateAI = async () => {

//     // Basic validation
//     if (!data.jobTitle || !data.companyName) {
//       alert("Please enter Job Title and Company Name");

//       return;    
//     }

//     setIsGenerating(true);

//     // Temporary dummy AI response
//     // Later replace this with your real AI API

//     setTimeout(() => {

//       updateData(
//         "whyThisRole",
//         `My skills and experience directly match the requirements of the ${data.jobTitle} position.`
//       );

//       updateData(
//         "whyThisCompany",
//         `I am interested in joining ${data.companyName} because I would like to use my skills, learn new technologies, and contribute to the company's work.`
//       );

//       setIsGenerating(false);

//     }, 1500);

//   };

//   // ===================================================
//   // DOWNLOAD PDF
//   // ===================================================

//   const handleDownloadPDF = async () => {

//     setIsDownloading(true);

//     // Temporary code
//     // Later connect this with your backend PDF API

//     setTimeout(() => {

//       console.log("Downloading Cover Letter PDF...");

//       setIsDownloading(false);

//     }, 1500);

//   };

//   // ===================================================
//   // PREVIEW PAGE
//   // ===================================================

//   if (previewMode) {

//     return (

//       <div className="bg-gray-50 min-h-screen print:bg-white">

//         {/* TOP BAR */}

//         <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">

//           <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

//             {/* BACK BUTTON */}

//             <button
//               onClick={() => setPreviewMode(false)}
//               className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition"
//             >

//               <ArrowLeft size={16} />

//               Back to Edit

//             </button>


//             {/* DOWNLOAD BUTTON */}

//             <button
//               onClick={handleDownloadPDF}
//               disabled={isDownloading}
//               className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition disabled:bg-gray-400"
//             >

//               <Download size={16} />

//               {isDownloading
//                 ? "Generating PDF..."
//                 : "Download PDF"}

//             </button>

//           </div>

//         </div>


//         {/* COVER LETTER */}

//         <div className="max-w-[1200px] mx-auto px-4 py-8 flex justify-center print:p-0">

//           <CoverLetterPreview data={data} />

//         </div>

//       </div>

//     );

//   }

//   // ===================================================
//   // MAIN FORM PAGE
//   // ===================================================

//   return (

//     <div className="min-h-screen bg-[#F7F9FC] py-8">

//       <div className="max-w-3xl mx-auto px-4">

//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">

//           {/* PAGE TITLE */}

//           <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5">

//             <FileText
//               size={20}
//               className="text-[#0A66C2]"
//             />

//             Create Cover Letter

//           </h2>


//           {/* =================================================
//               JOB INFORMATION
//           ================================================= */}

//           <div className="space-y-4">

//             <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                                             
//               <BsBriefcase />
                                             
//               Job Information

//             </h3>


//             {/* JOB TITLE */}                  

//             <Input
//               label="Job Role"
//               value={data?.jobRole}
//               onChange={(e) =>
//                 updateData(
//                   "jobRole",
//                   e.target.value
//                 )
//               }
//               placeholder="Frontend Developer"
//             />


//             {/* COMPANY */}

//             <Input
//               label="Company"
//               // value={data.companyName}
//               // onChange={(e) =>
//               //   updateData(
//               //     "companyName",
//               //     e.target.value
//               //   )
//               // }
//               placeholder="Google"
//             />
                       

//             {/* JOB LOCATION */}

//             <Input
//               label="Job Location"
//               // value={data.jobLocation}
//               // onChange={(e) =>
//               //   updateData(
//               //     "jobLocation",
//               //     e.target.value
//               //   )
//               // }
//               placeholder="Remote / Bangalore"
//             />


//             {/* HIRING MANAGER */}

//             <Input
//               label="Hiring Manager Name"
//               // value={data.hiringManagerName}
//               // onChange={(e) =>
//               //   updateData(
//               //     "hiringManagerName",
//               //     e.target.value
//               //   )
//               // }
//               placeholder="Optional"
//             />


//             {/* JOB DESCRIPTION */}

//             <TextArea
//               label="Job Description"
//               rows={5}
//               // value={data.jobDescription}
//               // onChange={(e) =>
//               //   updateData(
//               //     "jobDescription",
//               //     e.target.value
//               //   )
//               // }
//               placeholder="Paste the full job description here..."
//             />

//           </div>      


//           {/* DIVIDER */}

//           <div className="border-t my-6" />


//           {/* =================================================
//               YOUR BACKGROUND
//           ================================================= */}

//           <div className="space-y-4">

//             <h3 className="font-semibold text-gray-800 flex items-center gap-2">

//               <BsPerson />

//               Your Background

//             </h3>

            
//              <Input
//               label="Name"
//               value={data?.fullName}
//               onChange={(e) =>
//                 updateData(
//                   "fullName",
//                   e.target.value
//                 )
//               }
//               placeholder="Adarsh Patidar"
//             />



//              <Input
//               label="Email"
//               type="email"
//               value={data?.email}
//               onChange={(e) =>
//                 updateData(
//                   "email",
//                   e.target.value
//                 )
//               }
//               placeholder="adarsh@gmail.com"
//             />


//              <Input
//               label="MOBILE NO"
//               value={data?.phone}
//               onChange={(e) =>
//                 updateData(
//                   "phone",
//                   e.target.value  
//                 )
//               }
//               placeholder="9987343..."
//             />


//                       <Input
//                         label="LinkedIn"
//                         value={data?.linkedinUrl}
//                         onChange={(e) => updateData("linkedinUrl", e.target.value)}
//                       />


//                        <Input
//                         label="GitHub/X Profile"
//                         value={data?.github}
//                         onChange={(e) => updateData("github", e.target.value)}
//                       />


//                         <Input
//                         label="Location"
//                         value={data?.location}
//                         onChange={(e) => updateData("location", e.target.value)}
//                       />


//                       <TextArea
//                         label="Professional Summary"
//                         rows={5}
//                         value={data?.professionalSummary}
//                         onChange={(e) => updateData("professionalSummary", e.target.value)}
//                       />

                      
//                         <div className="space-y-6 mt-4">

//                       {data?.experiences.map((experience, experienceIndex) => (
//                         <div
//                           key={experienceIndex}
//                           className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
//                         >
//                           <div className="flex items-center justify-between mb-4">
//                             <h4 className="font-semibold text-gray-800">
//                               Experience {experienceIndex + 1}
//                             </h4>

//                             {data.experiences.length > 1 && (
//                               <button
//                                 type="button"
//                                 onClick={() => removeExperience(experienceIndex)}
//                                 className="text-red-500 hover:text-red-700 transition"
//                               >
//                                 <Trash2 size={18} />
//                               </button>
//                             )}
//                           </div>

//                           <div className="grid md:grid-cols-2 gap-4">
//                             <Input
//                               label="Position"
//                               value={experience.position} 
//                               onChange={(e) => updateExperience(experienceIndex, "position", e.target.value)}
//                             />

//                             <Input
//                               label="Company"
//                               value={experience.company}
//                               onChange={(e) => updateExperience(experienceIndex, "company", e.target.value)}
//                             />

//                             <Input
//                               label="Start"
//                               type="date"
//                               value={experience.startDate}
//                               onChange={(e) => updateExperience(experienceIndex, "startDate", e.target.value)}
//                             />

//                             <Input
//                               label="End"
//                               type="date"
//                               value={experience.endDate}
//                               onChange={(e) => updateExperience(experienceIndex, "endDate", e.target.value)}
//                             />
//                           </div>

//                           <div className="mt-4">
//                             <TextArea
//                               label="Description"
//                               rows={4}
//                               value={experience.desc}
//                               onChange={(e) => updateExperience(experienceIndex, "desc", e.target.value)}
//                             />
//                           </div>

//                         </div>
//                       ))}

//                       <button
//                         type="button"
//                         onClick={addExperience}
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
//                       >
//                         <Plus size={16} />
//                         Add Experience
//                       </button>
//                     </div>


//                     <div className="space-y-6 mt-4">
                    
//                         {data?.skills.map((skill, skillIndex) => (
//                           <div
//                             key={skillIndex}
//                             className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
//                           >
                    
//                             {/* HEADER */}
//                             <div className="flex items-center justify-between mb-4">
                    
//                               <h4 className="font-semibold text-gray-800">
//                                 Skill Category {skillIndex + 1}
//                               </h4>
                    
//                               {data.skills.length > 1 && (
//                                 <button
//                                   type="button"
//                                   onClick={() => removeSkill(skillIndex)}
//                                   className="text-red-500 hover:text-red-700 transition"
//                                 >
//                                   <Trash2 size={18} />
//                                 </button>
//                               )}
                    
//                             </div>
                    
//                             {/* CATEGORY NAME */}
//                             <Input
//                               label="Category"
//                               placeholder="Programming"
//                               value={skill.category}
//                               onChange={(e) =>
//                                 updateSkill(
//                                   skillIndex,
//                                   "category",
//                                   e.target.value
//                                 )
//                               }
//                             />
                    
//                             {/* SKILLS */}
//                             <div className="mt-4">
//                               <TextArea
//                                 label="Skills"
//                                 rows={3}
//                                 placeholder="C++, JavaScript, TypeScript, SQL"
//                                 value={skill.items}
//                                 onChange={(e) =>
//                                   updateSkill(
//                                     skillIndex,
//                                     "items",
//                                     e.target.value
//                                   )
//                                 }
//                               />
//                             </div>
                    
//                           </div>
//                         ))}
                    
//                         {/* ADD CATEGORY */}
//                         <button
//                           type="button"
//                           onClick={addSkills}
//                           className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
//                         >
//                           <Plus size={16} />
//                           Add Skill Category
//                         </button>
                    
//                       </div>


//                      <div className="space-y-6 mt-4">
                   
//                                          {data?.projects.map((project, projectIndex) => (
//                                            <div
//                                              key={projectIndex}
//                                              className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
//                                            >
//                                              <div className="flex items-center justify-between mb-4">
//                                                <h4 className="font-semibold text-gray-800">
//                                                  Project {projectIndex + 1}
//                                                </h4>
                   
//                                                {data.projects.length > 1 && (
//                                                  <button
//                                                    type="button"
//                                                    onClick={() => removeProject(projectIndex)}
//                                                    className="text-red-500 hover:text-red-700 transition"
//                                                  >
//                                                    <Trash2 size={18} />
//                                                  </button>
//                                                )}
//                                              </div>
                   
//                                              <div className="space-y-4">
//                                                <Input
//                                                  label="Title"
//                                                  value={project.title}
//                                                  onChange={(e) => updateProject(projectIndex, "title", e.target.value)}
//                                                />
                   
//                                                 <Input
//                                                  label="Tech Stack"
//                                                  placeholder="React, Springboot, Angular"
//                                                  value={project.techStack}
//                                                  onChange={(e) => updateProject(projectIndex, "techStack", e.target.value)}
//                                                />
                   
//                                                <TextArea
//                                                  label="Description"
//                                                  rows={3}
//                                                  value={project.description}
//                                                  onChange={(e) => updateProject(projectIndex, "description", e.target.value)}
//                                                />
                   
//                                                <div className="grid md:grid-cols-2 gap-4">
//                                                  <Input
//                                                    label="Start"
//                                                    type="date"
//                                                    value={project.startDate}
//                                                    onChange={(e) => updateProject(projectIndex, "startDate", e.target.value)}
//                                                  />
                   
//                                                  <Input
//                                                    label="End"
//                                                    type="date"
//                                                    value={project.endDate}
//                                                    onChange={(e) => updateProject(projectIndex, "endDate", e.target.value)}
//                                                  />
                   
//                                                  <Input
//                                                     label="Link"
//                                                     value={project.link}
//                                                     onChange={(e) => updateProject(projectIndex, "link", e.target.value)}
//                                                  />
                   
//                                                </div>
//                                              </div>
//                                            </div>
//                                          ))}
                   
//                                          <button
//                                            type="button"
//                                            onClick={addProject}
//                                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
//                                          >
//                                            <Plus size={16} />
//                                            Add Project
//                                          </button>
//                                        </div>


//                       <div className="mt-4">
//                                            <TextArea
//                                              label="Achievements"
//                                              rows={4}
//                                              placeholder="Enter each achievement on a new line"
//                                              value={data?.achievements}
//                                              onChange={(e) => updateData("achievements", e.target.value)}
//                                            />
                     
                                           
//                                          </div>

                      

           

//           </div>


//           {/* =================================================
//               ACTION BUTTONS
//           ================================================= */}

//           <div className="flex gap-3 mt-6">


//             {/* AI BUTTON */}

//             <button
//               onClick={handleGenerateAI}
//               disabled={isGenerating}
//               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60"
//             >

//               <Wand2 size={18} />

//               {isGenerating
//                 ? "Generating..."
//                 : "Generate with AI"}

//             </button>


//             {/* PREVIEW BUTTON */}

//             <button
//               onClick={() =>
//                 setPreviewMode(true)
//               }
//               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold hover:bg-[#004182] transition"
//             >

//               <Eye size={18} />

//               Preview

//             </button>

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default CreateCoverLetter;







// import React, { useState, useEffect } from "react";
// import {
//   Wand2, Download, Eye, FileText, Plus, Save, ArrowLeft, Trash2, ChevronDown, ChevronUp
// } from "lucide-react";
// import { BsPerson, BsBriefcase, BsCodeSlash, BsTrophy, BsBuilding } from "react-icons/bs";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// // =====================================================
// // REUSABLE INPUT
// // =====================================================
// const Input = ({ label,...props }) => (
//   <div>
//     <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">{label}</label>
//     <input {...props} className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900" />
//   </div>
// );

// // =====================================================
// // REUSABLE TEXTAREA
// // =====================================================
// const TextArea = ({ label,...props }) => (
//   <div>
//     <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">{label}</label>
//     <textarea {...props} className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900 resize-none" />
//   </div>
// );

// // COVER LETTER PREVIEW
// const CoverLetterPreview = ({ data }) => {
//   const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
//   const topSkills = data.skills.map(s => s.items).filter(Boolean).join(", ");
//   const topExp = data.experiences[0];

//   return (
//     <div className="bg-white text-[#222] mx-auto shadow-lg border-gray-200" style={{ width: "210mm", minHeight: "297mm", fontFamily: "Inter, Poppins, system-ui, sans-serif" }}>
//       <div className="px-10 py-10">
//         <div className="mb-8">
//           <h1 className="text-[24px] font-bold text-[#1a1a1a]">{data.fullName || "Your Name"}</h1>
//           <p className="text-[12px] text-[#555]">
//             {data.email} {data.phone && `• ${data.phone}`} {data.location && `• ${data.location}`}
//           </p>
//           <p className="text-[12px] text-[#555]">{data.linkedinUrl} {data.github && `• ${data.github}`}</p>
//         </div>

//         <p className="text-[12px] text-[#555] mb-6">{today}</p>

//         <div className="mb-6 text-[12px] text-[#333]">
//           {data.hiringManagerName? <p>Dear {data.hiringManagerName},</p> : <p>Dear Hiring Manager,</p>}
//           {data.companyName && <p>{data.companyName}</p>}
//         </div>

//         <div className="space-y-4 text-[12px] leading-[1.6] text-[#333] text-justify">
//           <p>
//             I am excited to apply for the <b>{data.jobTitle || data.jobRole || "[Job Title]"}</b> position at <b>{data.companyName || "[Company]"}</b>.
//             {data.whyThisRole}
//           </p>

//           {topExp?.company && <p>In my role as <b>{topExp.position}</b> at <b>{topExp.company}</b>, {topExp.desc}</p>}
//           {topSkills && <p>My key skills include {topSkills}.</p>}
//           {data.projects[0]?.title && <p>I have also worked on <b>{data.projects[0].title}</b>: {data.projects[0].description}</p>}
//           {data.whyThisCompany && <p>{data.whyThisCompany}</p>}
//           <p>Thank you for your time and consideration. I look forward to the opportunity to discuss how I can contribute to {data.companyName || "your company"}.</p>
//           <p className="mt-6">Sincerely,<br />{data.fullName || "Your Name"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // CREATE COVER LETTER
// const CreateCoverLetter = () => {   
//   const [previewMode, setPreviewMode] = useState(false);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [openSections, setOpenSections] = useState([0,1]);
//   const [data, setData] = useState(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [coverLetterId, setCoverLetterId] = useState(null);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   // FETCH RESUME
//   useEffect(() => {
//     if (id) return;
//     const fetchResume = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/v1/resume/get/${id}`, { withCredentials: true });
//         const resume = res.data.resume;
//         setData({
//           // job fields
//           jobTitle: "", companyName: "", jobLocation: "", hiringManagerName: "", jobDescription: "",
//           whyThisCompany: "", whyThisRole: "",
//           // resume fields
//           jobRole: resume.jobRole || "",
//           fullName: resume.fullName || "",
//           email: resume.email || "",
//           phone: resume.phone || "",
//           location: resume.location || "",
//           linkedinUrl: resume.linkedin || "",
//           github: resume.github || "",
//           professionalSummary: resume.summary || "",
//           skills: resume.skills?.length > 0? resume.skills.map(s => ({ category: s.category, items: Array.isArray(s.items)? s.items.join(", ") : s.items })) : [{category:"", items:""}],
//           experiences: resume.workExperience?.length > 0? resume.workExperience.map(e => { const [s,ed] = (e.duration||"").split(" - "); return { company: e.company, position: e.role, startDate: s, endDate: ed, desc: e.description }}) : [{company:"", position:"", startDate:"", endDate:"", desc:""}],
//           projects: resume.projects?.length > 0? resume.projects.map(p => ({...p, techStack: Array.isArray(p.techStack)? p.techStack.join(", ") : p.techStack })) : [{title:"", description:"", techStack:"", startDate:"", endDate:"", link:""}],
//           achievements: resume.achievements?.length > 0? resume.achievements.map(a => a.description).join("\n") : "",
//         });
//       } catch (error) {
//         toast.error("Failed to load resume");
//       }
//     };
//     fetchResume();
//   }, [id]);



//   useEffect(() => {
//      if(!id) {
//        return;
//      }

//      const fetchCoverLetter = async() => {

//          try {
          
//           const res = await axios.get(`http://locahost:5000/api/v1/coverletter/get/${id}`, {withCredentials: true})

//           const coverLetter = res.data.coverLetter;
          
//           setData({
//           // job fields
//           jobTitle: coverLetter.jobTitle?.jobTitle || "", companyName: "", jobLocation: "", hiringManagerName: "", jobDescription: "",
//           whyThisCompany: "", whyThisRole: "",
//           // resume fields
//           jobRole: resume.jobRole || "",
//           fullName: resume.fullName || "",
//           email: resume.email || "",
//           phone: resume.phone || "",
//           location: resume.location || "",
//           linkedinUrl: resume.linkedin || "",
//           github: resume.github || "",
//           professionalSummary: resume.summary || "",
//           skills: resume.skills?.length > 0? resume.skills.map(s => ({ category: s.category, items: Array.isArray(s.items)? s.items.join(", ") : s.items })) : [{category:"", items:""}],
//           experiences: resume.workExperience?.length > 0? resume.workExperience.map(e => { const [s,ed] = (e.duration||"").split(" - "); return { company: e.company, position: e.role, startDate: s, endDate: ed, desc: e.description }}) : [{company:"", position:"", startDate:"", endDate:"", desc:""}],
//           projects: resume.projects?.length > 0? resume.projects.map(p => ({...p, techStack: Array.isArray(p.techStack)? p.techStack.join(", ") : p.techStack })) : [{title:"", description:"", techStack:"", startDate:"", endDate:"", link:""}],
//           achievements: resume.achievements?.length > 0? resume.achievements.map(a => a.description).join("\n") : "",
//         });

//          } catch (error) {
          
//          }

//      }

//      fetchCoverLetter();

//   })







//   if(!data) return <div className="p-10 text-center">Loading...</div>

//   const updateData = (field, value) => setData(prev => ({...prev, [field]: value }));
//   const toggleSection = (index) => setOpenSections(prev => prev.includes(index)? prev.filter(i => i!== index) : [...prev, index]);

//   // EXPERIENCE
//   const updateExperience = (index, field, value) => {
//     const updated = [...data.experiences];
//     updated[index][field] = value;
//     updateData("experiences", updated);
//   };
//   const addExperience = () => updateData("experiences", [...data.experiences, {company:"", position:"", startDate:"", endDate:"", desc:""}]);
//   const removeExperience = (index) => {
//     if(data.experiences.length === 1) return toast.info("At least one experience required");
//     updateData("experiences", data.experiences.filter((_, i) => i!== index));
//   };

//   // SKILLS
//   const updateSkill = (index, field, value) => {
//     const updated = [...data.skills];
//     updated[index][field] = value;
//     updateData("skills", updated);
//   };
//   const addSkills = () => updateData("skills", [...data.skills, {category:"", items:""}]);
//   const removeSkill = (index) => {
//     if(data.skills.length === 1) return toast.info("At least one skill category required");
//     updateData("skills", data.skills.filter((_, i) => i!== index));
//   };

//   // PROJECTS
//   const updateProject = (index, field, value) => {
//     const updated = [...data.projects];
//     updated[index][field] = value;
//     updateData("projects", updated);
//   };
//   const addProject = () => updateData("projects", [...data.projects, {title:"", description:"", techStack:"", startDate:"", endDate:"", link:""}]);
//   const removeProject = (index) => {
//     if(data.projects.length === 1) return toast.info("At least one project required");
//     updateData("projects", data.projects.filter((_, i) => i!== index));
//   };

//   // AI
//   const handleGenerateAI = async () => {
//     if (!data.jobTitle ||!data.companyName) return toast.error("Please enter Job Title and Company Name");
//     setIsGenerating(true);
//     setTimeout(() => {
//       updateData("whyThisRole", ` My ${data.jobRole} experience and skills in ${data.skills[0]?.items} directly match the requirements of the ${data.jobTitle} role.`);
//       updateData("whyThisCompany", ` I am interested in joining ${data.companyName} because I admire your work and would love to contribute.`);
//       setIsGenerating(false);
//       toast.success("Cover letter generated");
//     }, 1500);
//   };

//   // PDF
//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     setTimeout(() => { console.log("Downloading..."); setIsDownloading(false); }, 1500);
//   };

//   const sections = [
//     { title: "Job Information", icon: <BsBriefcase /> },
//     { title: "Personal Information", icon: <BsPerson /> },
//     { title: "Experience", icon: <BsBriefcase /> },
//     { title: "Skills", icon: <BsCodeSlash /> },
//     { title: "Projects", icon: <BsCodeSlash /> },
//     { title: "Achievements & Summary", icon: <BsTrophy /> },
//   ];

//   // PREVIEW
//   // if (previewMode) {
//   //   return (
//   //     <div className="bg-gray-50 min-h-screen print:bg-white">
//   //       <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">
//   //         <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
//   //           <button onClick={() => setPreviewMode(false)} className="flex items-center gap-2 px-4 py-2 bg-white border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition">
//   //             <ArrowLeft size={16} /> Back to Edit
//   //           </button>
//   //           <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition disabled:bg-gray-400">
//   //             <Download size={16} /> {isDownloading? "Generating PDF..." : "Download PDF"}
//   //           </button>
//   //         </div>
//   //       </div>
//   //       <div className="max-w-[1200px] mx-auto px-4 py-8 flex justify-center print:p-0">
//   //         <CoverLetterPreview data={data} />
//   //       </div>
//   //     </div>
//   //   );
//   // } 

//   const handleCoverLetterSaving = async () => {
// try {

//  setIsSaving(true);

// const payload = {
// fullName: data.fullName,
// email: data.email,
// phone: data.phone,
// location: data.location,
// linkedinUrl: data.linkedinUrl,
// github: data.github,

//   jobRole: data.jobRole,
//   professionalSummary: data.professionalSummary,

//   skills: data.skills,
//   projects: data.projects,
//   experiences: data.experiences,
//   achievements: data.achievements,

//   jobTitle: data.jobTitle,
//   company: data.companyName,
//   jobLocation: data.jobLocation,
//   hiringManagerName: data.hiringManagerName,
//   jobDescription: data.jobDescription,

//   resumeId: id

//   // whyThisRole: data.whyThisRole,
//   // whyThisCompany: data.whyThisCompany,
//   // coverLetterContent: data.coverLetterContent,
// };

// const res = await axios.post(
//   "http://localhost:5000/api/v1/coverletter/create",
//   payload,
//   {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     withCredentials: true,
//   }
// );

// if(res.data.success) {
// setCoverLetterId(res.data.coverLetter._id)   
// toast.success("Cover letter saved successfully!");
// }



// } catch (error) {
// console.error("Error saving cover letter:", error);


// toast.error(
//   error.response?.data?.message ||
//   "Failed to save cover letter"
// );

// } finally {
//    setIsSaving(false);
// }
// };


//   // FORM
//   return (
//     <div className="min-h-screen bg-[#F7F9FC] py-8">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="bg-white p-6 rounded-2xl shadow-sm border-gray-200">
//           <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5"><FileText size={20} className="text-[#0A66C2]" /> Create Cover Letter</h2>

//           <div className="space-y-1">
//             {sections.map((section, index) => (
//               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleSection(index)} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition">
//                   <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">{section.icon}</span><h3 className="font-semibold text-gray-900">{section.title}</h3></div>
//                   {openSections.includes(index)? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
//                 </button>                                

//                 {openSections.includes(index) && (
//                   <div className="px-4 pb-5 pt-3 border-t border-gray-100 space-y-4">
//                     {index === 0 && (
//                       <>
//                         <Input label="Job Title" value={data.jobTitle} onChange={e => updateData("jobTitle", e.target.value)} placeholder="Frontend Developer" />
//                         <Input label="Company" value={data.companyName} onChange={e => updateData("companyName", e.target.value)} placeholder="Google" />
//                         <Input label="Job Location" value={data.jobLocation} onChange={e => updateData("jobLocation", e.target.value)} placeholder="Remote / Bangalore" />
//                         <Input label="Hiring Manager Name" value={data.hiringManagerName} onChange={e => updateData("hiringManagerName", e.target.value)} placeholder="Optional" />
//                         <TextArea label="Job Description" rows={5} value={data.jobDescription} onChange={e => updateData("jobDescription", e.target.value)} placeholder="Paste full JD" />
//                       </>
//                     )}

//                     {index === 1 && (
//                       <>
//                         <Input label="Full Name" value={data.fullName} onChange={e => updateData("fullName", e.target.value)} />
//                         <div className="grid md:grid-cols-2 gap-4">
//                           <Input label="Email" type="email" value={data.email} onChange={e => updateData("email", e.target.value)} />
//                           <Input label="Phone" value={data.phone} onChange={e => updateData("phone", e.target.value)} />
//                         </div>
//                         <Input label="Location" value={data.location} onChange={e => updateData("location", e.target.value)} />
//                         <Input label="LinkedIn" value={data.linkedinUrl} onChange={e => updateData("linkedinUrl", e.target.value)} />
//                         <Input label="GitHub" value={data.github} onChange={e => updateData("github", e.target.value)} />
//                       </>
//                     )}

//                     {index === 2 && (
//                       <div className="space-y-4">
//                         {data.experiences.map((exp, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Experience {i+1}</h4>{data.experiences.length > 1 && <button onClick={() => removeExperience(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <div className="grid md:grid-cols-2 gap-4">
//                               <Input label="Position" value={exp.position} onChange={e => updateExperience(i, "position", e.target.value)} />
//                               <Input label="Company" value={exp.company} onChange={e => updateExperience(i, "company", e.target.value)} />
//                               <Input label="Start" type="date" value={exp.startDate} onChange={e => updateExperience(i, "startDate", e.target.value)} />
//                               <Input label="End" type="date" value={exp.endDate} onChange={e => updateExperience(i, "endDate", e.target.value)} />
//                             </div>
//                             <div className="mt-3"><TextArea label="Description" rows={3} value={exp.desc} onChange={e => updateExperience(i, "desc", e.target.value)} /></div>
//                           </div>
//                         ))}
//                         <button onClick={addExperience} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Experience</button>
//                       </div>
//                     )}

//                     {index === 3 && (
//                       <div className="space-y-4">
//                         {data.skills.map((skill, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Skill {i+1}</h4>{data.skills.length > 1 && <button onClick={() => removeSkill(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <Input label="Category" value={skill.category} onChange={e => updateSkill(i, "category", e.target.value)} placeholder="Programming" />
//                             <div className="mt-3"><TextArea label="Skills" rows={2} value={skill.items} onChange={e => updateSkill(i, "items", e.target.value)} placeholder="React, Node.js" /></div>
//                           </div>
//                         ))}
//                         <button onClick={addSkills} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Skill Category</button>
//                       </div>
//                     )}

//                     {index === 4 && (
//                       <div className="space-y-4">
//                         {data.projects.map((proj, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Project {i+1}</h4>{data.projects.length > 1 && <button onClick={() => removeProject(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <Input label="Title" value={proj.title} onChange={e => updateProject(i, "title", e.target.value)} />
//                             <Input label="Tech Stack" value={proj.techStack} onChange={e => updateProject(i, "techStack", e.target.value)} />
//                             <div className="mt-3"><TextArea label="Description" rows={2} value={proj.description} onChange={e => updateProject(i, "description", e.target.value)} /></div>
//                           </div>
//                         ))}
//                         <button onClick={addProject} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Project</button>
//                       </div>
//                     )}

//                     {index === 5 && (
//                       <>
//                         <TextArea label="Professional Summary" rows={4} value={data.professionalSummary} onChange={e => updateData("professionalSummary", e.target.value)} />
//                         <TextArea label="Achievements" rows={4} value={data.achievements} onChange={e => updateData("achievements", e.target.value)} />
//                         <TextArea label="Why This Role? - AI" rows={3} value={data.whyThisRole} onChange={e => updateData("whyThisRole", e.target.value)} />
//                         <TextArea label="Why This Company? - AI" rows={3} value={data.whyThisCompany} onChange={e => updateData("whyThisCompany", e.target.value)} />
//                       </>
//                     )}
//                   </div>                                
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-3 mt-6">
//             <button onClick={handleGenerateAI} disabled={isGenerating} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60">
//               <Wand2 size={18} /> {isGenerating? "Generating..." : "Generate with AI"}                    
//             </button>
//              <button onClick={handleCoverLetterSaving} disabled={isSaving} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60">
//               <Save size={16} /> {isSaving? "Saving..." : "Save"}
//             </button>
//             <button onClick={() => navigate(`/cover-letter-preview/${coverLetterId}`) } className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold hover:bg-[#004182] transition">
//               <Eye size={18} /> Preview
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCoverLetter;







// import React, { useState, useEffect } from "react";
// import {
//   Wand2, Download, Eye, FileText, Plus, Save, ArrowLeft, Trash2, ChevronDown, ChevronUp
// } from "lucide-react";
// import { BsPerson, BsBriefcase, BsCodeSlash, BsTrophy } from "react-icons/bs";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// // =====================================================
// // REUSABLE INPUT
// // =====================================================
// const Input = ({ label,...props }) => (
//   <div>
//     <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">{label}</label>
//     <input {...props} className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900" />
//   </div>
// );

// // =====================================================
// // REUSABLE TEXTAREA
// // =====================================================
// const TextArea = ({ label,...props }) => (
//   <div>
//     <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">{label}</label>
//     <textarea {...props} className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900 resize-none" />
//   </div>
// );

// // COVER LETTER PREVIEW
// const CoverLetterPreview = ({ data }) => {
//   const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
//   const topSkills = data.skills.map(s => s.items).filter(Boolean).join(", ");
//   const topExp = data.experiences[0];

//   return (
//     <div className="bg-white text-[#222] mx-auto shadow-lg border border-gray-200" style={{ width: "210mm", minHeight: "297mm", fontFamily: "Inter, Poppins, system-ui, sans-serif" }}>
//       <div className="px-10 py-10">
//         <div className="mb-8">
//           <h1 className="text-[24px] font-bold text-[#1a1a1a]">{data.fullName || "Your Name"}</h1>
//           <p className="text-[12px] text-[#555]">
//             {data.email} {data.phone && `• ${data.phone}`} {data.location && `• ${data.location}`}
//           </p>
//           <p className="text-[12px] text-[#555]">{data.linkedinUrl} {data.github && `• ${data.github}`}</p>
//         </div>

//         <p className="text-[12px] text-[#555] mb-6">{today}</p>

//         <div className="mb-6 text-[12px] text-[#333]">
//           {data.hiringManagerName? <p>Dear {data.hiringManagerName},</p> : <p>Dear Hiring Manager,</p>}
//           {data.companyName && <p>{data.companyName}</p>}
//         </div>

//         <div className="space-y-4 text-[12px] leading-[1.6] text-[#333] text-justify">
//           <p>
//             I am excited to apply for the <b>{data.jobTitle || data.jobRole || "[Job Title]"}</b> position at <b>{data.companyName || "[Company]"}</b>.
//             {data.whyThisRole}
//           </p>

//           {topExp?.company && <p>In my role as <b>{topExp.position}</b> at <b>{topExp.company}</b>, {topExp.desc}</p>}
//           {topSkills && <p>My key skills include {topSkills}.</p>}
//           {data.projects[0]?.title && <p>I have also worked on <b>{data.projects[0].title}</b>: {data.projects[0].description}</p>}
//           {data.whyThisCompany && <p>{data.whyThisCompany}</p>}
//           <p>Thank you for your time and consideration. I look forward to the opportunity to discuss how I can contribute to {data.companyName || "your company"}.</p>
//           <p className="mt-6">Sincerely,<br />{data.fullName || "Your Name"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // CREATE COVER LETTER
// const CreateCoverLetter = () => {
//   const [previewMode, setPreviewMode] = useState(false);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [openSections, setOpenSections] = useState([0,1]);
//   const [data, setData] = useState(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [coverLetterId, setCoverLetterId] = useState(null);

//   const { id } = useParams(); // id = resumeId when creating, coverLetterId when editing
//   const navigate = useNavigate();

//   // FETCH RESUME OR COVERLETTER
//   useEffect(() => {
//     const initData = async () => {
//       try {
//         // if we have id, check if it's coverletter or resume
//         const resCover = await axios.get(`http://localhost:5000/api/v1/coverletter/get/${id}`, { withCredentials: true }).catch(() => null);

//         if (resCover?.data?.coverLetter) {
//           const cl = resCover.data.coverLetter;
//           setData({
//            ...cl,
//             companyName: cl.company || cl.companyName || "", // backend might send company
//           });
//           setCoverLetterId(cl._id);
//         } else {
//           // else fetch resume
//           const res = await axios.get(`http://localhost:5000/api/v1/resume/get/${id}`, { withCredentials: true });
//           const resume = res.data.resume;
//           setData({
//             jobTitle: "", companyName: "", jobLocation: "", hiringManagerName: "", jobDescription: "",
//             whyThisCompany: "", whyThisRole: "",
//             jobRole: resume.jobRole || "",
//             fullName: resume.fullName || "",
//             email: resume.email || "",
//             phone: resume.phone || "",
//             location: resume.location || "",
//             linkedinUrl: resume.linkedin || "",
//             github: resume.github || "",
//             professionalSummary: resume.summary || "",
//             skills: resume.skills?.length > 0? resume.skills.map(s => ({ category: s.category, items: Array.isArray(s.items)? s.items.join(", ") : s.items })) : [{category:"", items:""}],
//             experiences: resume.workExperience?.length > 0? resume.workExperience.map(e => { const [s,ed] = (e.duration||"").split(" - "); return { company: e.company, position: e.role, startDate: s, endDate: ed, desc: e.description }}) : [{company:"", position:"", startDate:"", endDate:"", desc:""}],
//             projects: resume.projects?.length > 0? resume.projects.map(p => ({...p, techStack: Array.isArray(p.techStack)? p.techStack.join(", ") : p.techStack })) : [{title:"", description:"", techStack:"", startDate:"", endDate:"", link:""}],
//             achievements: resume.achievements?.length > 0? resume.achievements.map(a => a.description).join("\n") : "",
//           });
//         }
//       } catch (error) {
//         toast.error("Failed to load data");
//       }
//     };
//     if (id) initData();
//   }, [id]);

//   if(!data) return <div className="p-10 text-center">Loading...</div>

//   const updateData = (field, value) => setData(prev => ({...prev, [field]: value }));
//   const toggleSection = (index) => setOpenSections(prev => prev.includes(index)? prev.filter(i => i!== index) : [...prev, index]);

//   // EXPERIENCE
//   const updateExperience = (index, field, value) => {
//     const updated = [...data.experiences];
//     updated[index][field] = value;
//     updateData("experiences", updated);
//   };
//   const addExperience = () => updateData("experiences", [...data.experiences, {company:"", position:"", startDate:"", endDate:"", desc:""}]);
//   const removeExperience = (index) => {
//     if(data.experiences.length === 1) return toast.info("At least one experience required");
//     updateData("experiences", data.experiences.filter((_, i) => i!== index));
//   };

//   // SKILLS
//   const updateSkill = (index, field, value) => {
//     const updated = [...data.skills];
//     updated[index][field] = value;
//     updateData("skills", updated);
//   };
//   const addSkills = () => updateData("skills", [...data.skills, {category:"", items:""}]);
//   const removeSkill = (index) => {
//     if(data.skills.length === 1) return toast.info("At least one skill category required");
//     updateData("skills", data.skills.filter((_, i) => i!== index));
//   };

//   // PROJECTS
//   const updateProject = (index, field, value) => {
//     const updated = [...data.projects];
//     updated[index][field] = value;
//     updateData("projects", updated);
//   };
//   const addProject = () => updateData("projects", [...data.projects, {title:"", description:"", techStack:"", startDate:"", endDate:"", link:""}]);
//   const removeProject = (index) => {
//     if(data.projects.length === 1) return toast.info("At least one project required");
//     updateData("projects", data.projects.filter((_, i) => i!== index));
//   };

//   // AI
//   const handleGenerateAI = async () => {
//     if (!data.jobTitle ||!data.companyName) return toast.error("Please enter Job Title and Company Name");
//     setIsGenerating(true);
//     setTimeout(() => {
//       updateData("whyThisRole", ` My ${data.jobRole} experience and skills in ${data.skills[0]?.items} directly match the requirements of the ${data.jobTitle} role.`);
//       updateData("whyThisCompany", ` I am interested in joining ${data.companyName} because I admire your work and would love to contribute.`);
//       setIsGenerating(false);
//       toast.success("Cover letter generated");
//     }, 1500);
//   };

//   // PDF
//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     setTimeout(() => { console.log("Downloading..."); setIsDownloading(false); }, 1500);
//   };

//   const sections = [
//     { title: "Job Information", icon: <BsBriefcase /> },
//     { title: "Personal Information", icon: <BsPerson /> },
//     { title: "Experience", icon: <BsBriefcase /> },
//     { title: "Skills", icon: <BsCodeSlash /> },
//     { title: "Projects", icon: <BsCodeSlash /> },
//     { title: "Achievements & Summary", icon: <BsTrophy /> },
//   ];

//   const handleCoverLetterSaving = async () => {
//     try {
//       setIsSaving(true);

//       const payload = {
//         fullName: data.fullName,
//         email: data.email,
//         phone: data.phone,
//         location: data.location,
//         linkedinUrl: data.linkedinUrl,
//         github: data.github,
//         jobRole: data.jobRole,
//         professionalSummary: data.professionalSummary,
//         skills: data.skills,
//         projects: data.projects,
//         experiences: data.experiences,
//         achievements: data.achievements,
//         jobTitle: data.jobTitle,
//         companyName: data.companyName, // fixed: was "company"
//         jobLocation: data.jobLocation,
//         hiringManagerName: data.hiringManagerName,
//         jobDescription: data.jobDescription,
//         resumeId: id,
//         whyThisRole: data.whyThisRole,
//         whyThisCompany: data.whyThisCompany,
//       };

//       const url = coverLetterId
//        ? `http://localhost:5000/api/v1/coverletter/update/${coverLetterId}`
//         : "http://localhost:5000/api/v1/coverletter/create"

//       const method = coverLetterId? "put" : "post";

//       const res = await axios[method](url, payload, {
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       });

//       if(res.data.success) {
//         setCoverLetterId(res.data.coverLetter._id)
//         toast.success("Cover letter saved successfully!");
//       }

//     } catch (error) {
//       console.error("Error saving cover letter:", error);
//       toast.error(error.response?.data?.message || "Failed to save cover letter");
//     } finally {
//        setIsSaving(false);
//     }
//   };





//   return (
//     <div className="min-h-screen bg-[#F7F9FC] py-8">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5"><FileText size={20} className="text-[#0A66C2]" /> Create Cover Letter</h2>

//           <div className="space-y-1">
//             {sections.map((section, index) => (
//               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//                 <button onClick={() => toggleSection(index)} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition">
//                   <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">{section.icon}</span><h3 className="font-semibold text-gray-900">{section.title}</h3></div>
//                   {openSections.includes(index)? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
//                 </button>

//                 {openSections.includes(index) && (
//                   <div className="px-4 pb-5 pt-3 border-t border-gray-100 space-y-4">
//                     {index === 0 && (
//                       <>
//                         <Input label="Job Title" value={data.jobTitle} onChange={e => updateData("jobTitle", e.target.value)} placeholder="Frontend Developer" />
//                         <Input label="Company" value={data.companyName} onChange={e => updateData("companyName", e.target.value)} placeholder="Google" />
//                         <Input label="Job Location" value={data.jobLocation} onChange={e => updateData("jobLocation", e.target.value)} placeholder="Remote / Bangalore" />
//                         <Input label="Hiring Manager Name" value={data.hiringManagerName} onChange={e => updateData("hiringManagerName", e.target.value)} placeholder="Optional" />
//                         <TextArea label="Job Description" rows={5} value={data.jobDescription} onChange={e => updateData("jobDescription", e.target.value)} placeholder="Paste full JD" />
//                       </>
//                     )}

//                     {index === 1 && (
//                       <>
//                         <Input label="Full Name" value={data.fullName} onChange={e => updateData("fullName", e.target.value)} />
//                         <div className="grid md:grid-cols-2 gap-4">
//                           <Input label="Email" type="email" value={data.email} onChange={e => updateData("email", e.target.value)} />
//                           <Input label="Phone" value={data.phone} onChange={e => updateData("phone", e.target.value)} />
//                         </div>
//                         <Input label="Location" value={data.location} onChange={e => updateData("location", e.target.value)} />
//                         <Input label="LinkedIn" value={data.linkedinUrl} onChange={e => updateData("linkedinUrl", e.target.value)} />
//                         <Input label="GitHub" value={data.github} onChange={e => updateData("github", e.target.value)} />
//                       </>
//                     )}

//                     {index === 2 && (
//                       <div className="space-y-4">
//                         {data.experiences.map((exp, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Experience {i+1}</h4>{data.experiences.length > 1 && <button onClick={() => removeExperience(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <div className="grid md:grid-cols-2 gap-4">
//                               <Input label="Position" value={exp.position} onChange={e => updateExperience(i, "position", e.target.value)} />
//                               <Input label="Company" value={exp.company} onChange={e => updateExperience(i, "company", e.target.value)} />
//                               <Input label="Start" type="date" value={exp.startDate} onChange={e => updateExperience(i, "startDate", e.target.value)} />
//                               <Input label="End" type="date" value={exp.endDate} onChange={e => updateExperience(i, "endDate", e.target.value)} />
//                             </div>
//                             <div className="mt-3"><TextArea label="Description" rows={3} value={exp.desc} onChange={e => updateExperience(i, "desc", e.target.value)} /></div>
//                           </div>
//                         ))}
//                         <button onClick={addExperience} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Experience</button>
//                       </div>
//                     )}

//                     {index === 3 && (
//                       <div className="space-y-4">
//                         {data.skills.map((skill, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Skill {i+1}</h4>{data.skills.length > 1 && <button onClick={() => removeSkill(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <Input label="Category" value={skill.category} onChange={e => updateSkill(i, "category", e.target.value)} placeholder="Programming" />
//                             <div className="mt-3"><TextArea label="Skills" rows={2} value={skill.items} onChange={e => updateSkill(i, "items", e.target.value)} placeholder="React, Node.js" /></div>
//                           </div>
//                         ))}
//                         <button onClick={addSkills} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Skill Category</button>
//                       </div>
//                     )}

//                     {index === 4 && (
//                       <div className="space-y-4">
//                         {data.projects.map((proj, i) => (
//                           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]">
//                             <div className="flex justify-between mb-3"><h4 className="font-semibold">Project {i+1}</h4>{data.projects.length > 1 && <button onClick={() => removeProject(i)}><Trash2 size={16} className="text-red-500"/></button>}</div>
//                             <Input label="Title" value={proj.title} onChange={e => updateProject(i, "title", e.target.value)} />
//                             <Input label="Tech Stack" value={proj.techStack} onChange={e => updateProject(i, "techStack", e.target.value)} />
//                             <div className="mt-3"><TextArea label="Description" rows={2} value={proj.description} onChange={e => updateProject(i, "description", e.target.value)} /></div>
//                           </div>
//                         ))}
//                         <button onClick={addProject} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"><Plus size={16}/>Add Project</button>
//                       </div>
//                     )}

//                     {index === 5 && (
//                       <>
//                         <TextArea label="Professional Summary" rows={4} value={data.professionalSummary} onChange={e => updateData("professionalSummary", e.target.value)} />
//                         <TextArea label="Achievements" rows={4} value={data.achievements} onChange={e => updateData("achievements", e.target.value)} />
//                         <TextArea label="Why This Role? - AI" rows={3} value={data.whyThisRole} onChange={e => updateData("whyThisRole", e.target.value)} />
//                         <TextArea label="Why This Company? - AI" rows={3} value={data.whyThisCompany} onChange={e => updateData("whyThisCompany", e.target.value)} />
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-3 mt-6">
//             <button onClick={handleGenerateAI} disabled={isGenerating} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60">
//               <Wand2 size={18} /> {isGenerating? "Generating..." : "Generate with AI"}
//             </button>
//              <button onClick={handleCoverLetterSaving} disabled={isSaving} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60">
//               <Save size={16} /> {coverLetterId ? "update" : "Save"}
//             </button>
//             <button
//               onClick={() => coverLetterId && navigate(`/cover-letter-preview/${coverLetterId}`)}
//               disabled={!coverLetterId}
//               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold hover:bg-[#004182] transition disabled:opacity-50"
//             >
//               <Eye size={18} /> Preview
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCoverLetter;;








import React, { useState, useEffect } from "react";
import {
  Wand2,
  Download,
  Eye,
  FileText,
  Plus,
  Save,
  ArrowLeft,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  BsPerson,
  BsBriefcase,
  BsCodeSlash,
  BsTrophy,
} from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// =====================================================
// REUSABLE INPUT
// =====================================================
const Input = ({ label, ...props }) => (
  <div>
    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
      {label}
    </label>

    <input
      {...props}
      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900"
    />
  </div>
);

// =====================================================
// REUSABLE TEXTAREA
// =====================================================
const TextArea = ({ label, ...props }) => (
  <div>
    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
      {label}
    </label>

    <textarea
      {...props}
      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200 outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900 resize-none"
    />
  </div>
);

// =====================================================
// COVER LETTER PREVIEW
// =====================================================
const CoverLetterPreview = ({ data }) => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const topSkills = data.skills
    .map((s) => s.items)
    .filter(Boolean)
    .join(", ");

  const topExp = data.experiences[0];

  return (
    <div
      className="bg-white text-[#222] mx-auto shadow-lg border border-gray-200"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "Inter, Poppins, system-ui, sans-serif",
      }}
    >
      <div className="px-10 py-10">
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-[#1a1a1a]">
            {data.fullName || "Your Name"}
          </h1>

          <p className="text-[12px] text-[#555]">
            {data.email}
            {data.phone && ` • ${data.phone}`}
            {data.location && ` • ${data.location}`}
          </p>

          <p className="text-[12px] text-[#555]">
            {data.linkedinUrl}
            {data.github && ` • ${data.github}`}
          </p>
        </div>

        <p className="text-[12px] text-[#555] mb-6">{today}</p>

        <div className="mb-6 text-[12px] text-[#333]">
          {data.hiringManagerName ? (
            <p>Dear {data.hiringManagerName},</p>
          ) : (
            <p>Dear Hiring Manager,</p>
          )}

          {data.companyName && <p>{data.companyName}</p>}
        </div>

        <div className="space-y-4 text-[12px] leading-[1.6] text-[#333] text-justify">
          <p>
            I am excited to apply for the{" "}
            <b>
              {data.jobTitle || data.jobRole || "[Job Title]"}
            </b>{" "}
            position at{" "}
            <b>{data.companyName || "[Company]"}</b>.
            {data.whyThisRole}
          </p>

          {topExp?.company && (
            <p>
              In my role as <b>{topExp.position}</b> at{" "}
              <b>{topExp.company}</b>, {topExp.desc}
            </p>
          )}

          {topSkills && (
            <p>My key skills include {topSkills}.</p>
          )}

          {data.projects[0]?.title && (
            <p>
              I have also worked on{" "}
              <b>{data.projects[0].title}</b>:{" "}
              {data.projects[0].description}
            </p>
          )}

          {data.whyThisCompany && (
            <p>{data.whyThisCompany}</p>
          )}

          <p>
            Thank you for your time and consideration. I look
            forward to the opportunity to discuss how I can
            contribute to {data.companyName || "your company"}.
          </p>

          <p className="mt-6">
            Sincerely,
            <br />
            {data.fullName || "Your Name"}
          </p>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// EMPTY COVER LETTER DATA
// =====================================================
const getEmptyCoverLetterData = () => ({
  jobTitle: "",
  companyName: "",
  jobLocation: "",
  hiringManagerName: "",
  jobDescription: "",

  whyThisCompany: "",
  whyThisRole: "",

  jobRole: "",

  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedinUrl: "",
  github: "",

  professionalSummary: "",

  skills: [
    {
      category: "",
      items: "",
    },
  ],

  experiences: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      desc: "",
    },
  ],

  projects: [
    {
      title: "",
      description: "",
      techStack: "",
      startDate: "",
      endDate: "",
      link: "",
    },
  ],

  achievements: "",
});

// =====================================================
// CREATE COVER LETTER
// =====================================================
const CreateCoverLetter = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [openSections, setOpenSections] = useState([0, 1]);

  const [data, setData] = useState(null);

  const [isSaving, setIsSaving] = useState(false);
  const [coverLetterId, setCoverLetterId] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  // =====================================================
  // FETCH COVER LETTER / RESUME / CREATE EMPTY
  // =====================================================
  useEffect(() => {
    const initData = async () => {
      // =================================================
      // NO ID
      // /create-cover-letter
      //
      // Create cover letter WITHOUT resume
      // =================================================
      if (!id) {
        setData(getEmptyCoverLetterData());
        setCoverLetterId(null);
        return;
      }

      // =================================================
      // ID EXISTS
      // First try existing cover letter
      // Then try resume
      // =================================================
      try {
        const resCover = await axios
          .get(
            `http://localhost:5000/api/v1/coverletter/get/${id}`,
            {
              withCredentials: true,
            }
          )
          .catch(() => null);

        // =================================================
        // EXISTING COVER LETTER FOUND
        // =================================================
        if (resCover?.data?.coverLetter) {
          const cl = resCover.data.coverLetter;

          setData({
            ...cl,

            companyName:
              cl.companyName ||
              cl.company ||
              "",

            skills:
              cl.skills?.length > 0
                ? cl.skills
                : [
                    {
                      category: "",
                      items: "",
                    },
                  ],

            experiences:
              cl.experiences?.length > 0
                ? cl.experiences
                : [
                    {
                      company: "",
                      position: "",
                      startDate: "",
                      endDate: "",
                      desc: "",
                    },
                  ],

            projects:
              cl.projects?.length > 0
                ? cl.projects
                : [
                    {
                      title: "",
                      description: "",
                      techStack: "",
                      startDate: "",
                      endDate: "",
                      link: "",
                    },
                  ],
          });

          setCoverLetterId(cl._id);

          return;
        }

        // =================================================
        // NO COVER LETTER
        // TRY RESUME
        // =================================================
        const res = await axios.get(
          `http://localhost:5000/api/v1/resume/get/${id}`,
          {
            withCredentials: true,
          }
        );

        const resume = res.data.resume;

        setData({
          jobTitle: "",
          companyName: "",
          jobLocation: "",
          hiringManagerName: "",
          jobDescription: "",

          whyThisCompany: "",
          whyThisRole: "",

          jobRole: resume.jobRole || "",

          fullName: resume.fullName || "",
          email: resume.email || "",
          phone: resume.phone || "",
          location: resume.location || "",
          linkedinUrl: resume.linkedin || "",
          github: resume.github || "",

          professionalSummary: resume.summary || "",

          skills:
            resume.skills?.length > 0
              ? resume.skills.map((s) => ({
                  category: s.category || "",
                  items: Array.isArray(s.items)
                    ? s.items.join(", ")
                    : s.items || "",
                }))
              : [
                  {
                    category: "",
                    items: "",
                  },
                ],

          experiences:
            resume.workExperience?.length > 0
              ? resume.workExperience.map((e) => {
                  const [s, ed] = (
                    e.duration || ""
                  ).split(" - ");

                  return {
                    company: e.company || "",
                    position: e.role || "",
                    startDate: s || "",
                    endDate: ed || "",
                    desc: e.description || "",
                  };
                })
              : [
                  {
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    desc: "",
                  },
                ],

          projects:
            resume.projects?.length > 0
              ? resume.projects.map((p) => ({
                  title: p.title || "",
                  description: p.description || "",
                  techStack: Array.isArray(p.techStack)
                    ? p.techStack.join(", ")
                    : p.techStack || "",
                  startDate: p.startDate || "",
                  endDate: p.endDate || "",
                  link: p.link || "",
                }))
              : [
                  {
                    title: "",
                    description: "",
                    techStack: "",
                    startDate: "",
                    endDate: "",
                    link: "",
                  },
                ],

          achievements:
            resume.achievements?.length > 0
              ? resume.achievements
                  .map((a) => a.description)
                  .join("\n")
              : "",
        });

        setCoverLetterId(null);
      } catch (error) {
        console.error(
          "Failed to load resume or cover letter:",
          error
        );

        toast.error(
          error.response?.data?.message ||
            "Failed to load data"
        );

        // Don't keep showing Loading forever.
        // Give the user an empty form.
        setData(getEmptyCoverLetterData());
      }
    };

    initData();
  }, [id]);

  // =====================================================
  // LOADING
  // =====================================================
  if (!data) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  // =====================================================
  // UPDATE DATA
  // =====================================================
  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // =====================================================
  // TOGGLE SECTION
  // =====================================================
  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // =====================================================
  // EXPERIENCE
  // =====================================================
  const updateExperience = (
    index,
    field,
    value
  ) => {
    const updated = [...data.experiences];

    updated[index][field] = value;

    updateData("experiences", updated);
  };

  const addExperience = () => {
    updateData("experiences", [
      ...data.experiences,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        desc: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    if (data.experiences.length === 1) {
      return toast.info(
        "At least one experience required"
      );
    }

    updateData(
      "experiences",
      data.experiences.filter(
        (_, i) => i !== index
      )
    );
  };

  // =====================================================
  // SKILLS
  // =====================================================
  const updateSkill = (
    index,
    field,
    value
  ) => {
    const updated = [...data.skills];

    updated[index][field] = value;

    updateData("skills", updated);
  };

  const addSkills = () => {
    updateData("skills", [
      ...data.skills,
      {
        category: "",
        items: "",
      },
    ]);
  };

  const removeSkill = (index) => {
    if (data.skills.length === 1) {
      return toast.info(
        "At least one skill category required"
      );
    }

    updateData(
      "skills",
      data.skills.filter(
        (_, i) => i !== index
      )
    );
  };

  // =====================================================
  // PROJECTS
  // =====================================================
  const updateProject = (
    index,
    field,
    value
  ) => {
    const updated = [...data.projects];

    updated[index][field] = value;

    updateData("projects", updated);
  };

  const addProject = () => {
    updateData("projects", [
      ...data.projects,
      {
        title: "",
        description: "",
        techStack: "",
        startDate: "",
        endDate: "",
        link: "",
      },
    ]);
  };

  const removeProject = (index) => {
    if (data.projects.length === 1) {
      return toast.info(
        "At least one project required"
      );
    }

    updateData(
      "projects",
      data.projects.filter(
        (_, i) => i !== index
      )
    );
  };

  // =====================================================
  // AI
  // =====================================================
  const handleGenerateAI = async () => {
    if (
      !data.jobTitle ||
      !data.companyName
    ) {
      return toast.error(
        "Please enter Job Title and Company Name"
      );
    }

    setIsGenerating(true);

    setTimeout(() => {
      updateData(
        "whyThisRole",
        ` My ${
          data.jobRole || "professional"
        } experience and skills in ${
          data.skills[0]?.items || "relevant technologies"
        } directly match the requirements of the ${
          data.jobTitle
        } role.`
      );

      updateData(
        "whyThisCompany",
        ` I am interested in joining ${
          data.companyName
        } because I admire your work and would love to contribute.`
      );

      setIsGenerating(false);

      toast.success(
        "Cover letter generated"
      );
    }, 1500);
  };

  // =====================================================
  // PDF
  // =====================================================
  const handleDownloadPDF = async () => {
    setIsDownloading(true);

    setTimeout(() => {
      console.log("Downloading...");
      setIsDownloading(false);
    }, 1500);
  };

  // =====================================================
  // SECTIONS
  // =====================================================
  const sections = [
    {
      title: "Job Information",
      icon: <BsBriefcase />,
    },
    {
      title: "Personal Information",
      icon: <BsPerson />,
    },
    {
      title: "Experience",
      icon: <BsBriefcase />,
    },
    {
      title: "Skills",
      icon: <BsCodeSlash />,
    },
    {
      title: "Projects",
      icon: <BsCodeSlash />,
    },
    {
      title: "Achievements & Summary",
      icon: <BsTrophy />,
    },
  ];

  // =====================================================
  // SAVE COVER LETTER
  // =====================================================
  const handleCoverLetterSaving = async () => {
    try {
      setIsSaving(true);

      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        location: data.location,

        linkedinUrl: data.linkedinUrl,
        github: data.github,

        jobRole: data.jobRole,
        professionalSummary:
          data.professionalSummary,

        skills: data.skills,
        projects: data.projects,
        experiences: data.experiences,

        achievements: data.achievements,

        jobTitle: data.jobTitle,
        companyName: data.companyName,
        jobLocation: data.jobLocation,

        hiringManagerName:
          data.hiringManagerName,

        jobDescription:
          data.jobDescription,

        whyThisRole: data.whyThisRole,
        whyThisCompany:
          data.whyThisCompany,

        // =================================================
        // IMPORTANT
        // Resume is OPTIONAL
        // Only send resumeId if there is an ID
        // =================================================
        ...(id ? { resumeId: id } : {}),
      };

      const url = coverLetterId
        ? `http://localhost:5000/api/v1/coverletter/update/${coverLetterId}`
        : "http://localhost:5000/api/v1/coverletter/create";

      const method = coverLetterId
        ? "put"
        : "post";

      const res = await axios[method](
        url,
        payload,
        {
          headers: {
            "Content-Type":
              "application/json",
          },

          withCredentials: true,
        }
      );

      if (res.data.success) {
        setCoverLetterId(
          res.data.coverLetter._id
        );

        toast.success(
          "Cover letter saved successfully!"
        );
      }
    } catch (error) {
      console.error(
        "Error saving cover letter:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to save cover letter"
      );
    } finally {
      setIsSaving(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================
  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">

          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5">
            <FileText
              size={20}
              className="text-[#0A66C2]"
            />

            Create Cover Letter
          </h2>

          <div className="space-y-1">

            {sections.map(
              (section, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >

                  <button
                    onClick={() =>
                      toggleSection(index)
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3">

                      <span className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">
                        {section.icon}
                      </span>

                      <h3 className="font-semibold text-gray-900">
                        {section.title}
                      </h3>

                    </div>

                    {openSections.includes(
                      index
                    ) ? (
                      <ChevronUp className="text-gray-400" />
                    ) : (
                      <ChevronDown className="text-gray-400" />
                    )}
                  </button>

                  {openSections.includes(
                    index
                  ) && (
                    <div className="px-4 pb-5 pt-3 border-t border-gray-100 space-y-4">

                      {/* =================================================
                          JOB INFORMATION
                      ================================================= */}
                      {index === 0 && (
                        <>
                          <Input
                            label="Job Title"
                            value={
                              data.jobTitle
                            }
                            onChange={(e) =>
                              updateData(
                                "jobTitle",
                                e.target.value
                              )
                            }
                            placeholder="Frontend Developer"
                          />

                          <Input
                            label="Company"
                            value={
                              data.companyName
                            }
                            onChange={(e) =>
                              updateData(
                                "companyName",
                                e.target.value
                              )
                            }
                            placeholder="Google"
                          />

                          <Input
                            label="Job Location"
                            value={
                              data.jobLocation
                            }
                            onChange={(e) =>
                              updateData(
                                "jobLocation",
                                e.target.value
                              )
                            }
                            placeholder="Remote / Bangalore"
                          />

                          <Input
                            label="Hiring Manager Name"
                            value={
                              data.hiringManagerName
                            }
                            onChange={(e) =>
                              updateData(
                                "hiringManagerName",
                                e.target.value
                              )
                            }
                            placeholder="Optional"
                          />

                          <TextArea
                            label="Job Description"
                            rows={5}
                            value={
                              data.jobDescription
                            }
                            onChange={(e) =>
                              updateData(
                                "jobDescription",
                                e.target.value
                              )
                            }
                            placeholder="Paste full JD"
                          />
                        </>
                      )}

                      {/* =================================================
                          PERSONAL INFORMATION
                      ================================================= */}
                      {index === 1 && (
                        <>
                          <Input
                            label="Full Name"
                            value={
                              data.fullName
                            }
                            onChange={(e) =>
                              updateData(
                                "fullName",
                                e.target.value
                              )
                            }
                          />

                          <div className="grid md:grid-cols-2 gap-4">

                            <Input
                              label="Email"
                              type="email"
                              value={
                                data.email
                              }
                              onChange={(e) =>
                                updateData(
                                  "email",
                                  e.target.value
                                )
                              }
                            />

                            <Input
                              label="Phone"
                              value={
                                data.phone
                              }
                              onChange={(e) =>
                                updateData(
                                  "phone",
                                  e.target.value
                                )
                              }
                            />

                          </div>

                          <Input
                            label="Location"
                            value={
                              data.location
                            }
                            onChange={(e) =>
                              updateData(
                                "location",
                                e.target.value
                              )
                            }
                          />

                          <Input
                            label="LinkedIn"
                            value={
                              data.linkedinUrl
                            }
                            onChange={(e) =>
                              updateData(
                                "linkedinUrl",
                                e.target.value
                              )
                            }
                          />

                          <Input
                            label="GitHub"
                            value={
                              data.github
                            }
                            onChange={(e) =>
                              updateData(
                                "github",
                                e.target.value
                              )
                            }
                          />
                        </>
                      )}

                      {/* =================================================
                          EXPERIENCE
                      ================================================= */}
                      {index === 2 && (
                        <div className="space-y-4">

                          {data.experiences.map(
                            (exp, i) => (
                              <div
                                key={i}
                                className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                              >

                                <div className="flex justify-between mb-3">

                                  <h4 className="font-semibold">
                                    Experience{" "}
                                    {i + 1}
                                  </h4>

                                  {data
                                    .experiences
                                    .length >
                                    1 && (
                                    <button
                                      onClick={() =>
                                        removeExperience(
                                          i
                                        )
                                      }
                                    >
                                      <Trash2
                                        size={16}
                                        className="text-red-500"
                                      />
                                    </button>
                                  )}

                                </div>

                                <div className="grid md:grid-cols-2 gap-4">

                                  <Input
                                    label="Position"
                                    value={
                                      exp.position
                                    }
                                    onChange={(e) =>
                                      updateExperience(
                                        i,
                                        "position",
                                        e.target.value
                                      )
                                    }
                                  />

                                  <Input
                                    label="Company"
                                    value={
                                      exp.company
                                    }
                                    onChange={(e) =>
                                      updateExperience(
                                        i,
                                        "company",
                                        e.target.value
                                      )
                                    }
                                  />

                                  <Input
                                    label="Start"
                                    type="date"
                                    value={
                                      exp.startDate
                                    }
                                    onChange={(e) =>
                                      updateExperience(
                                        i,
                                        "startDate",
                                        e.target.value
                                      )
                                    }
                                  />

                                  <Input
                                    label="End"
                                    type="date"
                                    value={
                                      exp.endDate
                                    }
                                    onChange={(e) =>
                                      updateExperience(
                                        i,
                                        "endDate",
                                        e.target.value
                                      )
                                    }
                                  />

                                </div>

                                <div className="mt-3">

                                  <TextArea
                                    label="Description"
                                    rows={3}
                                    value={
                                      exp.desc
                                    }
                                    onChange={(e) =>
                                      updateExperience(
                                        i,
                                        "desc",
                                        e.target.value
                                      )
                                    }
                                  />

                                </div>

                              </div>
                            )
                          )}

                          <button
                            onClick={
                              addExperience
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"
                          >
                            <Plus size={16} />
                            Add Experience
                          </button>

                        </div>
                      )}

                      {/* =================================================
                          SKILLS
                      ================================================= */}
                      {index === 3 && (
                        <div className="space-y-4">

                          {data.skills.map(
                            (skill, i) => (
                              <div
                                key={i}
                                className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                              >

                                <div className="flex justify-between mb-3">

                                  <h4 className="font-semibold">
                                    Skill {i + 1}
                                  </h4>

                                  {data.skills
                                    .length >
                                    1 && (
                                    <button
                                      onClick={() =>
                                        removeSkill(
                                          i
                                        )
                                      }
                                    >
                                      <Trash2
                                        size={16}
                                        className="text-red-500"
                                      />
                                    </button>
                                  )}

                                </div>

                                <Input
                                  label="Category"
                                  value={
                                    skill.category
                                  }
                                  onChange={(e) =>
                                    updateSkill(
                                      i,
                                      "category",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Programming"
                                />

                                <div className="mt-3">

                                  <TextArea
                                    label="Skills"
                                    rows={2}
                                    value={
                                      skill.items
                                    }
                                    onChange={(e) =>
                                      updateSkill(
                                        i,
                                        "items",
                                        e.target.value
                                      )
                                    }
                                    placeholder="React, Node.js"
                                  />

                                </div>

                              </div>
                            )
                          )}

                          <button
                            onClick={addSkills}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"
                          >
                            <Plus size={16} />
                            Add Skill Category
                          </button>

                        </div>
                      )}

                      {/* =================================================
                          PROJECTS
                      ================================================= */}
                      {index === 4 && (
                        <div className="space-y-4">

                          {data.projects.map(
                            (proj, i) => (
                              <div
                                key={i}
                                className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                              >

                                <div className="flex justify-between mb-3">

                                  <h4 className="font-semibold">
                                    Project{" "}
                                    {i + 1}
                                  </h4>

                                  {data
                                    .projects
                                    .length >
                                    1 && (
                                    <button
                                      onClick={() =>
                                        removeProject(
                                          i
                                        )
                                      }
                                    >
                                      <Trash2
                                        size={16}
                                        className="text-red-500"
                                      />
                                    </button>
                                  )}

                                </div>

                                <Input
                                  label="Title"
                                  value={
                                    proj.title
                                  }
                                  onChange={(e) =>
                                    updateProject(
                                      i,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                />

                                <Input
                                  label="Tech Stack"
                                  value={
                                    proj.techStack
                                  }
                                  onChange={(e) =>
                                    updateProject(
                                      i,
                                      "techStack",
                                      e.target.value
                                    )
                                  }
                                />

                                <div className="mt-3">

                                  <TextArea
                                    label="Description"
                                    rows={2}
                                    value={
                                      proj.description
                                    }
                                    onChange={(e) =>
                                      updateProject(
                                        i,
                                        "description",
                                        e.target.value
                                      )
                                    }
                                  />

                                </div>

                              </div>
                            )
                          )}

                          <button
                            onClick={
                              addProject
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium"
                          >
                            <Plus size={16} />
                            Add Project
                          </button>

                        </div>
                      )}

                      {/* =================================================
                          SUMMARY
                      ================================================= */}
                      {index === 5 && (
                        <>
                          <TextArea
                            label="Professional Summary"
                            rows={4}
                            value={
                              data.professionalSummary
                            }
                            onChange={(e) =>
                              updateData(
                                "professionalSummary",
                                e.target.value
                              )
                            }
                          />

                          <TextArea
                            label="Achievements"
                            rows={4}
                            value={
                              data.achievements
                            }
                            onChange={(e) =>
                              updateData(
                                "achievements",
                                e.target.value
                              )
                            }
                          />

                          <TextArea
                            label="Why This Role? - AI"
                            rows={3}
                            value={
                              data.whyThisRole
                            }
                            onChange={(e) =>
                              updateData(
                                "whyThisRole",
                                e.target.value
                              )
                            }
                          />

                          <TextArea
                            label="Why This Company? - AI"
                            rows={3}
                            value={
                              data.whyThisCompany
                            }
                            onChange={(e) =>
                              updateData(
                                "whyThisCompany",
                                e.target.value
                              )
                            }
                          />
                        </>
                      )}

                    </div>
                  )}

                </div>
              )
            )}

          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}
          <div className="flex gap-3 mt-6">

            <button
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60"
            >
              <Wand2 size={18} />

              {isGenerating
                ? "Generating..."
                : "Generate with AI"}
            </button>

            <button
              onClick={
                handleCoverLetterSaving
              }
              disabled={isSaving}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-semibold hover:bg-blue-100 transition disabled:opacity-60"
            >
              <Save size={16} />

              {coverLetterId
                ? "Update"
                : "Save"}
            </button>

            <button
              onClick={() =>
                coverLetterId &&
                navigate(
                  `/cover-letter-preview/${coverLetterId}`
                )
              }
              disabled={!coverLetterId}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold hover:bg-[#004182] transition disabled:opacity-50"
            >
              <Eye size={18} />

              Preview
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateCoverLetter;