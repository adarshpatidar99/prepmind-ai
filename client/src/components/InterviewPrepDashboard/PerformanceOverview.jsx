import React, { useEffect, useState } from "react";

const performanceData = [
  {
    title: "Communication",
    score: 80,
  },
  {
    title: "Technical",
    score: 65,
  },
  {
    title: "Confidence",
    score: 75,
  },
  {
    title: "Problem Solving",
    score: 55,
  },
];

const PerformanceOverview = () => {
  const [animatedScores, setAnimatedScores] = useState(
    performanceData.map(() => 0)
  );

  useEffect(() => {
    performanceData.forEach((item, index) => {
      setTimeout(() => {
        setAnimatedScores((prev) => {
          const updated = [...prev];
          updated[index] = item.score;
          return updated;
        });
      }, index * 300); // Animate one after another
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-10">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Performance Overview
        </h2>
        <p className="text-gray-500 text-sm">
          Track your interview performance across different skills.
        </p>
      </div>

      {/* Progress Bars */}
      <div className="space-y-6">
        {performanceData.map((item, index) => (
          <div key={index}>
            {/* Label */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">
                {item.title}
              </span>

              <span className="font-semibold text-[#0A66C2]">
                {animatedScores[index]}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0A66C2] to-blue-500 transition-all duration-1000 ease-out"
                style={{
                  width: `${animatedScores[index]}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceOverview;