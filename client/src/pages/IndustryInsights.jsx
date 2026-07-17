// import React from 'react'
// import { GrOptimize } from "react-icons/gr";
// import { BiShoppingBag } from "react-icons/bi";
// import { FaLaptopCode } from "react-icons/fa6";

// const IndustryInsights = () => {
  
  
//   return (
//     <>
    
//       <div className=''>
         
//          <div className=''>
//            <h1>Industry Insights</h1>
//            <p>Last Updated: 11/05/2026</p>
//          </div>

 
//          <div className='flex ml-10 mt-10 p '>
            
//             <div className='mr-10'>
//                <p className='' >
//                 Market Outlook
//                  <GrOptimize />
//                </p>
//                <h2 className=''>Positive</h2>
//                <p className='' >Next update in 6 days</p>
//             </div>

//             <div className='mr-10'>
//                <p className='' >
//                 Industry Growth
//                  <GrOptimize />
//                </p>
//                <h2 className=''>10%</h2>
//             </div>

//             <div className='mr-10'>
//                <p className='' >
//                 Demand level
//                 <BiShoppingBag />
//                </p>
//                <h2 className=''>Medium</h2>
//             </div>

//             <div className=''>
//                 <p className=''>
//                   Top Skills
//                   <FaLaptopCode />
//                 <ul className='flex'>
//                   <li>Python</li>
//                   <li>Cloud Computing</li>
//                   <li>Ai Ml</li>
//                   <li>AWS</li>
//                   <li>Ai Engineer</li>
//                 </ul>
//                </p>
//             </div>

//          </div>


//          <div className=''>
           
//          </div>

//       </div>
    
//     </>
//   )
// }

// export default IndustryInsights





// import React from "react";
// import Navbar from "../components/common/Navbar";
// import { GrOptimize } from "react-icons/gr";
// import { BiShoppingBag } from "react-icons/bi";
// import { FaLaptopCode } from "react-icons/fa6";
// import Chart from "../components/dashboard/Chart";

// const IndustryInsights = () => {
//   return (

//     <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#1d4ed8] text-white">

//     {/* <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"> */}
// <div className="">

//       <section className=" pt-24 pb-10 px-4">
//         <h1 className="text-4xl font-bold">
//           Industry <span className="text-indigo-400">Insights</span>
//         </h1>
       
//         <p className="text-xs text-gray-300 mt-2">
//           Last Updated: 11 May 2026
//         </p>
//       </section>

//       {/* STATS CARDS */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">

//         {/* Card 1 */}
//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
//         hover:scale-105 transition shadow-lg">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400">Market Outlook</p>
//             <GrOptimize />
//           </div>
//           <h2 className="text-2xl font-bold mt-3 text-green-400">Positive</h2>
//           <p className="text-sm text-gray-500 mt-1">Next update in 6 days</p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
//         hover:scale-105 transition shadow-lg">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400">Industry Growth</p>
//             <GrOptimize />
//           </div>
//           <h2 className="text-2xl font-bold mt-3 text-indigo-400">+10%</h2>
//         </div>

//         {/* Card 3 */}
//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
//         hover:scale-105 transition shadow-lg">
//           <div className="flex justify-between items-center">
//             <p className="text-gray-400">Demand Level</p>
//             <BiShoppingBag />
//           </div>
//           <h2 className="text-2xl font-bold mt-3 text-yellow-400">Medium</h2>
//         </div>

//       </section>

//       {/* TRENDS SECTION */}
//       <section className="mt-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6">🔥 Trending Technologies</h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="p-5 rounded-xl bg-white/5 border border-white/10">
//             <h3 className="font-semibold">AI & Machine Learning</h3>
//             <p className="text-sm text-gray-400 mt-2">
//               Rapid growth in automation & predictive analytics.
//             </p>
//           </div>

//           <div className="p-5 rounded-xl bg-white/5 border border-white/10">
//             <h3 className="font-semibold">Cloud Computing</h3>
//             <p className="text-sm text-gray-400 mt-2">
//               AWS, Azure demand increasing in startups & enterprises.
//             </p>
//           </div>

