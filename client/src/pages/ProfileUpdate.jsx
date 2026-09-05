import React from 'react'
import { MdManageAccounts, MdEdit } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";                 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileUpdate = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [profile, setProfile] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/get",
          {
            withCredentials: true,
          }
        );

        setCurrentUser(res.data.user);
      } catch (error) {
        // User is not logged in
        console.log("No current user found");
        setCurrentUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchCurrentUser();
  }, []);


  const handleLogout = async () => {
    try {
      await axios.get(
        "http://localhost:5000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );

      // Clear Redux user
      dispatch(logoutUser());

      // Clear local user
      setCurrentUser(null);

      // Close profile
      setProfile(false);

      toast.success("Logout Successfully");

      navigate("/signin");
    } catch (error) {
      console.log(error);

      toast.error("Logout failed");
    }
  };
 
  return (                              
    <section className="w-full min-h-screen flex items-start justify-center
    bg-[#F8FAFC] relative overflow-hidden px-3 sm:px-4 py-6 sm:py-12 text-gray-900">

      {/* Google Style Background Glows - smaller on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute top-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 sm:w-72 h-52 sm:h-72 bg-purple-200/30 rounded-full blur-3xl" />

      {/* Card - Responsive padding + width */}
      <div className="relative w-full max-w-4xl p-5 sm:p-10 rounded-2xl sm:rounded-3xl
      bg-white border border-gray-200
      shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.08)] space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4 sm:pb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Manage Account</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Update your PrepMind AI profile
          </p>
        </div>

        {/* 2 Column Grid - stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* COLUMN 1 */}
          <div className="space-y-6 sm:space-y-8">

            {/* Avatar + Profile Completion */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0A66C2] text-white text-2xl sm:text-3xl font-bold flex items-center justify-center">
                A
              </div>

              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-900">Adarsh Patidar</h3>
              <p className="text-xs sm:text-sm text-gray-500">Software Engineering Student</p>

              <div className="mt-4 sm:mt-5 w-full">
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Profile Completion</p>
                <div className="w-full h-2.5 sm:h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-[#0A66C2] rounded-full"/>
                </div>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500">75% completed</p>
              </div>
            </div>

            {/* Quick Stats - 2x2 on mobile */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: "Applications", value: "12" },
                  { label: "Interviews", value: "5" },
                  { label: "Resume Score", value: "89%" },
                  { label: "Skills", value: "24" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions - stack on very small screens */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm sm:text-base transition active:scale-95">
                <MdManageAccounts size={18}/>
                Save Changes
              </button>

              <button onClick={() => handleLogout()} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm sm:text-base transition active:scale-95">
                <RiLogoutCircleRFill size={18}/>
                Logout
              </button>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6 sm:space-y-8">

            {/* Personal Information */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Personal Information</h4>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Full Name", value: "Adarsh Patidar" },
                  { label: "Email", value: "profile@gmail.com" },
                  { label: "Phone Number", value: "+91 98765 43210" },
                  { label: "College", value: "Medi-Caps University" },
                  { label: "Location", value: "Indore, Madhya Pradesh" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] sm:text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm sm:text-[15px] text-gray-900 font-medium break-words">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Edit Buttons - wrap on mobile */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">
                  <MdEdit size={16}/>
                  Edit Profile
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition">
                  <IoKeyOutline size={16}/>
                  Change Password
                </button>
              </div>
            </div>

            {/* AI Career Profile */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">AI Career Profile</h4>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  { name: "Resume Builder", status: "Complete", color: "text-green-600" },
                  { name: "Interview Profile", status: "Complete", color: "text-green-600" },
                  { name: "Career Goals", status: "In Progress", color: "text-yellow-600" },
                  { name: "Career Analytics", status: "Active", color: "text-blue-600" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-[#F8FAFC] border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl">
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                    <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${item.color}`}>
                      {item.status === "Complete" && <FaCheckCircle size={14}/>}
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ProfileUpdate