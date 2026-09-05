// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   Plus,
//   FileText,
//   Eye,
//   Edit,
//   Trash2,
//   Loader2,
// } from "lucide-react";

// const CoverLetterDashboard = () => {
//   const navigate = useNavigate();

//   const [coverLetters, setCoverLetters] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchCoverLetters = async () => {
//       try {
//         setIsLoading(true);

//         const res = await axios.get(
//           "http://localhost:5000/api/v1/coverletter/getall",
//           {
//             withCredentials: true,
//           }
//         );

//         setCoverLetters(res.data.allCoverLetters || []);
//         console.log(coverLetters);

//       } catch (error) {
//         console.error(
//           "Error fetching cover letters:",
//           error.response?.data || error.message
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCoverLetters();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this cover letter?"
//     );

//     if (!confirmDelete) return;

//     try {
//       await axios.delete(
//         `http://localhost:5000/api/v1/cover-letter/delete/${id}`,
//         {
//           withCredentials: true,
//         }
//       );

//       setCoverLetters((prev) =>
//         prev.filter((coverLetter) => coverLetter._id !== id)
//       );
//     } catch (error) {
//       console.error(
//         "Error deleting cover letter:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 md:p-10">
//       {/* Header */}
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Cover Letters
//             </h1>

//             <p className="mt-2 text-gray-600">
//               Create and manage your professional cover letters.
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/create-cover-letter")}
//             className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
//           >
//             <Plus size={20} />
//             Create Cover Letter
//           </button>
//         </div>

//         {/* Loading */}
//         {isLoading ? (
//           <div className="flex min-h-[300px] items-center justify-center">
//             <Loader2 className="animate-spin text-blue-600" size={35} />
//           </div>
//         ) : coverLetters.length === 0 ? (
//           /* Empty State */
//           <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
//             <div className="mb-4 rounded-full bg-blue-100 p-4">
//               <FileText className="text-blue-600" size={35} />
//             </div>

//             <h2 className="text-xl font-semibold text-gray-900">
//               No Cover Letters Yet
//             </h2>

//             <p className="mt-2 max-w-md text-gray-500">
//               Create your first professional cover letter to apply for your
//               dream job.
//             </p>

//             <button
//               onClick={() => navigate("/create-cover-letter")}
//               className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
//             >
//               <Plus size={20} />
//               Create Your First Cover Letter
//             </button>
//           </div>
//         ) : (
//           /* Cover Letter Cards */
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {coverLetters.map((coverLetter) => (
//               <div
//                 key={coverLetter._id}
//                 className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 {/* Icon */}
//                 <div className="mb-5 flex items-center justify-between">
//                   <div className="rounded-lg bg-blue-100 p-3">
//                     <FileText className="text-blue-600" size={25} />
//                   </div>

//                   <button
//                     onClick={() => handleDelete(coverLetter._id)}
//                     className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
//                   >
//                     <Trash2 size={19} />
//                   </button>
//                 </div>

//                 {/* Title */}
//                 <h2 className="line-clamp-2 text-xl font-semibold text-gray-900">
//                   {coverLetter.title || "Untitled Cover Letter"}
//                 </h2>

//                 {/* Job Information */}
//                 <div className="mt-3 space-y-1 text-sm text-gray-500">
//                   {coverLetter.jobTitle && (
//                     <p>
//                       <span className="font-medium text-gray-700">
//                         Position:
//                       </span>{" "}
//                       {coverLetter.jobTitle}
//                     </p>
//                   )}

//                   {coverLetter.companyName && (
//                     <p>
//                       <span className="font-medium text-gray-700">
//                         Company:
//                       </span>{" "}
//                       {coverLetter.companyName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Updated Date */}
//                 <p className="mt-4 text-xs text-gray-400">
//                   Updated{" "}
//                   {coverLetter.updatedAt
//                     ? new Date(coverLetter.updatedAt).toLocaleDateString()
//                     : "Recently"}
//                 </p>

//                 {/* Actions */}
//                 <div className="mt-6 flex gap-2">
//                   <button
//                     onClick={() =>
//                       navigate(`/cover-letter-preview/${coverLetter._id}`)
//                     }
//                     className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
//                   >
//                     <Eye size={17} />
//                     Preview
//                   </button>

//                   <button
//                     onClick={() =>
//                       navigate(`/create-cover-letter/${coverLetter._id}`)
//                     }
//                     className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
//                   >
//                     <Edit size={17} />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CoverLetterDashboard;









// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   Plus,
//   FileText,
//   Download,
//   Eye,
//   Pencil,
//   Trash2,
//   Loader2,
//   Briefcase,
//   Calendar,
//   Building2,
//   FileCheck,
// } from "lucide-react";
// import Navbar from "../components/common/Navbar";

// const CoverLetterDashboard = () => {
//   const navigate = useNavigate();
//   const [coverLetters, setCoverLetters] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [downloadingId, setDownloadingId] = useState(null);

//   // =====================================================
//   // FETCH ALL COVER LETTERS
//   // =====================================================
//   useEffect(() => {
//     const fetchCoverLetters = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           "http://localhost:5000/api/v1/coverletter/getall",
//           { withCredentials: true }
//         );
//         setCoverLetters(res.data.allCoverLetters || []);
//       } catch (error) {
//         console.error("Error fetching cover letters:", error);
//         toast.error("Failed to fetch cover letters");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchCoverLetters();
//   }, []);

//   // =====================================================
//   // DELETE COVER LETTER
//   // =====================================================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this cover letter?")) return;
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/v1/coverletter/delete/${id}`,
//         { withCredentials: true }
//       );
//       setCoverLetters((prev) => prev.filter((cl) => cl._id!== id));
//       toast.success("Cover letter deleted");
//     } catch (error) {
//       console.error("Error deleting cover letter:", error);
//       toast.error("Failed to delete cover letter");
//     }
//   };

//   // =====================================================
//   // DOWNLOAD PDF
//   // =====================================================
//   const handlePDFDownload = async (id) => {
//     try {
//       setDownloadingId(id);
//       const response = await axios.get(
//         `http://localhost:5000/api/v1/coverletter/pdf/${id}`,
//         { withCredentials: true, responseType: "blob" }
//       );
//       const blob = new Blob([response.data], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "cover-letter.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("PDF download error:", error);
//       toast.error(error.response?.data?.message || "Failed to download PDF");
//     } finally {
//       setDownloadingId(null);
//     }
//   };

//   const handlePreview = (id) => navigate(`/cover-letter-preview/${id}`);
//   const handleEdit = (id) => navigate(`/create-cover-letter/${id}`);

//   const getTemplateColor = (template) => {
//     if (template === "modern") return "bg-[#EEF2FF] text-[#4338CA]";
//     if (template === "minimal") return "bg-[#F0FDF4] text-[#15803D]";
//     return "bg-[#F1F5F9] text-[#475569]";
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen mt-12 bg-[#F7F9FC] py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* HEADER */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">My Cover Letters</h1>
//               <p className="text-gray-500 mt-1">
//                 Create, manage and download cover letters for your applications
//               </p>
//             </div>
//             <button
//               onClick={() => navigate("/create-cover-letter")}
//               className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
//             >
//               <Plus size={18} /> Create New Cover Letter
//             </button>
//           </div>

//           {/* STATS */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//             <div className="bg-white p-5 rounded-xl border-gray-200 shadow-sm">
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-[#0A66C2]/10 rounded-lg">
//                   <FileText className="text-[#0A66C2]" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Cover Letters</p>
//                   <p className="text-2xl font-bold text-gray-900">{coverLetters.length}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-5 rounded-xl border-gray-200 shadow-sm">
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-green-100 rounded-lg">
//                   <FileCheck className="text-green-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Last Updated</p>
//                   <p className="text-lg font-bold text-gray-900">
//                     {coverLetters[0]
//                      ? new Date(coverLetters[0].updatedAt).toLocaleDateString()
//                       : "N/A"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-purple-100 rounded-lg">
//                   <Building2 className="text-purple-600" size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Companies Applied</p>
//                   <p className="text-lg font-bold text-gray-900">
//                     {new Set(coverLetters.map((cl) => cl.companyName)).size}
//                   </p>
//                 </div>
//                   </div>
//             </div>
//           </div>

//           {/* LOADING SKELETON */}
//           {isLoading && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="bg-white p-6 rounded-2xl border-gray-200 animate-pulse">
//                   <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
//                   <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
//                   <div className="h-3 bg-gray-200 rounded w-full"></div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* GRID */}
//           {!isLoading && coverLetters.length > 0? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {coverLetters.map((item) => (
//                 <div
//                   key={item._id}
//                   className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
//                 >
//                   {/* CARD HEADER */}
//                   <div className="p-5 border-b border-gray-100">
//                     <div className="flex items-start justify-between">
//                       <div className="min-w-0">
//                         <h2 className="text-lg font-bold text-gray-900 truncate">
//                           {item.title || "Untitled Cover Letter"}
//                         </h2>
//                         <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
//                           <Briefcase size={14} /> {item.jobTitle || "No Job Title"}
//                         </p>
//                         {item.companyName && (
//                           <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
//                             <Building2 size={14} /> {item.companyName}
//                           </p>
//                         )}
//                       </div>
//                       <span
//                         className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${getTemplateColor(
//                           item.template
//                         )}`}
//                       >
//                         {item.template || "Classic"}
//                       </span>
//                     </div>
//                     <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-3">
//                       <Calendar size={12} /> Updated:{" "}
//                       {new Date(item.updatedAt).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </p>
//                   </div>

//                   {/* CARD ACTIONS */}
//                   <div className="p-5 flex-1 flex flex-col justify-end">
//                     <div className="grid grid-cols-2 gap-2 mb-3">
//                       <button
//                         onClick={() => handleEdit(item._id)}
//                         className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
//                       >
//                         <Pencil size={14} /> Edit
//                       </button>
//                       <button
//                         onClick={() => handlePreview(item._id)}
//                         className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
//                       >
//                         <Eye size={14} /> Preview
//                       </button>
//                     </div>

//                     <div className="grid grid-cols-2 gap-2 mb-3">
//                       <button
//                         onClick={() => handlePDFDownload(item._id)}
//                         disabled={downloadingId === item._id}
//                         className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg text-sm font-medium hover:bg-[#0A66C2]/20 transition disabled:opacity-50"
//                       >
//                         <Download size={14} />
//                         {downloadingId === item._id? "Generating..." : "PDF"}
//                       </button>
//                       <button
//                         onClick={() => navigate(`/create-cover-letter/${item.resumeId}`)}
//                         className="flex items-center justify-center gap-1.5 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition"
//                       >
//                         <FileText size={14} /> From Resume
//                       </button>
//                     </div>

//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition"
//                     >
//                       <Trash2 size={14} /> Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//            !isLoading && (
//               /* EMPTY STATE */
//               <div className="bg-white rounded-2xl border-gray-200 shadow-sm p-12 text-center">
//                 <div className="w-16 h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <FileText size={32} className="text-[#0A66C2]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">No cover letters yet</h3>
//                 <p className="text-gray-500 mt-2 mb-6">
//                   Create your first professional cover letter in minutes
//                 </p>
//                 <button
//                   onClick={() => navigate("/create-cover-letter")}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
//                 >
//                   <Plus size={18} /> Create Your First Cover Letter
//                 </button>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CoverLetterDashboard;








// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { 
//   Plus, FileText, Eye, Pencil, Trash2, 
//   Briefcase, Building2, Calendar, Loader2, Search
// } from "lucide-react";
// import Navbar from "../components/common/Navbar";

// const CoverLetterDashboard = () => {
//   const navigate = useNavigate();
//   const [coverLetters, setCoverLetters] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchCoverLetters = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           "http://localhost:5000/api/v1/coverletter/getall", 
//           { withCredentials: true }
//         );
//         setCoverLetters(res.data.allCoverLetters || []);
//       } catch (error) {
//         toast.error("Failed to fetch cover letters");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchCoverLetters();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this cover letter?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/coverletter/delete/${id}`, { withCredentials: true });
//       setCoverLetters((prev) => prev.filter((cl) => cl._id !== id));
//       toast.success("Cover letter deleted");
//     } catch (error) {
//       toast.error("Failed to delete");
//     }
//   };

//   const filteredLetters = coverLetters.filter(cl => 
//     cl.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cl.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cl.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-[#F7F9FC] py-6 sm:py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* HEADER */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Cover Letters</h1>
//               <p className="text-gray-500 mt-1 text-sm sm:text-base">Manage all your job applications</p>
//             </div>
//             <button 
//               onClick={() => navigate("/create-cover-letter")} 
//               className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#004182] transition"
//             >
//               <Plus size={18} /> Create New
//             </button>
//           </div>

//           {/* STATS + SEARCH */}
//           <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 mb-6">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//               <div className="flex gap-6">
//                 <div>
//                   <p className="text-xs sm:text-sm text-gray-500">Total</p>
//                   <p className="text-xl sm:text-2xl font-bold text-gray-900">{coverLetters.length}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs sm:text-sm text-gray-500">Companies</p>
//                   <p className="text-xl sm:text-2xl font-bold text-gray-900">{new Set(coverLetters.map(c => c.companyName)).size}</p>
//                 </div>
//               </div>
//               <div className="relative w-full md:w-80">
//                 <Search size={18} className="absolute left-3 top-2.5 text-gray-400"/>
//                 <input 
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-[#0A66C2] outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* CONTENT */}
//           {isLoading ? (
//             <div className="flex justify-center py-20">
//               <Loader2 className="animate-spin text-[#0A66C2]" size={32}/>
//             </div>
//           ) : filteredLetters.length === 0 ? (
//             <div className="bg-white rounded-2xl border-gray-200 shadow-sm p-8 sm:p-12 text-center">
//               <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText size={28} className="text-[#0A66C2]" />
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900">No cover letters found</h3>
//               <p className="text-gray-500 mt-2 mb-6 text-sm">Create your first professional cover letter</p>
//               <button onClick={() => navigate("/create-cover-letter")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold">
//                 <Plus size={18} /> Create Cover Letter
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* DESKTOP TABLE - hidden on mobile */}
//               <div className="hidden md:block bg-white rounded-2xl border-gray-200 shadow-sm overflow-hidden">
//                 <div className="grid grid-cols-12 p-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase">
//                   <div className="col-span-5">Cover Letter</div>
//                   <div className="col-span-3">Company</div>
//                   <div className="col-span-2">Updated</div>
//                   <div className="col-span-2 text-right">Actions</div>
//                 </div>
//                 {filteredLetters.map((item) => (
//                   <div key={item._id} className="grid grid-cols-12 p-4 border-b border-gray-100 hover:bg-[#F7F9FC] transition items-center">
//                     <div className="col-span-5 flex items-center gap-3">
//                       <div className="p-2.5 bg-[#0A66C2]/10 rounded-lg"><FileText size={20} className="text-[#0A66C2]"/></div>
//                       <div className="min-w-0">
//                         <p className="font-semibold text-gray-900 truncate">{item.title || "Untitled"}</p>
//                         <p className="text-sm text-gray-500 flex items-center gap-1.5"><Briefcase size={12}/> {item.jobTitle || "No Position"}</p>
//                       </div>
//                     </div>
//                     <div className="col-span-3 text-sm text-gray-700 flex items-center gap-1.5"><Building2 size={14} className="text-gray-400"/> {item.companyName || "-"}</div>
//                     <div className="col-span-2 text-sm text-gray-500 flex items-center gap-1.5"><Calendar size={14} className="text-gray-400"/> {new Date(item.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
//                     <div className="col-span-2 flex justify-end gap-1">
//                       <button onClick={() => navigate(`/cover-letter-preview/${item._id}`)} className="p-2 hover:bg-gray-100 rounded-lg"><Eye size={17}/></button>
//                       <button onClick={() => navigate(`/create-cover-letter/${item._id}`)} className="p-2 hover:bg-gray-100 rounded-lg"><Pencil size={17}/></button>
//                       <button onClick={() => handleDelete(item._id)} className="p-2 hover:bg-red-50 text-red-500 rounded-lg"><Trash2 size={17}/></button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* MOBILE CARDS - hidden on desktop */}
//               <div className="md:hidden space-y-4">
//                 {filteredLetters.map((item) => (
//                   <div key={item._id} className="bg-white rounded-2xl border-gray-200 shadow-sm p-4">
//                     {/* Top Row */}
//                     <div className="flex items-start gap-3">
//                       <div className="p-2.5 bg-[#0A66C2]/10 rounded-lg shrink-0"><FileText size={20} className="text-[#0A66C2]"/></div>
//                       <div className="flex-1 min-w-0">
//                         <p className="font-semibold text-gray-900 truncate">{item.title || "Untitled"}</p>
//                         <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1"><Briefcase size={12}/> {item.jobTitle || "No Position"}</p>
//                       </div>
//                     </div>
                    
//                     {/* Middle Info */}
//                     <div className="mt-3 space-y-2 text-sm">
//                       <div className="flex items-center gap-1.5 text-gray-700"><Building2 size={14} className="text-gray-400"/> {item.companyName || "No Company"}</div>
//                       <div className="flex items-center gap-1.5 text-gray-500"><Calendar size={14} className="text-gray-400"/> Updated {new Date(item.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
//                     </div>

//                     {/* Actions */}
//                     <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
//                       <button onClick={() => navigate(`/cover-letter-preview/${item._id}`)} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
//                         <Eye size={15}/> Preview
//                       </button>
//                       <button onClick={() => navigate(`/create-cover-letter/${item._id}`)} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg text-sm font-medium">
//                         <Pencil size={15}/> Edit
//                       </button>
//                       <button onClick={() => handleDelete(item._id)} className="px-3 py-2 bg-red-50 text-red-500 rounded-lg">
//                         <Trash2 size={15}/>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
// export default CoverLetterDashboard;







// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Plus, FileText, ArrowRight, Pencil, Trash2, Loader2, Search } from "lucide-react";
// import Navbar from "../components/common/Navbar";

// const CoverLetterDashboard = () => {
//   const navigate = useNavigate();
//   const [coverLetters, setCoverLetters] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchCoverLetters = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get("http://localhost:5000/api/v1/coverletter/getall", { withCredentials: true });
//         setCoverLetters(res.data.allCoverLetters || []);
//       } catch (error) {
//         toast.error("Failed to fetch cover letters");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchCoverLetters();
//   }, []);

//   const handleDelete = async (id, e) => {
//     e.stopPropagation(); // prevent card click
//     if (!window.confirm("Delete this cover letter?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/coverletter/delete/${id}`, { withCredentials: true });
//       setCoverLetters((prev) => prev.filter((cl) => cl._id !== id));
//       toast.success("Deleted");
//     } catch (error) {
//       toast.error("Failed to delete");
//     }
//   };

//   const filteredLetters = coverLetters.filter(cl => 
//     cl.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cl.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cl.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-b from-[#F7F9FC] to-white py-6 sm:py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* HEADER */}
//           <div className="text-center mt-12 mb-8">
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Cover Letters</h1>
//             <p className="text-gray-500 mt-2 text-sm sm:text-base">Land your next role with a tailored letter</p>
//             <button 
//               onClick={() => navigate("/create-cover-letter")} 
//               className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-[#004182] transition"
//             >
//               <Plus size={18} /> Create New
//             </button>
//           </div>

//           {/* SEARCH */}
//           {coverLetters.length > 0 && (
//             <div className="max-w-md mx-auto mb-8">
//               <div className="relative">
//                 <Search size={18} className="absolute left-3 top-3 text-gray-400"/>
//                 <input 
//                   type="text"
//                   placeholder="Search by company or role..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 bg-white border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0A66C2] outline-none"
//                 />
//               </div>
//             </div>
//           )}

//           {/* LOADING */}
//           {isLoading && (
//             <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#0A66C2]" size={32}/></div>
//           )}

//           {/* EMPTY STATE */}
//           {!isLoading && filteredLetters.length === 0 && (
//             <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-12 text-center max-w-2xl mx-auto">
//               <div className="w-16 h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText size={32} className="text-[#0A66C2]" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">No cover letters yet</h3>
//               <p className="text-gray-500 mt-2 mb-6">Create your first one to get started</p>
//             </div>
//           )}

//           {/* CARDS GRID */}
//           {!isLoading && filteredLetters.length > 0 && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredLetters.map((item) => (
//                 <div 
//                   key={item._id} 
//                   className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-gray-100 flex flex-col"
//                 >
//                   {/* HEADER */}
//                   <div className="h-28 bg-gradient-to-r from-[#0A66C2] to-[#004182] p-5 flex justify-between items-start">
//                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-[#0A66C2] text-xl shrink-0">
//                       {item.companyName?.[0]?.toUpperCase() || "C"}
//                     </div>
//                     <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
//                       <button onClick={(e) => {e.stopPropagation(); navigate(`/create-cover-letter/${item._id}`)}} className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
//                         <Pencil size={16} className="text-white"/>
//                       </button>
//                       <button onClick={(e) => handleDelete(item._id, e)} className="p-2 bg-white/20 rounded-lg hover:bg-red-500/80">
//                         <Trash2 size={16} className="text-white"/>
//                       </button>
//                     </div>
//                   </div>

//                   {/* BODY */}
//                   <div className="p-5 flex-1 flex-col">
//                     <h2 className="text-lg font-bold text-gray-900 truncate">{item.jobTitle || "Job Title"}</h2>
//                     <p className="text-gray-500 text-sm">{item.companyName || "Company"}</p>
//                     <p className="text-xs text-gray-400 mt-2">Updated {new Date(item.updatedAt).toLocaleDateString("en-US", {month: "short", day: "numeric"})}</p>
                    
//                     <button 
//                       onClick={() => navigate(`/cover-letter-preview/${item._id}`)} 
//                       className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2.5 mt-4 bg-gray-100 text-gray-800 rounded-xl font-semibold group-hover:bg-[#0A66C2] group-hover:text-white transition"
//                     >
//                       View Letter <ArrowRight size={16}/>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
// export default CoverLetterDashboard;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Plus, FileText, ArrowRight, Eye, Pencil, Trash2, Loader2, Search, Download } from "lucide-react";
import Navbar from "../components/common/Navbar";

const CoverLetterDashboard = () => {
  const navigate = useNavigate();
  const [coverLetters, setCoverLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    const fetchCoverLetters = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/api/v1/coverletter/getall", { withCredentials: true });
        setCoverLetters(res.data.allCoverLetters || []);
      } catch (error) {
        toast.error("Failed to fetch cover letters");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoverLetters();
  }, []);    

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm("Delete this cover letter?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/v1/coverletter/delete/${id}`, { withCredentials: true });
      setCoverLetters((prev) => prev.filter((cl) => cl._id !== id));
      toast.success("Deleted");
    } catch (error) {
      toast.error("Failed to delete");
    }
  };

  // PDF DOWNLOAD
  const handlePDFDownload = async (id, e) => {
    e.stopPropagation();
    try {
      setDownloadingId(id);
      const response = await axios.get(
        `http://localhost:5000/api/v1/coverletter/pdf/${id}`,
        { withCredentials: true, responseType: "blob" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `cover-letter-${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("PDF Downloaded");
    } catch (error) {
      console.error("PDF download error:", error);
      toast.error(error.response?.data?.message || "Failed to download PDF");
    } finally {
      setDownloadingId(null);
    }
  };

  const filteredLetters = coverLetters.filter(cl => 
    cl.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cl.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cl.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#F7F9FC] to-white py-6 sm:py-10">
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Cover Letters</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Land your next role with a tailored letter</p>
            <button 
              onClick={() => navigate("/create-cover-letter")} 
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-[#004182] transition"
            >
              <Plus size={18} /> Create New
            </button>
          </div>

          {/* SEARCH */}
          {coverLetters.length > 0 && (
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-3 text-gray-400"/>
                <input 
                  type="text"
                  placeholder="Search by company or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0A66C2] outline-none"
                />
              </div>
            </div>
          )}

          {/* LOADING */}
          {isLoading && (
            <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#0A66C2]" size={32}/></div>
          )}

          {/* EMPTY STATE */}
          {!isLoading && filteredLetters.length === 0 && (
            <div className="bg-white rounded-3xl border-gray-200 shadow-sm p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-[#0A66C2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={32} className="text-[#0A66C2]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No cover letters yet</h3>
              <p className="text-gray-500 mt-2 mb-6">Create your first one to get started</p>
            </div>
          )}

          {/* CARDS GRID */}
          {!isLoading && filteredLetters.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLetters.map((item) => (
                <div 
                  key={item._id} 
                  className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-gray-100 flex flex-col"
                >
                  {/* HEADER */}
                  <div className="h-28 bg-gradient-to-r from-[#0A66C2] to-[#004182] p-5 flex justify-between items-start">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-[#0A66C2] text-xl shrink-0">
                      {item.companyName?.[0]?.toUpperCase() || "C"}
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button 
                        onClick={(e) => {e.stopPropagation(); navigate(`/create-cover-letter/${item._id}`)}} 
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30"
                        title="Edit"
                      >
                        <Pencil size={16} className="text-white"/>
                      </button>
                      <button 
                        onClick={(e) => handleDelete(item._id, e)} 
                        className="p-2 bg-white/20 rounded-lg hover:bg-red-500/80"
                        title="Delete"
                      >
                        <Trash2 size={16} className="text-white"/>
                      </button>
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-gray-900 truncate">{item.jobTitle || "Job Title"}</h2>
                    <p className="text-gray-500 text-sm">{item.companyName || "Company"}</p>
                    <p className="text-xs text-gray-400 mb-3 mt-2">Updated {new Date(item.updatedAt).toLocaleDateString("en-US", {month: "short", day: "numeric"})}</p>
                    
                    {/* BUTTONS */}
                    <div className="mt-auto grid grid-cols-2 gap-2 mt-4">
                      <button 
                        onClick={() => navigate(`/cover-letter-preview/${item._id}`)} 
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 text-gray-800 rounded-xl font-semibold text-sm hover:bg-gray-200 transition"
                      >
                        <Eye size={15}/> View
                      </button>
                      <button 
                        onClick={(e) => handlePDFDownload(item._id, e)}
                        disabled={downloadingId === item._id}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#0A66C2]/10 text-[#0A66C2] rounded-xl font-semibold text-sm hover:bg-[#0A66C2]/20 transition disabled:opacity-50"
                      >
                        <Download size={15}/> 
                        {downloadingId === item._id? "..." : "PDF"}
                      </button>  
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CoverLetterDashboard;