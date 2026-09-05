// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   Briefcase,
//   Building2,
//   Clock3,
//   GraduationCap,
//   Languages,
//   Play,
//   Sparkles,
//   Settings2,
//   Check
// } from "lucide-react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const InterviewSetup = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const interviewType = searchParams.get("type") || "technical";

//   const [formData, setFormData] = useState({
//     interviewType,
//     role: "",
//     company: "",
//     experience: "Fresher",
//     difficulty: "Medium",
//     duration: "30",
//     language: "English",
//     questions: "10",
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({...prev, [field]: value }));
//   };

//   const handleStartInterview = () => {
//     if(!formData.role ||!formData.company) {
//       alert("Please fill Role and Company");
//       return;
//     }
//     navigate("/start-interview", { state: formData });
//   };

//   return (
//     <div className="min-h-screen bg-[#F7F9FC] py-6 sm:py-10">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6">

//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] font-medium mb-6"
//         >
//           <ArrowLeft size={18} />
//           Back
//         </button>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-sm border-gray-100 overflow-hidden">

//           {/* Gradient Header */}
//           <div className="bg-gradient-to-r from-[#0A66C2] to-[#004182] p-6 sm:p-8 text-white">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
//                 <Sparkles />
//               </div>
//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-bold">
//                   Interview Setup
//                 </h1>
//                 <p className="text-blue-100 mt-1 text-sm">
//                   Configure your {formData.interviewType} interview
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Form Body */}
//           <div className="p-5 sm:p-8">

//             {/* Section 1 */}
//             <div className="mb-6">
//               <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
//                 <Settings2 size={18} className="text-[#0A66C2]" />
//                 Basic Details
//               </h3>
//               <div className="grid sm:grid-cols-2 gap-4">

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Interview Type</label>
//                   <select
//                     value={formData.interviewType}
//                     onChange={(e) => handleChange("interviewType", e.target.value)}
//                     className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2] bg-white"
//                   >
//                     <option value="hr">HR Interview</option>
//                     <option value="technical">Technical Interview</option>
//                     <option value="behavioral">Behavioral Interview</option>
//                     <option value="custom">Custom AI Interview</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Job Role</label>
//                   <div className="relative">
//                     <Briefcase size={18} className="absolute left-3 top-3.5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Frontend Developer"
//                       value={formData.role}
//                       onChange={(e) => handleChange("role", e.target.value)}
//                       className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#0A66C2]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Company</label>
//                   <div className="relative">
//                     <Building2 size={18} className="absolute left-3 top-3.5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Google"
//                       value={formData.company}
//                       onChange={(e) => handleChange("company", e.target.value)}
//                       className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#0A66C2]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Experience</label>
//                   <div className="relative">
//                     <GraduationCap size={18} className="absolute left-3 top-3.5 text-gray-400" />
//                     <select
//                       value={formData.experience}
//                       onChange={(e) => handleChange("experience", e.target.value)}
//                       className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#0A66C2]"
//                     >
//                       <option>Fresher</option>
//                       <option>0-1 Years</option>
//                       <option>1-3 Years</option>
//                       <option>3+ Years</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section 2 */}
//             <div className="mb-6">
//               <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
//                 <Clock3 size={18} className="text-[#0A66C2]" />
//                 Interview Settings
//               </h3>
//               <div className="grid sm:grid-cols-3 gap-4">

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Difficulty</label>
//                   <select
//                     value={formData.difficulty}
//                     onChange={(e) => handleChange("difficulty", e.target.value)}
//                     className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2]"
//                   >
//                     <option>Easy</option>
//                     <option>Medium</option>
//                     <option>Hard</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Duration</label>
//                   <select
//                     value={formData.duration}
//                     onChange={(e) => handleChange("duration", e.target.value)}
//                     className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2]"
//                   >
//                     <option value="15">15 Minutes</option>
//                     <option value="30">30 Minutes</option>
//                     <option value="45">45 Minutes</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Questions</label>
//                   <select
//                     value={formData.questions}
//                     onChange={(e) => handleChange("questions", e.target.value)}
//                     className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2]"
//                   >
//                     <option value="5">5 Questions</option>
//                     <option value="10">10 Questions</option>
//                     <option value="15">15 Questions</option>
//                   </select>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label className="text-sm font-semibold text-gray-700 mb-2 block">Language</label>
//                   <div className="relative">
//                     <Languages size={18} className="absolute left-3 top-3.5 text-gray-400" />
//                     <select
//                       value={formData.language}
//                       onChange={(e) => handleChange("language", e.target.value)}
//                       className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#0A66C2]"
//                     >
//                       <option>English</option>
//                       <option>Hindi</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Instructions */}
//             <div className="bg-blue-50 rounded-xl p-4 border-blue-100">
//               <h3 className="font-bold text-[#0A66C2] mb-2 flex items-center gap-2">
//                 <Check size={16} /> Before You Start
//               </h3>
//               <ul className="space-y-1 text-sm text-gray-600 list-disc ml-5">
//                 <li>Allow microphone permission</li>
//                 <li>Find a quiet environment</li>
//                 <li>AI will analyze your answers and tone</li>
//               </ul>
//             </div>

//             {/* Start Button */}
//             <button
//               onClick={handleStartInterview}
//               className="mt-6 w-full bg-gradient-to-r from-[#0A66C2] to-[#004182] hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg shadow-[#0A66C2]/20"
//             >
//               <Play size={20} />
//               Start AI Interview
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewSetup;









import axios from 'axios';
import React, { useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Clock,
  Zap,
  Sparkles,
  ChevronRight,
  Check
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const InterviewSetup = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    interviewType: "",
    questionType: "",
    role: "",
    company: "",
    experience: "",
    difficulty: "",
    duration: "",
    language: "English",
    questionsCount: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({...prev, [field]: value }));
  };

  const handleCreateInterview = async () => {
  try {                            
    const res = await axios.post(  
      "http://localhost:5000/api/v1/interview/create",
      {
        role: formData.role,
        company: formData.company,
        interviewType: formData.interviewType, 
        questionType: formData.questionType,
        experience: formData.experience,
        difficulty: formData.difficulty,
        duration: Number(formData.duration),
        language: formData.language,
        questionsCount: Number(formData.questionsCount),
      },
      {
        withCredentials: true,
      }
    );

    console.log(res.data);

    // Navigate to interview page
    navigate(`/start-interview/${res.data.interviewId}`, {
      state: formData,
    });

  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  const options = {
    interviewType: ["technical", "hr", "behavioral", "custom"],
    questionType: ["descriptive", "mcq"],
    experience: [
  "Intern",
  "Fresher",
  "Junior",
  "Mid-Level",
  "Senior",
  "Lead",
  "Manager",
],
    difficulty: ["Easy", "Medium", "Hard"],
    duration: ["15", "30", "45"],
    questionsCount: ["5", "10", "15"],
    language: ["English", "Hindi"],
  };

  const PillGroup = ({ label, value, options, field }) => (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => handleChange(field, opt)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
              value === opt
             ? "bg-[#0A66C2] text-white border-[#0A66C2]"
              : "bg-white text-gray-700 border-gray-200 hover:border-[#0A66C2]"
            }`}
          >
            {field === "duration"? `${opt} min` : field === "questions"? `${opt} Qs` : opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* Back + Progress */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => step === 1? navigate(-1) : setStep(1)} className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] font-medium">
            <ArrowLeft size={18} />
            Back
          </button>
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full ${step >= 1? "bg-[#0A66C2]" : "bg-gray-300"}`}></div>
            <div className={`w-2 h-2 rounded-full ${step >= 2? "bg-[#0A66C2]" : "bg-gray-300"}`}></div>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border-gray-100 p-6 sm:p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="text-[#0A66C2]" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {step === 1? "Tell us about the role" : "Finalize settings"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {step === 1? "We'll tailor questions for you" : "Last tweaks before we start"}
            </p>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <PillGroup label="Interview Type" value={formData.interviewType} field="interviewType" options={options.interviewType} />

              <PillGroup 
              label="Question Type"
              value={formData.questionType}
              field="questionType" 
              options={options.questionType}
              className="" />
                

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Briefcase size={16} /> Job Role</label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Building2 size={16} /> Company</label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#0A66C2]"
                />
              </div>

              <PillGroup label="Experience Level" value={formData.experience} field="experience" options={options.experience} />

              <button
                onClick={() => setStep(2)}
                disabled={!formData.role ||!formData.company}
                className="w-full mt-4 bg-[#0A66C2] hover:bg-[#004182] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition"
              >
                Continue <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <PillGroup label="Difficulty" value={formData.difficulty} field="difficulty" options={options.difficulty} />
              <PillGroup label="Duration" value={formData.duration} field="duration" options={options.duration} />
              <PillGroup
  label="Questions"
  value={formData.questionsCount}
  field="questionsCount"
  options={options.questionsCount}
/>
              <PillGroup label="Language" value={formData.language} field="language" options={options.language} />

              {/* Summary */}
              <div className="bg-[#F7F9FC] rounded-xl p-4 border">
                <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"><Check size={16} className="text-green-600"/> Summary</p>
                <p className="text-sm text-gray-600">{formData.role} at {formData.company} • {formData.duration}min • {formData.questions} Qs</p>
              </div>

              <button
                onClick={handleCreateInterview}
                className="w-full bg-gradient-to-r from-[#0A66C2] to-[#004182] hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
              >
                <Zap size={20} />
                Start Interview
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default InterviewSetup;