// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";

// const AnswerSection = ({
//   interview,
//   question,
//   questionIndex,
//   onNextQuestion,
// }) => {
//   const [answer, setAnswer] = useState("");
//   const [timeTaken, setTimeTaken] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);

//   // Store SpeechRecognition instance
//   const recognitionRef = useRef(null);

//   // Store current answer
//   const answerRef = useRef("");

//   // --------------------------------------------------
//   // Initialize Speech Recognition
//   // --------------------------------------------------
//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       console.log("Speech Recognition is not supported.");
//       return;
//     }

//     const recognition = new SpeechRecognition();

//     // Keep listening continuously
//     recognition.continuous = true;

//     // Show partial speech while speaking
//     recognition.interimResults = true;

//     // English speech recognition
//     recognition.lang = "en-US";

//     // --------------------------------------------------
//     // When speech result is received
//     // --------------------------------------------------
//     recognition.onresult = (event) => {
//       let finalTranscript = "";
//       let interimTranscript = "";

//       for (
//         let i = event.resultIndex;
//         i < event.results.length;
//         i++
//       ) {
//         const transcript = event.results[i][0].transcript;

//         if (event.results[i].isFinal) {
//           finalTranscript += transcript;
//         } else {
//           interimTranscript += transcript;
//         }
//       }

//       // Add final speech to existing answer
//       if (finalTranscript) {
//         const updatedAnswer =
//           answerRef.current +
//           (answerRef.current ? " " : "") +
//           finalTranscript.trim();

//         answerRef.current = updatedAnswer;
//         setAnswer(updatedAnswer);
//       }

//       // You can show interim text separately if needed.
//       // For now we don't add interim text to the actual answer.
//     };

//     // --------------------------------------------------
//     // Recognition error
//     // --------------------------------------------------
//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);

//       if (event.error === "not-allowed") {
//         toast.error("Please allow microphone permission.");
//       } else if (event.error === "no-speech") {
//         toast.info("No speech detected.");
//       } else {
//         toast.error("Speech recognition error.");
//       }

//       setIsRecording(false);
//     };

//     // --------------------------------------------------
//     // Recognition ended
//     // --------------------------------------------------
//     recognition.onend = () => {
//       setIsRecording(false);
//     };

//     // Store recognition instance
//     recognitionRef.current = recognition;

//     // --------------------------------------------------
//     // Cleanup
//     // --------------------------------------------------
//     return () => {
//       recognition.stop();
//       recognitionRef.current = null;
//     };
//   }, []);

//   // --------------------------------------------------
//   // Keep answerRef synchronized with answer state
//   // --------------------------------------------------
//   useEffect(() => {
//     answerRef.current = answer;
//   }, [answer]);

//   // --------------------------------------------------
//   // Start Recording
//   // --------------------------------------------------
//   const handleStartRecording = () => {
//     const recognition = recognitionRef.current;

//     if (!recognition) {
//       toast.error(
//         "Speech recognition is not supported in this browser."
//       );
//       return;
//     }

//     try {
//       recognition.start();

//       setIsRecording(true);

//       toast.info("Listening...");
//     } catch (error) {
//       console.error("Start recording error:", error);
//     }
//   };

//   // --------------------------------------------------
//   // Stop Recording
//   // --------------------------------------------------
//   const handleStopRecording = () => {
//     const recognition = recognitionRef.current;

//     if (!recognition) {
//       return;
//     }

//     recognition.stop();

//     setIsRecording(false);

//     toast.info("Recording stopped.");
//   };

//   // --------------------------------------------------
//   // Submit Answer
//   // --------------------------------------------------
//   const handleAnswerSubmit = async () => {
//     if (!answer.trim()) {
//       toast.error("Please enter your answer...");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       // Stop speech recognition before submitting
//       if (recognitionRef.current && isRecording) {
//         recognitionRef.current.stop();
//         setIsRecording(false);
//       }

//       const res = await axios.post(
//         `http://localhost:5000/api/v1/interview/submit-answer/${interview._id}`,
//         {
//           questionIndex: questionIndex,
//           userAnswer: answer.trim(),
//           timeTaken: timeTaken,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log("Answer submitted:", res.data);

//       toast.success("Answer submitted successfully.");

//       // Clear current answer
//       setAnswer("");
//       answerRef.current = "";

//       // Move to next question
//       onNextQuestion();

//     } catch (error) {
//       console.error("Submit answer error:", error);

//       toast.error(
//         error.response?.data?.message ||
//           "Failed to submit answer."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // --------------------------------------------------
//   // Clear Answer
//   // --------------------------------------------------
//   const handleClear = () => {
//     setAnswer("");
//     answerRef.current = "";
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 p-6">

//       {/* Question */}
//       {question && (
//         <div className="mb-6">

//           <p className="text-sm text-gray-500 mb-2">
//             Question {questionIndex + 1}
//           </p>

//           <h2 className="text-lg font-semibold text-gray-900">
//             {question.question}
//           </h2>

//         </div>
//       )}

//       {/* Answer Heading */}
//       <div className="flex items-center justify-between mb-3">

//         <h2 className="text-lg font-bold text-gray-900">
//           Enter your answer
//         </h2>

//         <span className="text-sm text-gray-500">
//           Characters: {answer.length}
//         </span>

//       </div>

//       {/* Answer Textarea */}
//       <textarea
//         value={answer}
//         onChange={(e) => {
//           setAnswer(e.target.value);
//           answerRef.current = e.target.value;
//         }}
//         placeholder={
//           isRecording
//             ? "Listening... speak your answer"
//             : "Type your answer here..."
//         }
//         rows={7}
//         disabled={isSubmitting}
//         className="w-full border border-gray-200 rounded-xl p-4 outline-none resize-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/10 transition"
//       />

//       {/* Recording Status */}
//       {isRecording && (
//         <div className="mt-3 flex items-center gap-2 text-red-500 text-sm font-medium">

//           <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />

//           Listening... Speak your answer

//         </div>
//       )}

//       {/* Bottom Actions */}
//       <div className="flex items-center justify-between gap-3 mt-4">

//         {/* Clear */}
//         <button
//           type="button"
//           disabled={isSubmitting}
//           onClick={handleClear}
//           className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
//         >
//           Clear
//         </button>

//         {/* Voice Recording */}
//         <button
//           type="button"
//           disabled={isSubmitting}
//           onClick={
//             isRecording
//               ? handleStopRecording
//               : handleStartRecording
//           }
//           className={`px-5 py-2.5 rounded-lg font-semibold transition ${
//             isRecording
//               ? "bg-red-500 text-white hover:bg-red-600"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           {isRecording
//             ? "Stop Recording"
//             : "Start Recording"}
//         </button>

//         {/* Submit */}
//         <button
//           type="button"
//           onClick={handleAnswerSubmit}
//           disabled={
//             isSubmitting ||
//             !answer.trim()
//           }
//           className="px-6 py-2.5 rounded-lg bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] disabled:bg-gray-300 disabled:cursor-not-allowed transition"
//         >
//           {isSubmitting
//             ? "Submitting..."
//             : "Submit Answer"}
//         </button>

//       </div>

//     </div>
//   );
// };

// export default AnswerSection;








// import axios from "axios";
// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import {
//   Mic,
//   MicOff,
//   Send,
//   Trash2,
//   Keyboard,
//   Volume2,
// } from "lucide-react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const AnswerSection = ({
//   interview,
//   question,
//   questionIndex,
//   onNextQuestion,
// }) => {

//   const { id } = useParams();

//   const [answer, setAnswer] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [timeTaken, setTimeTaken] = useState(0);

//   const recognitionRef = useRef(null);
//   const startTimeRef = useRef(null);

//   useEffect(() => {

//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       return;
//     }

//     const recognition = new SpeechRecognition();

//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = "en-US";

//     recognition.onresult = (event) => {

//       let transcript = "";

//       for (
//         let i = event.resultIndex;
//         i < event.results.length;
//         i++
//       ) {
//         transcript +=
//           event.results[i][0].transcript;
//       }

//       setAnswer((prev) => {

//         const existing = prev.trim();

//         if (!existing) {
//           return transcript;
//         }

//         return `${existing} ${transcript}`;
//       });

//     };

//     recognition.onend = () => {
//       setIsRecording(false);
//     };

//     recognition.onerror = () => {
//       setIsRecording(false);