//           <div className="p-5 rounded-xl bg-white/5 border border-white/10">
//             <h3 className="font-semibold">Cyber Security</h3>
//             <p className="text-sm text-gray-400 mt-2">
//               High demand due to rising digital threats.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section className="mt-16 px-6 max-w-6xl mx-auto pb-20">
//         <h2 className="text-2xl font-semibold mb-6">💻 Top Skills</h2>

//         <div className="flex flex-wrap gap-3">

//           {["Python", "React", "Node.js", "AWS", "Docker", "AI/ML"].map((skill, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 bg-indigo-500/20 border border-indigo-400 
//               rounded-full text-sm hover:scale-105 transition cursor-pointer"
//             >
//               {skill}
//             </span>
//           ))}

//         </div>
//       </section>

//     </div>

//     <div className="">
//        <Chart />
//     </div>

//     {/* <div className="">
      
//     </div> */}

//     </div>
//   );
// };

// export default IndustryInsights;





// import React from "react";
// import Navbar from "../components/common/Navbar";
// import { GrOptimize } from "react-icons/gr";
// import { BiShoppingBag } from "react-icons/bi";
// import { FaLaptopCode } from "react-icons/fa6";
// import Chart from "../components/dashboard/Chart";

// const IndustryInsights = () => {
//   return (
//     <div className="w-full min-h-screen 
//     bg-gradient-to-br from-[#020617] via-[#020617] to-[#1e3a8a] 
//     text-white overflow-hidden">

//       {/* BACKGROUND GLOW EFFECT 🔥 */}
//       <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
//       <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

//       <Navbar />

//       {/* HEADER */}
//       <section className="pt-24 pb-10 px-6 max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold tracking-wide animate-fadeIn">
//           Industry <span className="text-indigo-400">Insights</span>
//         </h1>

//         <p className="text-xs text-gray-400 mt-2">
//           Last Updated: 11 May 2026
//         </p>
//       </section>

//       {/* STATS CARDS */}
//       <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">

//         {/* CARD */}
//         {[
//           {
//             title: "Market Outlook",
//             value: "Positive",
//             color: "text-green-400",
//             icon: <GrOptimize />
//           },
//           {
//             title: "Industry Growth",
//             value: "+10%",
//             color: "text-indigo-400",
//             icon: <GrOptimize />
//           },
//           {
//             title: "Demand Level",
//             value: "Medium",
//             color: "text-yellow-400",
//             icon: <BiShoppingBag />
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="group p-6 rounded-2xl 
//             bg-white/5 backdrop-blur-xl border border-white/10 
//             hover:scale-105 transition duration-300 
//             hover:border-indigo-400/40 
//             shadow-[0_0_30px_rgba(99,102,241,0.1)] 
//             hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
//           >
//             <div className="flex justify-between items-center">
//               <p className="text-gray-400">{item.title}</p>
//               <div className="text-indigo-400 group-hover:rotate-12 transition">
//                 {item.icon}
//               </div>
//             </div>

//             <h2 className={`text-2xl font-bold mt-3 ${item.color}`}>
//               {item.value}
//             </h2>

//             {i === 0 && (
//               <p className="text-sm text-gray-500 mt-1">
//                 Next update in 6 days
//               </p>
//             )}
//           </div>
//         ))}

//       </section>

//       {/* CHART SECTION */}
//       <section className="mt-16 px-6 max-w-6xl mx-auto">
//         <div className="p-6 rounded-2xl 
//         bg-white/5 backdrop-blur-xl border border-white/10 
//         shadow-[0_0_40px_rgba(59,130,246,0.15)] 
//         hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition">

//           <h2 className="text-xl font-semibold mb-4">
//             📊 Salary Trends
//           </h2>
// {/* 
//           <div className="h-[350px]">
//             <Chart />
//           </div> */}
//         </div>
//       </section>

