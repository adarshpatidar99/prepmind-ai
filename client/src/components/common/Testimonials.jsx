import React from 'react'
import { FaStar, FaQuoteLeft } from "react-icons/fa"; // add quote icon

const Testimonials = () => {
  const reviews = [
    {
      name: "Engineering Student",
      role: "Preparing for SDE Roles",
      quote: "The AI mock interviews helped me practice answers and improve my confidence before real interviews.",
    },
    {
      name: "BCA Fresher", 
      role: "Building First Resume",
      quote: "The ATS resume checker showed me exactly what to fix. My resume looks so much more professional now.",
    },
    {
      name: "MBA Graduate",
      role: "Switching to Business Analyst",
      quote: "The career roadmap gave me a clear list of skills to learn. No more confusion about what to do next.",
    },
  ]

  return (
    <section className="py-14 px-4 bg-[#F8FAFC]">
      <div className='text-center mb-14'>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Early Users Are Saying
        </h2>
        <p className='mt-3 text-gray-600'>Feedback from our beta testers</p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {reviews.map((r, i) => (
          <div key={i} className='relative p-8 rounded-2xl bg-white border-gray-200 hover:shadow-lg transition'>
            <FaQuoteLeft className='absolute top-6 left-6 text-[#E8F0FE] text-3xl' /> {/* subtle quote bg */}
            <div className='flex gap-1 mb-4 text-[#0A66C2] relative z-10'>
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed relative z-10'>"{r.quote}"</p>
            <div className='relative z-10'>
              <h4 className='font-semibold text-gray-900'>{r.name}</h4>
              <p className='text-sm text-gray-600'>{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials