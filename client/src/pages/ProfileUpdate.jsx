import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ProfileUpdate = () => {

  return (
    <section className="w-full min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">

      {/* Card */}
      <div className="w-full max-w-lg p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10 
      shadow-[0_0_50px_rgba(168,85,247,0.25)] space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">

          <div>
            <h2 className="text-xl font-semibold">Profile Details</h2>
            <p className="text-sm text-gray-400">
              Manage your account information
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 
          flex items-center justify-center font-semibold">
            U
          </div>

        </div>

        {/* User Info */}
        <div className="bg-black/30 border border-white/10 rounded-xl p-4 space-y-2">

          <p className="text-lg font-medium">Adarsh Patidar</p>
          <p className="text-sm text-gray-400">profile@gmail.com</p>

          <Link
            to="/profile-update"
            className="inline-block mt-2 text-sm text-purple-400 hover:underline"
          >
            Edit Profile →
          </Link>

        </div>

        {/* Email Section */}
        <div className="space-y-2">

          <h3 className="text-sm text-gray-300">Email Address</h3>

          <div className="flex items-center justify-between 
          bg-black/30 border border-white/10 px-4 py-3 rounded-xl">

            <div>
              <p className="text-sm">profile@gmail.com</p>
              <span className="text-xs text-green-400">Primary</span>
            </div>

            <button className="text-xs text-purple-400 hover:underline">
              Verify
            </button>

          </div>

          {/* Add Email */}
          <button className="w-full mt-2 py-3 rounded-xl border border-white/20 
          bg-white/5 hover:bg-white/10 transition">
            + Add Email Address
          </button>

        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-white/10">

          <button className="flex-1 flex items-center justify-center gap-2 
          py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            <MdManageAccounts />
            Settings
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 
          py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition">
            <RiLogoutCircleRFill />
            Logout
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProfileUpdate