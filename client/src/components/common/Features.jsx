import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowGuideFilled } from "react-icons/tb";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { PiReadCvLogoDuotone } from "react-icons/pi";

const Features = () => {
  const features = [
    { icon: <PiReadCvLogoDuotone />, title: "Smart Resume Creation", desc: "Build ATS-optimized resumes with AI suggestions" },
    { icon: <TbArrowGuideFilled />, title: "AI Career Guidance", desc: "Get personalized roadmap based on your skills and goals" },
    { icon: <FaExternalLinkSquareAlt />, title: "Interview Preparation", desc: "Practice with AI and get instant feedback" },
    { icon: <CgInsights />, title: "Industry Insights", desc: "Stay updated with trends and salary data" },
  ]

  const stats = [
    { number: "50+", label: "Industries Covered" },
    { number: "1000+", label: "Interview Questions" },
    { number: "ATS", label: "Optimized Templates" },
    { number: "24/7", label: "AI Support" },
  ]

  return (
    <section className="py-14 px-4 bg-[#F8FAFC]">
      <div className='text-center mb-12'>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Everything You Need to Get Hired
        </h2>
        <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
          AI tools designed to help you land your dream job faster
        </p>
      </div>

      {/* Features Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16'>
        {features.map((f) => (
          <Link key={f.title} to="#" className='group p-6 rounded-2xl bg-white border-gray-200 hover:border-[#0A66C2] hover:shadow-lg transition-all'>
            <div className='w-12 h-12 rounded-xl bg-[#E8F0FE] text-[#0A66C2] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition'>
              {f.icon}
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>{f.title}</h3>
            <p className='text-gray-600 text-sm'>{f.desc}</p>
          </Link>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mb-16 p-6 rounded-2xl bg-[#E8F0FE] border border-[#D2E3FC] text-center">
  <p className="text-sm font-medium text-[#0A66C2] mb-3">Built for students and job seekers in India</p>
  <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">
    <span>✓ ATS-Friendly Resumes</span>
    <span>✓ 1000+ Interview Questions</span>
    <span>✓ Industry-wise Career Paths</span>
  </div>
</div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl bg-white border-gray-200">
            <h2 className="text-3xl font-bold text-[#0A66C2]">{s.number}</h2>
            <p className="text-sm text-gray-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features