//       toast.error(
//         "Unable to access microphone."
//       );
//     };

//     recognitionRef.current = recognition;

//     return () => {
//       recognition.stop();
//     };

//   }, []);



//   useEffect(() => {

//     if (!isRecording || !startTimeRef.current) {
//       return;
//     }

//     const interval = setInterval(() => {

//       const elapsed = Math.floor(
//         (Date.now() - startTimeRef.current) / 1000
//       );

//       setTimeTaken(elapsed);

//     }, 1000);

//     return () => clearInterval(interval);

//   }, [isRecording]);

//   const handleStartRecording = () => {

//     if (!recognitionRef.current) {
//       toast.error(
//         "Speech recognition is not supported in this browser."
//       );
//       return;
//     }

//     setAnswer("");
//     setIsRecording(true);

//     startTimeRef.current = Date.now();

//     recognitionRef.current.start();
//   };

//   const handleStopRecording = () => {

//     if (!recognitionRef.current) {
//       return;
//     }

//     recognitionRef.current.stop();

//     setIsRecording(false);

//   };

//   const handleClear = () => {
//     setAnswer("");
//   };

//   const handleSubmit = async () => {

//     if (!answer.trim()) {
//       toast.error(
//         "Please enter or record your answer."
//       );
//       return;
//     }

//     try {

//       setIsSubmitting(true);

//       const res = await axios.post(
//         `http://localhost:5000/api/v1/interview/submit-answer/${id}`,
//         {
//           questionIndex,
//           userAnswer: answer,
//           timeTaken,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log(
//         "Answer submitted:",
//         res.data
//       );

//       toast.success(
//         "Answer submitted successfully"
//       );

//       setAnswer("");
//       setTimeTaken(0);

//       onNextQuestion();

//     } catch (error) {

//       console.error(error);

//       toast.error(
//         error.response?.data?.message ||
//           "Failed to submit answer."
//       );

//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!question) {
//     return null;
//   }

//   return (
//     <section className="mt-6 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">

//       {/* HEADER */}
//       <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">

//         <div className="flex items-center gap-3">

//           <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
//             <Keyboard
//               size={20}
//               className="text-[#0A66C2]"
//             />
//           </div>

//           <div>
//             <h2 className="font-bold text-gray-900">
//               Your Answer
//             </h2>

//             <p className="text-xs text-gray-500">
//               Type or speak your answer
//             </p>
//           </div>

//         </div>

//         <div className="text-sm text-gray-500">
//           {answer.length} characters
//         </div>

//       </div>

//       {/* ANSWER AREA */}
//       <div className="p-6">

//         <textarea
//           value={answer}
//           onChange={(e) =>
//             setAnswer(e.target.value)
//           }
//           placeholder="Start typing your answer here, or use the microphone..."
//           rows={7}
//           className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-900 outline-none transition focus:border-[#0A66C2] focus:bg-white focus:ring-4 focus:ring-[#0A66C2]/10"
//         />

//         {/* RECORDING STATUS */}
//         {isRecording && (
//           <div className="mt-4 flex items-center gap-3 rounded-xl bg-red-50 border border-red-100 px-4 py-3">

//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />

//               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
//             </span>

//             <span className="text-sm font-semibold text-red-600">
//               Listening... Speak naturally
//             </span>

//           </div>
//         )}

//         {/* ACTIONS */}
//         <div className="flex flex-col sm:flex-row gap-3 mt-5">

//           <button
//             type="button"
//             onClick={handleClear}
//             disabled={isSubmitting || !answer}
//             className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 disabled:opacity-50 transition"
//           >
//             <Trash2 size={17} />
//             Clear
//           </button>

//           {!isRecording ? (

//             <button
//               type="button"
//               onClick={handleStartRecording}
//               disabled={isSubmitting}
//               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
//             >
//               <Mic size={18} />
//               Start Voice Answer
//             </button>

//           ) : (

//             <button
//               type="button"
//               onClick={handleStopRecording}
//               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition"
//             >
//               <MicOff size={18} />
//               Stop Recording
//             </button>

//           )}

//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={
//               isSubmitting ||
//               !answer.trim()
//             }
//             className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 text-white font-bold transition"
//           >
//             <Send size={18} />

