import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Download, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

import ClassicTemplate from "../components/resume/ClassicTemplate";
import ModernTemplate from "../components/resume/ModernTemplate";
import MinimalTemplate from "../components/resume/MinimalTemplate";

const ResumePreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isDownloading, setIsDownloading] = useState(false);
  const [isChangingTemplate, setIsChangingTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [data, setData] = useState(null);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      desc: "Formal & ATS Friendly",
    },
    {
      id: "modern",
      name: "Modern",
      desc: "Colorful & 2-Column",
    },
    {
      id: "minimal",
      name: "Minimal",
      desc: "Clean & Spacious",
    },
  ];

  // FETCH RESUME
  useEffect(() => {
    if (!id) return;

    const fetchResume = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/resume/get/${id}`,
          {
            withCredentials: true,
          }
        );

        const resume = res.data.resume;

        console.log("Preview Resume:", resume);

        setSelectedTemplate(resume.template || "classic");

        // Convert backend data to frontend data format
        setData({
          resumeTitle: resume.resumeTitle || "",
          jobRole: resume.jobRole || "",

          fullName: resume.fullName || "",
          email: resume.email || "",
          phone: resume.phone || "",
          location: resume.location || "",
          linkedinUrl: resume.linkedin || "",
          github: resume.github || "",

          experience: resume.experience || "",
          professionalSummary: resume.summary || "",

          skills:
            resume.skills?.length > 0
              ? resume.skills.map((skill) => ({
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
            resume.workExperience?.length > 0
              ? resume.workExperience.map((experience) => {
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
            resume.education?.length > 0
              ? resume.education.map((education) => {
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
            resume.projects?.length > 0
              ? resume.projects.map((project) => ({
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
            resume.achievements?.length > 0
              ? resume.achievements
                  .map((achievement) => achievement.description)
                  .join("\n")
              : "",
        });
      } catch (error) {
        console.error("Error fetching resume:", error);

        toast.error(
          error.response?.data?.message || "Failed to load resume"
        );
      }
    };

    fetchResume();
  }, [id]);

  // DOWNLOAD PDF
  const handlePDFDownload = async () => {
    try {
      setIsDownloading(true);

      const response = await axios.get(
        `http://localhost:5000/api/v1/resume/pdf/${id}`,
        {
          withCredentials: true,
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF download error:", error);

      toast.error(
        error.response?.data?.message || "Failed to download PDF"
      );
    } finally {
      setIsDownloading(false);
    }
  };

  // CHANGE TEMPLATE
  const handleTemplateChange = async (template) => {
    if (!id) {
      toast.error("Resume ID not found");
      return;
    }

    try {
      setIsChangingTemplate(true);

      const { data: response } = await axios.put(
        `http://localhost:5000/api/v1/resume/template/${id}`,
        {
          template,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.success) {
        setSelectedTemplate(template);
        toast.success("Template changed successfully");
      }
    } catch (error) {
      console.error("Template change error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to change template"
      );
    } finally {
      setIsChangingTemplate(false);
    }
  };

// LOADING STATE
if (!data) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">

      {/* Animated Resume Card */}
      <div className="relative w-64 h-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">

        {/* Header */}
        <div className="p-6">
          <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mx-6"></div>

        {/* Content Lines */}
        <div className="p-6 space-y-4">
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-3 w-4/6 bg-gray-200 rounded"></div>

          <div className="pt-4 space-y-3">
            <div className="h-3 w-28 bg-gray-200 rounded"></div>
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          </div>

          <div className="pt-4 space-y-3">
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Shimmer Animation */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
      </div>

      {/* Loading Text */}
      {/* <p className="mt-6 text-sm font-medium text-gray-600">
        Preparing your resume preview...
      </p> */}

      <p className="mt-1 text-xs mt-3 text-gray-400">
        Just a moment
      </p>

    </div>
  );
}

  return (
    <div className="bg-gray-50 min-h-screen print:bg-white">

      {/* STICKY TOP BAR */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm print:hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">

          {/* TEMPLATE SWITCHER */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() =>
                  handleTemplateChange(tpl.id)
                }
                disabled={isChangingTemplate}
                className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  selectedTemplate === tpl.id
                    ? "bg-[#0A66C2] text-white shadow"
                    : "bg-transparent text-gray-600 hover:bg-white"
                } ${
                  isChangingTemplate
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {tpl.name}
              </button>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">

            {/* BACK TO EDIT */}
            <button
              onClick={() =>
                navigate(`/resume-builder/${id}`)
              }
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium shadow-sm hover:bg-gray-50 transition"
            >
              <ArrowLeft size={16} />
              Back to Edit
            </button>

            {/* DOWNLOAD */}
            <button
              onClick={handlePDFDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-semibold shadow-sm hover:bg-[#004182] transition disabled:opacity-60"
            >
              <Download size={16} /> 

              {isDownloading
                ? "Generating PDF..."
                : "Download PDF"}
            </button>

          </div>
        </div>
      </div>

      {/* TEMPLATE INFO */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 print:hidden">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Sparkles
            size={16}
            className="text-[#0A66C2]"
          />

          <span>
            Previewing:{" "}
            <span className="font-semibold capitalize text-gray-900">
              {selectedTemplate}
            </span>{" "}
            Template -{" "}
            {
              templates.find(
                (t) => t.id === selectedTemplate
              )?.desc
            }
          </span>
        </div>
      </div>

      {/* RESUME CANVAS */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex justify-center print:p-0">

        <div
          className="transition-opacity duration-200"
          style={{
            opacity: isChangingTemplate ? 0.5 : 1,
          }}
        >
          {selectedTemplate === "classic" && (
            <ClassicTemplate data={data} />
          )}

          {selectedTemplate === "modern" && (
            <ModernTemplate data={data} />
          )}

          {selectedTemplate === "minimal" && (
            <MinimalTemplate data={data} />
          )}
        </div>

      </div>
    </div>
  );
};

export default ResumePreview;
