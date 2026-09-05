import React from "react";
import {
  ArrowLeft,
  Building2,
  Briefcase,
  Clock,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const InterviewHeader = ({ interview }) => {
  const navigate = useNavigate();

  const stats = [
    { label: "Company", value: interview.company, icon: Building2 },
    { label: "Role", value: interview.role, icon: Briefcase },
    { label: "Difficulty", value: interview.difficulty, icon: BarChart3 },
    { label: "Duration", value: `${interview.duration} Min`, icon: Clock },
  ];

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Top Gradient Bar */}
        <div className="bg-gradient-to-r from-[#0A66C2] to-[#004182] px-5 pt-5 pb-16">
          <div className="flex items-center justify-between text-white">
            
            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)} 
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur hover:bg-white/30 transition flex items-center justify-center"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold">AI Interview Session</h1>
                <p className="text-blue-100 text-sm">Speak clearly and be confident</p>
              </div>
            </div>

            {/* Right Badge */}
            <span className="hidden md:block px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-sm font-semibold capitalize">
              {interview.interviewType}
            </span>
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="px-5 -mt-10">
          <div className="bg-white rounded-2xl shadow-lg border-gray-100 p-5 sm:p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
                    <p className="text-base font-bold text-gray-900 mt-0.5 truncate">
                      {value || "-"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default InterviewHeader;