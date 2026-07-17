// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Chart = () => {

//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 16, max: 28 },
//     { role: "DevOps", min: 8, avg: 18, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   return (
//     <div style={{ width: "100%", height: 400 }}>

//       <ResponsiveContainer width="100%" height="100%">

//         <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>

//           {/* GRID */}
//           <CartesianGrid strokeDasharray="3 3" stroke="#333" />

//           {/* AXIS */}
//           <XAxis dataKey="role" stroke="#aaa" />
//           <YAxis stroke="#aaa" />

//           {/* HOVER TOOLTIP */}
//           <Tooltip />

//           {/* LEGEND */}
//           <Legend />

//           {/* LINES */}
//           <Line
//             type="monotone"
//             dataKey="min"
//             stroke="#f87171"
//             strokeWidth={2}
//           />

//           <Line
//             type="monotone"
//             dataKey="avg"
//             stroke="#818cf8"
//             strokeWidth={3}
//           />

//           <Line
//             type="monotone"
//             dataKey="max"
//             stroke="#34d399"
//             strokeWidth={2}
//           />

//         </LineChart>

//       </ResponsiveContainer>

//     </div>
//   );
// };

// export default Chart;




// import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// // #endregion
// const Chart = () => {

//   const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//   },
// ];


//  return (
  
//    <>
//   <div className=''>
//     <ResponsiveContainer style={{
//        width: "100%",
//        height: "100%"
//     }} >
//  <BarChart 
//     margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
//     data={data}>
    
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" />
//     <YAxis width="auto" />
//     <Tooltip />
//     <Legend />

//     <Bar dataKey="min" fill="#8884d8" isAnimationActive={isAnimationActive} />
//     <Bar dataKey="avg" fill="#82ca9d" isAnimationActive={isAnimationActive} />
//     <Bar dataKey="max" fill="#82ca9d" isAnimationActive={isAnimationActive} />


//     <ResponsiveContainer/>

//    </BarChart>
//    </ResponsiveContainer>
//   </div>
  
//    </>

// )
// }

// export default BarChartExample;


// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,chat
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Chart = () => {

//   const data = [
//     { name: "Frontend", min: 5, avg: 10, max: 18 },
//     { name: "Backend", min: 6, avg: 14, max: 25 },
//     { name: "Full Stack", min: 7, avg: 18, max: 28 },
//     { name: "DevOps", min: 8, avg: 20, max: 30 },
//     { name: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   return (
//     <div className="w-full justify-center h-[400px]">

//       <ResponsiveContainer width="80%" height="100%">

//         <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>

//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey="name" />

//           <YAxis />

//           <Tooltip />

//           <Legend />

//           {/* BARS */}
//           <Bar dataKey="min" fill="#f87171" />
//           <Bar dataKey="avg" fill="#818cf8" />
//           <Bar dataKey="max" fill="#34d399" />

//         </BarChart>

//       </ResponsiveContainer>

//     </div>
//   );
// };

// export default Chart;


// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const SalaryDashboard = () => {

//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 18, max: 28 },
//     { role: "DevOps", min: 8, avg: 20, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   // 💡 Custom tooltip (LPA format)
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-[#0f0f1a] p-3 rounded-lg border border-white/10 shadow-lg">
//           <p className="text-sm font-semibold">{label}</p>
//           {payload.map((item, i) => (
//             <p key={i} className="text-xs text-gray-300">
//               {item.name}: <span className="text-white">{item.value} LPA</span>
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-br from-[#0b0b14] to-[#111827] text-white">

//       {/* HEADER */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold">Salary Insights 💰</h1>
//         <p className="text-gray-400 text-sm">
//           Compare salaries across roles (in LPA)
//         </p>
//       </div>

//       {/* STATS CARDS */}
//       <div className="grid md:grid-cols-3 gap-6 mb-10">

//         <div className="p-5 rounded-xl bg-[#121222] border border-white/10">
//           <p className="text-gray-400 text-sm">Highest Salary</p>
//           <h2 className="text-2xl font-bold text-green-400 mt-2">40 LPA</h2>
//         </div>

//         <div className="p-5 rounded-xl bg-[#121222] border border-white/10">
//           <p className="text-gray-400 text-sm">Average Salary</p>
//           <h2 className="text-2xl font-bold text-indigo-400 mt-2">17 LPA</h2>
//         </div>

//         <div className="p-5 rounded-xl bg-[#121222] border border-white/10">
//           <p className="text-gray-400 text-sm">Lowest Salary</p>
//           <h2 className="text-2xl font-bold text-red-400 mt-2">5 LPA</h2>
//         </div>

//       </div>

//       {/* CHART CARD */}
//       <div className="p-6 rounded-2xl bg-[#121222] border border-white/10 shadow-xl">

//         <h2 className="text-lg font-semibold mb-4">
//           Salary Comparison by Role 📊
//         </h2>

//         <div className="w-full h-[350px]">

//           <ResponsiveContainer width="80%" height="100%">
//             <BarChart data={data}>

//               <CartesianGrid strokeDasharray="3 3" />

//               <XAxis dataKey="role" />

//               <YAxis tickFormatter={(value) => `${value}L`} />

//               <Tooltip content={<CustomTooltip />} />

//               {/* Gradient Colors */}
//               <defs>
//                 <linearGradient id="min" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2} />
//                 </linearGradient>

//                 <linearGradient id="avg" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2} />
//                 </linearGradient>

//                 <linearGradient id="max" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#22c55e" stopOpacity={0.2} />
//                 </linearGradient>
//               </defs>

//               <Bar dataKey="min" fill="url(#min)" radius={[6, 6, 0, 0]} />
//               <Bar dataKey="avg" fill="url(#avg)" radius={[6, 6, 0, 0]} />
//               <Bar dataKey="max" fill="url(#max)" radius={[6, 6, 0, 0]} />

//             </BarChart>
//           </ResponsiveContainer>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default SalaryDashboard;




// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const Chart = () => {

//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 18, max: 28 },
//     { role: "DevOps", min: 8, avg: 20, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-black/80 px-3 py-2 rounded-lg border border-white/10">
//           <p className="text-xs text-gray-300">{label}</p>
//           {payload.map((item, i) => (
//             <p key={i} className="text-xs">
//               {item.name}:{" "}
//               <span className="font-semibold text-white">
//                 {item.value} LPA
//               </span>
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#1e3a8a] flex">

//       {/* LEFT PANEL (NEW STYLE 🔥) */}
//       <div className="w-[280px] border-r border-white/10 p-6 flex flex-col justify-between">

//         <div>
//           <h1 className="text-xl font-semibold">Salary Insights</h1>
//           <p className="text-xs text-gray-400 mt-1">
//             Track salary trends 🚀
//           </p>

//           {/* KPI */}
//           <div className="mt-8 space-y-4">

//             <div>
//               <p className="text-xs text-gray-400">Highest</p>
//               <h2 className="text-2xl font-bold text-green-400">40 LPA</h2>
//             </div>

//             <div>
//               <p className="text-xs text-gray-400">Average</p>
//               <h2 className="text-2xl font-bold text-indigo-400">17 LPA</h2>
//             </div>

//             <div>
//               <p className="text-xs text-gray-400">Minimum</p>
//               <h2 className="text-2xl font-bold text-red-400">5 LPA</h2>
//             </div>

//           </div>
//         </div>

//         {/* FOOTER INFO */}
//         <div className="text-xs text-gray-500">
//           Updated just now ⚡
//         </div>

//       </div>

//       {/* RIGHT SIDE (MAIN CHART AREA) */}
//       <div className="flex-1 p-8">

//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold">
//             Role-Based Salary Comparison
//           </h2>
//           <p className="text-gray-400 text-sm">
//             Compare min, avg & max salaries across roles
//           </p>
//         </div>

//         {/* CHART */}
//         <div className="w-full h-[400px] bg-[#11111c] rounded-2xl border border-white/10 p-4">

//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={data}>

//               <CartesianGrid strokeDasharray="3 3" stroke="#222" />

//               <XAxis dataKey="role" stroke="#888" />

//               <YAxis tickFormatter={(v) => `${v}L`} stroke="#888" />

//               <Tooltip content={<CustomTooltip />} />

//               {/* CLEAN SOLID COLORS (NEW STYLE) */}
//               <Bar dataKey="min" fill="#f43f5e" radius={[4, 4, 0, 0]} />
//               <Bar dataKey="avg" fill="#6366f1" radius={[4, 4, 0, 0]} />
//               <Bar dataKey="max" fill="#22c55e" radius={[4, 4, 0, 0]} />

//             </BarChart>
//           </ResponsiveContainer>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Chart;




// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
// } from "recharts";

// const Chart = () => {

//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 18, max: 28 },
//     { role: "DevOps", min: 8, avg: 20, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-[#0f172a] px-4 py-3 rounded-xl border border-white/10 shadow-lg">
//           <p className="text-xs text-gray-300 mb-2">{label}</p>

//           {payload.map((item, i) => (
//             <p key={i} className="text-xs text-gray-300">
//               <span className="capitalize">{item.name}</span>:{" "}
//               <span className="text-white font-semibold">
//                 {item.value} LPA
//               </span>
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="w-full h-[420px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5">

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-4">

//         <h2 className="text-lg font-semibold text-white">
//           💰 Salary Insights (LPA)
//         </h2>

//         {/* LEGEND BADGES */}
//         <div className="flex gap-3 text-xs">

//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-red-400 rounded-sm"></span>
//             <span className="text-gray-300">Min</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-indigo-400 rounded-sm"></span>
//             <span className="text-gray-300">Avg</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <span className="w-3 h-3 bg-green-400 rounded-sm"></span>
//             <span className="text-gray-300">Max</span>
//           </div>

//         </div>

//       </div>

//       {/* CHART */}
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart data={data}>

//           <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

//           <XAxis dataKey="role" stroke="#9ca3af" />

//           <YAxis tickFormatter={(v) => `${v}L`} stroke="#9ca3af" />

//           <Tooltip content={<CustomTooltip />} />

//           {/* BARS */}
//           <Bar dataKey="min" fill="#f87171" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="avg" fill="#818cf8" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="max" fill="#34d399" radius={[6, 6, 0, 0]} />

//         </BarChart>
//       </ResponsiveContainer>

//     </div>
//   );
// };

// export default Chart;




// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const Chart = () => {
//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 18, max: 28 },
//     { role: "DevOps", min: 8, avg: 20, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-[#0b1020] px-3 py-2 rounded-lg border border-indigo-500/20 shadow-xl">
//           <p className="text-xs text-indigo-300 mb-1">{label}</p>

//           {payload.map((item, i) => (
//             <p key={i} className="text-xs text-gray-300">
//               {item.name}:{" "}
//               <span className="text-white font-semibold">
//                 {item.value} LPA
//               </span>
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="w-full h-[400px] bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md border border-indigo-500/20 rounded-2xl p-4 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="text-sm font-semibold text-indigo-200">
//           💰 Salary Insights
//         </h2>

//         <div className="flex gap-2 text-[10px] text-gray-300">
//           <span className="text-red-300">Min</span>
//           <span className="text-indigo-300">Avg</span>
//           <span className="text-green-300">Max</span>
//         </div>
//       </div>

//       {/* CHART */}
//       <ResponsiveContainer width="100%" height="85%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

//           <XAxis dataKey="role" stroke="#9ca3af" fontSize={10} />
//           <YAxis stroke="#9ca3af" fontSize={10} />

//           <Tooltip content={<CustomTooltip />} />

//           {/* NEW NEON COLORS */}
//           <Bar dataKey="min" fill="#fb7185" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="avg" fill="#a78bfa" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="max" fill="#34d399" radius={[6, 6, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>

//     </div>
//   );
// };

// export default Chart;



// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const Chart = () => {
//   const data = [
//     { role: "Frontend", min: 5, avg: 10, max: 18 },
//     { role: "Backend", min: 6, avg: 14, max: 25 },
//     { role: "Full Stack", min: 7, avg: 18, max: 28 },
//     { role: "DevOps", min: 8, avg: 20, max: 30 },
//     { role: "AI/ML", min: 10, avg: 25, max: 40 },
//      { role: "Data Scientist", min: 12, avg: 25, max: 50 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-[#0b1020]/95 backdrop-blur-md px-3 py-2 rounded-lg border border-indigo-400/20 shadow-lg">
//           <p className="text-xs text-indigo-300 mb-1 font-semibold">{label}</p>

//           {payload.map((item, i) => (
//             <p key={i} className="text-xs text-gray-300">
//               {item.name}:{" "}
//               <span className="text-white font-semibold">
//                 {item.value} LPA
//               </span>
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="w-full h-[400px] mt-8 bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-4 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="text-xl font-semibold text-indigo-200">
//            Salary Insights (LPA)
//         </h2>

//         <div className="flex gap-3 text-[10px]">
//           <span className="text-red-300">Min</span>
//           <span className="text-indigo-300">Avg</span>
//           <span className="text-emerald-300">Max</span>
//         </div>
//       </div>

//       {/* CHART */}
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart  data={data} barGap={6}>

//           <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" opacity={0.5} />

//           <XAxis
//             dataKey="role"
//             stroke="#9ca3af"
//             fontSize={10}
//             tickLine={false}
//           />

//           <YAxis
//             stroke="#9ca3af"
//             fontSize={10}
//             tickLine={false}
//           />

//           <Tooltip content={<CustomTooltip />} />

//           {/* SOFT NEON COLORS MATCHING YOUR THEME */}
//           <Bar dataKey="min" fill="#fb7185" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="avg" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
//           <Bar dataKey="max" fill="#22c55e" radius={[6, 6, 0, 0]} />

//         </BarChart>
//       </ResponsiveContainer>

//     </div>
//   );
// };

// export default Chart;




import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  const data = [
    { role: "Frontend", min: 5, avg: 10, max: 18, demand: 70 },
    { role: "Backend", min: 6, avg: 14, max: 25, demand: 80 },
    { role: "Full Stack", min: 7, avg: 18, max: 28, demand: 85 },
    { role: "DevOps", min: 8, avg: 20, max: 30, demand: 75 },
    { role: "AI/ML", min: 10, avg: 25, max: 40, demand: 95 },
    { role: "Data Science", min: 12, avg: 25, max: 40, demand: 92 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0b1020]/95 backdrop-blur-md px-4 py-3 rounded-xl border border-indigo-400/20 shadow-lg">
          <p className="text-xs text-indigo-300 mb-2 font-semibold">{label}</p>

          {payload.map((item, i) => (
            <p key={i} className="text-xs text-gray-300">
              {item.name}:{" "}
              <span className="text-white font-semibold">
                {item.value} LPA
              </span>
            </p>
          ))}

          {/* extra insight */}
          {payload[0]?.payload?.demand && (
            <p className="text-xs text-emerald-300 mt-2">
              Demand: {payload[0].payload.demand}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[360px] mt-8 bg-white/5 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-4 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-indigo-200">
           Salary & Demand Insights (LPA)
        </h2>

        <div className="flex gap-3 text-[10px]">
          <span className="text-red-300">Min</span>
          <span className="text-indigo-300">Avg</span>
          <span className="text-emerald-300">Max</span>
        </div>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barGap={6}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f2937"
            opacity={0.4}
          />

          <XAxis
            dataKey="role"
            stroke="#9ca3af"
            fontSize={10}
            tickLine={false}
          />

          <YAxis
            stroke="#9ca3af"
            fontSize={10}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* MODERN NEON COLORS */}
          <Bar dataKey="min" fill="#f43f5e" radius={[6, 6, 0, 0]} />
          <Bar dataKey="avg" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
          <Bar dataKey="max" fill="#22c55e" radius={[6, 6, 0, 0]} />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Chart;