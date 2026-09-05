import React from "react";
import { TrendingDown, ArrowRight, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const weakTopics = [
  {
    topic: "Dynamic Programming",
    score: 42,
    level: "High Priority",
    questions: 12
  },
  {
    topic: "Communication",
    score: 58,
    level: "Needs Practice",
    questions: 8
  },
  {
    topic: "Confidence",
    score: 61,
    level: "Needs Practice", 
    questions: 10
  },
  {
    topic: "System Design",
    score: 48,
    level: "High Priority",
    questions: 15
  },
];

const getProgressColor = (score) => {
  if (score < 50) return "from-red-500 to-orange-500";
  if (score < 65) return "from-amber-500 to-yellow-500";
  return "from-blue-500 to-[#0A66C2]";
};

const getLevelBadge = (level) => {
  if (level === "High Priority") 
    return "bg-red-50 text-red-700 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

const WeakTopics = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border-gray-100 p-5 sm:p-6 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <TrendingDown size={20} className="text-[#0A66C2]" />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Focus Areas
            </h2>
            <p className="text-gray-500 text-sm">
              Improve these to boost your overall score
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate("/practice")}
          className="hidden sm:flex items-center gap-2 text-[#0A66C2] font-semibold text-sm hover:gap-3 transition"
        >
          Practice All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Topics */}
      <div className="space-y-3">
        {weakTopics.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              {/* Left */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{item.topic}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getLevelBadge(item.level)}`}>
                    {item.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${getProgressColor(item.score)} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Current: {item.score}%</span>
                  <span className="flex items-center gap-1">
                    <Target size={12} />
                    {item.questions} Qs available
                  </span>
                </div>
              </div>

              {/* Right: CTA */}
              <button 
                onClick={() => navigate(`/practice?topic=${item.topic}`)}
                className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-r from-[#0A66C2] to-blue-600 text-white hover:scale-105 transition"
              >
                <Zap size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <button 
        onClick={() => navigate("/practice")}
        className="sm:hidden w-full mt-4 flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 rounded-xl font-semibold hover:bg-[#004182] transition"
      >
        Practice All
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default WeakTopics;