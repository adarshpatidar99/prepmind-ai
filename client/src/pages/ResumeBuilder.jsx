import React, { useState } from "react";
import axios from "axios";
import { Download, ArrowLeft } from "lucide-react";
import {
  Save,
  Wand2,
  Eye,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Plus,
  Trash2,
} from "lucide-react";

import {
  BsPerson,
  BsBriefcase,
  BsMortarboard,
  BsCodeSlash,
  BsTrophy,
} from "react-icons/bs";

import Navbar from "../components/common/Navbar";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// REUSABLE INPUT COMPONENT
const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200
        outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900"
      />
    </div>
  );
};

// REUSABLE TEXTAREA COMPONENT
const TextArea = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
        {label}
      </label>

      <textarea
        {...props}
        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F9FC] border border-gray-200
        outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 focus:bg-white transition text-gray-900 resize-none"
      />
    </div>
  );
};

// RESUME BUILDER
const ResumeBuilder = () => {

  const [resumeId, setResumeId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [isChangingTemplate, setIsChangingTemplate] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);   

  const [resume, setResume] = useState([]);
  const [data, setData] = useState({

    resumeTitle: "", 
    jobRole: "",

    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedinUrl: "",
    github: "",

    // Career Information
    jobRole: "",
    experience: "",
    professionalSummary: "",

    // Skills
    skills: [
      {
         category: "",
         items: ""
      }     
    ],     

    // Work Experience
    experiences: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        desc: "",
      },
    ],

    // Education
    education: [
      {
        college: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],

    // Projects
    projects: [
      {
        title: "",
        description: "",
        techStack: "",
        startDate: "",
        endDate: "",
        link: ""
      },
    ],

    // Achievements
    achievements: "",
  });

  const navigate = useNavigate();
                                

const { id } = useParams();

