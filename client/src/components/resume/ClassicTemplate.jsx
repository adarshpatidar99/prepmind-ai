// import React from "react";
// import { BsLinkedin, BsGithub, BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";

// const ClassicTemplate = ({ data }) => {

//   return (
//     <div
//   className="bg-white text-black mx-auto shadow-md border border-gray-300 print:border-none print:shadow-none print:w-[210mm] print:min-h-[297mm]"
//   style={{
//     width: "210mm",
//     minHeight: "297mm",
//     fontFamily: "Times New Roman, Times, serif",
//   }}
// >
//       <div className="px-8 py-6">

//         {/* TOP HEADER */}
//         <div className="text-center mb-4">
//           <h1 className="text-[26px] font-bold uppercase tracking-[2px]"> {/* was 24px */}
//             {data.fullName || "YOUR NAME"}
//           </h1>

//           {data.jobRole && (
//             <p className="text-[15px] font-normal mt-1"> {/* was 14px */}
//               {data.jobRole}
//             </p>
//           )}

//           {/* CONTACT ROW */}
//           <div className="flex flex-wrap justify-center items-center gap-x-2.5 mt-2 text-[12px]"> {/* was 10.5px */}
//             {data.email && <span>{data.email}</span>}
//             {data.email && data.phone && <span>|</span>}
//             {data.phone && <span>{data.phone}</span>}
//             {data.phone && data.location && <span>|</span>}
//             {data.location && <span>{data.location}</span>}
//             {(data.email || data.phone || data.location) && (data.linkedinUrl || data.github) && <span>|</span>}

//             {data.linkedinUrl && (
//               <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
//                 <BsLinkedin size={12} /> {/* was 10 */}
//                 <span>LinkedIn</span>
//               </a>
//             )}
//             {data.linkedinUrl && data.github && <span>|</span>}
//             {data.github && (
//               <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
//                 <BsGithub size={12} /> {/* was 10 */}
//                 <span>GitHub</span>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* BODY - SINGLE COLUMN */}
//         <div className="space-y-4"> {/* was 3 */}

//           {/* SUMMARY */}
//           {data.professionalSummary && (
//             <section>
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5"> {/* was 12px */}
//                 Professional Summary
//               </h2>
//               <p className="text-[12px] leading-[1.4] text-justify"> {/* was 10.5px */}
//                 {data.professionalSummary}
//               </p>
//             </section>
//           )}

//           {/* EDUCATION */}
//           {data.education.some((e) => e.college || e.degree) && (
//             <section>
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Education
//               </h2>
//               {data.education.map((education, index) => (
//                 <div key={index} className="mb-2 flex justify-between items-start"> {/* was 1.5 */}
//                   <div>
//                     <p className="font-bold text-[12.5px]">{education.degree}</p>
//                     <p className="text-[12px]">{education.college}</p>
//                   </div>
//                   <p className="text-[12px] whitespace-nowrap ml-4">{education.startDate} - {education.endDate}</p>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* SKILLS */}
//         {/* SKILLS */}
// {data.skills && data.skills.length > 0 && (
//   <section>
//     <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//       Technical Skills
//     </h2>

//     <div className="text-[12px] leading-[1.4]">
//       {data.skills.map((skill, index) => (
//         <div key={index} className="mb-1">
//           <span className="font-bold">
//             {skill.category}:
//           </span>{" "}
//           <span>
//             {skill.items}
//           </span>
//         </div>
//       ))}
//     </div>
//   </section>
// )}

//           {/* WORK EXPERIENCE */}
//           {data.experiences.some((e) => e.company || e.position) && (
//             <section>
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Work Experience
//               </h2>
//               {data.experiences.map((experience, index) => (
//                 <div key={index} className="mb-3"> {/* was 2 */}
//                   <div className="flex justify-between items-baseline">
//                     <p className="font-bold text-[12.5px]"> {/* was 11px */}
//                       {experience.position}
//                     </p>
//                     <p className="text-[12px]"> {/* was 10.5px */}
//                       {experience.startDate} - {experience.endDate || "Present"}
//                     </p>
//                   </div>
//                   <p className="text-[12px] italic"> {/* was 10.5px */}
//                     {experience.company}
//                   </p>
//                   {experience.desc && (
//                     <p className="text-[12px] mt-1 leading-[1.4]"> {/* was 10.5px */}
//                       {experience.desc}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )} 

//           {/* PROJECTS
//           {data.projects.some((p) => p.title || p.description) && (
//             <section>
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Projects
//               </h2>
//               {data.projects.map((project, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between items-baseline">
//                     <p className="font-bold text-[12.5px]">{project.title}</p>
//                     <p className="text-[12px]">{project.startDate} - {project.endDate}</p>
//                   </div>
//                   {project.techStack && (
//                     <p className="text-[11.5px] italic">Technologies: {project.techStack}</p> 
//                   )}
//                   {project.description && (
//                     <p className="text-[12px] mt-1 leading-[1.4]">{project.description}</p>
//                   )}
//                   {project.link && (
//                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[11.5px] hover:underline">
//                       {project.link}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )} */}

//           {/* PROJECTS */}
// {data.projects.some((p) => p.title || p.description) && (
//   <section>
//     <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//       Projects
//     </h2>

//     {data.projects.map((project, index) => (
//       <div key={index} className="mb-3">

//         {/* PROJECT TITLE + DATE */}
//         <div className="flex justify-between items-baseline">
//           <p className="font-bold text-[12.5px]">
//             {project.title}
//           </p>

