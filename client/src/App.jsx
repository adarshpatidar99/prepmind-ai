// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from 'react-toastify';

// // Auth
// import Home from './pages/Home';
// import Signin from './pages/Signin';       
// import Signup from './pages/Signup';
// import ProfileUpdate from './pages/ProfileUpdate';
// import CompleteProfile from './pages/completeProfile';
                                            
// // Resume
// import ResumeBuilder from './pages/ResumeBuilder';
// import ResumePreview from './pages/ResumePreview';
// import ResumeAnalyze from './pages/ResumeAnalyze';
// import ResumeTemplate from './pages/ResumeTemplate';
// import ResumeDashboard from './pages/ResumeDashboard';
// import AiResumeSuggestions from './pages/AiResumeSuggestions';
// import ResumeOptimize from './pages/ResumeOptimize';
// import UpdateResume from './pages/UpdateResume';
// import GetResume from './pages/GetResume';
// import ProtectedRoute from './components/ProtectedRoute';

// // Interview
// import StartInterview from './pages/StartInterview';
// import RecentInterview from './pages/RecentInterview';
// import { InterviewReport } from './pages/InterviewReport';
// import MyInterviews from './pages/MyInterviews';

// // Cover Letter
// import CreateCoverLetter from './pages/CreateCoverLetter';
// import PreviewCoverLetter from './pages/PreviewCoverLetter';

// // Career
// import CareerGuidance from './pages/CareerGuidance';
// import IndustryInsights from './pages/IndustryInsights';
// import { Dashboard } from './pages/Dashboard';
// import CoverLetterDashboard from './pages/CoverLetterDashboard';
// import UpdateCoverLetter from './pages/UpdateCoverLetter';
// import InterviewPrepDashboard from './pages/InterviewPrepDashboard';
// import InterviewSetup from './pages/InterviewSetup';
// import Credits from './pages/Credits';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { setUser, logoutUser } from './redux/authSlice';
// import PaymentHistory from './pages/PaymentHistory';



// const App = () => {

//    const dispatch = useDispatch();

//    useEffect(() => {
    
//      const getCurrentUser = async () => {
      
//        try {
        
//         const  {data} = await axios.get('http://localhost:5000/api/v1/user/me', {
//            withCredentials: true
//         })

//         dispatch(setUser({
//           user: data.user,
//           token: null,
//         }))

//        } catch (error) {
//         dispatch(logoutUser());
//        }

//      }

//      getCurrentUser()

//    }, [dispatch]);

//   return (
//     <> 
//       <Router>
//         <Routes>
                             
//           {/* Auth */}
//           <Route path="/" element={<Home />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path='/signup' element={ <Signup /> } />
//           <Route path="/profile-update" element={<ProfileUpdate />} />
//           <Route path='/complete-profile' element={ <CompleteProfile/> } />

//           <Route path='/dashboard' element={ <Dashboard />} />

//           {/* Resume */}
//           <Route path="/resume-builder" element={<ResumeBuilder />} />
//           <Route path="/resume-builder/:id" element={<ResumeBuilder />} />
//           <Route path="/resume-preview/:id" element={<ResumePreview />} />
//           {/* <Route path="/resume-analyze" element={<ResumeAnalyze />} />
//           <Route path="/resume-template" element={<ResumeTemplate />} /> */}
//           <Route path="/resume-dashboard" element={<ResumeDashboard />} />
//           {/* <Route path="/ai-resume-suggestions" element={<AiResumeSuggestions />} />
//           <Route path="/resume-optimize" element={<ResumeOptimize />} /> */}
//           <Route path="/update-resume" element={<UpdateResume />} />
//           <Route path="/get-resume" element={<GetResume />} />

//           {/* Interview */}
//           <Route path='/interview-prep-dashboard' element={ 
//             <InterviewPrepDashboard/> } />
//           <Route path="/start-interview/:id" element={<StartInterview />} />
//           <Route path="/recent-interviews" element={<RecentInterview />} />
//           <Route path="/my-interviews" element={<MyInterviews />} />
//           <Route path='/interview-report/:id' element={ <InterviewReport/> } />   
//           <Route path='/interview-setup' element={ <InterviewSetup /> } />
          

//           {/* Cover Letter */}
//           <Route path="/create-cover-letter/:id" element={<CreateCoverLetter />} />
//            <Route path="/create-cover-letter" element={<CreateCoverLetter />} />
//           <Route path="/cover-letter-preview/:id" element={<PreviewCoverLetter />} />
//           <Route path='/cover-letter-dashboard' element={ <CoverLetterDashboard/> } />
//           <Route path='/update-cover-letter' element={ <UpdateCoverLetter />}  />

//           {/* Career */}
//           <Route path="/career-guides" element={
//              <ProtectedRoute>
//                <CareerGuidance />
//              </ProtectedRoute>
//           } />
//           <Route path="/industry-insights" element={<IndustryInsights />} />

//           <Route path='/credits' element={<Credits/>} />
//           <Route path='/payment-history' element={<PaymentHistory/>} />

//         </Routes>
//       </Router> 

//         <ToastContainer 
//         position="top-right"
//         autoClose={1000}
//         pauseOnHover={true}
//         theme="light"
//       />
//     </>
//   )
// }

// export default App;

 










import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Redux
import { setUser, logoutUser } from "./redux/authSlice";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// ==================== AUTH ====================

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProfileUpdate from "./pages/ProfileUpdate";
import CompleteProfile from "./pages/completeProfile";

// ==================== DASHBOARD ====================

import { Dashboard } from "./pages/Dashboard";

// ==================== RESUME ====================

import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreview from "./pages/ResumePreview";
import ResumeDashboard from "./pages/ResumeDashboard";
import UpdateResume from "./pages/UpdateResume";
import GetResume from "./pages/GetResume";

// ==================== INTERVIEW ====================

import StartInterview from "./pages/StartInterview";
import RecentInterview from "./pages/RecentInterview";
import { InterviewReport } from "./pages/InterviewReport";
import MyInterviews from "./pages/MyInterviews";
import InterviewPrepDashboard from "./pages/InterviewPrepDashboard";
import InterviewSetup from "./pages/InterviewSetup";

// ==================== COVER LETTER ====================

import CreateCoverLetter from "./pages/CreateCoverLetter";
import PreviewCoverLetter from "./pages/PreviewCoverLetter";
import CoverLetterDashboard from "./pages/CoverLetterDashboard";
import UpdateCoverLetter from "./pages/UpdateCoverLetter";

// ==================== CAREER ====================

import CareerGuidance from "./pages/CareerGuidance";
import IndustryInsights from "./pages/IndustryInsights";

// ==================== PAYMENT ====================

import Credits from "./pages/Credits";
import PaymentHistory from "./pages/PaymentHistory";

const App = () => {
  const dispatch = useDispatch();

  // =====================================================
  // GET CURRENT LOGGED-IN USER
  // =====================================================

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/me",
          {
            withCredentials: true,
          }
        );

        dispatch(
          setUser({
            user: data.user,
            token: null,
          })
        );
      } catch (error) {
        dispatch(logoutUser());
      }
    };

    getCurrentUser();
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>

          {/* =====================================================
              PUBLIC ROUTES
          ===================================================== */}

          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />


          {/* =====================================================
              PROTECTED ROUTES
          ===================================================== */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile-update"
            element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            }
          />

          <Route
            path="/complete-profile"
            element={
              <ProtectedRoute>
                <CompleteProfile />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              RESUME
          ===================================================== */}

          <Route
            path="/resume-dashboard"
            element={
              <ProtectedRoute>
                <ResumeDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume-builder"
            element={
              <ProtectedRoute>
                <ResumeBuilder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume-builder/:id"
            element={
              <ProtectedRoute>
                <ResumeBuilder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume-preview/:id"
            element={
              <ProtectedRoute>
                <ResumePreview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/update-resume"
            element={
              <ProtectedRoute>
                <UpdateResume />
              </ProtectedRoute>
            }
          />

          <Route
            path="/get-resume"
            element={
              <ProtectedRoute>
                <GetResume />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              INTERVIEW
          ===================================================== */}

          <Route
            path="/interview-prep-dashboard"
            element={
              <ProtectedRoute>
                <InterviewPrepDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview-setup"
            element={
              <ProtectedRoute>
                <InterviewSetup />
              </ProtectedRoute>
            }
          />

          <Route
            path="/start-interview/:id"
            element={
              <ProtectedRoute>
                <StartInterview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/recent-interviews"
            element={
              <ProtectedRoute>
                <RecentInterview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-interviews"
            element={
              <ProtectedRoute>
                <MyInterviews />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview-report/:id"
            element={
              <ProtectedRoute>
                <InterviewReport />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              COVER LETTER
          ===================================================== */}

          <Route
            path="/create-cover-letter"
            element={
              <ProtectedRoute>
                <CreateCoverLetter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/create-cover-letter/:id"
            element={
              <ProtectedRoute>
                <CreateCoverLetter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cover-letter-preview/:id"
            element={
              <ProtectedRoute>
                <PreviewCoverLetter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cover-letter-dashboard"
            element={
              <ProtectedRoute>
                <CoverLetterDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/update-cover-letter"
            element={
              <ProtectedRoute>
                <UpdateCoverLetter />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              CAREER
          ===================================================== */}

          <Route
            path="/career-guides"
            element={
              <ProtectedRoute>
                <CareerGuidance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/industry-insights"
            element={
              <ProtectedRoute>
                <IndustryInsights />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              CREDITS & PAYMENTS
          ===================================================== */}

          <Route
            path="/credits"
            element={
              <ProtectedRoute>
                <Credits />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-history"
            element={
              <ProtectedRoute>
                <PaymentHistory />
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              FALLBACK
          ===================================================== */}

          <Route path="*" element={<Home />} />

        </Routes>
      </Router>

      {/* =====================================================
          TOAST
      ===================================================== */}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;