//             {isSubmitting
//               ? "Submitting..."
//               : "Submit Answer"}

//           </button>

//         </div>

//         {/* TIP */}
//         <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">

//           <Volume2
//             size={18}
//             className="text-[#0A66C2] mt-0.5"
//           />

//           <p className="text-sm text-blue-800">
//             <strong>Tip:</strong> Speak clearly and explain
//             your answer as if you're talking to a real
//             interviewer.
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AnswerSection;











// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   Mic,
//   MicOff,
//   Trash2,
//   Send,
//   Loader2,
// } from "lucide-react";

// const AnswerSection = ({
//   interview,
//   question,
//   questionIndex,
//   onNextQuestion,
// }) => {
//   const { id } = useParams();

//   const [answer, setAnswer] = useState("");
//   const [interimText, setInterimText] = useState("");

//   const [isRecording, setIsRecording] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const recognitionRef = useRef(null);
//   const shouldKeepRecordingRef = useRef(false);

//   // ----------------------------------
//   // Setup Speech Recognition
//   // ----------------------------------

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition ||
//       window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       console.log("Speech recognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();

//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = "en-US";

//     recognition.onstart = () => {
//       setIsRecording(true);
//       setInterimText("");
//     };

//     recognition.onresult = (event) => {
//       let finalTranscript = "";
//       let currentInterim = "";

//       for (
//         let i = event.resultIndex;
//         i < event.results.length;
//         i++
//       ) {
//         const transcript =
//           event.results[i][0].transcript;

//         if (event.results[i].isFinal) {
//           finalTranscript += transcript;
//         } else {
//           currentInterim += transcript;
//         }
//       }

//       // Only permanently add FINAL transcript
//       if (finalTranscript) {
//         setAnswer((previous) => {
//           const separator =
//             previous && !previous.endsWith(" ")
//               ? " "
//               : "";

//           return previous + separator + finalTranscript.trim();
//         });
//       }

//       // Show interim text separately
//       setInterimText(currentInterim);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);

//       if (event.error === "not-allowed") {
//         toast.error("Microphone permission denied.");
//       }

//       if (event.error === "no-speech") {
//         console.log("No speech detected");
//       }

//       setIsRecording(false);
//     };

//     recognition.onend = () => {
//       setIsRecording(false);
//       setInterimText("");
//     };

//     recognitionRef.current = recognition;

//     // Cleanup
//     return () => {
//       recognition.stop();
//       recognitionRef.current = null;
//     };
//   }, []);    

//   // ----------------------------------
//   // Start Recording
//   // ----------------------------------

//   const handleStartRecording = () => {
//     if (!recognitionRef.current) {
//       toast.error(
//         "Speech recognition is not supported in this browser."
//       );
//       return;
//     }

//     if (isRecording) {
//       return;
//     }

//     shouldKeepRecordingRef.current = true;
//     setInterimText(""); 

//     try {
//       setInterimText("");

//       recognitionRef.current.start();
//     } catch (error) {
//       console.log("Recognition start error:", error);
//     }
//   };

//   // ----------------------------------
//   // Stop Recording
//   // ----------------------------------

//   const handleStopRecording = () => {

//     shouldKeepRecordingRef.current = false;

//     if (!recognitionRef.current) {
//       return;
//     }

//     recognitionRef.current.stop();

//     setIsRecording(false);
//     setInterimText("");
//   };

//   // ----------------------------------
//   // Clear Answer
//   // ----------------------------------

//   const handleClear = () => {
//     setAnswer("");
//     setInterimText("");
//   };

//   // ----------------------------------
//   // Submit Answer
//   // ----------------------------------

//   const handleAnswerSubmit = async () => {
//     if (!answer.trim()) {
//       toast.error("Please enter your answer.");
//       return;
//     }

//     // Stop recording before submitting
//     if (isRecording && recognitionRef.current) {
//       recognitionRef.current.stop();
//     }

//     try {
//       setIsSubmitting(true);

//       const res = await axios.post(
//         `http://localhost:5000/api/v1/interview/submit-answer/${id}`,
//         {
//           questionIndex,
//           userAnswer: answer.trim(),
//           timeTaken: 0,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log("Answer submitted:", res.data);

//       toast.success("Answer submitted successfully.");

//       setAnswer("");
//       setInterimText("");

//       onNextQuestion();

//     } catch (error) {
//       console.error("Submit answer error:", error);

//       toast.error(
//         error.response?.data?.message ||
//           "Failed to submit answer."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!question) {
//     return (
//       <div className="p-6 text-center text-gray-500">
//         Question not found.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">

//         <div>
//           <p className="text-xs uppercase tracking-wider text-[#0A66C2] font-bold">
//             Your Answer
//           </p>

//           <h2 className="text-xl font-bold text-gray-900 mt-1">
//             Answer the question
//           </h2>
//         </div>

//         <span className="text-sm text-gray-500">
//           {answer.length} characters
//         </span>
//       </div>

//       {/* Textarea */}
//       <div className="relative">

//         <textarea
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder="Type your answer or use the microphone..."
//           rows={8}
//           disabled={isSubmitting}
//           className="w-full resize-none rounded-2xl border border-gray-200 p-5 pr-5 outline-none transition focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 text-gray-800 leading-relaxed"
//         />

//         {/* Interim speech */}
//         {isRecording && interimText && (
//           <div className="mt-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100">
//             <p className="text-sm text-blue-600">
//               <span className="font-semibold">
//                 Listening:
//               </span>{" "}
//               {interimText}
//             </p>
//           </div>
//         )}

//       </div>

//       {/* Recording status */}
//       {isRecording && (
//         <div className="flex items-center gap-2 mt-4 text-red-500">

//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />

//             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
//           </span>

//           <span className="text-sm font-semibold">
//             Listening...
//           </span>

//         </div>
//       )}

//       {/* Actions */}
//       <div className="flex flex-col sm:flex-row gap-3 mt-6">

//         {/* Clear */}
//         <button
//           type="button"
//           onClick={handleClear}
//           disabled={isSubmitting || !answer}
//           className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 disabled:opacity-50 transition"
//         >
//           <Trash2 size={17} />
//           Clear
//         </button>

//         {/* Voice */}
//         <button
//           type="button"
//           onClick={
//             isRecording
//               ? handleStopRecording
//               : handleStartRecording
//           }
//           disabled={isSubmitting}
//           className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition ${
//             isRecording
//               ? "bg-red-500 hover:bg-red-600 text-white"
//               : "bg-gray-900 hover:bg-gray-800 text-white"
//           }`}
//         >
//           {isRecording ? (
//             <>
//               <MicOff size={18} />
//               Stop Recording
//             </>
//           ) : (
//             <>
//               <Mic size={18} />
//               Answer with Voice
//             </>
//           )}
//         </button>

//         {/* Submit */}
//         <button
//           type="button"
//           onClick={handleAnswerSubmit}
//           disabled={
//             isSubmitting || !answer.trim()
//           }
//           className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 text-white font-semibold transition"
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2
//                 size={18}
//                 className="animate-spin"
//               />
//               Submitting...
//             </>
//           ) : (
//             <>
//               <Send size={18} />
//               Submit Answer
//             </>
//           )}
//         </button>

//       </div>

//       {/* Small helper */}
//       <p className="text-xs text-gray-400 mt-4 text-center">
//         Speak naturally. Your speech will be converted into text automatically.
//       </p>

//     </div>
//   );
// };

// export default AnswerSection;




import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Mic,
  MicOff,
  Trash2,
  Send,
  Loader2,
} from "lucide-react";

