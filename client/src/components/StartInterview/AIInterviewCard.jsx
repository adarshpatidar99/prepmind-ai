// import React, { useEffect, useState } from "react";
// import {
//   Bot,
//   Clock3,
//   BarChart3,
//   Tag,
//   Mic,
//   Sparkles
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const AIInterviewCard = ({
//   interview,
//   questions,
//   currentQuestion = 0,
//   timeRemaining = "14:30",
// }) => {
//   const progress = ((currentQuestion + 1) / questions.length) * 100;
//   const question = questions[currentQuestion];
//   const [seconds, setSeconds] = useState(timeRemaining);

//   // Pulse animation for last 30 seconds
//   const isUrgent = seconds <= "00:30";

//   useEffect(() => {
//     setSeconds(timeRemaining);
//   }, [timeRemaining]);

//   return (
//     <section className="mt-8">
//       <div className="bg-white rounded-3xl border-gray-200 shadow-xl overflow-hidden">

//         {/* Animated Top Header */}
//         <div className="p-6 border-b bg-gradient-to-r from-[#F7F9FC] to-white">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//             {/* Question Count + Progress */}
//             <div className="flex-1">
//               <div className="flex items-center justify-between mb-3">
//                 <motion.h2
//                   key={currentQuestion}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="text-lg font-bold text-gray-900"
//                 >
//                   Question {currentQuestion + 1} of {questions.length}
//                 </motion.h2>
//                 <motion.span
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 0.5 }}
//                   className="text-sm font-bold text-[#0A66C2]"
//                 >
//                   {Math.round(progress)}%
//                 </motion.span>
//               </div>

//               {/* Animated Progress Bar */}
//               <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-[#0A66C2] to-blue-400 rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                 />
//               </div>
//             </div>

//             {/* Animated Timer */}
//             <motion.div
//               animate={isUrgent? { scale: [1, 1.05, 1] } : {}}
//               transition={{ repeat: isUrgent? Infinity : 0, duration: 1 }}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold ${
//                 isUrgent
//                  ? "bg-red-100 text-red-600"
//                   : "bg-[#0A66C2]/10 text-[#0A66C2]"
//               }`}
//             >
//               <Clock3 size={18} className={isUrgent? "animate-pulse" : ""} />
//               {timeRemaining}
//             </motion.div>

//           </div>
//         </div>

//         {/* Question Area */}
//         <div className="p-8 md:p-10">

//           {/* AI Avatar with Floating Animation */}
//           <div className="flex flex-col items-center text-center">
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="relative"
//             >
//               <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0A66C2] to-blue-500 flex items-center justify-center shadow-lg">
//                 <Bot size={44} className="text-white" />
//               </div>
//               <motion.div
//                 animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute inset-0 rounded-2xl bg-[#0A66C2]/30"
//               />
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-5 text-2xl font-bold text-gray-900 flex items-center gap-2"
//             >
//               <Sparkles size={20} className="text-[#0A66C2]" />
//               AI Interviewer
//             </motion.h2>

//             <p className="mt-2 text-gray-500 max-w-xl">
//               Read the question carefully and answer naturally.
//               Speak as if you're in a real interview.
//             </p>
//           </div>

//           {/* Current Question with Fade Animation */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentQuestion}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="mt-10 bg-gradient-to-br from-[#0A66C2]/5 to-blue-50 rounded-2xl border-[#0A66C2]/20 p-8"
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <Mic size={16} className="text-[#0A66C2]" />
//                 <h3 className="text-sm uppercase tracking-wider text-[#0A66C2] font-bold">
//                   Current Question
//                 </h3>
//               </div>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-2xl md:text-3xl leading-relaxed font-semibold text-gray-900"
//               >
//                 {question.question}
//               </motion.p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Info Cards with Stagger Animation */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
//             {[
//               {
//                 icon: BarChart3,
//                 label: "Difficulty",
//                 value: interview.difficulty,
//                 color: "blue",
//                 bg: "bg-blue-50"
//               },
//               {
//                 icon: Tag,
//                 label: "Category",
//                 value: interview.interviewType,
//                 color: "green",
//                 bg: "bg-green-50"
//               },
//               {
//                 icon: Clock3,
//                 label: "Expected Time",
//                 value: "2 Minutes",
//                 color: "orange",
//                 bg: "bg-orange-50"
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * i }}
//                 whileHover={{ y: -4, transition: { duration: 0.2 } }}
//                 className={`${item.bg} rounded-2xl p-5 border border-transparent hover:border-${item.color}-200`}
//               >
//                 <div className={`flex items-center gap-2 mb-3 text-${item.color}-700`}>
//                   <item.icon size={18} />
//                   <span className="font-semibold text-sm">{item.label}</span>
//                 </div>
//                 <p className="text-gray-900 font-bold text-lg capitalize">
//                   {item.value}
//                 </p>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIInterviewCard;










import React, { useEffect, useState } from "react";
import {
  Bot,
  Clock3,
  BarChart3,
  Tag,
  Mic,
  Sparkles,
  ListChecks,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AIInterviewCard = ({
  interview,
  questions = [],
  currentQuestion = 0,
  timeRemaining = "14:30",
}) => {
  const question = questions[currentQuestion];

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  const [seconds, setSeconds] = useState(timeRemaining);

  useEffect(() => {
    setSeconds(timeRemaining);
  }, [timeRemaining]);

  if (!question) {
    return null;
  }

  const isMCQ = interview.questionType === "mcq";

  const isUrgent =
    typeof seconds === "number"
      ? seconds <= 30
      : seconds <= "00:30";

  return (
    <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

      {/* TOP PROGRESS */}
      <div className="p-5 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-[#F7F9FC] to-white">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div className="flex-1">

            <div className="flex items-center justify-between mb-3">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Interview Progress
                </p>

                <motion.h2
                  key={currentQuestion}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-lg font-bold text-gray-900 mt-1"
                >
                  Question {currentQuestion + 1} of {questions.length}
                </motion.h2>
              </div>

              <span className="text-sm font-bold text-[#0A66C2]">
                {Math.round(progress)}%
              </span>

            </div>

            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">

              <motion.div
                className="h-full bg-gradient-to-r from-[#0A66C2] to-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6 }}
              />

            </div>

          </div>

          {/* TIMER */}
          <motion.div
            animate={
              isUrgent
                ? { scale: [1, 1.05, 1] }
                : {}
            }
            transition={{
              repeat: isUrgent ? Infinity : 0,
              duration: 1,
            }}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold ${
              isUrgent
                ? "bg-red-50 text-red-600 border border-red-100"
                : "bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/10"
            }`}
          >
            <Clock3
              size={18}
              className={isUrgent ? "animate-pulse" : ""}
            />

            <span>{timeRemaining}</span>
          </motion.div>

        </div>
      </div>

      {/* QUESTION CONTENT */}
      <div className="p-6 sm:p-8 lg:p-10">

        {/* AI INTERVIEWER */}
        <div className="flex flex-col items-center text-center">

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#0A66C2] to-blue-500 flex items-center justify-center shadow-lg shadow-blue-100">

              <Bot
                size={42}
                className="text-white"
              />

            </div>

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-3xl bg-[#0A66C2]/30"
            />

          </motion.div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900 flex items-center gap-2">

            <Sparkles
              size={20}
              className="text-[#0A66C2]"
            />

            AI Interviewer

          </h2>

          <p className="mt-2 text-gray-500 max-w-xl text-sm sm:text-base">
            {isMCQ
              ? "Choose the best answer based on your understanding."
              : "Answer naturally and explain your thoughts clearly."}
          </p>

        </div>

        {/* QUESTION */}
        <AnimatePresence mode="wait">

          <motion.div
            key={currentQuestion}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-8 sm:mt-10 rounded-3xl border border-[#0A66C2]/15 bg-gradient-to-br from-[#0A66C2]/5 to-blue-50 p-6 sm:p-8"
          >

            <div className="flex items-center justify-between gap-4 mb-5">

              <div className="flex items-center gap-2">

                {isMCQ ? (
                  <ListChecks
                    size={18}
                    className="text-[#0A66C2]"
                  />
                ) : (
                  <Mic
                    size={18}
                    className="text-[#0A66C2]"
                  />
                )}

                <span className="text-xs sm:text-sm uppercase tracking-wider text-[#0A66C2] font-bold">
                  {isMCQ   
                    ? "Multiple Choice Question"
                    : "Interview Question"}
                </span>

              </div>

              <span className="text-xs font-semibold bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600">
                {question.difficulty || "Medium"}
              </span>

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-bold text-gray-900"
            >
              {question.question}
            </motion.p>

          </motion.div>

        </AnimatePresence>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

          <InfoCard
            icon={BarChart3}
            label="Difficulty"
            value={question.difficulty || interview.difficulty || "Medium"}
          />

          <InfoCard
            icon={Tag}
            label="Category"
            value={question.category || interview.interviewType}
          />

          <InfoCard
            icon={Clock3}
            label="Question Type"
            value={isMCQ ? "MCQ" : "Descriptive"}
          />

        </div>

      </div>

    </section>
  );
};

const InfoCard = ({
  icon: Icon,
  label,
  value,
}) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
  >

    <div className="flex items-center gap-2 text-gray-500 mb-2">

      <Icon size={17} />

      <span className="text-xs font-semibold uppercase tracking-wide">
        {label}
      </span>

    </div>

    <p className="font-bold text-gray-900 capitalize">
      {value}
    </p>

  </motion.div>
);

export default AIInterviewCard;