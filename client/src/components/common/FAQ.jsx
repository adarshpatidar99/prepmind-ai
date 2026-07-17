// import React, { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";

// const faqs = [
//   {
//     question: "What is this platform about?",
//     answer:
//       "This platform helps you prepare for interviews and provides AI-powered career guidance based on your skills and goals.",
//   },
//   {
//     question: "How does AI career guidance work?",
//     answer:
//       "Our AI analyzes your skills and goals to suggest personalized career paths and learning roadmaps.",
//   },
//   {
//     question: "Are the interview questions real?",
//     answer:
//       "Yes, we provide curated questions based on real-world company patterns and industry trends.",
//   },
 
//   {
//     question: "Can beginners use this platform?",
//     answer:
//       "Absolutely! The platform is designed for both beginners and experienced candidates.",
//   },
//   {
//     question: "Does it cover DSA and system design?",
//     answer:
//       "Yes, we cover DSA, system design, and other important interview topics.",
//   },
//   {
//     question: "How is this different from other platforms?",
//     answer:
//       "We provide AI-driven personalized guidance, real-time feedback, and structured interview preparation.",
//   },
//   {
//     question: "Can this platform help me get a job?",
//     answer:
//       "It improves your skills, confidence, and preparation, which increases your chances of getting hired.",
//   },
    
//   {
//     question: "How often is the content updated?",
//     answer:
//       "We regularly update questions and content based on latest industry trends.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 px-4">

//       <div className="max-w-3xl mx-auto">

//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center mb-10 text-white">
//           Frequently Asked Questions
//         </h1>

//         {/* FAQ */}
//         <div className="space-y-4">

//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/20"
//             >

//               {/* Question */}
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center p-4"
//               >
//                 <span className="text-left font-semibold text-white text-sm md:text-base">
//                   {faq.question}
//                 </span>

//                 {/* Arrow */}
//                 <FiChevronDown
//                   className={`text-white text-xl transition-transform duration-300 ${
//                     activeIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Answer with animation */}
//               <div
//                 className={`grid transition-all duration-300 ${
//                   activeIndex === index
//                     ? "grid-rows-[1fr] opacity-100"
//                     : "grid-rows-[0fr] opacity-0"
//                 }`}
//               >
//                 <div className="overflow-hidden">
//                   <p className="px-4 pb-4 text-gray-300 text-sm">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default FAQ;





import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform helps you prepare for interviews and provides AI-powered career guidance based on your skills and goals.",
  },
  {
    question: "How does AI career guidance work?",
    answer:
      "Our AI analyzes your skills and goals to suggest personalized career paths and learning roadmaps.",
  },
  {
    question: "Are the interview questions real?",
    answer:
      "Yes, we provide curated questions based on real-world company patterns and industry trends.",
  },
  
  {
    question: "Does it cover DSA and system design?",
    answer:
      "Yes, we cover DSA, system design, and other important interview topics.",
  },

   {
    question: "Can this platform help me get a job?",
    answer:
      "It improves your skills, confidence, and preparation, which increases your chances of getting hired.",
  },

   {
    question: "How often is the content updated?",
    answer:
      "We regularly update questions and content based on latest industry trends.",
  },

  {
    question: "Can beginners use this platform?",
    answer:
      "Absolutely! The platform is designed for both beginners and experienced candidates.",
  },



];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1> */}

         <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-2">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border  border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 
              ${
                activeIndex === index
                  ? " scale-[1.02] shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  : "hover:scale-[1.01]"
              }`}
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition"></div>

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="relative ml-2 z-8 w-full flex justify-between items-center p-3"
              >
                <span className="text-left text-white font-medium text-sm md:text-base">
                  {faq.question}
                </span>

                <FiChevronDown
                  className={`text-white text-xl mr-2 transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180 text-purple-400" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-2 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;