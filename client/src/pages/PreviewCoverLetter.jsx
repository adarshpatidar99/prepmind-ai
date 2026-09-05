// import React, { useState } from 'react'
// import {  ArrowLeft, Download
// } from "lucide-react";
// import { useParams } from 'react-router-dom';

// const PreviewCoverLetter = () => {

//     const [isDownloading, setIsDownlording] = useState(false);

//     const {id} = useParams();



//     const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     setTimeout(() => { console.log("Downloading..."); setIsDownloading(false); }, 1500);
//     };

//      return (
//       <div className="bg-gray-50 min-h-screen print:bg-white">
//         <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">
//           <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
//             <button onClick={() => setPreviewMode(false)} className="flex items-center gap-2 px-4 py-2 bg-white border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition">
//               <ArrowLeft size={16} /> Back to Edit
//             </button>
//             <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition disabled:bg-gray-400">
//               <Download size={16} /> {isDownloading? "Generating PDF..." : "Download PDF"}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
  
// }

// export default PreviewCoverLetter











// import React, { useState } from "react";
// import { ArrowLeft, Download } from "lucide-react";
// import { useParams, useNavigate } from "react-router-dom";

// const PreviewCoverLetter = () => {

//     const [isDownloading, setIsDownloading] = useState(false);

//     const { id } = useParams();
//     const navigate = useNavigate();

//     const handleDownloadPDF = async () => {
//         setIsDownloading(true);

//         setTimeout(() => {
//             console.log("Downloading...");
//             setIsDownloading(false);
//         }, 1500);
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen print:bg-white">

//             <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">

//                 <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">

//                     <button
//                         onClick={() => navigate(`/create-cover-letter/${id}`)}
//                         className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition"
//                     >
//                         <ArrowLeft size={16} />
//                         Back to Edit
//                     </button>

//                     <button
//                         onClick={handleDownloadPDF}
//                         disabled={isDownloading}
//                         className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition disabled:bg-gray-400"
//                     >
//                         <Download size={16} />
//                         {isDownloading
//                             ? "Generating PDF..."
//                             : "Download PDF"}
//                     </button>

//                 </div>

//             </div>

//         </div>
//     );
// };

// export default PreviewCoverLetter;





// import React, { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Download,
//   Mail,
//   Phone,
//   MapPin,
//   Briefcase,
//   Code2,
//   Award,
//   FileText,
//   Loader2,
// } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const PreviewCoverLetter = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDownloading, setIsDownloading] = useState(false);

//   // =====================================================
//   // FETCH COVER LETTER
//   // =====================================================

//   useEffect(() => {
//     if (!id) return;

//     const fetchCoverLetter = async () => {
//       try {
//         setIsLoading(true);

//         const res = await axios.get(
//           `http://localhost:5000/api/v1/coverletter/get/${id}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const coverLetter = res.data.coverLetter;

//         console.log("Fetched Cover Letter:", coverLetter);

//         // Backend schema already matches our required structure
//         setData(coverLetter);
//       } catch (error) {
//         console.error("Error fetching cover letter:", error);

//         toast.error(
//           error.response?.data?.message ||
//             "Failed to load cover letter"
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCoverLetter();
//   }, [id]);

//   // =====================================================
//   // DOWNLOAD PDF
//   // =====================================================

//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);

//     try {
//       // Add your PDF generation logic here later
//       setTimeout(() => {
//         window.print();
//         setIsDownloading(false);
//       }, 500);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to generate PDF");
//       setIsDownloading(false);
//     }
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="flex flex-col items-center gap-3">
//           <Loader2
//             size={32}
//             className="text-[#0A66C2] animate-spin"
//           />
//           <p className="text-gray-600 font-medium">
//             Loading cover letter...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // =====================================================
//   // NO DATA
//   // =====================================================

//   if (!data) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-sm text-center">
//           <FileText
//             size={40}
//             className="mx-auto text-gray-400 mb-3"
//           />

//           <h2 className="text-xl font-semibold text-gray-800">
//             Cover Letter Not Found
//           </h2>

//           <p className="text-gray-500 mt-2">
//             We couldn't load this cover letter.
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="mt-5 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // =====================================================
//   // CURRENT DATE
//   // =====================================================

//   const currentDate = new Date().toLocaleDateString(
//     "en-US",
//     {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }
//   );

//   // =====================================================
//   // RENDER
//   // =====================================================

//   return (
//     <div className="min-h-screen bg-[#F3F5F7]">

//       {/* ================================================= */}
//       {/* TOOLBAR */}
//       {/* ================================================= */}

//       <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm print:hidden">

//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           <button
//             onClick={() =>
//               navigate(`/create-cover-letter/${data.resumeId}`)
//             }
//             className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition"
//           >
//             <ArrowLeft size={18} />
//             Back to Edit
//           </button>

//           <div className="flex items-center gap-3">

//             <span className="hidden md:block text-sm text-gray-500">
//               Cover Letter Preview
//             </span>

//             <button
//               onClick={handleDownloadPDF}
//               disabled={isDownloading}
//               className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] transition disabled:bg-gray-400"
//             >
//               {isDownloading ? (
//                 <Loader2
//                   size={18}
//                   className="animate-spin"
//                 />
//               ) : (
//                 <Download size={18} />
//               )}

//               {isDownloading
//                 ? "Generating..."
//                 : "Download PDF"}
//             </button>

//           </div>

//         </div>
//       </div>

//       {/* ================================================= */}
//       {/* PREVIEW AREA */}
//       {/* ================================================= */}

//       <div className="py-10 px-4">

//         <div
//           id="cover-letter-preview"
//           className="
//             bg-white
//             max-w-[850px]
//             mx-auto
//             shadow-xl
//             rounded-xl
//             p-12
//             md:p-16
//             print:shadow-none
//             print:rounded-none
//             print:max-w-full
//             print:p-10
//           "
//         >

//           {/* ================================================= */}
//           {/* HEADER / SENDER INFORMATION */}
//           {/* ================================================= */}

//           <div className="border-b border-gray-200 pb-7">

//             <h1 className="text-3xl font-bold text-gray-900">
//               {data.fullName || "Your Name"}
//             </h1>

//             <p className="mt-2 text-lg font-medium text-[#0A66C2]">
//               {data.jobRole || ""}
//             </p>

//             <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">

//               {data.email && (
//                 <div className="flex items-center gap-1.5">
//                   <Mail size={15} />
//                   <span>{data.email}</span>
//                 </div>
//               )}

//               {data.phone && (
//                 <div className="flex items-center gap-1.5">
//                   <Phone size={15} />
//                   <span>{data.phone}</span>
//                 </div>
//               )}

//               {data.location && (
//                 <div className="flex items-center gap-1.5">
//                   <MapPin size={15} />
//                   <span>{data.location}</span>
//                 </div>
//               )}

//             </div>

//             <div className="mt-3 flex flex-wrap gap-5 text-sm">

//               {data.linkedinUrl && (
//                 <a
//                   href={data.linkedinUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
//                 >
//                   <FaLinkedin size={15} />
//                   LinkedIn
//                 </a>
//               )}

//               {data.github && (
//                 <a
//                   href={data.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
//                 >
//                   <FaGithub size={15} />
//                   GitHub
//                 </a>
//               )}

//             </div>

//           </div>

//           {/* ================================================= */}
//           {/* DATE */}
//           {/* ================================================= */}

//           <div className="mt-8 text-sm text-gray-700">
//             {currentDate}
//           </div>

//           {/* ================================================= */}
//           {/* RECIPIENT */}
//           {/* ================================================= */}

//           <div className="mt-8 text-sm text-gray-800 space-y-1">

//             <p className="font-semibold text-base">
//               {data.hiringManagerName ||
//                 "Hiring Manager"}
//             </p>

//             {data.company && (
//               <p className="font-medium">
//                 {data.company}
//               </p>
//             )}

//             {data.jobLocation && (
//               <p className="text-gray-600">
//                 {data.jobLocation}
//               </p>
//             )}

//           </div>

//           {/* ================================================= */}
//           {/* SUBJECT */}
//           {/* ================================================= */}

//           <div className="mt-8">

//             <p className="font-semibold text-gray-900">
//               Subject: Application for{" "}
//               {data.jobTitle || "the position"}
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* GREETING */}
//           {/* ================================================= */}

//           <div className="mt-8">

//             <p className="text-gray-800">
//               Dear{" "}
//               {data.hiringManagerName ||
//                 "Hiring Manager"}
//               ,
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* COVER LETTER BODY */}
//           {/* ================================================= */}

//           <div className="mt-6 space-y-5 text-[15px] leading-7 text-gray-800">

//             {/* INTRODUCTION */}

//             <p>
//               I am writing to express my interest in the{" "}
//               <strong>
//                 {data.jobTitle || "position"}
//               </strong>{" "}
//               position at{" "}
//               <strong>
//                 {data.company || "your organization"}
//               </strong>.
//               {data.whyThisRole && (
//                 <> {data.whyThisRole}</>
//               )}
//             </p>

//             {/* PROFESSIONAL SUMMARY */}

//             {data.professionalSummary && (
//               <p>
//                 {data.professionalSummary}
//               </p>
//             )}

//             {/* EXPERIENCE */}

//             {data.experiences?.length > 0 &&
//               data.experiences.some(
//                 (exp) => exp.company || exp.desc
//               ) && (
//                 <div>

//                   <p>
//                     Throughout my professional journey,
//                     I have gained valuable experience through
//                     the following roles:
//                   </p>

//                   <div className="mt-3 space-y-3">

//                     {data.experiences.map(
//                       (experience, index) => {

//                         if (
//                           !experience.company &&
//                           !experience.position &&
//                           !experience.desc
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <div key={index}>

//                             <p className="font-semibold">
//                               {experience.position}
//                               {experience.company &&
//                                 ` at ${experience.company}`}
//                             </p>

//                             {(experience.startDate ||
//                               experience.endDate) && (
//                               <p className="text-sm text-gray-500">
//                                 {experience.startDate}
//                                 {experience.endDate &&
//                                   ` - ${experience.endDate}`}
//                               </p>
//                             )}

//                             {experience.desc && (
//                               <p className="mt-1">
//                                 {experience.desc}
//                               </p>
//                             )}

//                           </div>
//                         );
//                       }
//                     )}

//                   </div>

//                 </div>
//               )}

//             {/* SKILLS */}

//             {data.skills?.length > 0 &&
//               data.skills.some(
//                 (skill) =>
//                   skill.category ||
//                   skill.items?.length > 0
//               ) && (
//                 <div>

//                   <p>
//                     My technical skills and areas of
//                     expertise include:
//                   </p>

//                   <ul className="mt-2 list-disc pl-6 space-y-1">

//                     {data.skills.map(
//                       (skill, index) => {

//                         if (
//                           !skill.category &&
//                           !skill.items?.length
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <li key={index}>

//                             <strong>
//                               {skill.category}:
//                             </strong>{" "}

//                             {Array.isArray(skill.items)
//                               ? skill.items.join(", ")
//                               : skill.items}

//                           </li>
//                         );
//                       }
//                     )}

//                   </ul>

//                 </div>
//               )}

//             {/* PROJECTS */}

//             {data.projects?.length > 0 &&
//               data.projects.some(
//                 (project) =>
//                   project.title ||
//                   project.description
//               ) && (
//                 <div>

//                   <p>
//                     I have also worked on several projects
//                     that strengthened my practical development
//                     skills, including:
//                   </p>

//                   <div className="mt-3 space-y-4">

//                     {data.projects.map(
//                       (project, index) => {

//                         if (
//                           !project.title &&
//                           !project.description
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <div key={index}>

//                             <p className="font-semibold">
//                               {project.title}
//                             </p>

//                             {project.description && (
//                               <p className="mt-1">
//                                 {project.description}
//                               </p>
//                             )}

//                             {project.techStack?.length >
//                               0 && (
//                               <p className="mt-1 text-sm text-gray-600">
//                                 <strong>
//                                   Technologies:
//                                 </strong>{" "}
//                                 {Array.isArray(
//                                   project.techStack
//                                 )
//                                   ? project.techStack.join(
//                                       ", "
//                                     )
//                                   : project.techStack}
//                               </p>
//                             )}

//                           </div>
//                         );
//                       }
//                     )}

//                   </div>

//                 </div>
//               )}

//             {/* ACHIEVEMENTS */}

//             {data.achievements?.length > 0 && (
//               <div>

//                 <p>
//                   I have also developed my skills through
//                   continuous learning and achievements,
//                   including:
//                 </p>

