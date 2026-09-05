// import React from 'react'
// import { FaCheck } from "react-icons/fa";

// const Pricing = () => {
//   return (
//     <section className="py-14 px-4 bg-white">
//       <div className='text-center mb-14'>
//       <div className='text-center mb-14'>
//   <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//     Invest in Your Career
//   </h2>
//   <p className='mt-3 text-gray-600'>Start free today. Get hired faster with Pro.</p>
// </div>
//       </div>

//       <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
        
//         {/* Free Plan */}
//         <div className='p-8 rounded-2xl bg-[#F8FAFC] border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'>
//           <h3 className='text-2xl font-bold text-gray-900'>Free</h3>
//           <p className='text-gray-600 mt-2'>For students & freshers</p>
//           <p className='text-4xl font-bold text-gray-900 mt-6'>₹0<span className='text-base font-normal text-gray-600'>/forever</span></p>
          
//           <ul className='mt-8 space-y-3 text-gray-700'>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> AI Resume Builder</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> 5 AI Resume Reviews / month</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> Job Search Guidance</li>
//           </ul>

//           <button className='w-full cursor-pointer mt-8 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition'>
//             Create Free Account
//           </button>
//         </div>

//         {/* Pro Plan */}
//         <div className='relative p-8 rounded-2xl bg-gradient-to-b from-[#E8F0FE] to-white border-2 border-[#0A66C2] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scale-105'>
//           <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A66C2] text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide shadow-md'>
//             RECOMMENDED
//           </div>
//           <h3 className='text-2xl font-bold text-gray-900'>Pro</h3>
//           <p className='text-gray-600 mt-2'>Land your dream job faster</p>
//           <p className='text-4xl font-bold text-gray-900 mt-6'>₹299<span className='text-base font-normal text-gray-600'>/month</span></p>
          
//           <ul className='mt-8 space-y-3 text-gray-700'>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> Everything in Free</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> Unlimited AI Resume Reviews</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> AI Mock Interviews</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> ATS Score & Optimization</li>
//             <li className='flex items-center gap-3'><FaCheck className='text-[#0A66C2] flex-shrink-0' /> 24/7 Priority Support</li>
//           </ul>

//           <button className='w-full mt-8 cursor-pointer py-3 rounded-lg bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] shadow-lg hover:shadow-xl transition-all'>
//             Start 7-Day Free Trial
//           </button>
//         </div>

//       </div>
      
//       <p className='text-center text-sm text-gray-500 mt-8'>Cancel anytime. No credit card required for Free plan.</p>
//     </section>
//   )
// }

// export default Pricing




import React from "react";
import { FaCheck, FaBolt, FaCrown } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  handleBuyPlan,
  handleBuyPro,
} from "../../services/paymentService";
import { useSelector, useDispatch } from "react-redux";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      icon: <FaBolt />,
      price: "₹0",
      subtext: "/ forever",
      credits: "30 Credits",
      desc: "Explore PrepMind AI for free",
      features: [
        "1 AI Mock Interview",
        "1 Resume Analysis",
        "1 ATS Score",
        "Basic Job Guidance",
        "No payment required",
      ],
      cta: "Start Free",
      style:
        "bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md",
      buttonStyle:
        "bg-gray-900 text-white hover:bg-black",
      iconStyle:
        "bg-gray-100 text-gray-700",
    },

    {
      name: "Starter",
      icon: <FaBolt />,
      price: "₹99",
      subtext: "/ one-time",
      credits: "300 Credits",
      desc: "For students and occasional job seekers",
      badge: "BEST VALUE",
      features: [
        "300 AI Credits",
        "Multiple Mock Interviews",
        "Multiple Resume Analyses",
        "ATS Optimization",
        "Cover Letter Generation",
        "Credits valid for 60 days",
      ],
      cta: "Get 300 Credits",
      style:
        "bg-white border-2 border-[#0A66C2] shadow-md hover:shadow-lg",
      buttonStyle:
        "bg-[#0A66C2] text-white hover:bg-[#004182]",
      iconStyle:
        "bg-blue-50 text-[#0A66C2]",
    },

    {
      name: "Pro Unlimited",
      icon: <FaCrown />,
      price: "₹199",
      subtext: "/ month",
      credits: "Unlimited AI Usage",
      desc: "For active job seekers and interview preparation",
      features: [
        "Unlimited Mock Interviews",
        "Unlimited Resume Analysis",
        "Unlimited ATS Optimization",
        "Unlimited Cover Letters",
        "Unlimited AI Career Tools",
        "Priority Support",
      ],
      cta: "Go Pro",
      style:
        "bg-[#111827] border border-[#1F2937] text-white shadow-lg hover:shadow-xl",
      buttonStyle:
        "bg-white text-gray-900 hover:bg-gray-100",
      iconStyle:
        "bg-white text-gray-900",
    },
  ];

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <section className="py-16 px-4 bg-[#F8FAFC]">

      {/* =========================
          HEADER
      ========================= */}

      <div className="text-center mb-10">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0A66C2] text-xs font-semibold mb-4">
          <FaBolt size={11} />
          Simple & Affordable
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Choose the plan that works for you
        </h2>

        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Start for free, buy credits when you need them, or unlock
          unlimited AI career tools with Pro.
        </p>

      </div>


      {/* =========================
          PLANS
      ========================= */}

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">

        {plans.map((plan, index) => {

          const isPro = plan.name === "Pro Unlimited";

          return (
            <div
              key={index}
              className={`
                relative
                p-6
                rounded-2xl
                transition-all
                duration-200
                hover:-translate-y-1
                ${plan.style}
              `}
            >

              {/* =========================
                  BADGE
              ========================= */}

              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                  <span
                    className="
                      bg-[#0A66C2]
                      text-white
                      text-[10px]
                      font-bold
                      px-4
                      py-1.5
                      rounded-full
                      tracking-wider
                      whitespace-nowrap
                    "
                  >
                    {plan.badge}
                  </span>

                </div>
              )}


              {/* =========================
                  PLAN NAME
              ========================= */}

              <div className="flex items-center gap-3">

                <div
                  className={`
                    w-9
                    h-9
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    ${plan.iconStyle}
                  `}
                >
                  {plan.icon}
                </div>

                <h3
                  className={`
                    text-lg
                    font-bold
                    ${isPro ? "text-white" : "text-gray-900"}
                  `}
                >
                  {plan.name}
                </h3>

              </div>


              {/* =========================
                  PRICE
              ========================= */}

              <div className="mt-6 flex items-baseline gap-1.5">

                <span
                  className={`
                    text-4xl
                    font-extrabold
                    tracking-tight
                    ${isPro ? "text-white" : "text-gray-900"}
                  `}
                >
                  {plan.price}
                </span>

                <span
                  className={`
                    text-xs
                    ${isPro ? "text-gray-400" : "text-gray-500"}
                  `}
                >
                  {plan.subtext}
                </span>

              </div>


              {/* =========================
                  CREDITS
              ========================= */}

              <div
                className={`
                  inline-flex
                  mt-4
                  px-3
                  py-1.5
                  rounded-full
                  text-xs
                  font-semibold
                  ${
                    isPro
                      ? "bg-white/10 text-white border border-white/10"
                      : "bg-blue-50 text-[#0A66C2] border border-blue-100"
                  }
                `}
              >
                {plan.credits}
              </div>


              {/* =========================
                  DESCRIPTION
              ========================= */}

              <p
                className={`
                  mt-4
                  text-sm
                  leading-relaxed
                  min-h-[40px]
                  ${isPro ? "text-gray-400" : "text-gray-500"}
                `}
              >
                {plan.desc}
              </p>


              {/* =========================
                  DIVIDER
              ========================= */}

              <div
                className={`
                  mt-5
                  h-px
                  ${isPro ? "bg-white/10" : "bg-gray-100"}
                `}
              />


              {/* =========================
                  FEATURES
              ========================= */}

              <ul className="mt-5 space-y-3">

                {plan.features.map(
                  (feature, featureIndex) => (

                    <li
                      key={featureIndex}
                      className={`
                        flex
                        items-start
                        gap-2.5
                        text-sm
                        leading-relaxed
                        ${
                          isPro
                            ? "text-gray-300"
                            : "text-gray-600"
                        }
                      `}
                    >

                      <span
                        className={`
                          mt-0.5
                          w-4
                          h-4
                          rounded-full
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                          ${
                            isPro
                              ? "bg-white/10 text-green-400"
                              : "bg-blue-50 text-[#0A66C2]"
                          }
                        `}
                      >
                        <FaCheck size={8} />
                      </span>

                      <span>{feature}</span>

                    </li>

                  )
                )}

              </ul>


              {/* =========================
                  BUTTON
              ========================= */}

              <button
                onClick={() => {

                  if (plan.name === "Starter") {

                    handleBuyPlan({
                      plan: "starter",
                      dispatch,
                      currentToken: auth.token,

                      onSuccess: () => {
                        toast.success(
                          "Payment successful! 300 credits added 🎉"
                        );
                      },

                      onError: (message) => {
                        toast.error(message);
                      },
                    });

                  }

                  if (plan.name === "Pro Unlimited") {

                    handleBuyPro({

                      onSuccess: () => {
                        toast.success(
                          "Pro subscription started 🎉"
                        );
                      },

                      onError: (message) => {
                        toast.error(message);
                      },

                    });

                  }

                }}
                className={`
                  w-full
                  mt-7
                  py-3
                  rounded-lg
                  font-semibold
                  text-sm
                  transition-all
                  duration-200
                  ${plan.buttonStyle}
                `}
              >
                {plan.cta}
              </button>

            </div>
          );
        })}

      </div>


      {/* =========================
          CREDIT EXPLANATION
      ========================= */}

      <div className="max-w-3xl mx-auto mt-10 text-center">

        <div className="h-px bg-gray-200 mb-5" />

        <p className="text-xs sm:text-sm text-gray-500">
          Starter credits are valid for 60 days. Pro provides unlimited
          access while your monthly subscription is active.
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Secure payments • UPI • Cards • Net Banking
        </p>

      </div>

    </section>
  );
};

export default Pricing;