//           <p className="text-[12px]">
//             {project.startDate} - {project.endDate}
//           </p>
//         </div>

//         {/* TECH STACK + PROJECT LINK */}
//         {(project.techStack || project.link) && (
//           <div className="flex justify-between items-center gap-4">

//             {/* TECH STACK */}
//             {project.techStack && (
//               <p className="text-[11.5px] italic">
//                 Technologies: {project.techStack}
//               </p>
//             )}

//             {/* PROJECT LINK */}
//             {project.link && (
//               <a
//                 href={project.link}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-[11.5px] hover:underline whitespace-nowrap text-blue-800 mr-10 underline-offset-4 "
//               >
//                 Live link
//               </a>
//             )}

//           </div>
//         )}

//         {/* DESCRIPTION */}
//         {project.description && (
//           <p className="text-[12px] mt-1 leading-[1.4]">
//             {project.description}
//           </p>
//         )}

//       </div>
//     ))}
//   </section>
// )}

//           {/* ACHIEVEMENTS */}
//           {data.achievements && (
//             <section>
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Achievements
//               </h2>
//               <ul className="list-disc list-outside ml-5 text-[12px] leading-[1.4] space-y-1"> {/* was 10.5px */}
//                 {data.achievements
//              .split("\n")
//              .map(
//                     (ach, i) =>
//                       ach.trim() && (
//                         <li key={i}>{ach}</li>
//                       )
//                   )}
//               </ul>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassicTemplate;



// import React from "react";
// import { BsLinkedin, BsGithub } from "react-icons/bs";

// const ClassicTemplate = ({ data }) => {
//   return (
//     <div
//       className="
//         resume-page
//         bg-white
//         text-black
//         mx-auto
//         shadow-md
//         border
//         border-gray-300
//         print:border-none
//         print:shadow-none
//       "
//       style={{
//         width: "210mm",
//         minHeight: "297mm",
//         fontFamily: "Times New Roman, Times, serif",
//       }}
//     >
//       <div className="px-8 py-6">

//         {/* =====================================================
//             TOP HEADER
//         ====================================================== */}
//         <div className="text-center mb-4 break-inside-avoid">

//           {/* NAME */}
//           <h1 className="text-[26px] font-bold uppercase tracking-[2px]">
//             {data.fullName || "YOUR NAME"}
//           </h1>

//           {/* JOB ROLE */}
//           {data.jobRole && (
//             <p className="text-[15px] font-normal mt-1">
//               {data.jobRole}
//             </p>
//           )}

//           {/* CONTACT ROW */}
//           <div className="flex flex-wrap justify-center items-center gap-x-2.5 mt-2 text-[12px]">

//             {data.email && (
//               <span>
//                 {data.email}
//               </span>
//             )}

//             {data.email && data.phone && (
//               <span>|</span>
//             )}

//             {data.phone && (
//               <span>
//                 {data.phone}
//               </span>
//             )}

//             {data.phone && data.location && (
//               <span>|</span>
//             )}

//             {data.location && (
//               <span>
//                 {data.location}
//               </span>
//             )}

//             {(data.email || data.phone || data.location) &&
//               (data.linkedinUrl || data.github) && (
//                 <span>|</span>
//               )}

//             {/* LINKEDIN */}
//             {data.linkedinUrl && (
//               <a
//                 href={data.linkedinUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 hover:underline"
//               >
//                 <BsLinkedin size={12} />
//                 <span>LinkedIn</span>
//               </a>
//             )}

//             {data.linkedinUrl && data.github && (
//               <span>|</span>
//             )}

//             {/* GITHUB */}
//             {data.github && (
//               <a
//                 href={data.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 hover:underline"
//               >
//                 <BsGithub size={12} />
//                 <span>GitHub</span>
//               </a>
//             )}

//           </div>
//         </div>


//         {/* =====================================================
//             BODY
//         ====================================================== */}
//         <div className="space-y-4">


//           {/* =====================================================
//               PROFESSIONAL SUMMARY
//           ====================================================== */}
//           {data.professionalSummary && (
//             <section className="break-inside-avoid print:break-inside-avoid">

//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Professional Summary
//               </h2>

//               <p className="text-[12px] leading-[1.4] text-justify">
//                 {data.professionalSummary}
//               </p>

//             </section>
//           )}


//           {/* =====================================================
//               EDUCATION
//           ====================================================== */}
//           {data.education.some(
//             (e) => e.college || e.degree
//           ) && (
//             <section>

//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Education
//               </h2>

//               {data.education.map((education, index) => (

//                 <div
//                   key={index}
//                   className="
//                     mb-2
//                     flex
//                     justify-between
//                     items-start
//                     break-inside-avoid
//                     print:break-inside-avoid
//                   "
//                 >

//                   <div>

//                     <p className="font-bold text-[12.5px]">
//                       {education.degree}
//                     </p>

//                     <p className="text-[12px]">
//                       {education.college}
//                     </p>

//                   </div>

//                   <p className="text-[12px] whitespace-nowrap ml-4">
//                     {education.startDate} - {education.endDate}
//                   </p>

//                 </div>

//               ))}

//             </section>
//           )}


//           {/* =====================================================
//               TECHNICAL SKILLS
//           ====================================================== */}
//           {data.skills &&
//             data.skills.length > 0 && (

//               <section className="break-inside-avoid print:break-inside-avoid">

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Technical Skills
//                 </h2>

//                 <div className="text-[12px] leading-[1.4]">

//                   {data.skills.map((skill, index) => (

//                     <div
//                       key={index}
//                       className="
//                         mb-1
//                         break-inside-avoid
//                         print:break-inside-avoid
//                       "
//                     >

//                       {skill.category && (
//                         <span className="font-bold">
//                           {skill.category}:
//                         </span>
//                       )}

//                       {" "}

//                       <span>
//                         {skill.items}
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </section>
//             )}


//           {/* =====================================================
//               WORK EXPERIENCE
//           ====================================================== */}
//           {data.experiences.some(
//             (e) => e.company || e.position
//           ) && (

//             <section>

//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Work Experience
//               </h2>

//               {data.experiences.map(
//                 (experience, index) => (

//                   <div
//                     key={index}
//                     className="
//                       mb-3
//                       break-inside-avoid
//                       print:break-inside-avoid
//                     "
//                   >

//                     {/* POSITION + DATE */}
//                     <div className="flex justify-between items-baseline">

//                       <p className="font-bold text-[12.5px]">
//                         {experience.position}
//                       </p>

//                       <p className="text-[12px]">
//                         {experience.startDate} -{" "}
//                         {experience.endDate || "Present"}
//                       </p>

//                     </div>


//                     {/* COMPANY */}
//                     <p className="text-[12px] italic">
//                       {experience.company}
//                     </p>


//                     {/* DESCRIPTION */}
//                     {experience.desc && (
//                       <p className="text-[12px] mt-1 leading-[1.4]">
//                         {experience.desc}
//                       </p>
//                     )}

//                   </div>

//                 )
//               )}

//             </section>
//           )}


//           {/* =====================================================
//               PROJECTS
//           ====================================================== */}
//           {data.projects.some(
//             (p) => p.title || p.description
//           ) && (

//             <section>

//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Projects
//               </h2>


//               {data.projects.map(
//                 (project, index) => (

//                   <div
//                     key={index}
//                     className="
//                       mb-3
//                       break-inside-avoid
//                       print:break-inside-avoid
//                     "
//                   >

//                     {/* PROJECT TITLE + DATE */}
//                     <div className="flex justify-between items-baseline">

//                       <p className="font-bold text-[12.5px]">
//                         {project.title}
//                       </p>

//                       <p className="text-[12px]">
//                         {project.startDate} - {project.endDate}
//                       </p>

//                     </div>


//                     {/* TECH STACK + LIVE LINK */}
//                     {(project.techStack || project.link) && (

//                       <div className="flex justify-between items-center gap-4">

//                         {/* TECH STACK */}
//                         {project.techStack && (
//                           <p className="text-[11.5px] italic">
//                             Technologies: {project.techStack}
//                           </p>
//                         )}


//                         {/* LIVE LINK */}
//                         {project.link && (
//                           <a
//                             href={project.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="
//                               text-[11.5px]
//                               text-blue-800
//                               hover:underline
//                               whitespace-nowrap
//                               underline-offset-4
//                               mr-10
//                             "
//                           >
//                             Live link
//                           </a>
//                         )}

//                       </div>

//                     )}


//                     {/* PROJECT DESCRIPTION */}
//                     {project.description && (
//                       <p className="text-[12px] mt-1 leading-[1.4]">
//                         {project.description}
//                       </p>
//                     )}

//                   </div>

//                 )
//               )}

//             </section>
//           )}


//           {/* =====================================================
//               ACHIEVEMENTS
//           ====================================================== */}
//           {data.achievements && (

//             <section>

//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                 Achievements
//               </h2>

//               <ul
//                 className="
//                   list-disc
//                   list-outside
//                   ml-5
//                   text-[12px]
//                   leading-[1.4]
//                   space-y-1
//                 "
//               >

//                 {data.achievements
//                   .split("\n")
//                   .map(
//                     (ach, index) =>
//                       ach.trim() && (

//                         <li
//                           key={index}
//                           className="
//                             break-inside-avoid
//                             print:break-inside-avoid
//                           "
//                         >
//                           {ach}
//                         </li>

//                       )
//                   )}

//               </ul>

//             </section>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassicTemplate;




// import React, { useEffect, useRef, useState } from "react";
// import { BsLinkedin, BsGithub } from "react-icons/bs";

// const ClassicTemplate = ({ data }) => {
//   const resumeRef = useRef(null);
//   const [scale, setScale] = useState(1);

//   // A4 dimensions in pixels at 96 DPI
//   const A4_WIDTH_PX = 794;
//   const A4_HEIGHT_PX = 1123;

//   useEffect(() => {
//     const calculateScale = () => {
//       if (!resumeRef.current) return;

//       const resume = resumeRef.current;

//       // Temporarily remove scaling to get natural height
//       resume.style.transform = "scale(1)";

//       const contentHeight = resume.scrollHeight;

//       // Calculate scale required to fit content inside A4 height
//       const availableHeight = A4_HEIGHT_PX;

//       let newScale = 1;

//       if (contentHeight > availableHeight) {
//         newScale = availableHeight / contentHeight;
//       }

//       // Prevent extremely small resume
//       newScale = Math.max(newScale, 0.5);

//       setScale(newScale);
//     };

//     calculateScale();

//     const resizeObserver = new ResizeObserver(() => {
//       calculateScale();
//     });

