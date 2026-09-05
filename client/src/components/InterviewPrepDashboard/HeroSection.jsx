import React from "react";
import { useNavigate } from "react-router-dom";
import { Play, FileText, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white p-8 lg:p-12">
      {/* Background circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            🚀 AI Powered Interview Platform
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            Interview Dashboard
          </h1>

          <h2 className="mt-3 text-2xl font-semibold">
            Welcome Back 👋
          </h2>

          <p className="mt-4 max-w-xl text-blue-100 leading-7">
            Ready for your next interview? Practice AI-powered mock interviews,
            receive instant feedback, improve your communication, confidence,
            and technical skills—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/interview-setup")}
              className="flex items-center cursor-pointer gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#0A66C2] shadow-lg hover:scale-105 transition"
            >
              <Play size={18} />
              Start AI Interview
            </button>

            <button
              onClick={() => navigate("/my-interviews")}
              className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              <FileText size={18} />
              View Reports
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl">

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                AI Interview Assistant
              </h3>

              <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold">
                Online
              </span>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/20 text-6xl">
                🎤
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between rounded-xl bg-white/10 p-3">
                <span>AI Feedback</span>
                <span className="font-semibold">Instant</span>
              </div>

              <div className="flex justify-between rounded-xl bg-white/10 p-3">
                <span>Questions</span>
                <span className="font-semibold">Unlimited</span>
              </div>

              <div className="flex justify-between rounded-xl bg-white/10 p-3">
                <span>Interview Mode</span>
                <span className="font-semibold">HR + Technical</span>
              </div>

              <div className="flex justify-between rounded-xl bg-white/10 p-3">
                <span>Difficulty</span>
                <span className="font-semibold">Adaptive AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




