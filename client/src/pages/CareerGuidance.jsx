// import React, { useMemo, useState } from "react";
// import {
//   Search,
//   ArrowRight,
//   Briefcase,
//   Code2,
//   FileText,
//   Brain,
//   TrendingUp,
//   GraduationCap,
//   Users,
//   ChevronRight,
// } from "lucide-react";

// const CareerGuidance = () => {
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Career Paths",
//     "Skills",
//     "Interview",
//     "Resume",
//     "Growth",
//   ];

//   const guides = [
//     {
//       title: "How to Become a Full Stack Developer",
//       description:
//         "Learn the skills, technologies, projects, and roadmap needed to start a career as a full stack developer.",
//       category: "Career Paths",
//       icon: <Code2 size={22} />,
//       readTime: "8 min read",
//     },
//     {
//       title: "Frontend Developer Career Guide",
//       description:
//         "Understand what frontend developers do and what you need to learn to get your first frontend job.",
//       category: "Career Paths",
//       icon: <Code2 size={22} />,
//       readTime: "7 min read",
//     },
//     {
//       title: "Backend Developer Roadmap",
//       description:
//         "A practical roadmap covering APIs, databases, authentication, system design, and backend development.",
//       category: "Skills",
//       icon: <Briefcase size={22} />,
//       readTime: "10 min read",
//     },
//     {
//       title: "How to Prepare for Technical Interviews",
//       description:
//         "Learn how to prepare for coding rounds, technical interviews, projects, and problem-solving questions.",
//       category: "Interview",
//       icon: <Brain size={22} />,
//       readTime: "9 min read",
//     },
//     {
//       title: "How to Build a Strong Developer Resume",
//       description:
//         "Learn how to structure your resume, highlight projects, write strong bullet points, and avoid common mistakes.",
//       category: "Resume",
//       icon: <FileText size={22} />,
//       readTime: "6 min read",
//     },
//     {
//       title: "How to Write a Great Cover Letter",
//       description:
//         "Understand what recruiters expect from a cover letter and how to create one for a specific job.",
//       category: "Resume",
//       icon: <FileText size={22} />,
//       readTime: "5 min read",
//     },
//     {
//       title: "Skills Every Software Developer Should Learn",
//       description:
//         "Explore the technical and professional skills that can help you become a stronger software developer.",
//       category: "Skills",
//       icon: <GraduationCap size={22} />,
//       readTime: "8 min read",
//     },
//     {
//       title: "How to Get Your First Software Job",
//       description:
//         "A practical guide for students and freshers preparing for internships and their first developer role.",
//       category: "Growth",
//       icon: <TrendingUp size={22} />,
//       readTime: "9 min read",
//     },
//     {
//       title: "How to Grow From Junior to Senior Developer",
//       description:
//         "Understand the skills, responsibilities, and experience required to progress in a software engineering career.",
//       category: "Growth",
//       icon: <TrendingUp size={22} />,
//       readTime: "10 min read",
//     },
//   ];

//   const filteredGuides = useMemo(() => {
//     return guides.filter((guide) => {
//       const matchesCategory =
//         activeCategory === "All" ||
//         guide.category === activeCategory;

//       const matchesSearch =
//         guide.title
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         guide.description
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });
//   }, [search, activeCategory]);

//   return (
//     <div className="min-h-screen bg-[#F7F9FC]">

//       {/* HERO */}
//       <section className="bg-white border-b border-gray-200">
//         <div className="max-w-6xl mx-auto px-6 py-14">

//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] text-sm font-medium mb-5">
//               <GraduationCap size={16} />
//               Career Guides
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Build a career you're{" "}
//               <span className="text-[#0A66C2]">
//                 proud of
//               </span>
//             </h1>

//             <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
//               Practical career guides to help you choose the
//               right path, build valuable skills, prepare for
//               interviews, and land your next opportunity.
//             </p>
//           </div>

//           {/* SEARCH */}
//           <div className="relative max-w-2xl mt-8">
//             <Search
//               size={20}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search career guides..."
//               className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-[#F7F9FC] outline-none focus:bg-white focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 transition"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="max-w-6xl mx-auto px-6 pt-8">
//         <div className="flex gap-2 overflow-x-auto pb-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
//                 activeCategory === category
//                   ? "bg-[#0A66C2] text-white"
//                   : "bg-white text-gray-600 border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* FEATURED */}
//       {activeCategory === "All" && !search && (
//         <section className="max-w-6xl mx-auto px-6 pt-8">

//           <div className="bg-[#0A66C2] rounded-2xl p-7 md:p-9 text-white">

//             <div className="max-w-3xl">

//               <div className="flex items-center gap-2 text-blue-100 text-sm font-medium mb-3">
//                 <TrendingUp size={17} />
//                 Popular Guide
//               </div>

//               <h2 className="text-2xl md:text-3xl font-bold">
//                 Your Roadmap to a Software Developer Career
//               </h2>

//               <p className="mt-3 text-blue-100 leading-relaxed">
//                 From learning programming fundamentals to
//                 building projects and preparing for interviews,
//                 understand what you should focus on at every
//                 stage of your journey.
//               </p>

//               <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A66C2] rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
//                 Read Guide
//                 <ArrowRight size={17} />
//               </button>

//             </div>
//           </div>

//         </section>
//       )}

//       {/* GUIDES */}
//       <section className="max-w-6xl mx-auto px-6 py-10">

//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">
//               {search
//                 ? "Search Results"
//                 : activeCategory === "All"
//                 ? "Career Guides"
//                 : activeCategory}
//             </h2>

//             <p className="text-sm text-gray-500 mt-1">
//               {filteredGuides.length} guides available
//             </p>
//           </div>
//         </div>

//         {filteredGuides.length === 0 ? (
//           <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
//             <Search
//               size={35}
//               className="mx-auto text-gray-300"
//             />

//             <h3 className="mt-4 font-semibold text-gray-900">
//               No guides found
//             </h3>

//             <p className="mt-1 text-sm text-gray-500">
//               Try searching for another career topic.
//             </p>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

//             {filteredGuides.map((guide, index) => (
//               <article
//                 key={index}
//                 className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0A66C2]/40 hover:shadow-md transition"
//               >

//                 {/* ICON */}
//                 <div className="w-11 h-11 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">
//                   {guide.icon}
//                 </div>

//                 {/* CATEGORY */}
//                 <div className="mt-5 flex items-center justify-between">

//                   <span className="text-xs font-semibold text-[#0A66C2] uppercase tracking-wide">
//                     {guide.category}
//                   </span>

//                   <span className="text-xs text-gray-400">
//                     {guide.readTime}
//                   </span>

//                 </div>

//                 {/* TITLE */}
//                 <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug group-hover:text-[#0A66C2] transition">
//                   {guide.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="mt-3 text-sm text-gray-600 leading-relaxed">
//                   {guide.description}
//                 </p>

//                 {/* READ */}
//                 <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A66C2]">
//                   Read guide
//                   <ChevronRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition"
//                   />
//                 </button>

//               </article>
//             ))}

//           </div>
//         )}
//       </section>

//       {/* BOTTOM CTA */}
//       <section className="max-w-6xl mx-auto px-6 pb-14">

//         <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

//             <div className="flex items-start gap-4">

//               <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0">
//                 <Users size={22} />
//               </div>

//               <div>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Ready to start your job search?
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-600">
//                   Create your resume, generate a cover letter,
//                   and prepare for your next interview.
//                 </p>
//               </div>

//             </div>

//             <button
//               onClick={() =>
//                 window.location.href = "/resumes"
//               }
//               className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-lg text-sm font-semibold hover:bg-[#004182] transition shrink-0"
//             >
//               Build Your Resume
//               <ArrowRight size={17} />
//             </button>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default CareerGuidance;









// import React, { useEffect, useRef, useState } from "react";
// import {
//   Bot,
//   Send,
//   Sparkles,
//   User,
//   BriefcaseBusiness,
//   FileText,
//   Code2,
//   GraduationCap,
//   ArrowUp,
// } from "lucide-react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const API_URL = "http://localhost:5000/api/v1/career-advisor";

// const CareerGuidance = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const messagesEndRef = useRef(null);

//   // =====================================================
//   // DEFAULT WELCOME MESSAGE
//   // =====================================================

//   const welcomeMessage = {
//     id: "welcome",
//     role: "assistant",
//     content:
//       "Hi! I'm your AI Career Advisor. I can help you with career planning, interview preparation, resumes, skills, learning roadmaps, and job search strategies.",
//   };

//   // =====================================================
//   // SUGGESTIONS
//   // =====================================================

//   const suggestions = [
//     {
//       icon: <BriefcaseBusiness size={17} />,
//       title: "Career Roadmap",
//       text: "Create a roadmap for becoming a software developer",
//     },
//     {
//       icon: <FileText size={17} />,
//       title: "Resume Help",
//       text: "How can I improve my resume?",
//     },
//     {
//       icon: <Code2 size={17} />,
//       title: "Skills",
//       text: "What skills should I learn for a full-stack role?",
//     },
//     {
//       icon: <GraduationCap size={17} />,
//       title: "Interview Prep",
//       text: "How should I prepare for technical interviews?",
//     },
//   ];

//   // =====================================================
//   // FETCH CHAT HISTORY
//   // =====================================================

//   useEffect(() => {
//     const fetchCareerChats = async () => {
//       try {
//         setIsLoading(true);

//         const res = await axios.get(`${API_URL}/message`, {
//           withCredentials: true,
//         });

//         if (res.data.success) {
//           const chats = res.data.chats || [];

//           setMessages(
//             chats.length > 0
//               ? chats
//               : [welcomeMessage]
//           );
//         }
//       } catch (error) {
//         console.error(
//           "Error fetching career chats:",
//           error
//         );

//         // If backend isn't ready yet, still show UI
//         setMessages([welcomeMessage]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCareerChats();
//   }, []);

//   // =====================================================
//   // AUTO SCROLL
//   // =====================================================

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, isTyping]);

//   // =====================================================
//   // SEND MESSAGE
//   // =====================================================

//   const handleSend = async (customMessage = null) => {
//     const text = customMessage ?? message;

//     if (!text.trim() || isTyping) return;

//     const userMessage = {
//       id: `user-${Date.now()}`,
//       role: "user",
//       content: text.trim(),
//     };

//     // Immediately show user message
//     setMessages((prev) => [
//       ...prev,
//       userMessage,
//     ]);

//     setMessage("");
//     setIsTyping(true);

//     try {         
//       // =================================================
//       // SAVE USER MESSAGE
//       // =================================================

//       const res = await axios.post(
//         `${API_URL}/message`,
//         {
//           message: text.trim(),
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         const assistantMessage =
//           res.data.message;