//                 <ul className="mt-2 list-disc pl-6 space-y-1">

//                   {data.achievements.map(
//                     (achievement, index) => (
//                       <li key={index}>
//                         {achievement.description}
//                       </li>
//                     )
//                   )}

//                 </ul>

//               </div>
//             )}

//             {/* WHY COMPANY */}

//             {data.whyThisCompany && (
//               <p>
//                 {data.whyThisCompany}
//               </p>
//             )}

//             {/* CLOSING */}

//             <p>
//               Thank you for your time and consideration.
//               I would welcome the opportunity to discuss how
//               my skills, experience, and enthusiasm could
//               contribute to{" "}
//               {data.company || "your organization"}.
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* CLOSING */}
//           {/* ================================================= */}

//           <div className="mt-10 text-gray-800">

//             <p>
//               Sincerely,
//             </p>

//             <p className="mt-6 font-semibold text-lg">
//               {data.fullName || "Your Name"}
//             </p>

//             {data.email && (
//               <p className="text-sm text-gray-600 mt-1">
//                 {data.email}
//               </p>
//             )}

//             {data.phone && (
//               <p className="text-sm text-gray-600">
//                 {data.phone}
//               </p>
//             )}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default PreviewCoverLetter;






// import React, { useEffect, useState } from "react";
// import {
//   ArrowLeft,
//   Download,
//   Mail,
//   Phone,
//   MapPin,
//   Briefcase,
//   Code2,
//   Award,
//   FileText,
//   Loader2,
// } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const PreviewCoverLetter = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDownloading, setIsDownloading] = useState(false);

//   // =====================================================
//   // FETCH COVER LETTER
//   // =====================================================

//   useEffect(() => {
//     if (!id) return;

//     const fetchCoverLetter = async () => {
//       try {
//         setIsLoading(true);

//         const res = await axios.get(
//           `http://localhost:5000/api/v1/coverletter/get/${id}`,
//           {
//             withCredentials: true,
//           }
//         );

//         const coverLetter = res.data.coverLetter;

//         console.log("Fetched Cover Letter:", coverLetter);

//         // Backend schema already matches our required structure
//         setData(coverLetter);
//       } catch (error) {
//         console.error("Error fetching cover letter:", error);

//         toast.error(
//           error.response?.data?.message ||
//             "Failed to load cover letter"
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCoverLetter();
//   }, [id]);

//   // =====================================================
//   // DOWNLOAD PDF
//   // =====================================================

//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);

//     try {
//       // Add your PDF generation logic here later
//       setTimeout(() => {
//         window.print();
//         setIsDownloading(false);
//       }, 500);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to generate PDF");
//       setIsDownloading(false);
//     }
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="flex flex-col items-center gap-3">
//           <Loader2
//             size={32}
//             className="text-[#0A66C2] animate-spin"
//           />
//           <p className="text-gray-600 font-medium">
//             Loading cover letter...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // =====================================================
//   // NO DATA
//   // =====================================================

//   if (!data) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-sm text-center">
//           <FileText
//             size={40}
//             className="mx-auto text-gray-400 mb-3"
//           />

//           <h2 className="text-xl font-semibold text-gray-800">
//             Cover Letter Not Found
//           </h2>

//           <p className="text-gray-500 mt-2">
//             We couldn't load this cover letter.
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="mt-5 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // =====================================================
//   // CURRENT DATE
//   // =====================================================

//   const currentDate = new Date().toLocaleDateString(
//     "en-US",
//     {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }
//   );

//   // =====================================================
//   // RENDER
//   // =====================================================

//   return (
//     <div className="min-h-screen bg-[#F3F5F7]">

//       {/* ================================================= */}
//       {/* REDESIGNED TOOLBAR */}
//       {/* ================================================= */}

//       <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 print:hidden">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

//           <div className="flex items-center justify-between gap-4">

//             {/* LEFT SIDE */}
//             <div className="flex items-center gap-3 min-w-0">

//               <button
//                 onClick={() =>
//                   navigate(`/create-cover-letter/${data.resumeId}`)
//                 }
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-2
//                   px-3.5
//                   py-2.5
//                   rounded-xl
//                   border
//                   border-gray-200
//                   bg-white
//                   text-gray-700
//                   font-semibold
//                   text-sm
//                   shadow-sm
//                   hover:bg-gray-50
//                   hover:border-gray-300
//                   hover:text-gray-900
//                   transition-all
//                   duration-200
//                 "
//               >
//                 <ArrowLeft
//                   size={17}
//                   className="transition-transform duration-200 group-hover:-translate-x-0.5"
//                 />

