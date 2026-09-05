import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react"; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [showPassword, setShowPassword] = useState(false); 

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/signup",
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("SIGNUP RESPONSE:", data);

      dispatch(setUser({ user: data.user, token: data.token }));

      setName("");
      setEmail("");
      setPassword("");

      toast.success("Signup Successfully 🚀");
      navigate("/complete-profile");
    } catch (error) {
      toast.error(error.response?.data?.message || "Register failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden px-4 py-10 sm:px-6">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-200/40 rounded-full blur-3xl" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-200/30 rounded-full blur-3xl" />

      {/* Main Card with animation */}
      <div className="relative z-10 w-full max-w-md md:max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] animate-fadeInUp">
        
        {/* LEFT SECTION */}
        <div className="hidden md:flex flex-col justify-center bg-blue-50 p-12">
          <div className="flex items-center gap-3">
            {/* New Logo */}
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-bold text-2xl">
              🧠
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0A66C2]">PrepMind</h1>
              <p className="text-xs text-gray-500 -mt-1">AI Career Platform</p>
            </div>
          </div>

          <h2 className="mt-10 text-3xl font-bold leading-tight">
            Land Your Dream Job
            <br />
            With AI
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Build ATS-friendly resumes, practice AI interviews, discover career paths, and track your progress—all in one platform.
          </p>

          <div className="mt-8 space-y-3 text-sm text-gray-700">
            <p>✓ ATS Resume Builder</p>
            <p>✓ AI Mock Interviews</p>
            <p>✓ Personalized Career Roadmap</p>
            <p>✓ Industry Insights</p>
            <p>✓ Skill Analytics</p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Create your PrepMind account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Start building your career with AI-powered tools.
          </p>

          {/* Google */}
          <button className="mt-6 w-full py-3 rounded-xl border-gray-300 bg-white text-gray-700 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-blue-100"
              required
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-blue-100"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-blue-100 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 -mt-2">Minimum 8 characters</p>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign up"}
            </button>
          </form>

          {/* Terms */}
          <p className="mt-4 text-center text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <span className="text-[#0A66C2] hover:underline cursor-pointer">Terms of Service</span> and{" "}
            <span className="text-[#0A66C2] hover:underline cursor-pointer">Privacy Policy</span>.
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <span
              onClick={() => navigate("/signin")}
              className="ml-1 text-[#0A66C2] font-semibold cursor-pointer hover:underline"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
      `}</style>
    </section>
  );
};

export default Signup;