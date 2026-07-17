import React from 'react'
import Navbar from '../components/common/Navbar'
import IndustryInsights from './IndustryInsights'

export const Dashboard = () => {
  return (
    <>
    
     <div className="w-full min-h-screen 
bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">

        <div className=''>
           <Navbar />
        </div>

        <div className=''>
           <IndustryInsights />
        </div>
        
      </div> 
    
    </>
  )
}