//     if (resumeRef.current) {
//       resizeObserver.observe(resumeRef.current);
//     }

//     window.addEventListener("resize", calculateScale);

//     return () => {
//       resizeObserver.disconnect();
//       window.removeEventListener("resize", calculateScale);
//     };
//   }, [data]);

//   return (
//     <div
//       className="flex justify-center"
//       style={{
//         width: "210mm",
//         height: "297mm",
//         overflow: "hidden",
//         margin: "0 auto",
//       }}
//     >
//       <div
//         ref={resumeRef}
//         className="
//           resume-page
//           bg-white
//           text-black
//           shadow-md
//           border
//           border-gray-300
//           print:border-none
//           print:shadow-none
//         "
//         style={{
//           width: "210mm",
//           minHeight: "297mm",
//           boxSizing: "border-box",
//           fontFamily: "Times New Roman, Times, serif",

//           // Automatically scale content to fit one A4 page
//           transform: `scale(${scale})`,
//           transformOrigin: "top center",

//           // Keep the layout from creating an additional page
//           pageBreakAfter: "avoid",
//           breakAfter: "avoid",
//         }}
//       >
//         <div className="px-8 py-6">

//           {/* =====================================================
//               TOP HEADER
//           ====================================================== */}

//           <div className="text-center mb-4">

//             {/* NAME */}
//             <h1 className="text-[26px] font-bold uppercase tracking-[2px]">
//               {data.fullName || "YOUR NAME"}
//             </h1>

//             {/* JOB ROLE */}
//             {data.jobRole && (
//               <p className="text-[15px] font-normal mt-1">
//                 {data.jobRole}
//               </p>
//             )}

//             {/* CONTACT ROW */}
//             <div className="flex flex-wrap justify-center items-center gap-x-2.5 mt-2 text-[12px]">

//               {data.email && (
//                 <span>
//                   {data.email}
//                 </span>
//               )}

//               {data.email && data.phone && (
//                 <span>|</span>
//               )}

//               {data.phone && (
//                 <span>
//                   {data.phone}
//                 </span>
//               )}

//               {data.phone && data.location && (
//                 <span>|</span>
//               )}

//               {data.location && (
//                 <span>
//                   {data.location}
//                 </span>
//               )}

//               {(data.email || data.phone || data.location) &&
//                 (data.linkedinUrl || data.github) && (
//                   <span>|</span>
//                 )}

//               {/* LINKEDIN */}
//               {data.linkedinUrl && (
//                 <a
//                   href={data.linkedinUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 hover:underline"
//                 >
//                   <BsLinkedin size={12} />
//                   <span>LinkedIn</span>
//                 </a>
//               )}

//               {data.linkedinUrl && data.github && (
//                 <span>|</span>
//               )}

//               {/* GITHUB */}
//               {data.github && (
//                 <a
//                   href={data.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 hover:underline"
//                 >
//                   <BsGithub size={12} />
//                   <span>GitHub</span>
//                 </a>
//               )}

//             </div>
//           </div>


//           {/* =====================================================
//               BODY
//           ====================================================== */}

//           <div className="space-y-4">


//             {/* =====================================================
//                 PROFESSIONAL SUMMARY
//             ====================================================== */}

//             {data.professionalSummary && (
//               <section>

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Professional Summary
//                 </h2>

//                 <p className="text-[12px] leading-[1.4] text-justify">
//                   {data.professionalSummary}
//                 </p>

//               </section>
//             )}


//             {/* =====================================================
//                 EDUCATION
//             ====================================================== */}

//             {data.education?.some(
//               (e) => e.college || e.degree
//             ) && (

//               <section>

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Education
//                 </h2>

//                 {data.education.map(
//                   (education, index) => (

//                     <div
//                       key={index}
//                       className="
//                         mb-2
//                         flex
//                         justify-between
//                         items-start
//                       "
//                     >

//                       <div>

//                         <p className="font-bold text-[12.5px]">
//                           {education.degree}
//                         </p>

//                         <p className="text-[12px]">
//                           {education.college}
//                         </p>

//                       </div>

//                       <p className="text-[12px] whitespace-nowrap ml-4">
//                         {education.startDate} - {education.endDate}
//                       </p>

//                     </div>

//                   )
//                 )}

//               </section>
//             )}


//             {/* =====================================================
//                 TECHNICAL SKILLS
//             ====================================================== */}

//             {data.skills &&
//               data.skills.length > 0 && (

//                 <section>

//                   <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                     Technical Skills
//                   </h2>

//                   <div className="text-[12px] leading-[1.4]">

//                     {data.skills.map(
//                       (skill, index) => (

//                         <div
//                           key={index}
//                           className="mb-1"
//                         >

//                           {skill.category && (
//                             <span className="font-bold">
//                               {skill.category}:
//                             </span>
//                           )}

//                           {" "}

//                           <span>
//                             {Array.isArray(skill.items)
//                               ? skill.items.join(", ")
//                               : skill.items}
//                           </span>

//                         </div>

//                       )
//                     )}

//                   </div>

//                 </section>
//               )}


//             {/* =====================================================
//                 WORK EXPERIENCE
//             ====================================================== */}

//             {data.experiences?.some(
//               (e) => e.company || e.position
//             ) && (

//               <section>

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Work Experience
//                 </h2>

//                 {data.experiences.map(
//                   (experience, index) => (

//                     <div
//                       key={index}
//                       className="mb-3"
//                     >

//                       {/* POSITION + DATE */}

//                       <div className="flex justify-between items-baseline">

//                         <p className="font-bold text-[12.5px]">
//                           {experience.position}
//                         </p>

//                         <p className="text-[12px] whitespace-nowrap ml-4">
//                           {experience.startDate} -{" "}
//                           {experience.endDate || "Present"}
//                         </p>

//                       </div>


//                       {/* COMPANY */}

//                       <p className="text-[12px] italic">
//                         {experience.company}
//                       </p>


//                       {/* DESCRIPTION */}

//                       {experience.desc && (
//                         <p className="text-[12px] mt-1 leading-[1.4]">
//                           {experience.desc}
//                         </p>
//                       )}

//                     </div>

//                   )
//                 )}

//               </section>
//             )}


//             {/* =====================================================
//                 PROJECTS
//             ====================================================== */}

//             {data.projects?.some(
//               (p) => p.title || p.description
//             ) && (

//               <section>

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Projects
//                 </h2>

//                 {data.projects.map(
//                   (project, index) => (

//                     <div
//                       key={index}
//                       className="mb-3"
//                     >

//                       {/* PROJECT TITLE + DATE */}

//                       <div className="flex justify-between items-baseline">

//                         <p className="font-bold text-[12.5px]">
//                           {project.title}
//                         </p>

//                         <p className="text-[12px] whitespace-nowrap ml-4">
//                           {project.startDate} - {project.endDate}
//                         </p>

//                       </div>


//                       {/* TECH STACK + LIVE LINK */}

//                       {(project.techStack || project.link) && (

//                         <div className="flex justify-between items-center gap-4">

//                           {/* TECH STACK */}

//                           {project.techStack && (
//                             <p className="text-[11.5px] italic flex-1 min-w-0">
//                               Technologies:{" "}
//                               {Array.isArray(project.techStack)
//                                 ? project.techStack.join(", ")
//                                 : project.techStack}
//                             </p>
//                           )}


//                           {/* LIVE LINK */}

//                           {project.link && (
//                             <a
//                               href={project.link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="
//                                 text-[11.5px]
//                                 text-blue-800
//                                 hover:underline
//                                 whitespace-nowrap
//                                 underline-offset-4
//                                 ml-auto
//                               "
//                             >
//                               Live link
//                             </a>
//                           )}

//                         </div>

//                       )}


//                       {/* PROJECT DESCRIPTION */}

//                       {project.description && (
//                         <p className="text-[12px] mt-1 leading-[1.4]">
//                           {project.description}
//                         </p>
//                       )}

//                     </div>

//                   )
//                 )}

//               </section>
//             )}


//             {/* =====================================================
//                 ACHIEVEMENTS
//             ====================================================== */}

//             {data.achievements && (

//               <section>

//                 <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">
//                   Achievements
//                 </h2>

//                 <ul
//                   className="
//                     list-disc
//                     list-outside
//                     ml-5
//                     text-[12px]
//                     leading-[1.4]
//                     space-y-1
//                   "
//                 >

//                   {data.achievements
//                     .split("\n")
//                     .map(
//                       (ach, index) =>
//                         ach.trim() && (

//                           <li key={index}>
//                             {ach}
//                           </li>

//                         )
//                     )}

//                 </ul>

//               </section>
//             )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassicTemplate;








// import React, { useEffect, useRef, useState } from "react";
// import { BsLinkedin, BsGithub } from "react-icons/bs";

// const A4_HEIGHT_PX = 1123; // 297mm at 96dpi

// const Page = ({ children }) => (
//   <div
//     className="resume-page bg-white text-black shadow-md border-gray-300 print:border-none print:shadow-none mx-auto mb-6"
//     style={{
//       width: "210mm",
//       height: "297mm", // fixed A4 height
//       boxSizing: "border-box",
//       fontFamily: "Times New Roman, Times, serif",
//       overflow: "hidden",
//     }}
//   >
//     <div className="px-8 py-6 h-full">{children}</div>
//   </div>
// );

// const ClassicTemplate = ({ data }) => {
//   const contentRef = useRef(null);
//   const [pages, setPages] = useState([[]]);

//   useEffect(() => {
//     if (!contentRef.current) return;

//     const sections = Array.from(contentRef.current.children);
//     const newPages = [[]];
//     let currentHeight = 0;

//     sections.forEach((section) => {
//       const sectionHeight = section.scrollHeight;

//       // if this section doesn't fit, start new page
//       if (currentHeight + sectionHeight > A4_HEIGHT_PX - 100) { // -100 for padding
//         newPages.push([]);
//         currentHeight = 0;
//       }

//       newPages[newPages.length - 1].push(section);
//       currentHeight += sectionHeight;
//     });

//     setPages(newPages);
//   }, [data]);

//   return (
//     <div className="flex flex-col items-center bg-gray-100 py-6" style={{ width: "100%" }}>
//       {/* Hidden div to measure natural height */}
//       <div ref={contentRef} style={{ position: "absolute", visibility: "hidden", width: "210mm" }}>

//         {/* HEADER - always on page 1 */}
//         <div className="text-center mb-4 break-inside-avoid">
//           <h1 className="text-[26px] font-bold uppercase tracking-[2px]">
//             {data.fullName || "YOUR NAME"}
//           </h1>
//           {data.jobRole && <p className="text-[15px] font-normal mt-1">{data.jobRole}</p>}
//           <div className="flex flex-wrap justify-center items-center gap-x-2.5 mt-2 text-[12px]">
//             {data.email && <span>{data.email}</span>}
//             {data.email && data.phone && <span>|</span>}
//             {data.phone && <span>{data.phone}</span>}
//             {data.phone && data.location && <span>|</span>}
//             {data.location && <span>{data.location}</span>}
//             {(data.email || data.phone || data.location) && (data.linkedinUrl || data.github) && <span>|</span>}
//             {data.linkedinUrl && <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><BsLinkedin size={12} /><span>LinkedIn</span></a>}
//             {data.linkedinUrl && data.github && <span>|</span>}
//             {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><BsGithub size={12} /><span>GitHub</span></a>}
//           </div>
//         </div>

//         {/* BODY SECTIONS */}
//         <div className="space-y-4">
//           {data.professionalSummary && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Professional Summary</h2>
//               <p className="text-[12px] leading-[1.4] text-justify">{data.professionalSummary}</p>
//             </section>
//           )}

//           {data.education?.some((e) => e.college || e.degree) && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Education</h2>
//               {data.education.map((education, index) => (
//                 <div key={index} className="mb-2 flex justify-between items-start">
//                   <div><p className="font-bold text-[12.5px]">{education.degree}</p><p className="text-[12px]">{education.college}</p></div>
//                   <p className="text-[12px] whitespace-nowrap ml-4">{education.startDate} - {education.endDate}</p>
//                 </div>
//               ))}
//             </section>
//           )}

//           {data.skills && data.skills.length > 0 && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Technical Skills</h2>
//               <div className="text-[12px] leading-[1.4]">
//                 {data.skills.map((skill, index) => (
//                   <div key={index} className="mb-1">{skill.category && <span className="font-bold">{skill.category}:</span>} {" "}<span>{Array.isArray(skill.items)? skill.items.join(", ") : skill.items}</span></div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {data.experiences?.some((e) => e.company || e.position) && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Work Experience</h2>
//               {data.experiences.map((experience, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between items-baseline"><p className="font-bold text-[12.5px]">{experience.position}</p><p className="text-[12px] whitespace-nowrap ml-4">{experience.startDate} - {experience.endDate || "Present"}</p></div>
//                   <p className="text-[12px] italic">{experience.company}</p>
//                   {experience.desc && <p className="text-[12px] mt-1 leading-[1.4]">{experience.desc}</p>}
//                 </div>
//               ))}
//             </section>
//           )}

//           {data.projects?.some((p) => p.title || p.description) && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Projects</h2>
//               {data.projects.map((project, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between items-baseline"><p className="font-bold text-[12.5px]">{project.title}</p><p className="text-[12px] whitespace-nowrap ml-4">{project.startDate} - {project.endDate}</p></div>
//                   {(project.techStack || project.link) && (
//                     <div className="flex justify-between items-center gap-4">
//                       {project.techStack && <p className="text-[11.5px] italic flex-1 min-w-0">Technologies: {Array.isArray(project.techStack)? project.techStack.join(", ") : project.techStack}</p>}
//                       {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[11.5px] text-blue-800 hover:underline whitespace-nowrap underline-offset-4 ml-auto">Live link</a>}
//                     </div>
//                   )}
//                   {project.description && <p className="text-[12px] mt-1 leading-[1.4]">{project.description}</p>}
//                 </div>
//               ))}
//             </section>
//           )}

//           {data.achievements && (
//             <section className="break-inside-avoid">
//               <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] border-b border-black pb-0.5 mb-1.5">Achievements</h2>
//               <ul className="list-disc list-outside ml-5 text-[12px] leading-[1.4] space-y-1">
//                 {data.achievements.split("\n").map((ach, index) => ach.trim() && <li key={index}>{ach}</li>)}
//               </ul>
//             </section>
//           )}
//         </div>
//       </div>

//       {/* VISIBLE PAGES */}
//       {pages.map((pageSections, pageIndex) => (
//         <Page key={pageIndex}>
//           {pageIndex === 0 && pages[0][0]} {/* header is already in first section */}
//           {pageSections.map((section, i) => (
//             <div key={i} dangerouslySetInnerHTML={{ __html: section.innerHTML }} />
//           ))}
//         </Page>
//       ))}

//       {/* PRINT CSS */}
//       <style>{`
//         @media print {
//           body { background: white; }
//          .resume-page { box-shadow: none; border: none; margin: 0; page-break-after: always; }
//          .resume-page:last-child { page-break-after: auto; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClassicTemplate;







