import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/signin",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("SIGNIn RESPONSE:", data);

      dispatch(setUser({ user: data.user, token: data.token }));
      toast.success("Login Successfully 🚀");

      setEmail("");
      setPassword("");

      if (!data.user.isProfileCompleted) {
        navigate("/complete-profile");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden px-4 py-10 sm:px-6">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-purple-200/30 rounded-full blur-3xl" />

      {/* Card with animation */}
      <div className="relative z-10 w-full max-w-md md:max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] animate-fadeInUp">
        
        {/* LEFT SIDE - Identical to Register */}
        <div className="hidden md:flex flex-col justify-center bg-blue-50 p-12">
          <div className="flex items-center gap-3">
            {/* Same Logo as Register */}
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-bold text-2xl">
              🧠
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0A66C2]">PrepMind</h1>
              <p className="text-xs text-gray-500 -mt-1">AI Career Platform</p>
            </div>
          </div>

          <h2 className="mt-10 text-3xl font-bold leading-tight">
            Welcome Back
            <br />
            Let's Get You
            <br />
            Closer To Your Dream Job
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Access your resumes, interview practice, career roadmap, and AI-powered guidance from one place.
          </p>

          <div className="mt-8 space-y-3 text-sm text-gray-700">
            <p>✓ ATS Resume Builder</p>
            <p>✓ AI Mock Interviews</p>
            <p>✓ Personalized Career Roadmap</p>
            <p>✓ Industry Insights</p>
            <p>✓ Skill Analytics</p>
          </div>
        </div>

        {/* FORM */}
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue your career journey.
          </p>

          <button className="mt-6 w-full py-3 rounded-xl border-gray-300 bg-white text-gray-700 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-gray-300 focus:outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-blue-100 pr-12"
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

            <div className="flex justify-end -mt-2">
              <span 
                onClick={() => toast.info("Forgot Password coming soon")}
                className="text-sm text-[#0A66C2] font-medium cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Continue"}
            </button>
          </form>

          {/* Terms */}
          <p className="mt-4 text-center text-xs text-gray-500">
            By signing in you agree to our{" "}
            <span className="text-[#0A66C2] hover:underline cursor-pointer">Terms of Service</span> and{" "}
            <span className="text-[#0A66C2] hover:underline cursor-pointer">Privacy Policy</span>.
          </p>

          <p className="mt-4 text-center text-sm text-gray-500">
            New to PrepMind AI?
            <span
              onClick={() => navigate("/signup")}
              className="ml-1 text-[#0A66C2] font-semibold cursor-pointer hover:underline"
            >
              Create Account
            </span>
          </p>
        </div>
      </div>

      {/* Animation */}
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

export default Signin;