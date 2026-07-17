import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-14 px-4 bg-gradient-to-b from-black via-gray-900 to-black">

      {/* Heading */}
      <div className='text-center mb-12'>
        {/* <h2 className='text-2xl md:text-4xl font-bold'>
          How It Works
        </h2> */}
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
            How It Works
        </h1>

        <p className='mt-3 text-gray-300 max-w-xl mx-auto text-sm md:text-base'>
          Simple steps to accelerate your career with AI-powered guidance
        </p>
      </div>

      {/* Steps */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto'>

        {/* Step 1 */}
        <div className='group p-5 min-h-[180px] rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition'>
          
          <div className='w-10 h-10 rounded-full bg-purple-500/20 border border-white/20 flex items-center justify-center mb-3 text-xl'>
            <FaUserPlus />
          </div>

          <h3 className='text-base font-semibold mb-1'>Sign Up</h3>
          <p className='text-gray-300 text-xs'>Create your free account in seconds</p>

        </div>

        {/* Step 2 */}
        <div className='group p-5 min-h-[180px] rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition'>
          
          <div className='w-10 h-10 rounded-full bg-purple-500/20 border border-white/20 flex items-center justify-center mb-3 text-xl'>
            <MdOutlineEditNote />
          </div>

          <h3 className='text-base font-semibold mb-1'>Build Profile</h3>
          <p className='text-gray-300 text-xs'>Add skills, resume and goals</p>

        </div>

        {/* Step 3 */}
        <div className='group p-5 min-h-[180px] rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition'>
          
          <div className='w-10 h-10 rounded-full bg-purple-500/20 border border-white/20 flex items-center justify-center mb-3 text-xl'>
            <SiChatbot />
          </div>

          <h3 className='text-base font-semibold mb-1'>Get AI Guidance</h3>
          <p className='text-gray-300 text-xs'>Receive personalized career suggestions</p>

        </div>

        {/* Step 4 */}
        <div className='group p-5 min-h-[180px] rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-center flex flex-col items-center justify-center hover:bg-white/20 transition'>
          
          <div className='w-10 h-10 rounded-full bg-purple-500/20 border border-white/20 flex items-center justify-center mb-3 text-xl'>
            <FaBriefcase />
          </div>

          <h3 className='text-base font-semibold mb-1'>Get Job Ready</h3>
          <p className='text-gray-300 text-xs'>Prepare and crack interviews</p>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks