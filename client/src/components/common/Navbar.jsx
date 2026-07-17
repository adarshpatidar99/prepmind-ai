// import React from 'react'
// import { CgInsights } from "react-icons/cg";
// import { MdInsights } from "react-icons/md";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { PiReadCvLogoDuotone } from "react-icons/pi";
// import { SlEnvolopeLetter } from "react-icons/sl";
// import { RiGuideFill } from "react-icons/ri";

// const Navbar = () => {
//   return (
    
//     <div className='flex items-center justify-between px-8 py-2 shadow-sm border-b bg-white'>

//        {/* Logo */}
//        <div className='font-bold text-xl text-gray-800 cursor-pointer'>
//           <h3 className='m-0'>PrepmindAi</h3>
//        </div>

//        {/* Center Navigation */}
//        <div className='flex items-center gap-6'>

//           {/* Industry Insights */}
//           <Link 
//             to="/industry-insights"
//             className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium'
//           >
//             <CgInsights className='text-lg' />
//             Industry Insights
//           </Link>

//           {/* Growth Tools Dropdown */}
//           <div className='relative group'>
            
//             {/* Trigger */}
//             <div className='flex items-center gap-1 text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer'>
//               <MdInsights className='text-lg' />
//               Growth Tools
//               <IoChevronDown className='text-sm transition-transform duration-200 group-hover:rotate-180' />
//             </div>

//             {/* Dropdown */}
//             <div className='absolute left-0 mt-2 w-50 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50'>

//               <Link 
//                 to="/resume" 
//                 className=' flex gap-1 items-center block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-t-xl'
//               ><PiReadCvLogoDuotone />
//                 Build Resume
//               </Link>

//               <Link 
//                 to="/cover-letter" 
//                 className='block gap-1 flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600'
//               ><SlEnvolopeLetter />
//                 Cover Letter
//               </Link>

//               <Link 
//                 to="/interview-prep" 
//                 className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600'
//               >
//                 Interview Prep
//               </Link>

//               <Link 
//                 to="/career-guides" 
//                 className='block gap-1 items-center flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-b-xl'
//               ><RiGuideFill />
//                 Career Guides
//               </Link>

//             </div>

//           </div>

//        </div>

//        {/* Profile */}
//        <div className='flex items-center gap-3 cursor-pointer'>
//           <div className='w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold'>
//             U
//           </div>
//        </div>
    
//     </div>

//   )
// }

// export default Navbar



// import React from 'react'
// import { CgInsights } from "react-icons/cg";
// import { MdInsights } from "react-icons/md";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { PiReadCvLogoDuotone } from "react-icons/pi";
// import { SlEnvolopeLetter } from "react-icons/sl";
// import { RiGuideFill } from "react-icons/ri";

// const Navbar = () => {
//   return (
    
//     <div className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10'>

//       <div className='flex items-center justify-between px-8 py-3 text-white'>

//        {/* Logo */}
//        <div className='font-bold text-xl cursor-pointer'>
//           <h3 className='m-0 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent'>
//             PrepmindAi
//           </h3>
//        </div>

//        {/* Navigation */}
//        <div className='flex items-center gap-8'>

//           {/* Industry Insights */}
//           <Link 
//             to="/industry-insights"
//             className='flex items-center gap-2 text-gray-300 hover:text-white transition font-medium'
//           >
//             <CgInsights className='text-lg' />
//             Industry Insights
//           </Link>

//           {/* Growth Tools Dropdown */}
//           <div className='relative group'>
            
//             {/* Trigger */}
//             <div className='flex items-center gap-1 text-gray-300 hover:text-white transition font-medium cursor-pointer'>
//               <MdInsights className='text-lg' />
//               Growth Tools
//               <IoChevronDown className='text-sm transition-transform duration-200 group-hover:rotate-180' />
//             </div>

//             {/* Dropdown */}
//             <div className='absolute left-0 mt-3 w-60 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200'>

//               <Link 
//                 to="/resume" 
//                 className='flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-white/10 hover:text-white rounded-t-xl'
//               >
//                 <PiReadCvLogoDuotone />
//                 Build Resume
//               </Link>

//               <Link 
//                 to="/cover-letter" 
//                 className='flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-white/10 hover:text-white'
//               >
//                 <SlEnvolopeLetter />
//                 Cover Letter
//               </Link>

//               <Link 
//                 to="/interview-prep" 
//                 className='px-4 py-2 text-gray-200 hover:bg-white/10 hover:text-white'
//               >
//                 Interview Prep
//               </Link>

//               <Link 
//                 to="/career-guides" 
//                 className='flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-white/10 hover:text-white rounded-b-xl'
//               >
//                 <RiGuideFill />
//                 Career Guides
//               </Link>

//             </div>

//           </div>

//        </div>

//        {/* Profile */}
//        <div className='flex items-center gap-3 cursor-pointer'>
//           <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-semibold'>
//             U
//           </div>
//        </div>

//       </div>
    
//     </div>

//   )
// }

// export default Navbar




// import React, { useState } from 'react'
// import { CgInsights } from "react-icons/cg";
// import { MdInsights } from "react-icons/md";
// import { IoChevronDown } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { PiReadCvLogoDuotone } from "react-icons/pi";
// import { SlEnvolopeLetter } from "react-icons/sl";
// import { RiGuideFill } from "react-icons/ri";
// import { FaExternalLinkSquareAlt } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import { MdManageAccounts } from "react-icons/md";
// import { RiLogoutCircleRFill } from "react-icons/ri";

// const Navbar = () => {

//   // const navigate = useNavigate();
 
//   const handleSignout = () => {
    
//   }

  

//   return (
    
//     <div className='fixed top-2 left-0 w-full z-50 flex justify-center'>

//       {/* Glass Container */}
//       <div className='w-[99%] max-w-6xl flex items-center justify-between px-4 py-2 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white'>

//        {/* Logo */}
//        <div className='font-bold text-lg cursor-pointer'>
        
//            <h3 className='text-lg font-semibold text-white'>
//     Prepmind<span className='text-indigo-400'>AI</span>
//   </h3>
//        </div>

//        {/* Navigation */}
//        <div className='flex items-center gap-6'>

//           <Link 
//             to="/industry-insights"
//             className='flex items-center gap-2 px-3 py-1 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition'
//           >
//             <CgInsights />
//             Industry Insights
//           </Link>

//           {/* Dropdown */}
//           <div className='relative group'>
            
//             <div className='flex items-center gap-1 px-3 py-1 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer'>
//               <MdInsights />
//               Growth Tools
//               <IoChevronDown className='text-sm transition-transform group-hover:rotate-180' />
//             </div>

//             {/* Dropdown */}
//             <div className='absolute left-0 mt-2 w-40 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200'>

//               <Link to="/resume" className='flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded-t-xl'>
//                 <PiReadCvLogoDuotone />
//                 Build Resume
//               </Link>

//               <Link to="/cover-letter" className='flex items-center gap-1 px-2 py-1 hover:bg-white/10'>
//                 <SlEnvolopeLetter />
//                 Cover Letter
//               </Link>

//               <Link to="/interview-prep" className='px-2 flex items-center gap-2 py-1 hover:bg-white/10'>
//                 <FaExternalLinkSquareAlt />
//                 Interview Prep
//               </Link>

//               <Link to="/career-guides" className='flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-b-xl'>
//                 <RiGuideFill />
//                 Career Guides
//               </Link>

//             </div>

//           </div>

//        </div>





//         <div className='relative group'>
            
//             <div className='flex items-center gap-1 px-3 py-1 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer'>
//               <MdInsights />
//               Growth Tools
//               <IoChevronDown className='text-sm transition-transform group-hover:rotate-180' />
//             </div>

//             {/* Dropdown */}
//             <div className='absolute left-0 mt-2 w-40 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200'>

//               <Link to="/resume" className='flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded-t-xl'>
//                 <PiReadCvLogoDuotone />
//                 Build Resume
//               </Link>

//               <Link to="/cover-letter" className='flex items-center gap-1 px-2 py-1 hover:bg-white/10'>
//                 <SlEnvolopeLetter />
//                 Cover Letter
//               </Link>

//               <Link to="/interview-prep" className='px-2 flex items-center gap-2 py-1 hover:bg-white/10'>
//                 <FaExternalLinkSquareAlt />
//                 Interview Prep
//               </Link>

//               <Link to="/career-guides" className='flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-b-xl'>
//                 <RiGuideFill />
//                 Career Guides
//               </Link>

//             </div>

//           </div>







//        {/* Profile */}
//        <div className='flex items-center gap-3 cursor-pointer'>
         
//           <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-sm font-semibold'  >U
//           </div>

           
//          <div className=''>
//            <div className=''>
//            <h2 className='name'>profile</h2>
//            <p className='email' >profile@gmail.com</p>
//            </div>

//            <Link className='' to={'/profile-update'}>Manage Accounts</Link>

//            <Link className='' onClick={handleSignout} to={'/'}>
//              Signout
//            </Link>

//          </div>
        

//        </div>




       

//       </div>
    
//     </div>

//   )
// }

// export default Navbar





// import React, { useState } from 'react'
// import { CgInsights } from "react-icons/cg";
// import { MdInsights } from "react-icons/md";
// import { IoChevronDown } from "react-icons/io5";
// import { Link, useNavigate } from 'react-router-dom';
// import { PiReadCvLogoDuotone } from "react-icons/pi";
// import { SlEnvolopeLetter } from "react-icons/sl";
// import { RiGuideFill } from "react-icons/ri";
// import { FaExternalLinkSquareAlt } from "react-icons/fa";
// import { MdManageAccounts } from "react-icons/md";
// import { RiLogoutCircleRFill } from "react-icons/ri";
// import { logoutUser } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Navbar = () => {

//   const [showProfile, setShowProfile] = useState(false);

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const handleSignout = async(e) => {
    
//     try {
//        e.preventDefault();
       
//        await axios.get('http://localhost:5000/api/v1/user/logout', {
//         withCredentials: true
//        });
  
//         dispatch(logoutUser());
      
//         toast.success("logout successfully...")
  
//         navigate('/login');

//     } catch (error) {
      
//         console.log("logout failed", error);

//     }
//   };

//   return (
//     <div className='fixed top-2 left-0 w-full z-50 flex justify-center'>

//       {/* NAVBAR */}
//       <div className='w-[99%] max-w-6xl flex items-center justify-between px-4 py-2 
//       rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white'>

//         {/* LOGO */}
//         <h3 className='text-lg font-semibold cursor-pointer'>
//           Prepmind<span className='text-indigo-400'>AI</span>
//         </h3>

//         {/* NAV LINKS */}
//         <div className='flex items-center gap-6'>

//           <Link 
//             to="/industry-insights"
//             className='flex items-center gap-2 px-3 py-1 rounded-lg text-gray-300 
//             hover:text-white hover:bg-white/10 transition'
//           >
//             <CgInsights />
//             Industry Insights
//           </Link>

//           {/* DROPDOWN */}
//           <div className='relative group'>

//             <div className='flex items-center gap-1 px-3 py-1 rounded-lg text-gray-300 
//             hover:text-white hover:bg-white/10 cursor-pointer'>
//               <MdInsights />
//                Growth Tools
//               <IoChevronDown className='text-sm transition group-hover:rotate-180' />
//             </div>

//             <div className='absolute left-0 mt-2 w-44 backdrop-blur-lg bg-white/10 
//             border border-white/20 rounded-xl shadow-xl opacity-0 invisible 
//             translate-y-2 group-hover:opacity-100 group-hover:visible 
//             group-hover:translate-y-0 transition-all'>

//               <Link to="/resume-builder" className='flex items-center gap-2 px-3 py-2 hover:bg-white/10'>
//                 📄 Resume
//               </Link>

//               <Link to="/cover-letter" className='flex items-center gap-2 px-3 py-2 hover:bg-white/10'>
//                 ✉️ Cover Letter
//               </Link>

//               <Link to="/interview-prep" className='flex items-center gap-2 px-3 py-2 hover:bg-white/10'>
//                 🎤 Interview Prep
//               </Link>

//               <Link to="/career-guides" className='flex items-center gap-2 px-3 py-2 hover:bg-white/10'>
//                 📚 Career Guides
//               </Link>

//             </div>
//           </div>

//         </div>

//         {/* PROFILE */}
//         <div className="relative">

//           {/* Avatar */}
//           <div
//             onClick={() => setShowProfile(!showProfile)}
//             className="w-9 h-9 rounded-full 
//             bg-gradient-to-r from-purple-500 to-indigo-500 
//             flex items-center justify-center font-bold 
//             cursor-pointer hover:scale-110 transition shadow-md"
//           >
//             {/* {getInitials(user.name)} */}
//           </div>

//           {/* DROPDOWN */}
//          {showProfile && (
//   <div className="absolute right-0 mt-4 w-64 
//   bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] 
//   border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)] 
//   p-4 z-50">

//     {/* Top Profile Section */}
//     <div className="flex items-center gap-3 pb-4 border-b border-white/10">

//       {/* Avatar */}
//       <div className="w-12 h-12 rounded-full 
//       bg-gradient-to-r from-purple-500 to-indigo-500 
//       flex items-center justify-center text-lg font-bold shadow-lg">
//         A
//       </div>

//       {/* Info */}
//       <div>
//         <h3 className="text-sm font-semibold">Adarsh Patidar</h3>
//         <p className="text-xs text-gray-400">profile@gmail.com</p>
//       </div>

//     </div>

//     {/* Actions */}
//     <div className="mt-4 flex flex-col gap-2 text-sm">

//       <Link 
//         to="/profile-update"
//         className="flex items-center gap-3 px-3 py-2 rounded-lg 
//         hover:bg-white/10 transition-all"
//       >
//         <MdManageAccounts className="text-lg text-purple-400" />
//         Manage Account
//       </Link>

//       <button 
//         onClick={handleSignout}
//         className="flex items-center gap-3 px-3 py-2 rounded-lg 
//         hover:bg-red-500/20 text-red-400 transition-all"
//       >
//         <RiLogoutCircleRFill className="text-lg" />
//         Sign Out
//       </button>

//     </div>

//   </div>
// )}

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar





// import React, { useState } from 'react'
// import { CgInsights } from "react-icons/cg";
// import { MdInsights } from "react-icons/md";
// import { IoChevronDown } from "react-icons/io5";
// import { Link, useNavigate } from 'react-router-dom';
// import { MdManageAccounts } from "react-icons/md";
// import { RiLogoutCircleRFill } from "react-icons/ri";
// import { logoutUser } from '../../redux/authSlice';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Navbar = () => {

//   const [showProfile, setShowProfile] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignout = async (e) => {
//     try {
//       e.preventDefault();

//       await axios.get('http://localhost:5000/api/v1/user/logout', {
//         withCredentials: true
//       });

//       dispatch(logoutUser());
//       toast.success("logout successfully...");
//       navigate('/login');

//     } catch (error) {
//       console.log("logout failed", error);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50">

//       {/* NAVBAR */}
//       <div className="w-full flex items-center justify-between px-4 py-1.5
//       bg-[#0b1020]/20 backdrop-blur-xl border-b border-white/10 text-white">

//         {/* LOGO */}
//         {/* <h3 className="text-xl font-bold tracking-wide cursor-pointer">
//           Prepmind<span className="text-indigo-400">AI</span>
//         </h3> */}
//         {/* LOGO */}
// {/* <h3 className="text-xl font-extrabold tracking-tight cursor-pointer flex items-center gap-1">
//   <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//     Prepmind
//   </span>
//   <span className="px-1.5 py-[2px] text-xs rounded-md bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
//     AI
//   </span>
// </h3> */}

// {/* LOGO */}
// <h3 className="text-xl font-bold tracking-wide cursor-pointer flex items-center gap-2">
  
//   {/* Dot indicator */}
//   <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

//   {/* Text */}
//   <span className="text-white">
//     Prepmind
//   </span>

//   {/* AI Badge */}
//   <span className="text-[10px] px-2 py-[2px] rounded-full 
//   bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
//     AI
//   </span>

// </h3>

//         {/* NAV LINKS */}
//         <div className="flex items-center gap-8">

//           {/* LINK */}
//           <Link 
//             to="/industry-insights"
//             className="relative flex items-center gap-2 text-gray-300 hover:text-white transition group"
//           >
//             <CgInsights />
//             Industry Insights

//             {/* underline effect */}
//             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
//           </Link>

//           {/* DROPDOWN */}
//           <div className="relative group">

//             <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
//               <MdInsights />
//               Growth Tools
//               <IoChevronDown className="text-sm transition group-hover:rotate-180" />
//             </div>

//             {/* DROPDOWN MENU */}
//             <div className="absolute left-0 mt-3 w-48 
//             bg-[#0b1020]/95 backdrop-blur-xl 
//             border border-white/10 rounded-xl shadow-xl 
//             opacity-0 invisible translate-y-2 
//             group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
//             transition-all duration-200">

//               <Link to="/resume-builder" className="block px-4 py-2 hover:bg-white/10">
//                 📄 Resume Builder
//               </Link>

//               <Link to="/cover-letter" className="block px-4 py-2 hover:bg-white/10">
//                 ✉️ Cover Letter
//               </Link>

//               <Link to="/interview-prep" className="block px-4 py-2 hover:bg-white/10">
//                 🎤 Interview Prep
//               </Link>

//               <Link to="/career-guides" className="block px-4 py-2 hover:bg-white/10">
//                 📚 Career Guides
//               </Link>

//             </div>
//           </div>

//         </div>

//         {/* PROFILE (UNCHANGED) */}
//         <div className="relative">

//           <div
//             onClick={() => setShowProfile(!showProfile)}
//             className="w-9 h-9 rounded-full 
//             bg-gradient-to-r from-purple-500 to-indigo-500 
//             flex items-center justify-center font-bold 
//             cursor-pointer hover:scale-110 transition shadow-md"
//           >
//           </div>

//           {showProfile && (
//             <div className="absolute right-0 mt-4 w-64 
//             bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] 
//             border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)] 
//             p-4 z-50">

//               <div className="flex items-center gap-3 pb-4 border-b border-white/10">

//                 <div className="w-12 h-12 rounded-full 
//                 bg-gradient-to-r from-purple-500 to-indigo-500 
//                 flex items-center justify-center text-lg font-bold shadow-lg">
//                   A
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold">Adarsh Patidar</h3>
//                   <p className="text-xs text-gray-400">profile@gmail.com</p>
//                 </div>

//               </div>

//               <div className="mt-4 flex flex-col gap-2 text-sm">
              
//                 <Link 
//                   to="/profile-update"
//                   className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10"
//                 >
//                   <MdManageAccounts className="text-lg text-purple-400" />
//                   Manage Account
//                 </Link>

//                 <button 
//                   onClick={handleSignout}
//                   className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400"
//                 >
//                   <RiLogoutCircleRFill className="text-lg" />
//                   Sign Out
//                 </button>

//               </div>

//             </div>
//           )}

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar;




import React, { useState } from 'react'
import { CgInsights } from "react-icons/cg";
import { MdInsights } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { logoutUser } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {

  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async (e) => {
    try {
      e.preventDefault();

      await axios.get('http://localhost:5000/api/v1/user/logout', {
        withCredentials: true
      });

      dispatch(logoutUser());
      toast.success("logout successfully...");
      navigate('/login');

    } catch (error) {
      console.log("logout failed", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* NAVBAR */}
      <div className="w-full flex items-center justify-between px-4 py-1.5
      bg-[#0b1020]/20 backdrop-blur-xl border-b border-white/10 text-white">

        {/* LOGO */}
        <h3 className="text-xl font-bold tracking-wide cursor-pointer flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white">Prepmind</span>
          <span className="text-[10px] px-2 py-[2px] rounded-full 
          bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
            AI
          </span>
        </h3>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">

          <Link 
            to="/industry-insights"
            className="relative flex items-center gap-2 text-gray-300 hover:text-white transition group"
          >
            <CgInsights />
            Industry Insights

            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* DROPDOWN */}
          <div className="relative group">

            <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
              <MdInsights />
              Growth Tools
              <IoChevronDown className="text-sm transition group-hover:rotate-180" />
            </div>

            {/* UPDATED SMALL DROPDOWN */}
            <div className="absolute left-0 mt-2 w-36 
            bg-[#0b1020]/95 backdrop-blur-xl 
            border border-white/10 rounded-lg shadow-lg 
            opacity-0 invisible translate-y-2 
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
            transition-all duration-150">

              <Link to="/resume-builder" className="block px-3 py-1.5 text-sm hover:bg-white/10">
                📄 Resume Builder
              </Link>

              <Link to="/cover-letter" className="block px-3 py-1.5 text-sm hover:bg-white/10">
                ✉️ Cover Letter
              </Link>

              <Link to="/interview-prep" className="block px-3 py-1.5 text-sm hover:bg-white/10">
                🎤 Interview Prep
              </Link>

              <Link to="/career-guides" className="block px-3 py-1.5 text-sm hover:bg-white/10">
                📚 Career Guides
              </Link>

            </div>
          </div>

        </div>

        {/* PROFILE (UNCHANGED) */}
        <div className="relative">

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="w-9 h-9 rounded-full 
            bg-gradient-to-r from-purple-500 to-indigo-500 
            flex items-center justify-center font-bold 
            cursor-pointer hover:scale-110 transition shadow-md"
          >
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-4 w-64 
            bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] 
            border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)] 
            p-4 z-50">

              <div className="flex items-center gap-3 pb-4 border-b border-white/10">

                <div className="w-12 h-12 rounded-full 
                bg-gradient-to-r from-purple-500 to-indigo-500 
                flex items-center justify-center text-lg font-bold shadow-lg">
                  A
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Adarsh Patidar</h3>
                  <p className="text-xs text-gray-400">profile@gmail.com</p>
                </div>

              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                
                <Link 
                  to="/profile-update"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  <MdManageAccounts className="text-lg text-purple-400" />
                  Manage Account
                </Link>

                <button 
                  onClick={handleSignout}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400"
                >
                  <RiLogoutCircleRFill className="text-lg" />
                  Sign Out
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Navbar;