//                 <span className="hidden sm:inline">
//                   Back to Edit
//                 </span>
//               </button>

//               <div className="hidden sm:block h-8 w-px bg-gray-200" />

//               <div className="flex items-center gap-3 min-w-0">

//                 <div className="
//                   w-10
//                   h-10
//                   rounded-xl
//                   bg-[#0A66C2]/10
//                   text-[#0A66C2]
//                   flex
//                   items-center
//                   justify-center
//                   shrink-0
//                 ">
//                   <FileText size={20} />
//                 </div>

//                 <div className="min-w-0">

//                   <h1 className="
//                     text-sm
//                     sm:text-base
//                     font-bold
//                     text-gray-900
//                     truncate
//                   ">
//                     Cover Letter Preview
//                   </h1>

//                   <p className="
//                     hidden
//                     sm:block
//                     text-xs
//                     text-gray-500
//                     mt-0.5
//                   ">
//                     Review your cover letter before downloading
//                   </p>

//                 </div>

//               </div>

//             </div>

//             {/* RIGHT SIDE */}
//             <div className="flex items-center gap-2 sm:gap-3 shrink-0">

//               <span className="
//                 hidden
//                 lg:inline-flex
//                 items-center
//                 gap-1.5
//                 px-3
//                 py-1.5
//                 rounded-full
//                 bg-gray-100
//                 text-gray-600
//                 text-xs
//                 font-medium
//               ">
//                 <span className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-green-500
//                 " />
//                 Preview Mode
//               </span>

//               <button
//                 onClick={handleDownloadPDF}
//                 disabled={isDownloading}
//                 className="
//                   group
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   px-4
//                   sm:px-5
//                   py-2.5
//                   rounded-xl
//                   bg-[#0A66C2]
//                   text-white
//                   font-semibold
//                   text-sm
//                   shadow-sm
//                   hover:bg-[#004182]
//                   hover:shadow-md
//                   transition-all
//                   duration-200
//                   disabled:bg-gray-400
//                   disabled:cursor-not-allowed
//                   disabled:shadow-none
//                 "
//               >

//                 {isDownloading ? (
//                   <Loader2
//                     size={18}
//                     className="animate-spin"
//                   />
//                 ) : (
//                   <Download
//                     size={18}
//                     className="transition-transform duration-200 group-hover:translate-y-0.5"
//                   />
//                 )}

//                 <span className="hidden sm:inline">
//                   {isDownloading
//                     ? "Generating..."
//                     : "Download PDF"}
//                 </span>

//                 <span className="sm:hidden">
//                   {isDownloading
//                     ? "..."
//                     : "Download"}
//                 </span>

//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ================================================= */}
//       {/* PREVIEW AREA */}
//       {/* ================================================= */}

//       <div className="py-10 px-4">

//         <div
//           id="cover-letter-preview"
//           className="
//             bg-white
//             max-w-[850px]
//             mx-auto
//             shadow-xl
//             rounded-xl
//             p-12
//             md:p-16
//             print:shadow-none
//             print:rounded-none
//             print:max-w-full
//             print:p-10
//           "
//         >

//           {/* ================================================= */}
//           {/* HEADER / SENDER INFORMATION */}
//           {/* ================================================= */}

//           <div className="border-b border-gray-200 pb-7">

//             <h1 className="text-3xl font-bold text-gray-900">
//               {data.fullName || "Your Name"}
//             </h1>

//             <p className="mt-2 text-lg font-medium text-[#0A66C2]">
//               {data.jobRole || ""}
//             </p>

//             <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">

//               {data.email && (
//                 <div className="flex items-center gap-1.5">
//                   <Mail size={15} />
//                   <span>{data.email}</span>
//                 </div>
//               )}

//               {data.phone && (
//                 <div className="flex items-center gap-1.5">
//                   <Phone size={15} />
//                   <span>{data.phone}</span>
//                 </div>
//               )}

//               {data.location && (
//                 <div className="flex items-center gap-1.5">
//                   <MapPin size={15} />
//                   <span>{data.location}</span>
//                 </div>
//               )}

//             </div>

//             <div className="mt-3 flex flex-wrap gap-5 text-sm">

//               {data.linkedinUrl && (
//                 <a
//                   href={data.linkedinUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
//                 >
//                   <FaLinkedin size={15} />
//                   LinkedIn
//                 </a>
//               )}

//               {data.github && (
//                 <a
//                   href={data.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
//                 >
//                   <FaGithub size={15} />
//                   GitHub
//                 </a>
//               )}

//             </div>

//           </div>

//           {/* ================================================= */}
//           {/* DATE */}
//           {/* ================================================= */}

//           <div className="mt-8 text-sm text-gray-700">
//             {currentDate}
//           </div>

//           {/* ================================================= */}
//           {/* RECIPIENT */}
//           {/* ================================================= */}

//           <div className="mt-8 text-sm text-gray-800 space-y-1">

//             <p className="font-semibold text-base">
//               {data.hiringManagerName ||
//                 "Hiring Manager"}
//             </p>

//             {data.company && (
//               <p className="font-medium">
//                 {data.company}
//               </p>
//             )}

//             {data.jobLocation && (
//               <p className="text-gray-600">
//                 {data.jobLocation}
//               </p>
//             )}

//           </div>

//           {/* ================================================= */}
//           {/* SUBJECT */}
//           {/* ================================================= */}

//           <div className="mt-8">

//             <p className="font-semibold text-gray-900">
//               Subject: Application for{" "}
//               {data.jobTitle || "the position"}
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* GREETING */}
//           {/* ================================================= */}

//           <div className="mt-8">

//             <p className="text-gray-800">
//               Dear{" "}
//               {data.hiringManagerName ||
//                 "Hiring Manager"}
//               ,
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* COVER LETTER BODY */}
//           {/* ================================================= */}

//           <div className="mt-6 space-y-5 text-[15px] leading-7 text-gray-800">

//             {/* INTRODUCTION */}

//             <p>
//               I am writing to express my interest in the{" "}
//               <strong>
//                 {data.jobTitle || "position"}
//               </strong>{" "}
//               position at{" "}
//               <strong>
//                 {data.company || "your organization"}
//               </strong>.
//               {data.whyThisRole && (
//                 <> {data.whyThisRole}</>
//               )}
//             </p>

//             {/* PROFESSIONAL SUMMARY */}

//             {data.professionalSummary && (
//               <p>
//                 {data.professionalSummary}
//               </p>
//             )}

//             {/* EXPERIENCE */}

//             {data.experiences?.length > 0 &&
//               data.experiences.some(
//                 (exp) => exp.company || exp.desc
//               ) && (
//                 <div>

//                   <p>
//                     Throughout my professional journey,
//                     I have gained valuable experience through
//                     the following roles:
//                   </p>

//                   <div className="mt-3 space-y-3">

//                     {data.experiences.map(
//                       (experience, index) => {

//                         if (
//                           !experience.company &&
//                           !experience.position &&
//                           !experience.desc
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <div key={index}>

//                             <p className="font-semibold">
//                               {experience.position}
//                               {experience.company &&
//                                 ` at ${experience.company}`}
//                             </p>

//                             {(experience.startDate ||
//                               experience.endDate) && (
//                               <p className="text-sm text-gray-500">
//                                 {experience.startDate}
//                                 {experience.endDate &&
//                                   ` - ${experience.endDate}`}
//                               </p>
//                             )}

//                             {experience.desc && (
//                               <p className="mt-1">
//                                 {experience.desc}
//                               </p>
//                             )}

//                           </div>
//                         );
//                       }
//                     )}

//                   </div>

//                 </div>
//               )}

//             {/* SKILLS */}

//             {data.skills?.length > 0 &&
//               data.skills.some(
//                 (skill) =>
//                   skill.category ||
//                   skill.items?.length > 0
//               ) && (
//                 <div>

//                   <p>
//                     My technical skills and areas of
//                     expertise include:
//                   </p>

//                   <ul className="mt-2 list-disc pl-6 space-y-1">

//                     {data.skills.map(
//                       (skill, index) => {

//                         if (
//                           !skill.category &&
//                           !skill.items?.length
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <li key={index}>

