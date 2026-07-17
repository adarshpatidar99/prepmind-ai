import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (

    <>
    
       <section className="py-14 px-4 bg-gradient-to-b from-black via-gray-900 to-black">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
          Take the next step in your career today
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-base mb-8">
          Unlock your potential with AI-powered guidance, real interview practice,
          and a roadmap designed just for you.
        </p>

        {/* CTA Button */}
        <button className="px-5 py-3 rounded-4xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold 
        shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-200">
          Start Your Journey 🚀
        </button>

      </div>

    </section>

      <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 pb-8 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            PrepMind AI
          </h2>
          <p className="text-gray-400 text-sm">
            AI-powered platform to help you crack interviews, build skills, and accelerate your career growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Features</li>
            <li className="hover:text-white transition cursor-pointer">FAQ</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Interview Prep</li>
            <li className="hover:text-white transition cursor-pointer">Career Guidance</li>
            <li className="hover:text-white transition cursor-pointer">Resume Builder</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <FaGithub className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaLinkedin className="hover:text-white hover:scale-110 transition cursor-pointer" />
            <FaTwitter className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} PrepMind AI. All rights reserved.
      </div>

    </footer>
    
    </>

   
  );
};

export default Footer;














