import React from 'react'
import { FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="relative py-20 px-4 bg-gray-950 overflow-hidden">
      {/* subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      <div className='relative max-w-4xl mx-auto text-center'>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Land Your Next Job With AI
        </h2>
        <p className='mt-5 text-lg text-gray-400 max-w-2xl mx-auto'>
         From job search to interview prep, PrepMind AI gives you all the tools to get hired.
        </p>
        
        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='px-9 py-4 rounded-xl bg-[#0A66C2] text-white font-bold text-lg hover:bg-[#004182] transition-all shadow-lg shadow-[#0A66C2]/30 hover:shadow-xl hover:shadow-[#0A66C2]/40 hover:-translate-y-0.5'>
            Start Building for Free
          </button>
          <button className='px-9 py-4 rounded-xl bg-gray-800 text-white font-semibold text-lg hover:bg-gray-700 transition border-gray-700'>
            See Live Demo
          </button>
        </div>

        {/* 3 trust points */}
        <div className='mt-12 grid-cols-1 sm:grid-cols-3 gap-6 text-left'>
          <div className='flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800'>
            <FaShieldAlt className='text-[#0A66C2] text-xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-white'>No Credit Card</p>
              <p className='text-sm text-gray-400'>Free plan is free forever</p>
            </div>
          </div>
          <div className='flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800'>
            <FaClock className='text-[#0A66C2] text-xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-white'>10 Minute Setup</p>
              <p className='text-sm text-gray-400'>From zero to resume</p>
            </div>
          </div>
          <div className='flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border-gray-800'>
            <FaHeadset className='text-[#0A66C2] text-xl mt-1 flex-shrink-0' />
            <div>
              <p className='font-semibold text-white'>Real Support</p>
              <p className='text-sm text-gray-400'>We reply within 24 hours</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FinalCTA