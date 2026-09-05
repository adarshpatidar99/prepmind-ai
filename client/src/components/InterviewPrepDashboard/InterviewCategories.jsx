import React from "react";
import {
  Briefcase,
  Code2,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "HR Interview",
    description:
      "Practice common HR questions like introduction, strengths, weaknesses, and salary discussions.",
    duration: "20 Minutes",
    icon: <Briefcase size={30} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Technical Interview",
    description:
      "Prepare for DSA, Java, MERN Stack, OOP, DBMS, OS, and other technical questions.",
    duration: "45 Minutes",
    icon: <Code2 size={30} />,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Behavioral Interview",
    description:
      "Master STAR method, leadership, teamwork, conflict resolution, and communication skills.",
    duration: "25 Minutes",
    icon: <Users size={30} />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Custom AI Interview",
    description:
      "Generate interview questions based on your company, role, and experience level.",
    duration: "AI Generated",
    icon: <Sparkles size={30} />,
    color: "bg-purple-50 text-purple-600",
  },
];

const InterviewCategories = () => {
  return (
    <section className="mt-10">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Choose Your Interview
        </h2>
        <p className="mt-2 text-gray-500">
          Select an interview type and start practicing with AI.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.color}`}
            >
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              {category.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-500 leading-6 flex-1">
              {category.description}
            </p>

            {/* Duration */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                ⏱ {category.duration}
              </span>
            </div>

            {/* Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-3 rounded-xl font-semibold hover:bg-[#004182] transition">
              Start Interview
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterviewCategories;