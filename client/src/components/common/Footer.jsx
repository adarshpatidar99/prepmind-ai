














import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className='max-w-6xl mx-auto px-4 py-16'>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold text-white'>PrepMind AI</h3>
            <p className='mt-4 text-gray-400'>
              AI-powered job prep platform for the next generation of talent.
            </p>
            <div className='flex gap-4 mt-6'>
              <a href="#" className='text-gray-400 hover:text-[#0A66C2] transition'><FaLinkedin size={22}/></a>
              <a href="#" className='text-gray-400 hover:text-[#0A66C2] transition'><FaTwitter size={22}/></a>
              <a href="#" className='text-gray-400 hover:text-[#0A66C2] transition'><FaInstagram size={22}/></a>
            </div>
          </div>

          {/* Links */}
          <div className='grid grid-cols-2 gap-8 md:col-span-2'>
            <div>
              <h4 className='font-semibold text-white mb-4'>Platform</h4>
              <ul className='space-y-3 text-sm'>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Features</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Pricing</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-white mb-4'>Support</h4>
              <ul className='space-y-3 text-sm'>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Help Center</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Contact Us</a></li>
                <li><a href="#" className='text-gray-400 hover:text-white transition'>Privacy & Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
   <div className='mt-12 pt-8 border-t border-gray-800 flex-col md:flex-row justify-between items-center gap-4'>
  <p className='text-gray-500 text-sm'>
    Built for Indian students and freshers
  </p>
  <p className='text-gray-500 text-sm'>
    © 2026 PrepMind AI • v1
  </p>
</div>

      </div>
    </footer>
  )
}

export default Footer