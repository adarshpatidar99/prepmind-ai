// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const MCQAnswerSection = ({
//   interview,
//   question,
//   questionIndex,
//   onNextQuestion,
// }) => {
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { id } = useParams();

//   const handleSubmitMcq = async () => {
//     if (!selectedAnswer) {
//       toast.error("Please select an answer");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const res = await axios.post(
//         `http://localhost:5000/api/v1/interview/submit-mcq-answer/${id}`,
//         {
//           questionIndex: questionIndex,
//           userAnswer: selectedAnswer,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log("MCQ submitted:", res.data);

//       toast.success("Answer submitted successfully");

//       // Move to next question
//       onNextQuestion();

//       // Clear previous selection
//       setSelectedAnswer("");

//     } catch (error) {
//       console.error("MCQ submit error:", error);

//       toast.error(
//         error.response?.data?.message || "Failed to submit answer"
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!question) {
//     return <p>Question not found.</p>;
//   }

//   return (
//     <div className="bg-white rounded-2xl border p-6">

//       {/* Question */}
//       <div className="mb-6">
//         <p className="text-sm text-gray-500 mb-2">
//           Question {questionIndex + 1}
//         </p>

//         <h2 className="text-xl font-bold text-gray-900">
//           {question.question}
//         </h2>
//       </div>

//       {/* Options */}
//       <div className="space-y-3">
//         {question.options?.map((option, index) => (
//           <button
//             type="button"
//             key={index}
//             onClick={() => setSelectedAnswer(option)}
//             className={`w-full text-left px-5 py-4 rounded-xl border transition ${
//               selectedAnswer === option
//                 ? "border-[#0A66C2] bg-[#0A66C2]/10 text-[#0A66C2]"
//                 : "border-gray-200 hover:border-[#0A66C2] hover:bg-gray-50"
//             }`}
//           >
//             <span className="font-semibold mr-3">
//               {String.fromCharCode(65 + index)}.
//             </span>

//             {option}
//           </button>
//         ))}
//       </div>

//       {/* Submit */}
//       <button
//         type="button"
//         onClick={handleSubmitMcq}
//         disabled={isSubmitting || !selectedAnswer}
//         className="w-full mt-6 bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 text-white py-3 rounded-xl font-semibold transition"
//       >
//         {isSubmitting ? "Submitting..." : "Submit Answer"}
//       </button>

//     </div>
//   );
// };

// export default MCQAnswerSection;








import axios from "axios";
import React, { useState } from "react";
import {
  Check,
  Circle,
  Send,
  ListChecks,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MCQAnswerSection = ({
  interview,
  question,
  questionIndex,
  onNextQuestion,
}) => {

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const { id } = useParams();

  const handleSubmitMcq = async () => {

    if (!selectedAnswer) {
      toast.error(
        "Please select an answer."
      );
      return;
    }

    try {

      setIsSubmitting(true);

      const res = await axios.post(
        `http://localhost:5000/api/v1/interview/submit-mcq-answer/${id}`,
        {
          questionIndex,
          userAnswer: selectedAnswer,
        },
        {
          withCredentials: true,
        }
      );

      console.log(
        "MCQ submitted:",
        res.data
      );

      toast.success(
        "Answer submitted successfully"
      );

      setSelectedAnswer("");

      onNextQuestion();

    } catch (error) {

      console.error(
        "MCQ submit error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to submit answer."
      );

    } finally {

      setIsSubmitting(false);

    }
  };

  if (!question) {
    return null;
  }

  return (
    <section className="mt-6 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">

            <ListChecks
              size={20}
              className="text-[#0A66C2]"
            />

          </div>

          <div>

            <h2 className="font-bold text-gray-900">
              Select Your Answer
            </h2>

            <p className="text-xs text-gray-500">
              Choose the best option
            </p>

          </div>

        </div>

        <span className="hidden sm:block px-3 py-1.5 rounded-full bg-blue-50 text-[#0A66C2] text-xs font-bold">
          MCQ
        </span>

      </div>

      {/* OPTIONS */}
      <div className="p-6">

        <div className="space-y-3">

          {question.options?.map(
            (option, index) => {

              const isSelected =
                selectedAnswer === option;

              const letter =
                String.fromCharCode(
                  65 + index
                );

              return (
                <button
                  type="button"
                  key={index}
                  disabled={isSubmitting}
                  onClick={() =>
                    setSelectedAnswer(option)
                  }
                  className={`group w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? "border-[#0A66C2] bg-[#0A66C2]/5 shadow-sm"
                      : "border-gray-100 bg-gray-50 hover:border-[#0A66C2]/40 hover:bg-white"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    {/* LETTER */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold transition ${
                        isSelected
                          ? "bg-[#0A66C2] text-white"
                          : "bg-white border border-gray-200 text-gray-600 group-hover:border-[#0A66C2]"
                      }`}
                    >
                      {isSelected ? (
                        <Check size={19} />
                      ) : (
                        letter
                      )}
                    </div>

                    {/* OPTION */}
                    <span
                      className={`flex-1 text-sm sm:text-base font-semibold ${
                        isSelected
                          ? "text-[#0A66C2]"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </span>

                    {/* RADIO */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? "border-[#0A66C2]"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0A66C2]" />
                      )}
                    </div>

                  </div>

                </button>
              );
            }
          )}

        </div>

        {/* SUBMIT */}
        <button
          type="button"
          onClick={handleSubmitMcq}
          disabled={
            isSubmitting ||
            !selectedAnswer
          }
          className="w-full mt-6 flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-2xl font-bold transition"
        >

          <Send size={18} />

          {isSubmitting
            ? "Submitting..."
            : "Submit Answer"}

        </button>

        {/* SELECTION STATUS */}
        <p className="text-center text-xs text-gray-400 mt-3">

          {selectedAnswer
            ? "Answer selected. Submit when you're ready."
            : "Select one option to continue."}

        </p>

      </div>

    </section>
  );
};

export default MCQAnswerSection;