//         setMessages((prev) => [
//           ...prev,
//           {
//             id:
//               assistantMessage._id ||
//               `assistant-${Date.now()}`,
//             role: "assistant",
//             content:
//               assistantMessage.content,
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error(
//         "Error sending career message:",
//         error
//       );

//       toast.error(
//         error.response?.data?.message ||
//           "Unable to send message"
//       );

//       // Remove user message if saving failed
//       setMessages((prev) =>
//         prev.filter(
//           (msg) => msg.id !== userMessage.id
//         )
//       );
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
//         <div className="flex flex-col items-center gap-3">
//           <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center animate-pulse">
//             <Bot size={20} />
//           </div>

//           <p className="text-sm text-gray-500">
//             Loading Career Advisor...
//           </p>
//         </div>                 
//       </div>
//     );
//   }

//   // =====================================================
//   // UI
//   // =====================================================

//   return (
//     <div className="min-h-screen bg-[#F7F9FC]">

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">

//           <div className="flex items-center gap-3">

//             <div className="relative">
//               <div className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-sm">
//                 <Sparkles size={21} />
//               </div>

//               <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//             </div>

//             <div>
//               <h1 className="text-[16px] font-semibold text-gray-900">
//                 AI Career Advisor
//               </h1>

//               <div className="flex items-center gap-1.5 mt-0.5">
//                 <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />

//                 <p className="text-xs text-gray-500">
//                   Online · Ready to help
//                 </p>
//               </div>
//             </div>

//           </div>

//           <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
//             <Bot
//               size={14}
//               className="text-[#0A66C2]"
//             />

//             <span className="text-xs font-medium text-[#0A66C2]">
//               AI Assistant
//             </span>
//           </div>

//         </div>
//       </header>

//       {/* =================================================
//           MAIN
//       ================================================= */}

//       <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

//         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

//           <div className="h-[calc(100vh-220px)] min-h-[580px] flex flex-col">

//             {/* =================================================
//                 MESSAGES
//             ================================================= */}

//             <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">

//               {/* ================= WELCOME ================= */}

//               {messages.length === 1 &&
//                 messages[0].id === "welcome" && (
//                   <div className="max-w-2xl mx-auto mb-10 text-center">

//                     <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-blue-50 text-[#0A66C2] flex items-center justify-center">
//                       <Sparkles size={26} />
//                     </div>

//                     <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                       Build your career with AI
//                     </h2>

//                     <p className="mt-2 text-sm sm:text-[15px] text-gray-500 leading-6">
//                       Get personalized guidance for
//                       your career, resume, interviews,
//                       skills and learning roadmap.
//                     </p>

//                   </div>
//                 )}

//               {/* ================= MESSAGE LIST ================= */}

//               <div className="max-w-3xl mx-auto space-y-7">

//                 {messages.map((msg) => {

//                   // Don't display welcome as normal chat
//                   // message
//                   if (msg.id === "welcome") {
//                     return null;
//                   }

//                   return (
//                     <div
//                       key={msg.id}
//                       className={`flex gap-3 animate-[fadeIn_0.25s_ease-out] ${
//                         msg.role === "user"
//                           ? "justify-end"
//                           : "justify-start"
//                       }`}
//                     >

//                       {/* AI AVATAR */}

//                       {msg.role ===
//                         "assistant" && (
//                         <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shrink-0 mt-1">
//                           <Bot size={16} />
//                         </div>
//                       )}

//                       {/* MESSAGE */}

//                       <div
//                         className={`max-w-[80%] sm:max-w-[70%] ${
//                           msg.role === "user"
//                             ? "order-1"
//                             : ""
//                         }`}
//                       >

//                         <div
//                           className={`px-4 py-3 text-[14px] leading-6 whitespace-pre-wrap ${
//                             msg.role === "user"
//                               ? "bg-[#0A66C2] text-white rounded-2xl rounded-br-md"
//                               : "bg-[#F4F6F8] text-gray-800 rounded-2xl rounded-bl-md"
//                           }`}
//                         >
//                           {msg.content}
//                         </div>

//                         <p
//                           className={`text-[10px] text-gray-400 mt-1.5 ${
//                             msg.role === "user"
//                               ? "text-right"
//                               : "text-left"
//                           }`}
//                         >
//                           {msg.role === "user"
//                             ? "You"
//                             : "AI Career Advisor"}
//                         </p>

//                       </div>

//                       {/* USER AVATAR */}

//                       {msg.role === "user" && (
//                         <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center shrink-0 mt-1 order-2">
//                           <User size={16} />
//                         </div>
//                       )}

//                     </div>
//                   );
//                 })}

//                 {/* =================================================
//                     TYPING INDICATOR
//                 ================================================= */}

//                 {isTyping && (
//                   <div className="flex items-start gap-3">

//                     <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
//                       <Bot size={16} />
//                     </div>

//                     <div className="bg-[#F4F6F8] rounded-2xl rounded-bl-md px-4 py-3">

//                       <div className="flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />

//                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]" />

//                         <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]" />
//                       </div>

//                     </div>

//                   </div>
//                 )}

//                 <div ref={messagesEndRef} />

//               </div>

//               {/* =================================================
//                   SUGGESTIONS
//               ================================================= */}

//               {messages.length === 1 &&
//                 messages[0].id === "welcome" && (
//                   <div className="max-w-3xl mx-auto mt-8">

//                     <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
//                       Try asking
//                     </p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

//                       {suggestions.map(
//                         (item, index) => (
//                           <button
//                             key={index}
//                             onClick={() =>
//                               handleSend(
//                                 item.text
//                               )
//                             }
//                             disabled={isTyping}
//                             className="group text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-[#0A66C2]/40 hover:bg-blue-50/40 transition-all duration-200 disabled:opacity-50"
//                           >

//                             <div className="flex items-start gap-3">

//                               <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:bg-white transition">
//                                 {item.icon}
//                               </div>

//                               <div>
//                                 <p className="text-sm font-semibold text-gray-800">
//                                   {item.title}
//                                 </p>

//                                 <p className="text-xs text-gray-500 mt-1 leading-5">
//                                   {item.text}
//                                 </p>
//                               </div>

//                             </div>

//                           </button>
//                         )
//                       )}

//                     </div>

//                   </div>
//                 )}

//             </div>

//             {/* =================================================
//                 INPUT
//             ================================================= */}

//             <div className="border-t border-gray-200 bg-white p-4 sm:p-5">

//               <div className="max-w-3xl mx-auto">

//                 <div className="relative flex items-end gap-2 p-2 rounded-2xl border border-gray-200 bg-[#F8FAFC] focus-within:border-[#0A66C2] focus-within:ring-2 focus-within:ring-[#0A66C2]/10 transition">

//                   <textarea
//                     rows={1}
//                     value={message}
//                     onChange={(e) =>
//                       setMessage(
//                         e.target.value
//                       )
//                     }
//                     onKeyDown={(e) => {
//                       if (
//                         e.key === "Enter" &&
//                         !e.shiftKey
//                       ) {
//                         e.preventDefault();
//                         handleSend();
//                       }
//                     }}
//                     placeholder="Ask anything about your career..."
//                     className="flex-1 bg-transparent resize-none outline-none px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 max-h-32"
//                   />

//                   <button
//                     onClick={() =>
//                       handleSend()
//                     }
//                     disabled={
//                       !message.trim() ||
//                       isTyping
//                     }
//                     className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0 hover:bg-[#004182] transition disabled:opacity-40 disabled:cursor-not-allowed"
//                   >
//                     <ArrowUp size={19} />
//                   </button>

//                 </div>

//                 <p className="text-[10px] text-gray-400 text-center mt-2">
//                   AI Career Advisor can make
//                   mistakes. Verify important
//                   career information.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </main>

//       {/* =================================================
//           ANIMATION
//       ================================================= */}

//       <style>
//         {`
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: translateY(5px);
//             }

//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>

//     </div>
//   );
// };

// export default CareerGuidance;








import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Bot,
  Send,
  Sparkles,
  User,
  BriefcaseBusiness,
  FileText,
  Code2,
  GraduationCap,
  ArrowUp,
  Plus,
  MessageSquare,
  Trash2,
  ChevronRight,
} from "lucide-react";