//       {/* TRENDING TECH */}
//       <section className="mt-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6">
//           🔥 Trending Technologies
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           {[
//             "AI & Machine Learning",
//             "Cloud Computing",
//             "Cyber Security"
//           ].map((tech, i) => (
//             <div
//               key={i}
//               className="p-5 rounded-xl bg-white/5 border border-white/10 
//               hover:scale-105 hover:border-indigo-400/30 
//               transition duration-300 
//               shadow hover:shadow-indigo-500/20"
//             >
//               <h3 className="font-semibold">{tech}</h3>
//               <p className="text-sm text-gray-400 mt-2">
//                 High demand and strong growth in industry.
//               </p>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* SKILLS */}
//       <section className="mt-16 px-6 max-w-6xl mx-auto pb-20">
//         <h2 className="text-2xl font-semibold mb-6">
//           💻 Top Skills
//         </h2>

//         <div className="flex flex-wrap gap-3">

//           {["Python", "React", "Node.js", "AWS", "Docker", "AI/ML"].map((skill, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 rounded-full text-sm 
//               bg-indigo-500/20 border border-indigo-400/30 
//               hover:bg-indigo-500/30 hover:scale-110 
//               transition duration-300 cursor-pointer 
//               shadow hover:shadow-indigo-500/30"
//             >
//               {skill}
//             </span>
//           ))}

//         </div>
//       </section>

//     </div>
//   );
// };

// export default IndustryInsights;





// import React from "react";
// import Navbar from "../components/common/Navbar";
// import Chart from "../components/dashboard/Chart";
// import { motion } from "framer-motion";

// const IndustryInsights = () => {

//   const skills = [
//     { name: "React", level: 80 },
//     { name: "Node.js", level: 70 },
//     { name: "AWS", level: 60 },
//     { name: "System Design", level: 65 },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#1e3a8a] text-white">

//       <Navbar />

//       <div className="pt-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* 🔥 LEFT SIDE (TIMELINE UI) */}
//         <div className="relative">

//           {/* vertical line */}
//           <div className="absolute left-3 top-0 w-[2px] h-full bg-white/10"></div>

//           {/* timeline items */}
//           {[
//             { title: "AI Boom 🚀", desc: "AI demand growing rapidly" },
//             { title: "Cloud Growth ☁️", desc: "AWS & Azure adoption rising" },
//             { title: "High Salaries 💰", desc: "Tech roles paying more" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: i * 0.3 }}
//               className="ml-10 mb-10 relative"
//             >

//               {/* circle */}
//               <div className="absolute -left-[34px] top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>

//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-gray-400 text-sm">{item.desc}</p>

//             </motion.div>
//           ))}

//         </div>

//         {/* 🔥 RIGHT SIDE (STATS + CHART) */}
//         <div className="space-y-8">

//           {/* STATS */}
//           <div className="grid grid-cols-3 gap-4">

//             {[
//               { label: "Growth", value: "+12%" },
//               { label: "Demand", value: "High" },
//               { label: "Jobs", value: "Trending" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 text-center"
//               >
//                 <p className="text-gray-400 text-xs">{stat.label}</p>
//                 <h2 className="text-xl font-bold text-indigo-400 mt-2">
//                   {stat.value}
//                 </h2>
//               </motion.div>
//             ))}

//           </div>

//           {/* SKILL PROGRESS */}
//           <div className="p-5 bg-white/5 border border-white/10 rounded-xl">

//             <h2 className="mb-4 font-semibold">Skill Demand 📊</h2>

//             {skills.map((skill, i) => (
//               <div key={i} className="mb-4">

//                 <div className="flex justify-between text-sm mb-1">
//                   <span>{skill.name}</span>
//                   <span>{skill.level}%</span>
//                 </div>

//                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, delay: i * 0.2 }}
//                     className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
//                   ></motion.div>
//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* CHART */}
//           {/* <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
//             <Chart />
//           </div> */}
//           {/* <div className="p-4 bg-white/5 border border-white/10 rounded-xl h-[350px]">
//   <Chart />
// </div> */}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default IndustryInsights;




// import React from "react";
// import Navbar from "../components/common/Navbar";
// import Chart from "../components/dashboard/Chart";
// import { motion } from "framer-motion";

// const IndustryInsights = () => {

//   const insights = [
//     { title: "Market Growth", value: "+12%", color: "text-green-400" },
//     { title: "Job Demand", value: "High", color: "text-indigo-400" },
//     { title: "Hiring Trend", value: "Rising", color: "text-yellow-400" },
//     { title: "Competition", value: "Medium", color: "text-pink-400" },
//   ];

//   const skills = [
//     { name: "React", level: 80 },
//     { name: "Node.js", level: 70 },
//     { name: "AWS", level: 60 },
//     { name: "System Design", level: 65 },
//     { name: "DSA", level: 75 },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1220] to-[#1e3a8a] text-white">

//       {/* NAVBAR */}
//       <Navbar />

//       <div className="pt-24 px-6 grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

//         {/* 🧭 LEFT SIDEBAR */}
//         {/* <div className="hidden lg:flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 h-fit">

//           <h2 className="text-lg font-semibold">Dashboard</h2>

//           {["Overview", "Insights", "Salary", "Skills", "Trends"].map((item, i) => (
//             <div
//               key={i}
//               className="p-2 rounded-lg hover:bg-white/10 cursor-pointer text-gray-300"
//             >
//               {item}
//             </div>
//           ))}

//         </div> */}

//         {/* 📊 MAIN SECTION */}
//         <div className="lg:col-span-3 space-y-6">

//           {/* HEADER */}
//           <div>
//             <h1 className="text-3xl font-bold">
//               Industry <span className="text-indigo-400">Insights</span>
//             </h1>
//             <p className="text-gray-400 text-sm mt-1">
//               Real-time AI powered career analytics
//             </p>
//           </div>

//           {/* 🧠 INSIGHT CARDS */}
//           <div className="grid md:grid-cols-4 gap-4">

//             {insights.map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-4 bg-white/5 border border-white/10 rounded-xl"
//               >
//                 <p className="text-gray-400 text-xs">{item.title}</p>
//                 <h2 className={`text-xl font-bold mt-2 ${item.color}`}>
//                   {item.value}
//                 </h2>
//               </motion.div>
//             ))}

//           </div>

//           {/* 📈 CHART SECTION */}
//           {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-[380px]">
//             <h2 className="text-lg font-semibold mb-4">
//               Salary Distribution Trends
//             </h2>
//             <Chart />
//           </div> */}

//           {/* 📊 SKILL INTELLIGENCE */}
//           <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

//             <h2 className="text-lg font-semibold mb-4">
//               Skill Intelligence Score
//             </h2>

//             {skills.map((skill, i) => (
//               <div key={i} className="mb-4">

//                 <div className="flex justify-between text-sm mb-1">
//                   <span>{skill.name}</span>
//                   <span>{skill.level}%</span>
//                 </div>

//                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, delay: i * 0.2 }}
//                     className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
//                   />
//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* 🎯 CAREER PANEL */}
//           <div className="p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">

//             <h2 className="text-lg font-semibold">
//               AI Career Recommendation 🎯
//             </h2>

//             <p className="text-sm text-gray-300 mt-2">
//               Focus on Backend + System Design + Cloud to reach FAANG-level roles faster.
//             </p>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default IndustryInsights;








// import React from "react";
// import { GrOptimize } from "react-icons/gr";
// import { BiShoppingBag } from "react-icons/bi";
// import { FaLaptopCode } from "react-icons/fa6";

// const IndustryInsights = () => {
//   return (
//     <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-[#050816] via-[#061427] to-[#0a2a5e]">

//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold">
//           Industry <span className="text-sky-400">Insights</span>
//         </h1>
//         <p className="text-gray-400 text-sm mt-1">
//           Real-time career analytics dashboard
//         </p>
//       </div>

//       {/* INLINE DASHBOARD ROW */}
//       <div className="flex flex-wrap gap-4">

//         {/* 1. MARKET OUTLOOK */}
//         <div className="flex-1 min-w-[220px] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">

//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-300 flex items-center gap-2">
//               <GrOptimize className="text-sky-400" />
//               Outlook
//             </span>
//             <span className="text-green-400 text-xs font-semibold">Positive</span>
//           </div>

//           <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
//             <div className="w-[80%] h-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
//           </div>

//         </div>

//         {/* 2. INDUSTRY GROWTH */}
//         <div className="flex-1 min-w-[220px] p-4 rounded-xl bg-white/5 border border-white/10">

//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-300">Growth</span>
//             <span className="text-sky-400 font-bold">72%</span>
//           </div>

//           <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
//             <div className="w-[72%] h-full bg-gradient-to-r from-sky-400 to-blue-500"></div>
//           </div>

//         </div>

//         {/* 3. DEMAND LEVEL */}
//         <div className="flex-1 min-w-[220px] p-4 rounded-xl bg-white/5 border border-white/10">

//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-300 flex items-center gap-2">
//               <BiShoppingBag className="text-yellow-400" />
//               Demand
//             </span>
//             <span className="text-yellow-400 text-xs font-semibold">
//               Medium
//             </span>
//           </div>

//           <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
//             <div className="w-[55%] h-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
//           </div>

//         </div>

//         {/* 4. TOP SKILLS */}
//         <div className="flex-1 min-w-[220px] p-4 rounded-xl bg-white/5 border border-white/10">

//           <div className="flex justify-between items-center">
//             <span className="text-sm text-gray-300 flex items-center gap-2">
//               <FaLaptopCode className="text-indigo-400" />
//               Skills
//             </span>
//             <span className="text-indigo-400 text-xs">AI Stack</span>
//           </div>

//           <div className="mt-2 flex flex-wrap gap-2 text-xs">
//             <span className="px-2 py-1 bg-indigo-500/20 rounded-md">Python</span>
//             <span className="px-2 py-1 bg-sky-500/20 rounded-md">Cloud</span>
//             <span className="px-2 py-1 bg-green-500/20 rounded-md">AWS</span>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default IndustryInsights;





// import React from "react";
// import { GrOptimize } from "react-icons/gr";
// import { BiShoppingBag } from "react-icons/bi";
// import { FaLaptopCode } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const cardVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.5 },
//   }),
// };

// const IndustryInsights = () => {
//   return (
  
//     <div className="min-h-screen px-6 py-10 text-white  bg-gradient-to-br from-purple-900 via-black to-indigo-900 ">

//       {/* HEADER */}
//       <div className="mb-10 mt-10">
//         <h1 className="text-3xl font-bold">
//           Industry <span className="text-cyan-400">Insights</span>
//         </h1>
//         <p className="text-gray-400 text-sm">Last Updated: 11/05/2026</p>
//       </div>

//       {/* CARDS */}
//       <div className="flex flex-wrap gap-5">

//         {/* CARD 1 */}
//         <motion.div
//           custom={0}
//           initial="hidden"
//           animate="visible"
//           variants={cardVariant}
//           whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34,211,238,0.3)" }}
//           className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
//         >
//           <div className="flex justify-between items-center">
//             <p className="text-xs text-gray-400">Market Outlook</p>
//             <GrOptimize className="text-cyan-400" />
//           </div>

//           <h2 className="text-lg font-bold mt-2 text-green-400">
//             Positive
//           </h2>

//           <p className="text-xs text-gray-500 mt-1">
//             Stable AI & Cloud growth
//           </p>
//         </motion.div>

//         {/* CARD 2 */}
//         <motion.div
//           custom={1}
//           initial="hidden"
//           animate="visible"
//           variants={cardVariant}
//           whileHover={{ scale: 1.05 }}
//           className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
//         >
//           <div className="flex justify-between">
//             <p className="text-xs text-gray-400">Industry Growth</p>
//             <span className="text-cyan-400">📈</span>
//           </div>

//           <h2 className="text-lg font-bold mt-2 text-cyan-300">72%</h2>

//           <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "72%" }}
//               transition={{ duration: 1 }}
//               className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
//             />
//           </div>
//         </motion.div>

//         {/* CARD 3 */}
//         <motion.div
//           custom={2}
//           initial="hidden"
//           animate="visible"
//           variants={cardVariant}
//           whileHover={{ scale: 1.05 }}
//           className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
//         >
//           <div className="flex justify-between">
//             <p className="text-xs text-gray-400">Demand Level</p>
//             <BiShoppingBag className="text-yellow-400" />
//           </div>

//           <h2 className="text-lg font-bold mt-2 text-yellow-300">
//             Medium
//           </h2>

//           <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "55%" }}
//               transition={{ duration: 1 }}
//               className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
//             />
//           </div>
//         </motion.div>

//         {/* CARD 4 */}
//         <motion.div
//           custom={3}
//           initial="hidden"
//           animate="visible"
//           variants={cardVariant}
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0px 0px 20px rgba(99,102,241,0.3)",
//           }}
//           className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
//         >
//           <div className="flex justify-between">
//             <p className="text-xs text-gray-400">Top Skills</p>
//             <FaLaptopCode className="text-indigo-400" />
//           </div>

//           <div className="mt-3 flex flex-wrap gap-2 text-xs">
//             {["Python", "Cloud", "AI/ML", "AWS", "DSA"].map((skill, i) => (
//               <motion.span
//                 key={i}
//                 whileHover={{ scale: 1.1 }}
//                 className="px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//       </div>

//       {/* MINI ANALYTICS */}
//       <div className="mt-10 flex flex-wrap gap-4">

//         {[
//           { name: "Frontend", value: 80, color: "cyan" },
//           { name: "Backend", value: 65, color: "indigo" },
//           { name: "AI/ML", value: 90, color: "pink" },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="w-[200px] p-3 rounded-lg bg-white/5 border border-white/10"
//           >
//             <p className="text-xs text-gray-400">{item.name}</p>

//             <div className="flex justify-between mt-1">
//               <span className="text-sm font-bold">{item.value}%</span>
//               <span className={`text-${item.color}-400 text-xs`}>
//                 High
//               </span>
//             </div>

//             <div className="h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${item.value}%` }}
//                 transition={{ duration: 1 }}
//                 className={`h-full bg-${item.color}-400`}
//               />
//             </div>
//           </motion.div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default IndustryInsights;




import React from "react";
import { GrOptimize } from "react-icons/gr";
import { BiShoppingBag } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";
import Chart from '../components/dashboard/Chart'

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const IndustryInsights = () => {
  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-purple-900 via-black to-indigo-900">

      {/* HEADER */}
      <div className="mb-10 mt-10">
        {/* <h1 className="text-3xl font-bold">
          Industry <span className="text-cyan-300">Insights</span>
        </h1> */}
        <h1 className="text-3xl font-bold">
  Industry{" "}
  <span className="text-indigo-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
    Insights
  </span>
</h1>
        <p className="text-gray-400 text-sm">Last Updated: 11/05/2026</p>
      </div>

      {/* CARDS */}
      {/* <div className="flex flex-wrap gap-5"> */}
      <div className="flex flex-nowrap gap-5  items-stretch">

        {/* CARD 1 */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
        
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px rgba(99,102,241,0.25)",
            borderColor: "rgba(99,102,241,0.4)"
          }}
           className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">Market Outlook</p>
            <GrOptimize className="text-cyan-300" />
          </div>

          <h2 className="text-lg font-bold mt-2 text-green-400">
            Positive
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Next Update in 7 days
          </p>
        </motion.div>


        {/* CARD 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px rgba(99,102,241,0.25)",
            borderColor: "rgba(99,102,241,0.4)"
          }}
          className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex justify-between">
            <p className="text-xs text-gray-400">Industry Growth</p>
            <span className="text-cyan-300">📈</span>
          </div>

          <h2 className="text-lg font-bold mt-2 text-cyan-300">
            72%
          </h2>

          <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.2 }}
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
            />
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px rgba(250,204,21,0.2)",
            borderColor: "rgba(250,204,21,0.4)"
          }}
          className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex justify-between">
            <p className="text-xs text-gray-400">Demand Level</p>
            <BiShoppingBag className="text-yellow-300" />
          </div>

          <h2 className="text-lg font-bold mt-2 text-yellow-300">
            Medium
          </h2>

          <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "55%" }}
              transition={{ duration: 1.2 }}
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
            />
          </div>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={cardVariant}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 25px rgba(99,102,241,0.25)",
            borderColor: "rgba(99,102,241,0.4)"
          }}
          className="w-[260px] p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex justify-between">
            <p className="text-xs text-gray-400">Top Skills</p>
            <FaLaptopCode className="text-indigo-300" />
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {["Python", "Cloud", "AI/ML", "AWS", "DSA"].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{
                  scale: 1.12,
                  backgroundColor: "rgba(99,102,241,0.3)"
                }}
                className="px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* MINI ANALYTICS */}
      {/* <div className="mt-10 flex flex-wrap gap-4">

        {[
          { name: "Frontend", value: 80, color: "cyan-400" },
          { name: "Backend", value: 65, color: "indigo-400" },
          { name: "AI/ML", value: 90, color: "pink-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.08)"
            }}
            className="w-[200px] p-3 rounded-lg bg-white/5 border border-white/10 "
          >
            <p className="text-xs text-gray-400">{item.name}</p>

            <div className="flex justify-between mt-1">
              <span className="text-sm font-bold">{item.value}%</span>
              <span className="text-xs text-gray-300">High</span>
            </div>

            <div className="h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1 }}
                className={`h-full bg-${item.color}`}
              />
            </div>
          </motion.div>
        ))}

      </div> */}
      <div className="mt-10 flex flex-wrap gap-4">

  {[
    { name: "Frontend", value: 80, color: "cyan-400" },
    { name: "Backend", value: 65, color: "indigo-400" },
    { name: "AI/ML", value: 90, color: "pink-400" },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: i * 0.1,
        duration: 0.35,
        ease: "easeOut",
      }}

      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(99,102,241,0.15)",
      }}

      whileTap={{ scale: 0.98 }}

      className="w-[200px] p-3 rounded-lg bg-white/5 border border-white/10
                 backdrop-blur-md cursor-pointer
                 transform-gpu will-change-transform
                 transition-all duration-150 ease-out
                 hover:border-indigo-400/30"
    >
      <p className="text-xs text-gray-400">{item.name}</p>

      <div className="flex justify-between mt-1">
        <span className="text-sm font-bold">{item.value}%</span>
        <span className="text-xs text-gray-300">High</span>
      </div>

      <div className="h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${item.value}%` }}
          transition={{ duration: 0.8 }}
          className={`h-full bg-${item.color}`}
        />
      </div>
    </motion.div>
  ))}
     </div>

      <div className="mt-10">
         <Chart />
      </div>
      
      {/* <div className="">
         <h2>Key Industry Trends</h2>
         <ul>
          <li>AI/ML</li>
          <li>Cloud Computing</li>
          <li>DevOps</li>
          <li>Cybersecurity</li>
          <li>Remote Work</li>
         </ul>
      </div>

      <div className="">
        <h2 className="">Recommended Skills</h2>
        <p className="">Skills to consider developing</p>
        <a className="">Python</a>
        <a className="">Javascipt</a>
        <a className="">AWS</a>
        <a className="">Docker</a>
        <a className="">Kubernates</a>
      </div> */}

 

      <div className="mt-10 grid md:grid-cols-2 gap-6">

  {/* INDUSTRY TRENDS */}
  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md
                  hover:border-indigo-400/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)]
                  transition-all duration-200">

    <h2 className="text-lg font-semibold text-indigo-300 mb-4">
       Key Industry Trends
    </h2>

    <ul className="space-y-2">
      {["AI/ML", "Cloud Computing", "DevOps", "Cybersecurity", "Remote Work"].map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-2 text-sm text-gray-300
                     hover:text-white transition duration-150"
        >
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>


  {/* RECOMMENDED SKILLS */}
  <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md
                  hover:border-cyan-400/30 hover:shadow-[0_10px_30px_rgba(34,211,238,0.2)]
                  transition-all duration-200">

    <h2 className="text-lg font-semibold text-cyan-300">
       Recommended Skills
    </h2>

    <p className="text-xs text-gray-400 mt-1 mb-4">
      Skills to consider developing
    </p>

    <div className="flex flex-wrap gap-2">
      {["Python", "JavaScript", "AWS", "Docker", "Kubernetes"].map((skill, i) => (
        <a
          key={i}
          href="#"
          className="px-3 py-1 text-xs rounded-full
                     bg-cyan-500/10 border border-cyan-400/20 text-gray-200
                     hover:bg-cyan-400/20 hover:scale-105
                     transition-all duration-150 cursor-pointer"
        >
          {skill}
        </a>
      ))}
    </div>
  </div>

</div>

 


    </div>
  );
};

export default IndustryInsights;