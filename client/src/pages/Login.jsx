// import React, { useState } from 'react'
// import axios from 'axios'
// import { useDispatch } from 'react-redux' 
// import { setUser } from '../redux/authSlice'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const dispatch = useDispatch()
//   const navigate = useNavigate() // ✅ FIX (correct usage)

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleLogin = async (e) => {
//     e.preventDefault()

//     try {
//       const { data } = await axios.post(
//         'http://localhost:5000/api/v1/user/login',
//         { email, password },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           },
//           withCredentials: true
//         }
//       )

//       // 🔵 Store user in Redux
//       dispatch(setUser({
//         user: data.user,
//         token: data.token
//       }))

//       setEmail("")
//       setPassword("")

//       toast.success("Login Successfully 🚀")

//       navigate("/") // ✅ FIX

//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed ❌")
//     }
//   }

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">

//       <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">

//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-center mb-3">
//            Welcome Back to PrepmindAI 🚀
//         </h2>

//         <p className="text-lm text-gray-300 text-center mb-4">
//          Sign in to continue your AI-powered career journey
//         </p>

//         <button className='' > Continue with Google </button>
        

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-5">

          

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
//             required
//           />

//           {/* Password */}
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-300"
//             required
//           />

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
//           >
//             Continue
//           </button>

//         </form>

//         {/* Footer */}
//         <p className="text-sm text-gray-300 text-center mt-5">
//           Don’t have an account? 
//           <span 
//             onClick={() => navigate("/register")}
//             className="text-purple-400 cursor-pointer ml-1 hover:underline"
//           >
//             Register
//           </span>
//         </p>

//       </div>

//     </section>
//   )
// }

// export default Login




import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux' 
import { setUser } from '../redux/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/user/login',
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      )

      dispatch(setUser())

      setEmail("")
      setPassword("")

      toast.success("Login Successfully 🚀");
      
      if(!data.user.isProfileCompleted) {
         navigate('/complete-profile');
      } else {
        navigate("/dashboard");
      }


    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed ❌")
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
            Sign in to continue your journey
          </p>

          {/* Google Button */}
           <button className="mb-5 py-3 px-4 rounded-4xl border border-white/20 
bg-white/5  w-full
hover:bg-white/10 cursor-pointer 
transition-all duration-300 transform hover:scale-[1.03]
hover:shadow-[0_4px_30px_rgba(118,85,247,0.6)] 
flex items-center justify-center gap-2">
  Continue with Google <FcGoogle />
</button>


          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-[1px] bg-white/20"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-[1px] bg-white/20"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">

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
              Sign in
            </button>
                    
          </form>

          {/* Footer */}
          <p className="text-sm text-gray-400 mt-6 text-center">
            New to PrepmindAI?
            <span 
              onClick={() => navigate("/register")}
              className="text-purple-400 cursor-pointer ml-1 hover:underline"
            >
              Sign up
            </span>
          </p>

        </div>

      </div>

    </section>
  )
}

export default Login