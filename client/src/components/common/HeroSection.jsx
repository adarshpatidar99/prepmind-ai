import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 pt-28 pb-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      {/* Soft Blue Glow */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

      {/* Soft Purple Glow */}
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border-blue-100 text-[#0A66C2] text-sm font-semibold">
          ✨ AI Career Platform
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
          {/* Line 1 */}
          <span className="block">
            Prepare{" "}
            <span className="bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">
              Smarter.
            </span>
          </span>

          {/* Line 2 */}
          <span className="block">
            Grow{" "}
            <span className="bg-gradient-to-r from-[#0A66C2] to-[#0F9D58] bg-clip-text text-transparent">
              Faster.
            </span>
          </span>
        </h1>

        {/* Subheading - smaller on mobile */}
        <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
          Build ATS-friendly resumes, practice AI-powered interviews, analyze your skills, 
          and get personalized career guidance to land your dream job.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex-col sm:flex-row justify-center gap-4">

          {/* Primary */}
          {/* <button className="px-8 py-3 rounded-full bg-[#0A66C2] text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
            Get Started Free
          </button> */}

          <Link
  to="/signup"
  className="px-8 py-3 rounded-full bg-[#0A66C2] text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all"
>
  Get Started Free
</Link>

          {/* Secondary */}
          <button className="px-8 py-3 rounded-full border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition">
            Explore Features
          </button>

        </div>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 px-4">
          {[
            { icon: "📄", text: "ATS Resume Builder" },
            { icon: "🎤", text: "AI Mock Interviews" },
            { icon: "📊", text: "Skill Analytics" },
            { icon: "🎯", text: "Job Matching" },
            { icon: "📚", text: "Career Guides" },
            { icon: "💬", text: "AI Career Coach" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FE] text-[#0A66C2] text-sm font-medium border-[#D2E3FC] hover:bg-[#D2E3FC] transition"
            >
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 px-4 flex justify-center w-full">
          <div className="bg-white rounded-3xl p-3 sm:p-5 border-gray-200 shadow-[0_20px_50px_rgba(10,102,194,0.15)] hover:-translate-y-1 transition-all duration-300 w-full max-w-5xl">
            <div className="relative">
              <img
                src="/banner.jpeg"
                alt="PrepMind AI Dashboard"
                className="rounded-2xl w-full"
              />
              {/* Glow effect */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#0A66C2]/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0A66C2]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Swipe to see Resume Builder • Interview Prep • Analytics
        </p>

      </div>
    </section>
  );
};

export default HeroSection;