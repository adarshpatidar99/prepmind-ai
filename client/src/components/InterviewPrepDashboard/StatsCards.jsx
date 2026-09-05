import React from "react";
import { Mic, BarChart3, Trophy, Clock, TrendingUp } from "lucide-react";

const StatsCards = ({ data }) => {
  const stats = data || {
    totalInterviews: 15,
    interviewsThisWeek: 3,
    avgScore: 82,
    avgLabel: "Excellent",
    bestScore: 95,
    bestInterview: "Amazon SDE Interview",
    practiceTime: 12,
    practiceTimeframe: "This Month"
  };

  const cards = [
    {
      title: "Total Interviews",
      value: stats.totalInterviews,
      subtext: `+${stats.interviewsThisWeek} this week`,
      icon: Mic,
      gradient: "from-[#0A66C2] to-blue-600"
    },
    {
      title: "Average Score",
      value: `${stats.avgScore}%`,
      subtext: stats.avgLabel,
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Best Score",
      value: `${stats.bestScore}%`,
      subtext: stats.bestInterview,
      icon: Trophy,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Practice Time",
      value: `${stats.practiceTime}h`,
      subtext: stats.practiceTimeframe,
      icon: Clock,
      gradient: "from-purple-500 to-[#004182]"
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp size={20} className="text-[#0A66C2]" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Overall Stats</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-4 sm:p-5 border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} rounded-t-2xl`}></div>

              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${card.gradient}`}>
                  <Icon size={18} className="text-white" />
                </div>
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-500">{card.title}</p>
              <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">{card.value}</p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-gray-600 truncate">{card.subtext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCards;