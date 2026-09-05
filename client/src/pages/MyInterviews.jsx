// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react';

// const MyInterviews = () => {

//   const [interviews, setInterviews] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//   useEffect(() => {
       
//       const fetchInterviews = async() => {

//          const res = await axios.get('http://localhost:5000/api/v1/interview/my-interviews', {
//            withCredentials: true
//          })
 
//          console.log(res.data.Interview);
         
//          setInterviews(res.data.interviews)

//       }                                   

//       fetchInterviews();

//   },)

//   if(loading) {
//      return (
//        <div>
//          Loading interview...
//        </div>
//      )
     
//   }


//   const inProgress = interviews.filter(
//     item => item.interviewStatus === "in-progress"
//   );

//   const completed = interviews.filter(
//     item => item.interviewStatus === "completed"
//   )

//   return (
//     <>
    
//        <h1>All Interviews</h1>

//        <div className=''>
         
//           {interviews.map((interview) => (
//                <div key={interview._id}>
//                   <h2>{interview.role}</h2>
//                   <p>{Interview.company}</p>
//                   <p>{interview.interviewStatus}</p>
//                </div>
//           ))}

//        </div>
    
//     </>
//   )
// }

// export default MyInterviews;




  




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MyInterviews = () => {

//   const [interviews, setInterviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [activeTab, setActiveTab] = useState("all");
  
//   const navigate = useNavigate();



//   useEffect(() => {

//     const fetchInterviews = async () => {

//       try {

//         const res = await axios.get(
//           "http://localhost:5000/api/v1/interview/my-interviews",
//           {
//             withCredentials: true,
//           }
//         );

//         console.log("API response:", res.data);
//         console.log("Interviews:", res.data.interviews);

//         setInterviews(res.data.interviews);

//       } catch (error) {

//         console.error(
//           "Fetch interviews error:",
//           error.response?.data || error
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//     fetchInterviews();

//   }, []);                    




//   if (loading) {
//     return <div>Loading interviews...</div>;
//   }

//   const inProgress = interviews.filter(
//     (item) => item.interviewStatus === "in-progress"
//   );

//   const completed = interviews.filter(
//     (item) => item.interviewStatus === "completed"
//   );


//   const displayedInterviews = 
//    activeTab === "all"
//    ? interviews 
//    : activeTab === "in-progress"
//    ? inProgress
//    : completed


//    const handleContinueInterview = (id) => {
//       navigate(`/start-interview/${id}`)
//    }

//    const handleViewReport = (id) => {
//       navigate(`/interview-report/${id}`)
//    }
                      
//   return (
//     <div>

//       <h1>All Interviews</h1>

//        {displayedInterviews.length === 0 && (
//   <div>
//     <h2>No interviews found</h2>
//     <p>Start a mock interview to see it here.</p>
//   </div>
// )}

//       <p>
//         Total: {interviews.length}
//       </p>

//       <p>
//         In Progress: {inProgress.length}
//       </p>

//       <p>
//         Completed: {completed.length}
//       </p>

//       <div>     

//         {displayedInterviews.map((interview) => (

//           <div key={interview._id}>

//             <h2>{interview.role}</h2>

//             <p>{interview.company}</p>

//             <p>{interview.interviewStatus}</p>

//             {interview.interviewStatus === "in-progress" && (
//               <button onClick={() => handleContinueInterview(interview._id)}>
//                  Continue Interview
//               </button>
//             )}

//             {interview.interviewStatus === "completed" && (
//                <button onClick={() => handleViewReport(interview._id)}>
//                  View Report
//                </button>
//             )}

//           </div>

//         ))}

//       </div>

//       <div className="">
//           <button onClick={() => setActiveTab("all")}
//            className={activeTab === "all" ? "active-class" : ""}
//           >
//             All ({interviews.length})
//           </button>

//           <button onClick={() => setActiveTab("in-progress")}
//           className={activeTab === "in-progress" ? 
//             "active-class" : ""}
//           >
//             In Progress ({inProgress.length})
//           </button>

//           <button onClick={() => setActiveTab("completed")}
//           className={activeTab === "completed" ? "active-class" : ""}>
//               Completed ({completed.length})
//           </button>
//       </div>

//     </div>
//   );
// };

// export default MyInterviews;








// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import {
//   Briefcase,
//   Building2,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   FileText,
//   Play,
//   ArrowRight,
//   Trophy,
//   ClipboardList,
// } from "lucide-react";

// const MyInterviews = () => {
//   const [interviews, setInterviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("all");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInterviews = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:5000/api/v1/interview/my-interviews",
//           {
//             withCredentials: true,
//           }
//         );

//         console.log("API response:", res.data);

//         setInterviews(res.data.interviews || []);
//       } catch (error) {
//         console.error(
//           "Fetch interviews error:",
//           error.response?.data || error
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInterviews();
//   }, []);

//   const inProgress = interviews.filter(
//     (item) => item.interviewStatus === "in-progress"
//   );

//   const completed = interviews.filter(
//     (item) => item.interviewStatus === "completed"
//   );

//   const displayedInterviews =
//     activeTab === "all"
//       ? interviews
//       : activeTab === "in-progress"
//       ? inProgress
//       : completed;

//   const handleContinueInterview = (id) => {
//     navigate(`/start-interview/${id}`);
//   };

//   const handleViewReport = (id) => {
//     navigate(`/interview-report/${id}`);
//   };

//   // -----------------------------
//   // Loading
//   // -----------------------------

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0A66C2] rounded-full animate-spin mx-auto" />

//           <p className="mt-4 text-gray-500 font-medium">
//             Loading your interviews...
//           </p>
//         </div>
//       </div>
//     );
//   }



//   const handleDeleteInterview = async (id) => {
//   try {
//     const res = await axios.delete(
//       `http://localhost:5000/api/v1/interview/delete/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     console.log(res.data);

//     // Remove deleted interview from UI  
//     setInterviews((prev) =>
//       prev.filter((interview) => interview._id !== id)
//     );

//     toast.success("Interview deleted successfully");

//   } catch (error) {
//     console.error("Delete interview error:", error);

//     toast.error(
//       error.response?.data?.message || "Failed to delete interview"
//     );
//   }
// };



//   return (
//     <div className="min-h-screen bg-[#F7F9FC] px-4 py-8 sm:px-6 lg:px-10">

//       <div className="max-w-7xl mx-auto">

//         {/* ================================= */}
//         {/* Header */}
//         {/* ================================= */}

//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

//           <div>
//             <div className="flex items-center gap-3">
//               <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
//                 <ClipboardList
//                   size={22}
//                   className="text-[#0A66C2]"
//                 />
//               </div>

//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   My Interviews
//                 </h1>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Practice, track and improve your interview performance.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={() => navigate("/interview-setup")}
//             className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold transition shadow-sm"
//           >
//             <Play size={18} />
//             Start New Interview
//           </button>

//         </div>

//         {/* ================================= */}
//         {/* Statistics */}
//         {/* ================================= */}

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

//           {/* Total */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

//             <div className="flex items-center justify-between">

//               <div>
//                 <p className="text-sm text-gray-500 font-medium">
//                   Total Interviews
//                 </p>

//                 <p className="text-3xl font-bold text-gray-900 mt-2">
//                   {interviews.length}
//                 </p>
//               </div>

//               <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
//                 <ClipboardList
//                   size={21}
//                   className="text-blue-600"
//                 />
//               </div>

//             </div>

//           </div>

//           {/* In Progress */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

//             <div className="flex items-center justify-between">

//               <div>
//                 <p className="text-sm text-gray-500 font-medium">
//                   In Progress
//                 </p>

//                 <p className="text-3xl font-bold text-gray-900 mt-2">
//                   {inProgress.length}
//                 </p>
//               </div>

//               <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
//                 <Clock3
//                   size={21}
//                   className="text-orange-600"
//                 />
//               </div>

//             </div>

//           </div>

//           {/* Completed */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

//             <div className="flex items-center justify-between">

//               <div>
//                 <p className="text-sm text-gray-500 font-medium">
//                   Completed
//                 </p>

//                 <p className="text-3xl font-bold text-gray-900 mt-2">
//                   {completed.length}
//                 </p>
//               </div>

//               <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
//                 <CheckCircle2
//                   size={21}
//                   className="text-green-600"
//                 />
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* ================================= */}
//         {/* Tabs */}
//         {/* ================================= */}

//         <div className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm mb-6">

//           <div className="flex flex-wrap gap-2">

//             <button
//               onClick={() => setActiveTab("all")}
//               className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
//                 activeTab === "all"
//                   ? "bg-[#0A66C2] text-white shadow-sm"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               All
//               <span className="ml-2 opacity-80">
//                 {interviews.length}
//               </span>
//             </button>

//             <button
//               onClick={() => setActiveTab("in-progress")}
//               className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
//                 activeTab === "in-progress"
//                   ? "bg-[#0A66C2] text-white shadow-sm"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               In Progress
//               <span className="ml-2 opacity-80">
//                 {inProgress.length}
//               </span>
//             </button>

//             <button
//               onClick={() => setActiveTab("completed")}
//               className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
//                 activeTab === "completed"
//                   ? "bg-[#0A66C2] text-white shadow-sm"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               Completed
//               <span className="ml-2 opacity-80">
//                 {completed.length}
//               </span>
//             </button>

//           </div>

//         </div>

//         {/* ================================= */}
//         {/* Empty State */}
//         {/* ================================= */}

//         {displayedInterviews.length === 0 && (

//           <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-12 text-center">

//             <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
//               <FileText
//                 size={28}
//                 className="text-gray-400"
//               />
//             </div>

//             <h2 className="text-xl font-bold text-gray-900 mt-5">
//               No interviews found
//             </h2>

//             <p className="text-gray-500 mt-2 max-w-md mx-auto">
//               {activeTab === "all"
//                 ? "You haven't created any mock interviews yet."
//                 : activeTab === "in-progress"
//                 ? "You don't have any interviews in progress."
//                 : "You haven't completed any interviews yet."}
//             </p>

//             {activeTab === "all" && (
//               <button
//                 onClick={() => navigate("/interview-setup")}
//                 className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold transition"
//               >
//                 <Play size={17} />
//                 Start Your First Interview
//               </button>
//             )}

//           </div>

//         )}

//         {/* ================================= */}
//         {/* Interview Cards */}
//         {/* ================================= */}

//         {displayedInterviews.length > 0 && (

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

//             {displayedInterviews.map((interview) => {

//               const isCompleted =
//                 interview.interviewStatus === "completed";

//               const progress =
//                 interview.questionsCount > 0
//                   ? Math.min(
//                       Math.round(
//                         (interview.currentQuestion /
//                           interview.questionsCount) *
//                           100
//                       ),
//                       100
//                     )
//                   : 0;

//               return (

//                 <div
//                   key={interview._id}
//                   className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
//                 >

//                   {/* Card Top */}
//                   <div className="p-6">

//                     <div className="flex items-start justify-between gap-4">

//                       <div className="flex items-start gap-4">

//                         <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center shrink-0">
//                           <Briefcase
//                             size={22}
//                             className="text-[#0A66C2]"
//                           />
//                         </div>

//                         <div>

//                           <h2 className="text-lg font-bold text-gray-900">
//                             {interview.role}
//                           </h2>

//                           <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">
//                             <Building2 size={15} />
//                             {interview.company || "Personal Practice"}
//                           </div>

//                         </div>

//                       </div>

//                       {/* Status */}
//                       <span
//                         className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold ${
//                           isCompleted
//                             ? "bg-green-50 text-green-700"
//                             : "bg-orange-50 text-orange-700"
//                         }`}
//                       >    
//                         {isCompleted
//                           ? "Completed"
//                           : "In Progress"}
//                       </span>

//                     </div>

//                     {/* Details */}
//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">

//                       <div className="bg-gray-50 rounded-xl p-3">
//                         <p className="text-xs text-gray-400">
//                           Type
//                         </p>
//                         <p className="text-sm font-semibold text-gray-800 capitalize mt-1">
//                           {interview.interviewType}
//                         </p>
//                       </div>

//                       <div className="bg-gray-50 rounded-xl p-3">
//                         <p className="text-xs text-gray-400">
//                           Questions
//                         </p>
//                         <p className="text-sm font-semibold text-gray-800 mt-1">
//                           {interview.questionsCount}
//                         </p>
//                       </div>

//                       <div className="bg-gray-50 rounded-xl p-3">
//                         <p className="text-xs text-gray-400">
//                           Duration
//                         </p>
//                         <p className="text-sm font-semibold text-gray-800 mt-1">
//                           {interview.duration} min
//                         </p>
//                       </div>

//                       <div className="bg-gray-50 rounded-xl p-3">
//                         <p className="text-xs text-gray-400">
//                           Experience
//                         </p>
//                         <p className="text-sm font-semibold text-gray-800 capitalize mt-1">
//                           {interview.experience}
//                         </p>
//                       </div>

//                       <div onClick={() => handleDeleteInterview(interview._id)} className="">
//                          delete
//                       </div>

//                     </div>

//                     {/* Progress */}
//                     {!isCompleted && (

//                       <div className="mt-6">

//                         <div className="flex items-center justify-between mb-2">

//                           <span className="text-sm font-semibold text-gray-700">
//                             Progress
//                           </span>

//                           <span className="text-sm font-bold text-[#0A66C2]">
//                             {progress}%
//                           </span>

//                         </div>

//                         <div className="h-2 bg-gray-100 rounded-full overflow-hidden">

//                           <div
//                             className="h-full bg-[#0A66C2] rounded-full transition-all"
//                             style={{
//                               width: `${progress}%`,
//                             }}
//                           />

//                         </div>

//                         <p className="text-xs text-gray-400 mt-2">
//                           Question {Math.min(
//                             interview.currentQuestion + 1,
//                             interview.questionsCount
//                           )} of {interview.questionsCount}
//                         </p>

//                       </div>

//                     )}

//                     {/* Completed Score */}
//                     {isCompleted && (

//                       <div className="mt-6 flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3">

//                         <div className="flex items-center gap-2">

//                           <Trophy
//                             size={18}
//                             className="text-green-600"
//                           />

//                           <span className="text-sm font-semibold text-green-800">
//                             Final Score
//                           </span>

//                         </div>

//                         <span className="text-lg font-bold text-green-700">
//                           {interview.finalScore ?? 0}/100
//                         </span>

//                       </div>

//                     )}

//                   </div>

//                   {/* Card Footer */}
//                   <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">

//                     {isCompleted ? (

//                       <button
//                         onClick={() =>
//                           handleViewReport(interview._id)
//                         }
//                         className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2] text-gray-700 font-semibold transition"
//                       >
//                         <FileText size={17} />
//                         View Interview Report
//                         <ArrowRight size={16} />
//                       </button>

//                     ) : (

//                       <button
//                         onClick={() =>
//                           handleContinueInterview(interview._id)
//                         }
//                         className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold transition"
//                       >
//                         <Play size={17} />
//                         Continue Interview
//                         <ArrowRight size={16} />
//                       </button>

//                     )}

//                   </div>

//                 </div>

//               );
//             })}

//           </div>

//         )}

//       </div>

//     </div>
//   );
// };

// export default MyInterviews;





import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Play,
  ArrowRight,
  Trophy,
  ClipboardList,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

const MyInterviews = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  const navigate = useNavigate();

  // ----------------------------------
  // Fetch interviews
  // ----------------------------------

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/interview/my-interviews",
          {
            withCredentials: true,
          }
        );

        setInterviews(res.data.interviews || []);
      } catch (error) {
        console.error("Fetch interviews error:", error);

        toast.error(
          error.response?.data?.message ||
            "Failed to load interviews"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  // ----------------------------------
  // Filter interviews
  // ----------------------------------

  const inProgress = interviews.filter(
    (item) => item.interviewStatus === "in-progress"
  );

  const completed = interviews.filter(
    (item) => item.interviewStatus === "completed"
  );

  const displayedInterviews =
    activeTab === "all"
      ? interviews
      : activeTab === "in-progress"
      ? inProgress
      : completed;

  // ----------------------------------
  // Navigation
  // ----------------------------------

  const handleContinueInterview = (id) => {
    navigate(`/start-interview/${id}`);
  };

  const handleViewReport = (id) => {
    navigate(`/interview-report/${id}`);
  };

  // ----------------------------------
  // Delete
  // ----------------------------------

  const handleDeleteInterview = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this interview?"
    );

    if (!confirmed) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/interview/delete/${id}`,
        {
          withCredentials: true,
        }
      );

      setInterviews((prev) =>
        prev.filter((interview) => interview._id !== id)
      );

      toast.success("Interview deleted successfully");
    } catch (error) {
      console.error("Delete interview error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete interview"
      );
    }
  };

  // ----------------------------------
  // Loading
  // ----------------------------------

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#0A66C2] rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-sm text-gray-500">
            Loading your interviews...
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------
  // UI
  // ----------------------------------

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-4 py-8 sm:px-6 lg:px-10">

      <div className="max-w-6xl mx-auto">

        {/* ========================= */}
        {/* Header */}
        {/* ========================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">

          <div>
            <p className="text-sm font-semibold text-[#0A66C2]">
              INTERVIEW PRACTICE
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              My Interviews
            </h1>

            <p className="text-gray-500 mt-2">
              Track your practice sessions and continue where you stopped.
            </p>
          </div>

          <button
            onClick={() => navigate("/interview-setup")}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold transition"
          >
            <Play size={18} />
            New Interview
          </button>

        </div>

        {/* ========================= */}
        {/* Statistics */}
        {/* ========================= */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">

          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {interviews.length}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                <ClipboardList
                  size={21}
                  className="text-blue-600"
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  In Progress
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {inProgress.length}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                <Clock3
                  size={21}
                  className="text-orange-600"
                />
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Completed
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {completed.length}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle2
                  size={21}
                  className="text-green-600"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================= */}
        {/* Tabs */}
        {/* ========================= */}

        <div className="bg-white rounded-2xl border border-gray-100 p-2 mb-5">

          <div className="flex gap-2">

            {[
              {
                key: "all",
                label: "All",
                count: interviews.length,
              },
              {
                key: "in-progress",
                label: "In Progress",
                count: inProgress.length,
              },
              {
                key: "completed",
                label: "Completed",
                count: completed.length,
              },
            ].map((tab) => (

              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}

                <span
                  className={`ml-2 ${
                    activeTab === tab.key
                      ? "text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>

            ))}

          </div>

        </div>

        {/* ========================= */}
        {/* Empty State */}
        {/* ========================= */}

        {displayedInterviews.length === 0 && (

          <div className="bg-white rounded-2xl border border-gray-100 p-14 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center">
              <FileText
                size={28}
                className="text-gray-400"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-5">
              No interviews here
            </h2>

            <p className="text-gray-500 mt-2">
              Start a mock interview to begin practicing.
            </p>

            {activeTab === "all" && (
              <button
                onClick={() => navigate("/interview-setup")}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-[#004182]"
              >
                <Play size={17} />
                Start Interview
              </button>
            )}

          </div>

        )}

        {/* ========================= */}
        {/* Interview List */}
        {/* ========================= */}

        <div className="space-y-3">

          {displayedInterviews.map((interview) => {

            const isCompleted =
              interview.interviewStatus === "completed";

            const progress =
              interview.questionsCount > 0
                ? Math.min(
                    Math.round(
                      (interview.currentQuestion /
                        interview.questionsCount) *
                        100
                    ),
                    100
                  )
                : 0;

            return (

              <div
                key={interview._id}
                className="bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition"
              >

                <div className="p-5">

                  {/* Top Row */}

                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                    {/* Interview Info */}

                    <div className="flex items-center gap-4 flex-1 min-w-0">

                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
                        <Briefcase
                          size={21}
                          className="text-[#0A66C2]"
                        />
                      </div>

                      <div className="min-w-0">

                        <h2 className="font-bold text-gray-900 truncate">
                          {interview.role}
                        </h2>

                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">

                          <span className="flex items-center gap-1">
                            <Building2 size={14} />
                            {interview.company ||
                              "Personal Practice"}
                          </span>

                          <span className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {new Date(
                              interview.createdAt
                            ).toLocaleDateString()}
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* Status */}

                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
                          isCompleted
                            ? "bg-green-50 text-green-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >

                        {isCompleted ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <Clock3 size={14} />
                        )}

                        {isCompleted
                          ? "Completed"
                          : "In Progress"}

                      </span>
                    </div>

                    {/* Meta */}

                    <div className="flex items-center gap-6 text-sm">

                      <div>
                        <p className="text-xs text-gray-400">
                          Type
                        </p>

                        <p className="font-semibold text-gray-800 capitalize mt-1">
                          {interview.interviewType}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">
                          Questions
                        </p>

                        <p className="font-semibold text-gray-800 mt-1">
                          {interview.questionsCount}
                        </p>
                      </div>

                    </div>

                    {/* Action */}

                    <div className="flex items-center gap-2">

                      {isCompleted ? (

                        <button
                          onClick={() =>
                            handleViewReport(interview._id)
                          }
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2] font-semibold text-sm transition"
                        >
                          <FileText size={16} />
                          Report
                        </button>

                      ) : (

                        <button
                          onClick={() =>
                            handleContinueInterview(
                              interview._id
                            )
                          }
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition"
                        >
                          <Play size={16} />
                          Continue
                        </button>

                      )}

                      <button
                        onClick={() =>
                          handleDeleteInterview(interview._id)
                        }
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                        title="Delete interview"
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                  </div>

                  {/* Progress / Score */}

                  {!isCompleted ? (

                    <div className="mt-5 pt-5 border-t border-gray-100">

                      <div className="flex items-center justify-between mb-2">

                        <span className="text-xs font-semibold text-gray-500">
                          Interview progress
                        </span>

                        <span className="text-xs font-bold text-[#0A66C2]">
                          {progress}%
                        </span>

                      </div>

                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-[#0A66C2] rounded-full transition-all"
                          style={{
                            width: `${progress}%`,
                          }}
                        />

                      </div>

                      <p className="text-xs text-gray-400 mt-2">
                        Question{" "}
                        {Math.min(
                          interview.currentQuestion + 1,
                          interview.questionsCount
                        )}{" "}
                        of {interview.questionsCount}
                      </p>

                    </div>

                  ) : (

                    <div className="mt-5 pt-5 border-t border-gray-100">

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">
                          <Trophy
                            size={18}
                            className="text-yellow-500"
                          />

                          <span className="text-sm font-semibold text-gray-700">
                            Final Score
                          </span>
                        </div>

                        <span className="text-xl font-bold text-gray-900">
                          {interview.finalScore ?? 0}
                          <span className="text-sm text-gray-400">
                            /100
                          </span>
                        </span>

                      </div>

                    </div>

                  )}

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>
  );
};

export default MyInterviews;
