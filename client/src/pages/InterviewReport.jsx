// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useParams } from 'react-router-dom'

// export const InterviewReport = () => {

//   const {id} = useParams();

//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);

  

//   useEffect(() => {

//     const fetchInterviewReport = async() => {

//        const res = await axios.get(`http://localhost:5000/api/v1/interview/report/${id}`,
//         {
//            withCredentials: true    
//        })

//        console.log("API Report:", res.data.report);
                      
//        setReport(res.data.report);
      
//     }
    
//     fetchInterviewReport();

//   }, [id])

//   return (
//     <>
    
//      <div className=''>
        
//      </div>
    
//     </>
//   )
// }
               





import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InterviewReport = () => {
  const { id } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviewReport = async () => {
      try {                        
        const res = await axios.get(
          `http://localhost:5000/api/v1/interview/report/${id}`,
          {
            withCredentials: true,
          }
        );     

        console.log("API response:", res.data);
        console.log("Report from API:", res.data.report);

        setReport(res.data.report);
      } catch (error) {
        console.error("Failed to fetch report:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviewReport();
  }, [id]);

  // This runs after report state actually updates
  useEffect(() => {
    console.log("Updated report state:", report);
  }, [report]);

  if (loading) {
    return <div>Loading report...</div>;
  }

  if (!report) {
    return <div>Report not found.</div>;
  }

  return (
    <div>
      <h1>Interview Report</h1>

      <p>Role: {report.role}</p>
      <p>Company: {report.company}</p>
      <p>Final Score: {report.finalScore}</p>
      <p>Summary: {report.summary}</p>
    </div>
  );
};