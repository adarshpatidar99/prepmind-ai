import React from 'react'
import HeroSection from '../components/InterviewPrepDashboard/HeroSection'
import StatsCards from '../components/InterviewPrepDashboard/StatsCards'
import InterviewCategories from '../components/InterviewPrepDashboard/InterviewCategories'
import RecentInterviewTable from '../components/InterviewPrepDashboard/RecentInterviewTable'
import PerformanceOverview from '../components/InterviewPrepDashboard/PerformanceOverview'
import WeakTopics from '../components/InterviewPrepDashboard/WeakTopics'
import AIRecommendations from '../components/InterviewPrepDashboard/AIRecommendations'
import { Footer } from '../components/InterviewPrepDashboard/Footer'
import Navbar from '../components/common/Navbar'

const InterviewPrepDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]"> {/* ADDED */}
        <Navbar />
        
        <div className='max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-8'> {/* ADDED */}
           <HeroSection />
        
           <StatsCards />

           <InterviewCategories />

           <RecentInterviewTable />

           <PerformanceOverview />

           <WeakTopics />

           <AIRecommendations />
        </div> {/* CLOSED */}

        <Footer />
    </div>
  )
}

export default InterviewPrepDashboard