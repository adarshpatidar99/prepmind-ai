import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import InterviewHeader from "../components/StartInterview/InterviewHeader";
import AIInterviewCard from "../components/StartInterview/AIInterviewCard";
import AnswerSection from "../components/StartInterview/AnswerSection";
import RightSidebar from "../components/StartInterview/RightSidebar";
import BottomNavigation from "../components/StartInterview/BottomNavigation";
import MCQAnswerSection from "../components/StartInterview/MCQAnswerSection";

const StartInterview = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [interviewData, setInterviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    fetchInterview();
  }, [id]);

  const fetchInterview = async () => {  
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/interview/get/${id}`,
        {
          withCredentials: true,
        }
      );
    
      setInterviewData(res.data.interview);

      // If backend already has currentQuestion
      setCurrentQuestion(res.data.interview.currentQuestion || 0);
    
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };                          

  // Called after successful answer submission
  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  if (loading) {
    return <div>Loading Interview...</div>;
  }

  if (!interviewData) {
    return <div>Interview Not Found</div>;
  }

  const questions = interviewData.interviewItems || [];
     
  const handleGenerateReport = async() => {
     navigate(`/interview-report/${id}`)
  }

  // Interview finished
  if (currentQuestion >= questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Interview Completed 🎉
          </h1>

          <p className="mt-2 text-gray-500">
            Your answers have been saved successfully.
          </p>

             <button
            onClick={handleGenerateReport}
            className="mt-6 w-full cursor-pointer bg-[#0A66C2] hover:bg-[#004182] text-white py-3 px-6 rounded-xl font-semibold transition"
          >
            Generate Interview Report
          </button>

        </div>
      </div>
    );
  }

  return (
    <div>

      <InterviewHeader interview={interviewData} />

      <AIInterviewCard
        interview={interviewData}
        questions={questions}
        currentQuestion={currentQuestion} 
      />

      {interviewData.questionType === "mcq" ? (

         <MCQAnswerSection 
            interview={interviewData}
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            onNextQuestion={handleNextQuestion}
        />

      ) : (

        <AnswerSection
        interview={interviewData}
        question={questions[currentQuestion]}
        questionIndex={currentQuestion}
        onNextQuestion={handleNextQuestion}
        />

      )}


      <RightSidebar
        interview={interviewData}
        questions={questions}
        currentQuestion={currentQuestion}
      />

      <BottomNavigation
        interview={interviewData}
        questions={questions}
        currentQuestion={currentQuestion}
      />

    </div>
  );
};

export default StartInterview;