const AnswerSection = ({
  interview,
  question,
  questionIndex,
  onNextQuestion,
}) => {
  const { id } = useParams();

  const [answer, setAnswer] = useState("");
  const [interimText, setInterimText] = useState("");

  const [isRecording, setIsRecording] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store SpeechRecognition instance
  const recognitionRef = useRef(null);

  // IMPORTANT:
  // true  = user wants recording to continue
  // false = user intentionally stopped
  const shouldKeepRecordingRef = useRef(false);

  // Prevent restarting after an error
  const hasFatalErrorRef = useRef(false);

  // ==========================================
  // SETUP SPEECH RECOGNITION
  // ==========================================

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    // ==========================================
    // RECOGNITION START
    // ==========================================

    recognition.onstart = () => {
      console.log("Speech recognition started");

      setIsRecording(true);
      setInterimText("");

      hasFatalErrorRef.current = false;
    };

    // ==========================================
    // SPEECH RESULT
    // ==========================================

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let currentInterim = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        const transcript =
          event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          currentInterim += transcript;
        }
      }

      // ========================================
      // ONLY ADD FINAL TEXT TO ANSWER
      // ========================================

      if (finalTranscript.trim()) {
        setAnswer((previousAnswer) => {
          const newText =
            finalTranscript.trim();

          if (!previousAnswer.trim()) {
            return newText;
          }

          return (
            previousAnswer.trim() +
            " " +
            newText
          );
        });
      }

      // ========================================
      // TEMPORARY TEXT
      // ========================================

      setInterimText(currentInterim);
    };

    // ==========================================
    // ERROR
    // ==========================================

    recognition.onerror = (event) => {
      console.log(
        "Speech recognition error:",
        event.error
      );

      // ----------------------------------------
      // Permission denied
      // ----------------------------------------

      if (event.error === "not-allowed") {
        toast.error(
          "Microphone permission denied."
        );

        hasFatalErrorRef.current = true;
        shouldKeepRecordingRef.current = false;

        setIsRecording(false);
        setInterimText("");

        return;
      }

      // ----------------------------------------
      // Microphone unavailable
      // ----------------------------------------

      if (event.error === "audio-capture") {
        toast.error(
          "Microphone could not be detected."
        );

        hasFatalErrorRef.current = true;
        shouldKeepRecordingRef.current = false;

        setIsRecording(false);
        setInterimText("");

        return;
      }

      // ----------------------------------------
      // No speech
      // ----------------------------------------

      if (event.error === "no-speech") {
        console.log(
          "No speech detected. Recognition may restart."
        );

        return;
      }

      // ----------------------------------------
      // Aborted
      // ----------------------------------------

      if (event.error === "aborted") {
        console.log(
          "Speech recognition aborted."
        );

        return;
      }
    };

    // ==========================================
    // RECOGNITION ENDED
    // ==========================================

    recognition.onend = () => {
      console.log(
        "Speech recognition ended."
      );

      setInterimText("");

      // ========================================
      // USER STILL WANTS RECORDING
      // ========================================

      if (
        shouldKeepRecordingRef.current &&
        !hasFatalErrorRef.current
      ) {
        console.log(
          "Restarting speech recognition..."
        );

        setTimeout(() => {
          if (
            !shouldKeepRecordingRef.current ||
            hasFatalErrorRef.current
          ) {
            return;
          }

          try {
            recognition.start();
          } catch (error) {
            // Browser may say recognition
            // is already running.
            console.log(
              "Recognition restart:",
              error.message
            );
          }
        }, 300);

        return;
      }

      // ========================================
      // USER INTENTIONALLY STOPPED
      // ========================================

      setIsRecording(false);
    };

    recognitionRef.current = recognition;

    // ==========================================
    // CLEANUP
    // ==========================================

    return () => {
      shouldKeepRecordingRef.current = false;

      try {
        recognition.stop();
      } catch (error) {
        console.log(
          "Recognition cleanup:",
          error.message
        );
      }

      recognitionRef.current = null;
    };
  }, []);

  // ==========================================
  // START RECORDING
  // ==========================================

  const handleStartRecording = () => {
    if (!recognitionRef.current) {
      toast.error(
        "Speech recognition is not supported in this browser."
      );

      return;
    }

    if (isRecording) {
      return;
    }

    // User wants recording
    shouldKeepRecordingRef.current = true;

    hasFatalErrorRef.current = false;

    setInterimText("");

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.log(
        "Recognition start error:",
        error.message
      );
    }
  };

  // ==========================================
  // STOP RECORDING
  // ==========================================

  const handleStopRecording = () => {
    // VERY IMPORTANT
    // Prevent onend from restarting
    shouldKeepRecordingRef.current = false;

    if (!recognitionRef.current) {
      return;
    }

    try {
      recognitionRef.current.stop();
    } catch (error) {
      console.log(
        "Recognition stop error:",
        error.message
      );
    }

    setIsRecording(false);
    setInterimText("");
  };

  // ==========================================
  // CLEAR ANSWER
  // ==========================================

  const handleClear = () => {
    setAnswer("");
    setInterimText("");
  };

  // ==========================================
  // SUBMIT ANSWER
  // ==========================================

  const handleAnswerSubmit = async () => {
    if (!answer.trim()) {
      toast.error(
        "Please enter your answer."
      );

      return;
    }

    // ========================================
    // STOP RECORDING
    // ========================================

    shouldKeepRecordingRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.log(
          "Recognition stop:",
          error.message
        );
      }
    }

    try {
      setIsSubmitting(true);

      // ========================================
      // SEND ANSWER TO BACKEND
      // ========================================

      const res = await axios.post(
        `http://localhost:5000/api/v1/interview/submit-answer/${id}`,
        {
          questionIndex: questionIndex,
          userAnswer: answer.trim(),
          timeTaken: 0,
        },
        {
          withCredentials: true,
        }
      );

      console.log(
        "Answer submitted:",
        res.data
      );

      toast.success(
        "Answer submitted successfully."
      );

      // ========================================
      // RESET
      // ========================================

      setAnswer("");
      setInterimText("");

      // ========================================
      // NEXT QUESTION
      // ========================================

      onNextQuestion();

    } catch (error) {
      console.error(
        "Submit answer error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to submit answer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // QUESTION NOT FOUND
  // ==========================================

  if (!question) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <p className="text-gray-500">
          Question not found.
        </p>
      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex items-center justify-between mb-5">

        <div>
          <p className="text-xs uppercase tracking-wider text-[#0A66C2] font-bold">
            Your Answer
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-1">
            Answer the question
          </h2>
        </div>

        <span className="text-sm text-gray-500">
          {answer.length} characters
        </span>

      </div>

      {/* ======================================
          TEXTAREA
      ====================================== */}

      <textarea
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        placeholder="Type your answer or use the microphone..."
        rows={8}
        disabled={isSubmitting}
        className="w-full resize-none rounded-2xl border border-gray-200 p-5 outline-none transition focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10 text-gray-800 leading-relaxed"
      />

      {/* ======================================
          INTERIM SPEECH
      ====================================== */}

      {isRecording && interimText && (
        <div className="mt-3 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100">

          <p className="text-sm text-blue-600">

            <span className="font-semibold">
              Listening:
            </span>{" "}

            {interimText}

          </p>

        </div>
      )}

      {/* ======================================
          RECORDING STATUS
      ====================================== */}

      {isRecording && (
        <div className="flex items-center gap-2 mt-4 text-red-500">

          <span className="relative flex h-3 w-3">

            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />

            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />

          </span>

          <span className="text-sm font-semibold">
            Listening...
          </span>

        </div>
      )}

      {/* ======================================
          ACTIONS
      ====================================== */}

      <div className="flex flex-col sm:flex-row gap-3 mt-6">

        {/* CLEAR */}

        <button
          type="button"
          onClick={handleClear}
          disabled={
            isSubmitting ||
            (!answer && !interimText)
          }
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 disabled:opacity-50 transition"
        >
          <Trash2 size={17} />

          Clear
        </button>

        {/* VOICE */}

        <button
          type="button"
          onClick={
            isRecording
              ? handleStopRecording
              : handleStartRecording
          }
          disabled={isSubmitting}
          className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition ${
            isRecording
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white"
          }`}
        >

          {isRecording ? (
            <>
              <MicOff size={18} />

              Stop Recording
            </>
          ) : (
            <>
              <Mic size={18} />

              Answer with Voice
            </>
          )}

        </button>

        {/* SUBMIT */}

        <button
          type="button"
          onClick={handleAnswerSubmit}
          disabled={
            isSubmitting ||
            !answer.trim()
          }
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 text-white font-semibold transition"
        >
                       
          {isSubmitting ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />

              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />

              Submit Answer
            </>
          )}

        </button>

      </div>

      {/* ======================================
          HELPER
      ====================================== */}

      <p className="text-xs text-gray-400 mt-4 text-center">
        Speak naturally. Your speech will be
        converted into text automatically.
      </p>

    </div>
  );
};

export default AnswerSection;