import axios from "axios";
import { toast } from "react-toastify";

const API_URL =
  "http://localhost:5000/api/v1/career-advisor";

// =====================================================
// WELCOME MESSAGE
// =====================================================

const welcomeMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm your AI Career Advisor. I can help you plan your career, improve your resume, prepare for interviews, choose the right skills, and build a practical learning roadmap.",
};

// =====================================================
// SUGGESTIONS
// =====================================================

const suggestions = [
  {
    icon: <BriefcaseBusiness size={18} />,
    title: "Career Roadmap",
    description:
      "Create a roadmap for becoming a software developer",
  },

  {
    icon: <FileText size={18} />,
    title: "Resume Review",
    description:
      "How can I improve my resume for software jobs?",
  },

  {
    icon: <Code2 size={18} />,
    title: "Skills to Learn",
    description:
      "What skills should I learn for a full-stack role?",
  },

  {
    icon: <GraduationCap size={18} />,
    title: "Interview Preparation",
    description:
      "How should I prepare for technical interviews?",
  },
];

// =====================================================
// COMPONENT
// =====================================================

const CareerGuidance = () => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [isTyping, setIsTyping] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(true);

  const [isStartingNewChat, setIsStartingNewChat] =
    useState(false);

  const messagesEndRef = useRef(null);

  const textareaRef = useRef(null);

  // =====================================================
  // FETCH CHAT HISTORY
  // =====================================================

  useEffect(() => {
    const fetchCareerChats = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(
          `${API_URL}/message`,
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          const chats = res.data.chats || [];

          setMessages(
            chats.length > 0
              ? chats
              : [welcomeMessage]
          );
        } else {
          setMessages([welcomeMessage]);
        }
      } catch (error) {
        console.error(
          "Error fetching career chats:",
          error
        );

        // Keep UI usable even if history
        // endpoint is unavailable.
        setMessages([welcomeMessage]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareerChats();
  }, []);

  // =====================================================
  // AUTO SCROLL
  // =====================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  // =====================================================
  // AUTO RESIZE TEXTAREA
  // =====================================================

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);

    const textarea = e.target;

    textarea.style.height = "auto";

    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      140
    )}px`;
  };

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const handleSend = async (
    customMessage = null
  ) => {
    const text = (
      customMessage ?? message
    ).trim();

    if (!text || isTyping) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };

    // Immediately display user message
    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";
    }

    setIsTyping(true);

    try {
      const res = await axios.post(
        `${API_URL}/message`,
        {
          message: text,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        /*
          Your backend should return:

          {
            success: true,
            message: {
              _id: "...",
              role: "assistant",
              content: "..."
            }
          }
        */

        const assistantMessage =
          res.data.message;

        if (
          !assistantMessage ||
          !assistantMessage.content
        ) {
          throw new Error(
            "Invalid assistant response"
          );
        }

        setMessages((prev) => [
          ...prev,
          {
            id:
              assistantMessage._id ||
              `assistant-${Date.now()}`,

            role: "assistant",

            content:
              assistantMessage.content,
          },
        ]);
      }
    } catch (error) {
      console.error(
        "Error sending career message:",
        error
      );

      // Remove optimistic user message
      setMessages((prev) =>
        prev.filter(
          (msg) =>
            msg.id !== userMessage.id
        )
      );

      toast.error(
        error.response?.data?.message ||
          "Unable to send your message"
      );
    } finally {
      setIsTyping(false);
    }
  };

  // =====================================================
  // NEW CONVERSATION
  // =====================================================

  const handleNewConversation = () => {
    if (isTyping) return;

    setIsStartingNewChat(true);

    setMessages([welcomeMessage]);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";
    }

    setTimeout(() => {
      setIsStartingNewChat(false);
    }, 300);
  };

  // =====================================================
  // ENTER KEY
  // =====================================================

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center px-4">
        <div className="flex flex-col items-center">

          <div className="relative mb-4">

            <div className="w-12 h-12 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse">
              <Sparkles size={22} />
            </div>

          </div>

          <p className="text-sm font-medium text-gray-700">
            Loading Career Advisor
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Preparing your workspace...
          </p>

        </div>
      </div>
    );
  }

  const isWelcome =
    messages.length === 1 &&
    messages[0].id === "welcome";

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-gray-900">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-200">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="h-[68px] flex items-center justify-between">

            {/* BRAND */}

            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-sm">
                  <Sparkles size={19} />
                </div>

                <span className="absolute -right-1 -bottom-1 w-3.5 h-3.5 rounded-full bg-green-500 border-[3px] border-white" />

              </div>

              <div>

                <h1 className="text-[15px] font-bold text-gray-900">
                  AI Career Advisor
                </h1>

                <div className="flex items-center gap-1.5 mt-0.5">

                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />

                  <span className="text-[11px] text-gray-500">
                    Ready to help
                  </span>

                </div>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="flex items-center gap-2">

              <button
                onClick={
                  handleNewConversation
                }
                disabled={
                  isStartingNewChat ||
                  isTyping
                }
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 hover:border-gray-300 transition disabled:opacity-50"
              >

                <Plus size={15} />

                New conversation

              </button>

              <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100">

                <Bot
                  size={14}
                  className="text-[#0A66C2]"
                />

                <span className="text-xs font-semibold text-[#0A66C2]">
                  AI Assistant
                </span>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">

          <div className="h-[calc(100vh-130px)] min-h-[620px] flex flex-col">

            {/* =================================================
                CHAT TOOLBAR
            ================================================= */}

            <div className="h-12 shrink-0 border-b border-gray-100 px-4 sm:px-6 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <MessageSquare
                  size={15}
                  className="text-gray-400"
                />

                <span className="text-xs font-semibold text-gray-600">
                  Career Conversation
                </span>

              </div>

              <div className="flex items-center gap-1.5">

                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />

                <span className="text-[11px] text-gray-400">
                  Online
                </span>

              </div>

            </div>

            {/* =================================================
                CHAT CONTENT
            ================================================= */}

            <div className="flex-1 overflow-y-auto">

              <div className="px-4 sm:px-8 py-8">

                {/* =================================================
                    WELCOME
                ================================================= */}

                {isWelcome && (
                  <div className="max-w-3xl mx-auto">

                    <div className="text-center">

                      <div className="relative inline-flex mb-5">

                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0A66C2] flex items-center justify-center border border-blue-100">
                          <Sparkles
                            size={27}
                          />
                        </div>

                        <div className="absolute -right-2 -bottom-2 w-7 h-7 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                          <Bot
                            size={14}
                            className="text-[#0A66C2]"
                          />
                        </div>

                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Build your career
                        with confidence
                      </h2>

                      <p className="max-w-xl mx-auto mt-3 text-sm sm:text-[15px] leading-6 text-gray-500">
                        Get personalized guidance
                        for career planning,
                        resumes, interviews,
                        skills, and learning
                        roadmaps.
                      </p>

                    </div>

                    {/* =================================================
                        SUGGESTIONS
                    ================================================= */}

                    <div className="mt-10">

                      <div className="flex items-center justify-between mb-3">

                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          Get started
                        </p>

                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {suggestions.map(
                          (
                            item,
                            index
                          ) => (

                            <button
                              key={index}
                              onClick={() =>
                                handleSend(
                                  item.description
                                )
                              }
                              disabled={
                                isTyping
                              }
                              className="group text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm transition-all duration-200 disabled:opacity-50"
                            >

                              <div className="flex items-start gap-3">

                                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:bg-white transition">

                                  {item.icon}

                                </div>

                                <div className="min-w-0 flex-1">

                                  <div className="flex items-center justify-between gap-2">

                                    <p className="text-sm font-semibold text-gray-800">
                                      {
                                        item.title
                                      }
                                    </p>

                                    <ChevronRight
                                      size={
                                        15
                                      }
                                      className="text-gray-300 group-hover:text-[#0A66C2] group-hover:translate-x-0.5 transition"
                                    />

                                  </div>

                                  <p className="text-xs text-gray-500 mt-1.5 leading-5">
                                    {
                                      item.description
                                    }
                                  </p>

                                </div>

                              </div>

                            </button>

                          )
                        )}

                      </div>

                    </div>

                  </div>
                )}

                {/* =================================================
                    MESSAGE LIST
                ================================================= */}

                {!isWelcome && (
                  <div className="max-w-3xl mx-auto space-y-7">

                    {messages.map(
                      (msg) => {

                        if (
                          msg.id ===
                          "welcome"
                        ) {
                          return null;
                        }

                        const isUser =
                          msg.role ===
                          "user";

                        return (
                          <div
                            key={
                              msg.id
                            }
                            className={`flex items-start gap-3 animate-[messageIn_0.25s_ease-out] ${
                              isUser
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >

                            {/* AI AVATAR */}

                            {!isUser && (
                              <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-sm">
                                <Bot
                                  size={
                                    16
                                  }
                                />
                              </div>
                            )}

                            {/* MESSAGE */}

                            <div
                              className={`max-w-[82%] sm:max-w-[72%] ${
                                isUser
                                  ? "order-1"
                                  : ""
                              }`}
                            >

                              <div
                                className={`px-4 py-3.5 text-[14px] leading-6 whitespace-pre-wrap ${
                                  isUser
                                    ? "bg-[#0A66C2] text-white rounded-2xl rounded-br-md shadow-sm"
                                    : "bg-[#F4F6F8] text-gray-800 rounded-2xl rounded-bl-md"
                                }`}
                              >
                                {
                                  msg.content
                                }
                              </div>

                              <div
                                className={`flex items-center mt-1.5 ${
                                  isUser
                                    ? "justify-end"
                                    : "justify-start"
                                }`}
                              >

                                <span className="text-[10px] text-gray-400">
                                  {isUser
                                    ? "You"
                                    : "AI Career Advisor"}
                                </span>

                              </div>

                            </div>

                            {/* USER AVATAR */}

                            {isUser && (
                              <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 text-gray-500 flex items-center justify-center shrink-0 order-2">
                                <User
                                  size={
                                    16
                                  }
                                />
                              </div>
                            )}

                          </div>
                        );
                      }
                    )}

                    {/* =================================================
                        TYPING INDICATOR
                    ================================================= */}

                    {isTyping && (
                      <div className="flex items-start gap-3 animate-[messageIn_0.2s_ease-out]">

                        <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                          <Bot
                            size={
                              16
                            }
                          />
                        </div>

                        <div className="bg-[#F4F6F8] rounded-2xl rounded-bl-md px-4 py-3.5">

                          <div className="flex items-center gap-1">

                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />

                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />

                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />

                          </div>

                        </div>

                      </div>
                    )}

                    <div
                      ref={
                        messagesEndRef
                      }
                    />

                  </div>
                )}

              </div>

            </div>

            {/* =================================================
                INPUT AREA
            ================================================= */}

            <div className="shrink-0 border-t border-gray-200 bg-white px-3 sm:px-5 py-3 sm:py-4">

              <div className="max-w-3xl mx-auto">

                {/* Mobile New Conversation */}

                <div className="sm:hidden flex justify-end mb-2">

                  <button
                    onClick={
                      handleNewConversation
                    }
                    disabled={
                      isTyping
                    }
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-[#0A66C2] transition"
                  >

                    <Plus
                      size={13}
                    />

                    New conversation

                  </button>

                </div>

                {/* INPUT */}

                <div className="flex items-end gap-2 p-2 rounded-2xl border border-gray-200 bg-[#F8FAFC] shadow-sm focus-within:border-[#0A66C2] focus-within:ring-4 focus-within:ring-blue-500/5 transition-all">

                  <textarea
                    ref={
                      textareaRef
                    }
                    rows={1}
                    value={message}
                    onChange={
                      handleTextareaChange
                    }
                    onKeyDown={
                      handleKeyDown
                    }
                    disabled={
                      isTyping
                    }
                    placeholder="Ask anything about your career..."
                    className="flex-1 bg-transparent resize-none outline-none px-3 py-2.5 text-sm leading-5 text-gray-800 placeholder:text-gray-400 disabled:opacity-50"
                    style={{
                      minHeight:
                        "40px",
                    }}
                  />

                  <button
                    onClick={() =>
                      handleSend()
                    }
                    disabled={
                      !message.trim() ||
                      isTyping
                    }
                    aria-label="Send message"
                    className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0 hover:bg-[#004182] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                  >

                    {isTyping ? (
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowUp
                        size={
                          18
                        }
                      />
                    )}

                  </button>

                </div>

                <div className="flex items-center justify-center gap-1 mt-2">

                  <Sparkles
                    size={10}
                    className="text-gray-300"
                  />

                  <p className="text-[10px] text-gray-400">
                    AI Career Advisor may
                    make mistakes. Verify
                    important information.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>
        {`
          @keyframes messageIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 999px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
          }
        `}
      </style>

    </div>
  );
};

export default CareerGuidance;