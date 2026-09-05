import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Plus, FileText, Download, Eye, Pencil, Trash2,
  Briefcase, Calendar, LayoutTemplate, FileCheck
} from "lucide-react";
import Navbar from "../components/common/Navbar";

const ResumeDashboard = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloadingId, setDownloadingId] = useState(null);
                                                  
  // FETCH ALL RESUMES
  useEffect(() => {
    const fetchAllResumes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:5000/api/v1/resume/getall",
          { withCredentials: true }
        );
        setResume(res.data.allResume);
      } catch (error) {
        console.log("Error fetching resumes:", error);
        toast.error("Failed to fetch resumes");
      } finally {
        setLoading(false);
      }
    };
    fetchAllResumes();
  }, []);

  // DELETE RESUME
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/v1/resume/delete/${id}`, {
        withCredentials: true,         
      });     
      setResume((prevResume) => prevResume.filter((item) => item._id !== id));                    
      toast.success("Resume deleted");
    } catch (error) {
      console.log("Error deleting resume:", error);
      toast.error("Failed to delete resume");
    }
  };

  // DOWNLOAD PDF
    const handlePDFDownload = async (id) => {
    try {

      setDownloadingId(id);

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
       setDownloadingId(null);
    }
  };

  const handlePreview = (id) => navigate(`/resume-preview/${id}`);          
  const handleEdit = (id) => navigate(`/resume-builder/${id}`);
  const handleCoverLetter = (id) => navigate(`/create-cover-letter/${id}`);

  const getTemplateColor = (template) => {
    if (template === "modern") return "bg-[#EEF2FF] text-[#4338CA]";
    if (template === "minimal") return "bg-[#F0FDF4] text-[#15803D]";
    return "bg-[#F1F5F9] text-[#475569]";
  }

  return (

     <>

     <Navbar />

    <div className="min-h-screen mt-12 bg-[#F7F9FC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Resumes</h1>
            <p className="text-gray-500 mt-1">Manage, edit and download all your resumes</p>
          </div>
          <button
            onClick={() => navigate("/resume-builder")}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
          >
            <Plus size={18} /> Create New Resume
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#0A66C2]/10 rounded-lg"><FileText className="text-[#0A66C2]" size={20}/></div>
              <div>
                <p className="text-sm text-gray-500">Total Resumes</p>
                <p className="text-2xl font-bold text-gray-900">{resume.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg"><FileCheck className="text-green-600" size={20}/></div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="text-lg font-bold text-gray-900">
                  {resume[0]? new Date(resume[0].updatedAt).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg"><LayoutTemplate className="text-purple-600" size={20}/></div>
              <div>
                <p className="text-sm text-gray-500">Templates Used</p>
                <p className="text-lg font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div> 
        )}

        {/* ALL RESUMES GRID */}
        {!loading && resume.length > 0? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex-col"
              >
                {/* CARD HEADER */}
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 truncate">{item.resumeTitle || "My Resume"}</h2>
                      <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                        <Briefcase size={14} /> {item.jobRole || ""}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTemplateColor(item.resumeTemplate)}`}>
                      {item.resumeTemplate || "Classic"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-3">
                    <Calendar size={12} /> Updated: {new Date(item.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>

                {/* CARD ACTIONS */}
                <div className="p-5 flex-1 flex-col justify-end">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                    >
                      <Pencil size={14} /> Edit
                    </button>
                    <button
                      onClick={() => handlePreview(item._id)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                    >
                      <Eye size={14} /> Preview
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button
                       onClick={() => handlePDFDownload(item._id)}
                       disabled={downloadingId === item._id}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-[#0A66C2]/20 transition"
                    >
                      <Download size={14} /> 
                      {downloadingId === item._id ? "Generating PDF..." : "PDF"}
                    </button>

                    <button
                      onClick={() => handleCoverLetter(item._id)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition"
                    >
                      <FileText size={14} /> Cover Letter
                    </button>
                  </div>
                    
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
         !loading && (
            /* EMPTY STATE */
            <div className="bg-white rounded-2xl border-gray-200 shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={32} className="text-[#0A66C2]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No resumes yet</h3>
              <p className="text-gray-500 mt-2 mb-6">Create your first professional resume in minutes</p>
              <button
                onClick={() => navigate("/resume-builder")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
              >
                <Plus size={18} /> Create Your First Resume
              </button>
            </div>
          )
        )}
      </div>
    </div>

    </>

  );
};

export default ResumeDashboard; 