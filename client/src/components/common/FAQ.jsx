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



import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "Is PrepMind AI really free?",
    a: "Yes. Our Free plan gives you access to core tools forever. No credit card required. You can upgrade to Pro anytime for advanced AI features."
  },
  {
    q: "Is this only for resume building?",
    a: "No. PrepMind Ai is a complete job prep platform. You get resume builder, AI mock interviews, ATS checker, career roadmaps, and job application tracking."
  },
  {
    q: "Will this work for freshers with no experience?",
    a: "Absolutely. We have templates, questions, and roadmaps specifically designed for students and freshers applying for their first job."
  },
  {
    q: "How accurate is the AI feedback?",
    a: "Our AI is trained on 10,000+ real job descriptions and interview questions. It gives feedback based on what recruiters in India are actually looking for in 2026."
  },
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel anytime from your dashboard. No lock-in period."
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className='max-w-3xl mx-auto'>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Frequently Asked Questions
        </h2>
        
        <div className='mt-12 space-y-4'>
          {faqs.map((faq, i) => (
            <div key={i} className='bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden'>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className='w-full flex justify-between items-center p-5 text-left hover:bg-gray-900/70 transition-colors duration-200'
                aria-expanded={openIndex === i}
              >
                <span className='text-lg font-semibold text-white pr-4'>{faq.q}</span>
                {openIndex === i ? <FaMinus className='text-[#0A66C2] flex-shrink-0'/> : <FaPlus className='text-[#0A66C2] flex-shrink-0'/>}
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='px-5 pb-5 text-gray-400 leading-relaxed'>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