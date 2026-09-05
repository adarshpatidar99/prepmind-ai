import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
  { icon: <FaUserPlus />, title: "Join PrepMind", desc: "Create your free account and get started" },
  { icon: <MdOutlineEditNote />, title: "Build ATS Resume", desc: "AI helps you create a resume that gets shortlisted" },
  { icon: <SiChatbot />, title: "Prepare Smarter", desc: "Practice 1000+ questions and mock interviews" },
  { icon: <FaBriefcase />, title: "Get Hired Faster", desc: "Apply to jobs with confidence and guidance" },
]

  return (
    <section className="py-14 px-4 bg-white">
      {/* Heading */}
      <div className='text-center mb-16'>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className='mt-3 text-gray-600 max-w-2xl mx-auto'>
          4 simple steps to accelerate your career with AI
        </p>
      </div>

      {/* Steps */}
      <div className='relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>

        {/* Connecting Line for Desktop */}
        <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-0.5 bg-[#D2E3FC] z-0"></div>

        {steps.map((step, i) => (
          <div key={step.title} className='relative z-10 group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0A66C2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center'>

            <div className='relative mb-6'>
              <div className='w-14 h-14 mx-auto rounded-2xl bg-[#E8F0FE] text-[#0A66C2] flex items-center justify-center text-2xl group-hover:scale-110 transition'>
                {step.icon}
              </div>
              {/* Step number badge */}
              <div className='absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0A66C2] text-white text-xs font-bold flex items-center justify-center shadow-sm'>
                {i + 1}
              </div>
            </div>

            <h3 className='text-lg font-semibold text-gray-900 mb-2'>{step.title}</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>{step.desc}</p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks