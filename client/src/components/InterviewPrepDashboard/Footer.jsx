import React from "react";
import {
  Brain,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center">
                <Brain size={20} />
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                PrepMind AI
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6">
              Practice smarter with AI-powered interviews, performance
              analytics, and personalized recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#0A66C2] cursor-pointer transition">
                Dashboard
              </li>

              <li className="hover:text-[#0A66C2] cursor-pointer transition">
                Start Interview
              </li>

              <li className="hover:text-[#0A66C2] cursor-pointer transition">
                Interview Reports
              </li>

              <li className="hover:text-[#0A66C2] cursor-pointer transition">
                Performance Analytics
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Connect
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3 text-gray-600 hover:text-[#0A66C2] cursor-pointer transition">
                <Mail size={18} />
                support@prepmind.ai
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-[#0A66C2] cursor-pointer transition">
                GitHub
              </div>

              <div className="flex items-center gap-3 text-gray-600 hover:text-[#0A66C2] cursor-pointer transition">
                LinkedIn
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 PrepMind AI. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-[#0A66C2] font-semibold cursor-pointer hover:gap-3 transition-all">
            Keep Practicing
            <ArrowUpRight size={16} />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;