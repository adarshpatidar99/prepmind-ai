import React from "react";

const HeroSection = () => {
  return (
    <>

    <section className="relative w-full min-h-screen pt-32 md:pt-40 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">

      {/* 🔥 Animated Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-30 rounded-full blur-[120px] animate-pulse"></div>

      {/* 🔥 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative text-center space-y-8 z-10">
          
        <div className="space-y-6 max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Your AI Career Coach for 
            <br/>
            Professional Success
          </h1>

          <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools designed to help you succeed faster.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4"> 

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold 
          shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300">
            Get Started
          </button>

          <button className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition">
            Watch Demo
          </button>

        </div>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 hover:scale-105 transition duration-300">
            <img
              src="/banner.jpeg"
              alt="Dashboard Preview"
              className="rounded-lg shadow-xl max-w-[90%]"
            />
          </div>
        </div>

      </div>

    </section>

    </>
  );
};

export default HeroSection;