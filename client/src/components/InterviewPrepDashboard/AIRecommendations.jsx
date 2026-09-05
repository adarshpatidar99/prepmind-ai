import React from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Brain,
  BookOpen,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const recommendations = [
  {
    icon: <BookOpen size={18} />,
    title: "Practice Linked Lists",
    description:
      "Your accuracy is below average. Solve 10 easy and 5 medium problems.",
    priority: "High",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <Brain size={18} />,
    title: "Improve STAR Answers",
    description:
      "Your behavioral interview responses need better storytelling and structure.",
    priority: "Medium",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Target size={18} />,
    title: "Retry Amazon Interview",
    description:
      "You've improved recently. Try the Amazon SDE mock interview again.",
    priority: "Recommended",
    color: "from-[#0A66C2] to-blue-600",
  },
];

const getBadge = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
};

const AIRecommendations = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
            <Sparkles className="text-[#0A66C2]" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              AI Recommendations
            </h2>
            <p className="text-gray-500 text-sm">
              Personalized suggestions to improve your interview performance.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/interview-recommendations")}
          className="hidden md:flex items-center gap-2 text-[#0A66C2] font-semibold hover:gap-3 transition-all"
        >
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Recommendation Cards */}
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              {/* Left */}
              <div className="flex gap-4 flex-1">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center flex-shrink-0`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getBadge(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 leading-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <button
                className="hidden sm:flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-lg hover:bg-[#004182] transition"
              >
                <CheckCircle2 size={16} />
                Start
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="sm:hidden w-full mt-4 bg-[#0A66C2] text-white py-2.5 rounded-lg font-semibold hover:bg-[#004182] transition"
            >
              Start Recommendation
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/interview-recommendations")}
          className="md:hidden w-full flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 rounded-xl font-semibold hover:bg-[#004182] transition"
        >
          View All Recommendations
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AIRecommendations;