useEffect(() => {
  if (!id) return;

  const fetchExistingResume = async () => {
    try {
      console.log("🔥 URL ID:", id);

      const res = await axios.get(
        `http://localhost:5000/api/v1/resume/get/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log("🔥 API RESPONSE:", res.data);
      console.log("🔥 FETCHED RESUME ID:", res.data.resume._id);
      console.log("🔥 FETCHED RESUME TITLE:", res.data.resume.resumeTitle);

      setResumeId(res.data.resume._id);

      setData({
        resumeTitle: res.data.resume.resumeTitle || "",
        jobRole: res.data.resume.jobRole || "",

        fullName: res.data.resume.fullName || "",
        email: res.data.resume.email || "",
        phone: res.data.resume.phone || "",
        location: res.data.resume.location || "",
        linkedinUrl: res.data.resume.linkedin || "",
        github: res.data.resume.github || "",

        experience: res.data.resume.experience || "",
        professionalSummary: res.data.resume.summary || "",

        skills:
          res.data.resume.skills?.length > 0
            ? res.data.resume.skills.map((skill) => ({
                category: skill.category || "",
                items: Array.isArray(skill.items)
                  ? skill.items.join(", ")
                  : skill.items || "",
              }))
            : [
                {
                  category: "",
                  items: "",
                },
              ],

        experiences:
          res.data.resume.workExperience?.length > 0
            ? res.data.resume.workExperience.map((experience) => {
                const [startDate = "", endDate = ""] =
                  (experience.duration || "").split(" - ");

                return {
                  company: experience.company || "",
                  position: experience.role || "",
                  startDate,
                  endDate,
                  desc: experience.description || "",
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

        education:
          res.data.resume.education?.length > 0
            ? res.data.resume.education.map((education) => {
                const [startDate = "", endDate = ""] =
                  (education.year || "").split(" - ");

                return {
                  college: education.college || "",
                  degree: education.degree || "",
                  startDate,
                  endDate,
                };
              })
            : [
                {
                  college: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                },
              ],

        projects:
          res.data.resume.projects?.length > 0
            ? res.data.resume.projects.map((project) => ({
                title: project.title || "",
                description: project.description || "",
                techStack: Array.isArray(project.techStack)
                  ? project.techStack.join(", ")
                  : project.techStack || "",
                startDate: project.startDate || "",
                endDate: project.endDate || "",
                link: project.link || "",
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
          res.data.resume.achievements?.length > 0
            ? res.data.resume.achievements
                .map((achievement) => achievement.description)
                .join("\n")
            : "",
      });
    } catch (error) {
      console.error("Error fetching resume:", error);
    }
  };

  fetchExistingResume();
}, [id]);
   
   
const handleUpdate = async () => {
  if (isSaving) {
    return;
  }

  // BASIC VALIDATION
  if (
    !data.fullName ||
    !data.email ||
    !data.location ||
    !data.resumeTitle
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  try {
    setIsSaving(true);

    // ==============================
    // FORMAT SKILLS
    // ==============================

    const skillsArray = data.skills
      .filter(
        (skill) =>
          skill.category.trim() ||
          skill.items.trim()
      )
      .map((skill) => ({
        category: skill.category.trim(),

        items: skill.items
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      }));

    // ==============================
    // FORMAT WORK EXPERIENCE
    // ==============================

    const formattedWorkExperience = data.experiences.map(
      (experience) => ({
        company: experience.company,
        role: experience.position,

        duration:
          experience.startDate && experience.endDate
            ? `${experience.startDate} - ${experience.endDate}`
            : experience.startDate ||
              experience.endDate ||
              "",

        description: experience.desc,
      })
    );

    // ==============================
    // FORMAT EDUCATION
    // ==============================

    const formattedEducation = data.education.map(
      (education) => ({
        college: education.college,
        degree: education.degree,

        year:
          education.startDate && education.endDate
            ? `${education.startDate} - ${education.endDate}`
            : education.startDate ||
              education.endDate ||
              "",
      })
    );

    // ==============================
    // FORMAT PROJECTS
    // ==============================

    const formattedProjects = data.projects.map(
      (project) => ({
        title: project.title,
        description: project.description,

        techStack: project.techStack
          .split(",")
          .map((tech) => tech.trim())
          .filter((tech) => tech !== ""),

        startDate: project.startDate,
        endDate: project.endDate,
        link: project.link,
      })
    );

    // ==============================
    // FORMAT ACHIEVEMENTS
    // ==============================

    const formattedAchievements = data.achievements
      .split("\n")
      .map((achievement) => achievement.trim())
      .filter((achievement) => achievement !== "")
      .map((achievement) => ({
        description: achievement,
      }));

    // ==============================
    // UPDATE RESUME
    // ==============================

    const res = await axios.put(
      `http://localhost:5000/api/v1/resume/update/${id}`,
      {
        resumeTitle: data.resumeTitle,
        jobRole: data.jobRole,

        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        location: data.location,

        linkedin: data.linkedinUrl,
        github: data.github,

        experience: data.experience,
        summary: data.professionalSummary,

        skills: skillsArray,

        education: formattedEducation,

        projects: formattedProjects,

        workExperience: formattedWorkExperience,

        achievements: formattedAchievements,
      },
      {
        withCredentials: true,
      }
    );

    // ==============================
    // SUCCESS
    // ==============================

    if (res.data.success) {
      setResumeId(res.data.resume._id);

      setSelectedTemplate(
        res.data.resume.template || "classic"
      );

      toast.success(
        "Resume updated successfully 🚀"
      );
    }

  } catch (error) {
    console.error(
      "Resume update error:",
      error.response?.data || error
    );

    toast.error(
      error.response?.data?.message ||
      "Failed to update resume"
    );

  } finally {
    setIsSaving(false);
  }
};



  // ACCORDION STATE   
  const [openSections, setOpenSections] = useState([0]);

  // PREVIEW STATE
  const [previewMode, setPreviewMode] = useState(false);

  // SAVE LOADING STATE
  const [isSaving, setIsSaving] = useState(false);

  // RESUME DATA

  // TOGGLE ACCORDION
  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((item) => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  // UPDATE SIMPLE DATA
  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };                               

  // UPDATE WORK EXPERIENCE
  const updateExperience = (index, field, value) => {
    const updatedExperience = [...data.experiences];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };

    setData((prev) => ({
      ...prev,
      experiences: updatedExperience,
    }));
  };

  // ADD WORK EXPERIENCE
  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          desc: "",
        },
      ],
    }));
  };

  // REMOVE WORK EXPERIENCE
  const removeExperience = (index) => {
    if (data.experiences.length === 1) {
      toast.info("At least one work experience field is required");
      return;
    }

    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  // UPDATE EDUCATION
  const updateEducation = (index, field, value) => {
    const updatedEducation = [...data.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };

    setData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  // ADD EDUCATION
  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          college: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  // REMOVE EDUCATION
  const removeEducation = (index) => {
    if (data.education.length === 1) {
      toast.info("At least one education field is required");
      return;
    }

    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  // UPDATE PROJECT
  const updateProject = (index, field, value) => {
    const updatedProjects = [...data.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    setData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const updateSkill = (index, field, value) => {
    
      const updatedSkills = [...data.skills];

      updatedSkills[index] = {
          ...updatedSkills[index],
          [field]: value
      };

      setData((prev) => ({
        ...prev,
        skills: updatedSkills,
      }));
  }

  const addSkills = () => {
     setData((prev) => ({
        ...prev,
        skills: [
          ...prev.skills,
          {
             category: "",
             items: ""
          }
        ]
     }))
  }

  const removeSkill = (index) => {
     if(data.skills.length === 1) {
       toast.info("At least one skill category is required...");
       return;
     }

     setData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
     }))
  }   
 
  // ADD PROJECT
  const addProject = () => {
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          description: "",
          techStack: "",
          startDate: "",
          endDate: "",
          link: ""
        },
      ],
    }));
  };

  // REMOVE PROJECT
  const removeProject = (index) => {
    if (data.projects.length === 1) {
      toast.info("At least one project field is required");
      return;
    }

    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  // ACCORDION SECTIONS
  const sections = [
    { title: "Personal Information", icon: <BsPerson /> },
    { title: "Professional Summary", icon: <Sparkles /> },
    { title: "Work Experience", icon: <BsBriefcase /> },
    { title: "Education", icon: <BsMortarboard /> },
    { title: "Skills", icon: <BsCodeSlash /> },
    { title: "Projects", icon: <BsCodeSlash /> },
    { title: "Achievements", icon: <BsTrophy /> },
  ];

  // SAVE RESUME
  const handleSave = async () => {

    if (isSaving) {
      return;
    }

    // BASIC VALIDATION
    if (!data.fullName || !data.email || !data.location || !data.resumeTitle) {        
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsSaving(true);

      const skillsArray = data.skills
        .filter((skill) => skill.category.trim() ||  
        skill.items.trim())
        .map((skill) => ({
          category: skill.category.trim(),
          items: skill.items.split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),  
        }));

      // CONVERT FRONTEND EXPERIENCE TO BACKEND WORK EXPERIENCE
      const formattedWorkExperience = data.experiences.map((experience) => ({
        company: experience.company,
        role: experience.position,
        duration:
          experience.startDate && experience.endDate
            ? `${experience.startDate} - ${experience.endDate}`
            : experience.startDate || experience.endDate || "",
        description: experience.desc,
      }));

      // CONVERT FRONTEND EDUCATION
      const formattedEducation = data.education.map((education) => ({
        college: education.college,
        degree: education.degree,
        year:
          education.startDate && education.endDate
            ? `${education.startDate} - ${education.endDate}`
            : education.startDate || education.endDate || "",
      }));

      // CONVERT FRONTEND PROJECTS
      const formattedProjects = data.projects.map((project) => ({
        title: project.title,
        description: project.description,
        techStack: project.techStack
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== ""),
        startDate: project.startDate,
        endDate: project.endDate,
        link: project.link,
      }));

      // CONVERT ACHIEVEMENTS
      const formattedAchievements = data.achievements
        .split("\n")
        .map((achievement) => achievement.trim())
        .filter((achievement) => achievement !== "")
        .map((achievement) => ({ description: achievement }));

      // SEND DATA TO BACKEND
      const { data: response } = await axios.post(
        "http://localhost:5000/api/v1/resume/create",
        {
          resumeTitle: data.resumeTitle,
          jobRole: data.jobRole, 
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          location: data.location,
          linkedin: data.linkedinUrl,
          github: data.github,
          jobRole: data.jobRole,
          experience: data.experience,
          summary: data.professionalSummary,
          skills: skillsArray,
          education: formattedEducation,
          projects: formattedProjects,
          workExperience: formattedWorkExperience,
          achievements: formattedAchievements,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // SUCCESS
      if (response.success) {
        setResumeId(response.resume._id);
        setSelectedTemplate(response.resume.template || "classic");
        toast.success("Resume created successfully 🚀");
      }

    } catch (error) {
      console.error("Resume creation error:", error);
      toast.error(error.response?.data?.message || "Failed to create resume");
    } finally {
      setIsSaving(false);
    }
  };

// //   // // // PREVIEW PAGE
// if (previewMode) {    
//   const templates = [
//     { id: "classic", name: "Classic", desc: "Formal & ATS Friendly" },
//     { id: "modern", name: "Modern", desc: "Colorful & 2-Column" },
//     { id: "minimal", name: "Minimal", desc: "Clean & Spacious" },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen print:bg-white">

//       {/* STICKY TOP BAR */}
//       <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">
//         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">

//           {/* TEMPLATE SWITCHER */}
//           <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
//             {templates.map((tpl) => (
//               <button
//                 key={tpl.id}
//                 onClick={() => handleTemplateChange(tpl.id)}
//                 disabled={isChangingTemplate}
//                 className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
//                   selectedTemplate === tpl.id
//                    ? "bg-[#0A66C2] text-white shadow"
//                     : "bg-transparent text-gray-600 hover:bg-white"
//                 } ${isChangingTemplate? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {tpl.name}
//               </button>
//             ))}
//           </div>

//           {/* ACTION BUTTONS */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setPreviewMode(false)}
//               className="flex items-center gap-2 px-4 py-2 bg-white border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition"
//             >
//               <ArrowLeft size={16} />
//               Back to Edit
//             </button>

//             <button
//               onClick={handlePDFDownlord}
//               disabled={isDownloading}
//               className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
//             >
//               <Download size={16} />
//               {isDownloading ? "Generating PDF..." : "Download PDF"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* TEMPLATE INFO BAR */}
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 print:hidden">
//         <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
//           <Sparkles size={16} className="text-[#0A66C2]" />
//           <span>
//             Previewing: <span className="font-semibold capitalize text-gray-900">{selectedTemplate}</span> Template -
//             {templates.find(t => t.id === selectedTemplate)?.desc}
//           </span>
//         </div>
//       </div>

//       {/* RESUME CANVAS - A4 CENTERED */}
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex justify-center print:p-0">
//         <div className="transition-opacity duration-200" style={{ opacity: isChangingTemplate? 0.5 : 1 }}>
//           {selectedTemplate === "classic" && <ClassicTemplate data={data} />}
//           {selectedTemplate === "modern" && <ModernTemplate data={data} />}
//           {selectedTemplate === "minimal" && <MinimalTemplate data={data} />}
//         </div>
//       </div>
//     </div>
//   );
 

// }

  // MAIN RESUME BUILDER             
  return (

    <div className="min-h-screen bg-[#F7F9FC]">

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 pb-28">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl mt-5 font-bold text-gray-900">
            Build Your Resume
          </h1>
          <p className="text-gray-500 mt-2">
            Fill sections below. AI will optimize for ATS.
          </p>
        </div>

        {/* ACCORDION SECTIONS */}
        <div className="space-y-1">

          {sections.map((section, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >

              {/* SECTION HEADER */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">
                    {section.icon}
                  </span>

                  <h3 className="font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                {openSections.includes(index) ? (
                  <ChevronUp className="text-gray-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {/* SECTION CONTENT */}
              {openSections.includes(index) && (
                <div className="px-5 pb-6 pt-1 border-t border-gray-100">

               
                  {index === 0 && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">

                      <Input
                        label="Resume Title"
                        value={data.resumeTitle}
                        onChange={(e) => updateData("resumeTitle", e.target.value)}
                      />

                      <Input
                        label="Job Role"
                        value={data.jobRole}
                        onChange={(e) => updateData("jobRole", e.target.value)}
                      />

                         {/* PERSONAL INFORMATION */}
 
                      <Input
                        label="Full Name"
                        value={data.fullName}
                        onChange={(e) => updateData("fullName", e.target.value)}
                      />

                      <Input
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={(e) => updateData("email", e.target.value)}
                      />

                      <Input
                        label="Location"
                        value={data.location}
                        onChange={(e) => updateData("location", e.target.value)}
                      />

                      <Input
                        label="LinkedIn"
                        value={data.linkedinUrl}
                        onChange={(e) => updateData("linkedinUrl", e.target.value)}
                      />

                      <Input
                        label="GitHub/X Profile"
                        value={data.github}
                        onChange={(e) => updateData("github", e.target.value)}
                      />

                      <Input
                        label="Mobile No"
                        value={data.phone}
                        onChange={(e) => updateData("phone", e.target.value)}
                      />
                    </div>
                  )}

                  {/* PROFESSIONAL SUMMARY */}
                  {index === 1 && (
                    <div className="mt-4">
                      <TextArea
                        label="Summary"
                        rows={5}
                        value={data.professionalSummary}
                        onChange={(e) => updateData("professionalSummary", e.target.value)}
                      />

                      <button
                        onClick={() => toast.info("AI optimization coming soon")}
                        className="mt-3 flex items-center gap-2 px-3 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >
                        <Wand2 size={16} />
                        Improve with AI
                      </button>
                    </div>
                  )}

                  {/* WORK EXPERIENCE */}
                  {index === 2 && (
                    <div className="space-y-6 mt-4">

                      {data.experiences.map((experience, experienceIndex) => (
                        <div
                          key={experienceIndex}
                          className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-800">
                              Experience {experienceIndex + 1}
                            </h4>

                            {data.experiences.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeExperience(experienceIndex)}
                                className="text-red-500 hover:text-red-700 transition"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <Input
                              label="Position"
                              value={experience.position}
                              onChange={(e) => updateExperience(experienceIndex, "position", e.target.value)}
                            />

                            <Input
                              label="Company"
                              value={experience.company}
                              onChange={(e) => updateExperience(experienceIndex, "company", e.target.value)}
                            />

                            <Input
                              label="Start"
                              type="date"
                              value={experience.startDate}
                              onChange={(e) => updateExperience(experienceIndex, "startDate", e.target.value)}
                            />

                            <Input
                              label="End"
                              type="date"
                              value={experience.endDate}
                              onChange={(e) => updateExperience(experienceIndex, "endDate", e.target.value)}
                            />
                          </div>

                          <div className="mt-4">
                            <TextArea
                              label="Description"
                              rows={4}
                              value={experience.desc}
                              onChange={(e) => updateExperience(experienceIndex, "desc", e.target.value)}
                            />
                          </div>

                          <button
                            onClick={() => toast.info("AI optimization coming soon")}
                            className="mt-3 flex items-center gap-2 px-3 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                          >                                     
                            <Wand2 size={16} />                  
                            Improve with AI
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addExperience}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >
                        <Plus size={16} />
                        Add Experience
                      </button>
                    </div>
                  )}

                  {/* EDUCATION */}
                  {index === 3 && (
                    <div className="space-y-6 mt-4">

                      {data.education.map((education, educationIndex) => (
                        <div
                          key={educationIndex}
                          className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-800">
                              Education {educationIndex + 1}
                            </h4>

                            {data.education.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeEducation(educationIndex)}
                                className="text-red-500 hover:text-red-700 transition"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <Input
                              label="College"
                              value={education.college}
                              onChange={(e) => updateEducation(educationIndex, "college", e.target.value)}
                            />

                            <Input
                              label="Degree"
                              value={education.degree}
                              onChange={(e) => updateEducation(educationIndex, "degree", e.target.value)}
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                              <Input
                                label="Start"
                                type="date"
                                value={education.startDate}
                                onChange={(e) => updateEducation(educationIndex, "startDate", e.target.value)}
                              />

                              <Input
                                label="End"
                                type="date"
                                value={education.endDate}
                                onChange={(e) => updateEducation(educationIndex, "endDate", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addEducation}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >
                        <Plus size={16} />
                        Add Education
                      </button>
                    </div>
                  )}

                  {/* SKILLS */}
                  {/* {index === 4 && (
                    <div className="mt-4">
                      <TextArea
                        label="Skills"
                        rows={3}
                        placeholder="React, Node.js, MongoDB, AWS"
                        value={data.skills}
                        onChange={(e) => updateData("skills", e.target.value)}
                      />

                      <button
                        onClick={() => toast.info("AI optimization coming soon")}
                        className="mt-3 flex items-center gap-2 px-3 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >
                        <Wand2 size={16} />
                        Improve with AI
                      </button>
                    </div>
                  )} */}

                 
                  {index === 4 && (
  <div className="space-y-6 mt-4">

    {data.skills.map((skill, skillIndex) => (
      <div
        key={skillIndex}
        className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">

          <h4 className="font-semibold text-gray-800">
            Skill Category {skillIndex + 1}
          </h4>

          {data.skills.length > 1 && (
            <button
              type="button"
              onClick={() => removeSkill(skillIndex)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 size={18} />
            </button>
          )}

        </div>

        {/* CATEGORY NAME */}
        <Input
          label="Category"
          placeholder="Programming"
          value={skill.category}
          onChange={(e) =>
            updateSkill(
              skillIndex,
              "category",
              e.target.value
            )
          }
        />

        {/* SKILLS */}
        <div className="mt-4">
          <TextArea
            label="Skills"
            rows={3}
            placeholder="C++, JavaScript, TypeScript, SQL"
            value={skill.items}
            onChange={(e) =>
              updateSkill(
                skillIndex,
                "items",
                e.target.value
              )
            }
          />
        </div>

      </div>
    ))}

    {/* ADD CATEGORY */}
    <button
      type="button"
      onClick={addSkills}
      className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
    >
      <Plus size={16} />
      Add Skill Category
    </button>

  </div>
)}

                  {/* PROJECTS */}
                  {index === 5 && (
                    <div className="space-y-6 mt-4">

                      {data.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="border border-gray-200 rounded-xl p-4 bg-[#FAFBFD]"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-800">
                              Project {projectIndex + 1}
                            </h4>

                            {data.projects.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeProject(projectIndex)}
                                className="text-red-500 hover:text-red-700 transition"
                              >
                                <Trash2 size={18} />
                              </button>
                            )}
                          </div>

                          <div className="space-y-4">
                            <Input
                              label="Title"
                              value={project.title}
                              onChange={(e) => updateProject(projectIndex, "title", e.target.value)}
                            />

                             <Input
                              label="Tech Stack"
                              placeholder="React, Springboot, Angular"
                              value={project.techStack}
                              onChange={(e) => updateProject(projectIndex, "techStack", e.target.value)}
                            />

                            <TextArea
                              label="Description"
                              rows={3}
                              value={project.description}
                              onChange={(e) => updateProject(projectIndex, "description", e.target.value)}
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                              <Input
                                label="Start"
                                type="date"
                                value={project.startDate}
                                onChange={(e) => updateProject(projectIndex, "startDate", e.target.value)}
                              />

                              <Input
                                label="End"
                                type="date"
                                value={project.endDate}
                                onChange={(e) => updateProject(projectIndex, "endDate", e.target.value)}
                              />

                              <Input
                                 label="Link"
                                 value={project.link}
                                 onChange={(e) => updateProject(projectIndex, "link", e.target.value)}
                              />

                            </div>

                            <button
                              onClick={() => toast.info("AI optimization coming soon")}
                              className="mt-3 flex items-center gap-2 px-3 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                            >
                              <Wand2 size={16} />
                              Improve with AI
                            </button>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addProject}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >
                        <Plus size={16} />
                        Add Project
                      </button>
                    </div>
                  )}

                  {/* ACHIEVEMENTS */}
                  {index === 6 && (
                    <div className="mt-4">
                      <TextArea
                        label="Achievements"
                        rows={4}
                        placeholder="Enter each achievement on a new line"
                        value={data.achievements}
                        onChange={(e) => updateData("achievements", e.target.value)}
                      />

                      <button
                        onClick={() => toast.info("AI optimization coming soon")}
                        className="mt-3 flex items-center gap-2 px-3 py-2 bg-blue-50 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-blue-100 transition"
                      >                                     
                        <Wand2 size={16} />
                        Improve with AI
                      </button>
                    </div>
                  )}

                </div>
              )}

            </div>
          ))}

        </div>

        {/* FLOATING ACTION BAR */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full shadow-lg px-2 py-2 flex gap-2 z-50">

          {/* <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition disabled:opacity-60"
          >
            <Save size={16} />
            {isSaving ? "Saving..." : "Save"}
          </button> */}

          
          <button
  onClick={resumeId ? handleUpdate : handleSave}
  disabled={isSaving}
  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition disabled:opacity-60"
>
  <Save size={16} />

  {isSaving
    ? resumeId
      ? "Updating..."
      : "Saving..."
    : resumeId
    ? "Update"
    : "Save"}
</button>

          <button
  onClick={() => navigate(`/resume-preview/${resumeId}`)}
  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition"
>
  <Eye size={16} />
  Preview
</button>

        </div>

      </div>

    </div>

  );

};

export default ResumeBuilder;