//                             <strong>
//                               {skill.category}:
//                             </strong>{" "}

//                             {Array.isArray(skill.items)
//                               ? skill.items.join(", ")
//                               : skill.items}

//                           </li>
//                         );
//                       }
//                     )}

//                   </ul>

//                 </div>
//               )}

//             {/* PROJECTS */}

//             {data.projects?.length > 0 &&
//               data.projects.some(
//                 (project) =>
//                   project.title ||
//                   project.description
//               ) && (
//                 <div>

//                   <p>
//                     I have also worked on several projects
//                     that strengthened my practical development
//                     skills, including:
//                   </p>

//                   <div className="mt-3 space-y-4">

//                     {data.projects.map(
//                       (project, index) => {

//                         if (
//                           !project.title &&
//                           !project.description
//                         ) {
//                           return null;
//                         }

//                         return (
//                           <div key={index}>

//                             <p className="font-semibold">
//                               {project.title}
//                             </p>

//                             {project.description && (
//                               <p className="mt-1">
//                                 {project.description}
//                               </p>
//                             )}

//                             {project.techStack?.length >
//                               0 && (
//                               <p className="mt-1 text-sm text-gray-600">
//                                 <strong>
//                                   Technologies:
//                                 </strong>{" "}
//                                 {Array.isArray(
//                                   project.techStack
//                                 )
//                                   ? project.techStack.join(
//                                       ", "
//                                     )
//                                   : project.techStack}
//                               </p>
//                             )}

//                           </div>
//                         );
//                       }
//                     )}

//                   </div>

//                 </div>
//               )}

//             {/* ACHIEVEMENTS */}

//             {data.achievements?.length > 0 && (
//               <div>

//                 <p>
//                   I have also developed my skills through
//                   continuous learning and achievements,
//                   including:
//                 </p>

//                 <ul className="mt-2 list-disc pl-6 space-y-1">

//                   {data.achievements.map(
//                     (achievement, index) => (
//                       <li key={index}>
//                         {achievement.description}
//                       </li>
//                     )
//                   )}

//                 </ul>

//               </div>
//             )}

//             {/* WHY COMPANY */}

//             {data.whyThisCompany && (
//               <p>
//                 {data.whyThisCompany}
//               </p>
//             )}

//             {/* CLOSING */}

//             <p>
//               Thank you for your time and consideration.
//               I would welcome the opportunity to discuss how
//               my skills, experience, and enthusiasm could
//               contribute to{" "}
//               {data.company || "your organization"}.
//             </p>

//           </div>

//           {/* ================================================= */}
//           {/* CLOSING */}
//           {/* ================================================= */}

//           <div className="mt-10 text-gray-800">

//             <p>
//               Sincerely,
//             </p>

//             <p className="mt-6 font-semibold text-lg">
//               {data.fullName || "Your Name"}
//             </p>

//             {data.email && (
//               <p className="text-sm text-gray-600 mt-1">
//                 {data.email}
//               </p>
//             )}

//             {data.phone && (
//               <p className="text-sm text-gray-600">
//                 {data.phone}
//               </p>
//             )}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default PreviewCoverLetter;










