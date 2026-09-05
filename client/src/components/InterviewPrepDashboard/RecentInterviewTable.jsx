import React from "react";
import { Clock, ArrowRight, Trophy } from "lucide-react";

const interviews = [
  {
    company: "Amazon",
    role: "SDE Intern",
    type: "Technical",
    score: 92,
    date: "2 Aug 2026",
  },
  {
    company: "Google",
    role: "Frontend Developer",
    type: "HR",
    score: 84,
    date: "30 Jul 2026",
  },
  {
    company: "Microsoft",
    role: "Backend Developer",
    type: "Behavioral",
    score: 78,
    date: "26 Jul 2026",
  },
];

const RecentInterviewTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mt-10 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Recent Interviews
          </h2>
          <p className="text-gray-500 text-sm">
            Your latest interview sessions
          </p>
        </div>

        <button className="flex items-center gap-2 text-[#0A66C2] font-semibold hover:gap-3 transition-all">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="pb-3">Company</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Date</th>
              <th className="pb-3 text-center">Score</th>
            </tr>
          </thead>

          <tbody>
            {interviews.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="py-4 font-semibold">{item.company}</td>

                <td>{item.role}</td>

                <td>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 font-semibold">
                    {item.type}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={15} />
                    {item.date}
                  </div>
                </td>

                <td className="text-center">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold">
                    <Trophy size={15} />
                    {item.score}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}
      <div className="md:hidden space-y-4">
        {interviews.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900">
                  {item.company}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                <Trophy size={14} />
                {item.score}%
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {item.type}
              </span>

              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock size={14} />
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInterviewTable;