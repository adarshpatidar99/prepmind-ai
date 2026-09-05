import React from 'react'
import Navbar from '../components/common/Navbar'
import IndustryInsights from './IndustryInsights'

export const Dashboard = () => {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Background same as Hero + Register */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute top-10 right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative z-10">
        <Navbar />
        <IndustryInsights />
      </div>
        
    </div> 
  )
}