import React, { useEffect, useRef, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const A4_HEIGHT = 1123; // 297mm at 96 DPI
const PAGE_PADDING_TOP = 24;
const PAGE_PADDING_BOTTOM = 24;
const PAGE_PADDING_LEFT = 32;
const PAGE_PADDING_RIGHT = 32;

// Available content height inside A4 page
const CONTENT_HEIGHT =
  A4_HEIGHT - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM;

const ClassicTemplate = ({ data }) => {
  const measureRef = useRef(null);

  const [pages, setPages] = useState([]);

  // ============================================================
  // SAFE DATA
  // ============================================================

  const education = Array.isArray(data?.education)
    ? data.education
    : [];

  const skills = Array.isArray(data?.skills)
    ? data.skills
    : [];

  const experiences = Array.isArray(data?.experiences)
    ? data.experiences
    : [];

  const projects = Array.isArray(data?.projects)
    ? data.projects
    : [];

  // ============================================================
  // HEADER
  // ============================================================

  const Header = () => (
    <div className="text-center mb-4">
      <h1 className="text-[26px] font-bold uppercase tracking-[2px]">
        {data?.fullName || "YOUR NAME"}
      </h1>

      {data?.jobRole && (
        <p className="text-[15px] font-normal mt-1">
          {data.jobRole}
        </p>
      )}

      <div className="flex flex-wrap justify-center items-center gap-x-2.5 mt-2 text-[12px]">
        {data?.email && (
          <span>{data.email}</span>
        )}

        {data?.email && data?.phone && (
          <span>|</span>
        )}

        {data?.phone && (
          <span>{data.phone}</span>
        )}

        {data?.phone && data?.location && (
          <span>|</span>
        )}

        {data?.location && (
          <span>{data.location}</span>
        )}

        {(data?.email ||
          data?.phone ||
          data?.location) &&
          (data?.linkedinUrl || data?.github) && (
            <span>|</span>
          )}

        {/* LINKEDIN */}
        {data?.linkedinUrl && (
          <a
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <BsLinkedin size={12} />
            <span>LinkedIn</span>
          </a>
        )}

        {data?.linkedinUrl && data?.github && (
          <span>|</span>
        )}

        {/* GITHUB */}
        {data?.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <BsGithub size={12} />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );

  // ============================================================
  // PROFESSIONAL SUMMARY
  // ============================================================

  const ProfessionalSummary = () => {
    if (!data?.professionalSummary) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Professional Summary
        </h2>

        <p className="text-[12px] leading-[1.4] text-justify">
          {data.professionalSummary}
        </p>
      </section>
    );
  };

  // ============================================================
  // EDUCATION
  // ============================================================

  const Education = () => {
    const validEducation = education.filter(
      (e) => e?.college || e?.degree
    );

    if (validEducation.length === 0) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Education
        </h2>

        {validEducation.map((item, index) => (
          <div
            key={index}
            className="resume-entry"
          >
            <div>
              <p className="font-bold text-[12.5px]">
                {item?.degree}
              </p>

              <p className="text-[12px]">
                {item?.college}
              </p>
            </div>

            <p className="text-[12px] whitespace-nowrap ml-4">
              {item?.startDate} - {item?.endDate}
            </p>
          </div>
        ))}
      </section>
    );
  };

  // ============================================================
  // TECHNICAL SKILLS
  // ============================================================

  const TechnicalSkills = () => {
    if (skills.length === 0) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="text-[12px] leading-[1.4]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mb-1"
            >
              {skill?.category && (
                <span className="font-bold">
                  {skill.category}:
                </span>
              )}

              {" "}

              <span>
                {Array.isArray(skill?.items)
                  ? skill.items.join(", ")
                  : skill?.items || ""}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // ============================================================
  // WORK EXPERIENCE
  // ============================================================

  const WorkExperience = () => {
    const validExperiences = experiences.filter(
      (e) => e?.company || e?.position
    );

    if (validExperiences.length === 0) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Work Experience
        </h2>

        {validExperiences.map(
          (experience, index) => (
            <div
              key={index}
              className="resume-entry-block"
            >
              {/* POSITION + DATE */}
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-[12.5px]">
                  {experience?.position}
                </p>

                <p className="text-[12px] whitespace-nowrap ml-4">
                  {experience?.startDate} -{" "}
                  {experience?.endDate || "Present"}
                </p>
              </div>

              {/* COMPANY */}
              {experience?.company && (
                <p className="text-[12px] italic">
                  {experience.company}
                </p>
              )}

              {/* DESCRIPTION */}
              {experience?.desc && (
                <p className="text-[12px] mt-1 leading-[1.4]">
                  {experience.desc}
                </p>
              )}
            </div>
          )
        )}
      </section>
    );
  };

  // ============================================================
  // PROJECTS
  // ============================================================

  const Projects = () => {
    const validProjects = projects.filter(
      (p) => p?.title || p?.description
    );

    if (validProjects.length === 0) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Projects
        </h2>

        {validProjects.map(
          (project, index) => (
            <div
              key={index}
              className="resume-entry-block"
            >
              {/* PROJECT TITLE + DATE */}
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-[12.5px]">
                  {project?.title}
                </p>

                <p className="text-[12px] whitespace-nowrap ml-4">
                  {project?.startDate} -{" "}
                  {project?.endDate}
                </p>
              </div>

              {/* TECH STACK + LIVE LINK */}
              {(project?.techStack ||
                project?.link) && (
                <div className="flex justify-between items-center gap-4">
                  {/* TECH STACK */}
                  {project?.techStack && (
                    <p className="text-[11.5px] italic flex-1 min-w-0">
                      Technologies:{" "}
                      {Array.isArray(
                        project.techStack
                      )
                        ? project.techStack.join(", ")
                        : project.techStack}
                    </p>
                  )}

                  {/* LIVE LINK */}
                  {project?.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-[11.5px]
                        text-blue-800
                        hover:underline
                        whitespace-nowrap
                        underline-offset-4
                        ml-auto
                      "
                    >
                      Live link
                    </a>
                  )}
                </div>
              )}

              {/* DESCRIPTION */}
              {project?.description && (
                <p className="text-[12px] mt-1 leading-[1.4]">
                  {project.description}
                </p>
              )}
            </div>
          )
        )}
      </section>
    );
  };

  // ============================================================
  // ACHIEVEMENTS
  // ============================================================

  const Achievements = () => {
    if (!data?.achievements) return null;

    const achievements = data.achievements
      .split("\n")
      .filter((item) => item.trim());

    if (achievements.length === 0) return null;

    return (
      <section className="resume-section">
        <h2 className="section-title">
          Achievements
        </h2>

        <ul className="list-disc list-outside ml-5 text-[12px] leading-[1.4] space-y-1">
          {achievements.map(
            (achievement, index) => (
              <li key={index}>
                {achievement}
              </li>
            )
          )}
        </ul>
      </section>
    );
  };

  // ============================================================
  // CREATE SECTIONS
  // ============================================================

  const getSections = () => [
    <ProfessionalSummary key="summary" />,
    <Education key="education" />,
    <TechnicalSkills key="skills" />,
    <WorkExperience key="experience" />,
    <Projects key="projects" />,
    <Achievements key="achievements" />,
  ].filter(Boolean);

  // ============================================================
  // PAGINATION
  // ============================================================

  useEffect(() => {
    if (!measureRef.current) return;

    const sectionElements = Array.from(
      measureRef.current.querySelectorAll(
        ".pagination-section"
      )
    );

    if (sectionElements.length === 0) {
      setPages([]);
      return;
    }

    const headerElement =
      measureRef.current.querySelector(
        ".pagination-header"
      );

    const headerHeight =
      headerElement?.offsetHeight || 0;

    // First page has header
    const firstPageAvailableHeight =
      CONTENT_HEIGHT - headerHeight - 16;

    const otherPageAvailableHeight =
      CONTENT_HEIGHT;

    const newPages = [];
    let currentPage = [];
    let currentHeight = 0;

    sectionElements.forEach(
      (section, index) => {
        const sectionHeight =
          section.offsetHeight;

        const availableHeight =
          newPages.length === 0
            ? firstPageAvailableHeight
            : otherPageAvailableHeight;

        // If section doesn't fit, move it
        // completely to next page.
        if (
          currentPage.length > 0 &&
          currentHeight + sectionHeight >
            availableHeight
        ) {
          newPages.push(currentPage);

          currentPage = [];
          currentHeight = 0;
        }

        currentPage.push(index);
        currentHeight += sectionHeight;
      }
    );

    if (currentPage.length > 0) {
      newPages.push(currentPage);
    }

    setPages(newPages);
  }, [data]);

  const sections = getSections();

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      {/* ========================================================
          HIDDEN MEASUREMENT CONTAINER
      ========================================================= */}

      <div
        ref={measureRef}
        className="absolute pointer-events-none"
        style={{
          visibility: "hidden",
          left: "-99999px",
          top: 0,
          width: "210mm",
          fontFamily:
            "Times New Roman, Times, serif",
        }}
      >
        {/* HEADER */}
        <div className="pagination-header px-8 py-6">
          <Header />
        </div>

        {/* SECTIONS */}
        <div className="px-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="pagination-section"
            >
              {section}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          VISIBLE A4 PAGES
      ========================================================= */}

      <div className="resume-container">
        {pages.map(
          (pageSectionIndexes, pageIndex) => (
            <div
              key={pageIndex}
              className="resume-page"
            >
              {/* PAGE CONTENT */}
              <div className="resume-page-content">

                {/* HEADER ONLY ON FIRST PAGE */}
                {pageIndex === 0 && (
                  <div className="pagination-header">
                    <Header />
                  </div>
                )}

                {/* SECTIONS */}
                <div className="space-y-4">
                  {pageSectionIndexes.map(
                    (sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className="pagination-section"
                      >
                        {sections[sectionIndex]}
                      </div>
                    )
                  )}
                </div>

              </div>
            </div>
          )
        )}
      </div>

      {/* ========================================================
          CSS
      ========================================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .resume-container {
          width: 100%;
          background: #f3f4f6;
          padding: 24px 0;
        }

        .resume-page {
          width: 210mm;
          min-height: 297mm;
          height: 297mm;
          margin: 0 auto 24px auto;

          background: white;

          border: 1px solid #d1d5db;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.12);

          font-family:
            "Times New Roman",
            Times,
            serif;

          overflow: hidden;

          position: relative;
        }

        .resume-page-content {
          width: 100%;
          height: 100%;

          padding:
            24px
            32px
            24px
            32px;

          overflow: hidden;
        }

        .pagination-section {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .resume-section {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .resume-entry {
          break-inside: avoid;
          page-break-inside: avoid;

          margin-bottom: 8px;

          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .resume-entry-block {
          break-inside: avoid;
          page-break-inside: avoid;

          margin-bottom: 12px;
        }

        .section-title {
          font-size: 13px;
          font-weight: bold;

          text-transform: uppercase;

          letter-spacing: 1.5px;

          border-bottom:
            1px solid black;

          padding-bottom: 2px;

          margin-bottom: 6px;
        }

        @media print {

          @page {
            size: A4;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: white;
          }

          .resume-container {
            padding: 0;
            margin: 0;
            background: white;
          }

          .resume-page {
            width: 210mm;
            height: 297mm;
            min-height: 297mm;

            margin: 0;

            border: none;
            box-shadow: none;

            page-break-after: always;
            break-after: page;

            overflow: hidden;
          }

          .resume-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }

          .resume-page-content {
            width: 100%;
            height: 100%;
          }
        }

      `}</style>
    </>
  );
};

export default ClassicTemplate;