import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  FileText,
  Loader2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PreviewCoverLetter = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  // =====================================================
  // FETCH COVER LETTER
  // =====================================================
  useEffect(() => {
    if (!id) return;

    const fetchCoverLetter = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `http://localhost:5000/api/v1/coverletter/get/${id}`,
          { withCredentials: true }
        );
        setData(res.data.coverLetter);
      } catch (error) {
        console.error("Error fetching cover letter:", error);
        toast.error(
          error.response?.data?.message || "Failed to load cover letter"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoverLetter();
  }, [id]);

  // =====================================================
  // DOWNLOAD PDF - uses window.print
  // =====================================================
  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      setTimeout(() => {
        window.print();
        setIsDownloading(false);
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate PDF");
      setIsDownloading(false);
    }
  };

  // =====================================================
  // LOADING
  // =====================================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFBFC] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={32} className="text-[#0A66C2] animate-spin" />
          <p className="text-gray-600 font-medium">Loading cover letter...</p>
        </div>
      </div>
    );
  }

  // =====================================================
  // NO DATA
  // =====================================================
  if (!data) {
    return (
      <div className="min-h-screen bg-[#FAFBFC] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md">
          <FileText size={40} className="mx-auto text-gray-400 mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">
            Cover Letter Not Found
          </h2>
          <p className="text-gray-500 mt-2">
            We couldn't load this cover letter.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-5 px-5 py-2.5 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#004182] transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // CURRENT DATE
  // =====================================================
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // =====================================================
  // RENDER
  // =====================================================
  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      {/* TOOLBAR */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* LEFT */}
            <button
              onClick={() => navigate(`/create-cover-letter/${data.resumeId}`)}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm shadow-sm hover:bg-gray-50 transition"
            >
              <ArrowLeft size={17} className="transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Back to Edit</span>
            </button>

            {/* RIGHT */}
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A66C2] text-white font-semibold text-sm shadow-sm hover:bg-[#004182] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isDownloading? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Download size={18} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              )}
              <span className="hidden sm:inline">
                {isDownloading? "Generating..." : "Download PDF"}
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* PREVIEW AREA */}
      <div className="py-10 px-4">
        <div
          id="cover-letter-preview"
          className="bg-white max-w-[750px] mx-auto rounded-2xl border-gray-200 shadow-sm p-10 md:p-14 print:border-none print:shadow-none"
        >

          {/* HEADER */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {data.fullName || "Your Name"}
              </h1>
              <p className="text-lg text-gray-500 mt-1">{data.jobRole || ""}</p>
            </div>
            <div className="text-right text-sm text-gray-500 shrink-0">
              <p>{currentDate}</p>
            </div>
          </div>

          {/* CONTACT + LINKS */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-600">
            {data.email && (
              <a href={`mailto:${data.email}`} className="flex items-center gap-1.5 hover:text-[#0A66C2]">
                <Mail size={14} /> {data.email}
              </a>
            )}
            {data.phone && (
              <div className="flex items-center gap-1.5">
                <Phone size={14} /> {data.phone}
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={14} /> {data.location}
              </div>
            )}
          </div>

          <div className="flex gap-5 mt-2 text-sm">
            {data.linkedinUrl && (
              <a
                href={data.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#0A66C2] hover:underline"
              >
                <FaGithub size={14} /> GitHub
              </a>
            )}
          </div>

          {/* BODY */}
          <div className="mt-10 space-y-6 text-[16px] leading-8 text-gray-700">

            <p>Dear {data.hiringManagerName || "Hiring Manager"},</p>

            {/* INTRO CALLOUT */}
            <div className="p-5 bg-[#F7F9FC] rounded-xl border border-gray-100">
              <p>
                I am applying for the <strong>{data.jobTitle || "the position"}</strong> role at{" "}
                <strong>{data.company || "your organization"}</strong>.
              </p>
              {data.whyThisRole && <p className="mt-2">{data.whyThisRole}</p>}
            </div>

            {/* PROFESSIONAL SUMMARY */}
            {data.professionalSummary && (
              <div>
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Briefcase size={16} /> Experience & Summary
                </h2>
                <p className="mt-2">{data.professionalSummary}</p>
              </div>
            )}

            {/* EXPERIENCE */}
            {data.experiences?.length > 0 && data.experiences.some(e => e.company) && (
              <div>
                <h2 className="font-semibold text-gray-900">Work Experience</h2>
                <div className="mt-2 space-y-3">
                  {data.experiences.map((exp, i) => (
                    exp.company && (
                      <div key={i}>
                        <p className="font-semibold">{exp.position} at {exp.company}</p>
                        {(exp.startDate || exp.endDate) && (
                          <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate || "Present"}</p>
                        )}
                        {exp.desc && <p className="mt-1">{exp.desc}</p>}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* WHY COMPANY */}
            {data.whyThisCompany && (
              <div>
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Award size={16} /> Why {data.company}
                </h2>
                <p className="mt-2">{data.whyThisCompany}</p>
              </div>
            )}

            {/* CLOSING */}
            <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to {data.company || "your team"}.</p>
            <p>
              Sincerely, <br />
              <strong>{data.fullName}</strong>
            </p>
          </div>

        </div>
      </div>

      {/* PRINT STYLES */}
      <style>{`
        @media print {
          body { background: white; }
         .print\\:hidden { display: none!important; }
        }
      `}</style>

    </div>
  );
};

export default PreviewCoverLetter;