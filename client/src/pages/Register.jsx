import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux' 
import { setUser } from '../redux/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/user/register',
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      )

      dispatch(setUser({
        user: data.user,
        token: data.token
      }))

      setName("")
      setEmail("")
      setPassword("")

      toast.success("Signup Successfully 🚀")
      navigate("/complete-profile")

    } catch (error) {
      console.log(error);
      
      toast.error(error.response?.data?.message || "Register failed ❌")
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* 🔥 Animated Gradient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[150px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Container */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10">

        {/* LEFT SIDE (Brand Section) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-lg p-10 space-y-4">
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            PrepmindAI
          </h1>

          <p className="text-gray-300 text-center text-sm">
            Your AI-powered platform to build resumes, crack interviews, and grow your career faster.
          </p>

        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="p-8 md:p-10 bg-white/5 backdrop-blur-md">

          <h2 className="text-2xl font-bold mb-1">
            Welcome Back 🚀
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Sign up to continue your journey
          </p>

          {/* Google Button */}
           <button className="mb-5 py-3 px-4 rounded-4xl border border-white/20 
bg-white/5  w-full
hover:bg-white/10 cursor-pointer 
transition-all duration-300 transform hover:scale-[1.03]
hover:shadow-[0_4px_30px_rgba(118,85,247,0.6)] 
flex items-center justify-center gap-2">
  Signup with Google <FcGoogle />
</button>


          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-[1px] bg-white/20"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-[1px] bg-white/20"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-4">

            <input
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-4xl bg-black/40 border border-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400 transition"
              required
            />

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-4xl bg-black/40 border border-white/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400 transition"
              required
            />

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-4xl bg-black/40 border border-white/20 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 transition"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-4xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg cursor-pointer hover:shadow-purple-500/30"
            >
              Sign up
            </button>

          </form>

          {/* Footer */}
          <p className="text-sm text-gray-400 mt-6 text-center">
            Already sign up?
            <span 
              onClick={() => navigate("/login")}
              className="text-purple-400 cursor-pointer ml-1 hover:underline"
            >
              Sign in
            </span>
          </p>

        </div>

      </div>

    </section>
  )
}

export default Register;