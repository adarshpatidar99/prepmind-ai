import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/HeroSection";
import Features from "../components/common/Features";
import FAQ from "../components/common/FAQ";
import Footer from "../components/common/Footer";
import HowItWorks from "../components/common/HowItWorks";
import Testimonials from "../components/common/Testimonials"
import Pricing from "../components/common/Pricing";
import FinalCTA from "../components/common/FinalCTA"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-gray-900">

      <Navbar />

      <HeroSection />

    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D2E3FC] to-transparent" />

      <Features />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D2E3FC] to-transparent" />

      <HowItWorks />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D2E3FC] to-transparent" />

      <Testimonials />

       <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D2E3FC] to-transparent" />

      <Pricing />

      <FinalCTA />

      <FAQ />

      <Footer />

    </div>
  );
};

export default Home;