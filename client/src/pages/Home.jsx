// import React from "react";
// import Navbar from "../components/common/Navbar";
// // import HeroSection from "../components/common/HeroSection";
// // import Features from "../components/common/Features";
// // import Footer from "../components/common/Footer";

// const Home = () => {

  

//   return (
//     <>
    
//      <div className="">

//        <div className="">
//          <Navbar/>
//        </div>

//        {/* <div className="">
//          <HeroSection />
//        </div>

//        <div className="">
//          <Features/>
//        </div>

//        <div className="">
//          <Footer />
//        </div> */}

//      </div>

//     </>
//   );
// };

// export default Home;












//  <section className="w-full min-h-screen pt-36 md:pt-48 pb-10 bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">
      
//       <div className="text-center space-y-6">

//         {/* Heading */}
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
//             Your AI Career Coach for
//             <br />
//             Professional Success
//           </h1>

//           <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
//             Advance your career with personalized guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>

//         {/* Glass Buttons */}
//         <div className="flex justify-center space-x-4">
          
//           <button className="px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
//             Get Started
//           </button>

//           <button className="px-8 py-3 backdrop-blur-md bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition">
//             Watch Demo
//           </button>

//         </div>

//         {/* Glass Card Image */}
//         <div className="mt-10 flex justify-center">
//           <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3">
//             <img
//               src="/banner.jpeg"
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-xl max-w-[90%]"
//             />
//           </div>
//         </div>

//       </div>

//     </section>



import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/HeroSection";
import Features from "../components/common/Features";
import FAQ from "../components/common/FAQ";
import Footer from "../components/common/Footer";
import HowItWorks from "../components/common/HowItWorks";

const Home = () => {

  return (
    <>
    
     <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">

       {/* Navbar */}
       <div className="">
         <Navbar/>
       </div>

       <div className="">
         <HeroSection />
       </div>

       <div className="">
         <Features />
       </div>

       <div className="">
        <HowItWorks /> 
       </div>

       <div className="">
         <FAQ />
       </div>

       <div className="">
         <Footer/>
       </div>

     </div>

    </>
  );
};

export default Home;