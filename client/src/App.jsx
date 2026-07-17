import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

// Auth
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileUpdate from './pages/ProfileUpdate';
import CompleteProfile from './pages/completeProfile';

// Resume
import ResumeBuilder from './pages/ResumeBuilder';
import ResumePreview from './pages/ResumePreview';
import ResumeAnalyze from './pages/ResumeAnalyze';
import ResumeTemplate from './pages/ResumeTemplate';
import ResumeDashboard from './pages/ResumeDashboard';
import AiResumeSuggestions from './pages/AiResumeSuggestions';
import ResumeOptimize from './pages/ResumeOptimize';
import UpdateResume from './pages/UpdateResume';
import GetResume from './pages/GetResume';
import GetAllResume from './pages/GetAllResume';

// Interview
import InterviewPrep from './pages/InterviewPrep';
import StartInterview from './pages/StartInterview';
import RecentInterview from './pages/RecentInterview';
import { InterviewReport } from './pages/InterviewReport';
import MyAllInterviews from './pages/MyAllInterviews';

// Cover Letter
import CoverLetter from './pages/CoverLetter';
import CreateCoverLetter from './pages/CreateCoverLetter';
import PreviewCoverLetter from './pages/PreviewCoverLetter';

// Career
import CareerGuidance from './pages/CareerGuidance';
import IndustryInsights from './pages/IndustryInsights';
import { Dashboard } from './pages/Dashboard';

const App = () => {
  return (
    <> 
      <Router>
        <Routes>
 
          {/* Auth */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-update" element={<ProfileUpdate />} />
          <Route path='/complete-profile' element={ <CompleteProfile/> } />

          <Route path='/dashboard' element={ <Dashboard />} />

          {/* Resume */}
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/resume-preview" element={<ResumePreview />} />
          <Route path="/resume-analyze" element={<ResumeAnalyze />} />
          <Route path="/resume-template" element={<ResumeTemplate />} />
          <Route path="/resume-dashboard" element={<ResumeDashboard />} />
          <Route path="/ai-resume-suggestions" element={<AiResumeSuggestions />} />
          <Route path="/resume-optimize" element={<ResumeOptimize />} />
          <Route path="/update-resume" element={<UpdateResume />} />
          <Route path="/get-resume" element={<GetResume />} />
          <Route path="/get-all-resume" element={<GetAllResume />} />

          {/* Interview */}
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/start-interview" element={<StartInterview />} />
          <Route path="/recent-interviews" element={<RecentInterview />} />
          <Route path="/all-interviews" element={<MyAllInterviews />} />
          <Route path='/interivew-report' element={ <InterviewReport/> } />

          {/* Cover Letter */}
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/create-cover-letter" element={<CreateCoverLetter />} />
          <Route path="/preview-cover-letter" element={<PreviewCoverLetter />} />

          {/* Career */}
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="/industry-insights" element={<IndustryInsights />} />

        </Routes>
      </Router> 

        <ToastContainer 
        position="top-right"
        autoClose={1000}
        pauseOnHover={true}
        theme="light"
      />
    </>
  )
}

export default App;

