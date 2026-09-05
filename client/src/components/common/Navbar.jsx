import React, { useState, useEffect } from "react";
import { CgInsights } from "react-icons/cg";
import { MdInsights, MdManageAccounts } from "react-icons/md";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";

import { logoutUser } from "../../redux/authSlice";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [tools, setTools] = useState(false);
  const [profile, setProfile] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // =========================
  // GET CURRENT USER
  // =========================

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/user/me",
          {
            withCredentials: true,
          }
        );

        console.log("Current user:", res.data.user);

        setCurrentUser(res.data.user);
      } catch (error) {
        // User is not logged in
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  // =========================
  // LOGOUT
  // =========================

  const logout = async () => {
    try {
      await axios.get(
        "http://localhost:5000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );

      dispatch(logoutUser());

      setCurrentUser(null);
      setProfile(false);

      toast.success("Logout Successfully");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  // =========================
  // USER INITIAL
  // =========================

  const userInitial =
    currentUser?.name?.charAt(0).toUpperCase() || "U";

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        bg-white/80
        backdrop-blur-xl
        border-b
        border-gray-200
      "
    >
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          h-16
          px-4
          sm:px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
      >

        {/* =========================
            LOGO
        ========================= */}

        <Link
          to={currentUser ? "/dashboard" : "/"}
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-[#0A66C2]
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-xl
              shadow-md
            "
          >
            P
          </div>

          <div className="leading-tight">
            <h1
              className="
                font-bold
                text-lg
                text-gray-900
              "
            >
              PrepMind
            </h1>
          </div>

          <span
            className="
              hidden
              sm:block
              text-xs
              px-2
              py-1
              rounded-full
              bg-blue-50
              text-[#0A66C2]
              font-semibold
            "
          >
            AI
          </span>
        </Link>

        {/* =========================
            DESKTOP CENTER MENU
        ========================= */}

        <div
          className="
            hidden
            md:flex
            absolute
            left-1/2
            -translate-x-1/2
            items-center
            gap-8
          "
        >

          {/* INDUSTRY INSIGHTS */}

          <Link
            to="/industry-insights"
            className="
              flex
              items-center
              gap-2
              text-gray-600
              text-sm
              font-medium
              hover:text-[#0A66C2]
              transition
            "
          >
            <CgInsights size={19} />

            Industry Insights
          </Link>

          {/* GROWTH TOOLS */}

          <div className="relative">

            <button
              onClick={() => setTools(!tools)}
              className="
                flex
                items-center
                gap-2
                text-gray-600
                text-sm
                font-medium
                hover:text-[#0A66C2]
                transition
              "
            >
              <MdInsights size={19} />

              Growth Tools

              <IoChevronDown
                className={`
                  transition
                  ${tools ? "rotate-180" : ""}
                `}
              />
            </button>

            {tools && (
              <div
                className="
                  absolute
                  top-10
                  left-0
                  w-56
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-xl
                  p-2
                "
              >

                {[
                  ["📄 Resume builder", "/resume-dashboard"],
                  ["✉️ Cover Letter", "/cover-letter-dashboard"],
                  ["🎤 Interview Prep", "/interview-prep-dashboard"],
                  ["📚 Career Guides", "/career-guides"],
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item[1]}
                    onClick={() => setTools(false)}
                    className="
                      block
                      px-4
                      py-3
                      rounded-lg
                      text-sm
                      text-gray-700
                      hover:bg-blue-50
                      hover:text-[#0A66C2]
                      transition
                    "
                  >
                    {item[0]}
                  </Link>
                ))}

              </div>
            )}

          </div>

        </div>

        {/* =========================
            RIGHT SECTION
        ========================= */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* =========================
              LOGGED IN
          ========================= */}

          {currentUser ? (
            <>
              {/* =========================
                  CREDITS BUTTON
              ========================= */}

              <Link
                to="/credits"
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-50
                  text-[#0A66C2]
                  border
                  border-blue-100
                  text-sm
                  font-semibold
                  hover:bg-blue-100
                  transition
                "
              >
                <FaCoins size={15} />

                <span>
                  {currentUser.credits ?? 0}
                </span>

                <span className="hidden lg:inline">
                  Credits
                </span>
              </Link>

              {/* =========================
                  PROFILE
              ========================= */}

              <div className="relative">

                <button
                  onClick={() => setProfile(!profile)}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    shadow-md
                    hover:scale-105
                    transition
                  "
                >
                  {userInitial}
                </button>

                {profile && (

                  <div
                    className="
                      absolute
                      right-0
                      top-12
                      w-72
                      bg-white
                      rounded-2xl
                      border
                      border-gray-200
                      shadow-xl
                      p-5
                    "
                  >

                    {/* USER INFORMATION */}

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        pb-4
                        border-b
                      "
                    >

                      <div
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-blue-600
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                        "
                      >
                        {userInitial}
                      </div>

                      <div>

                        <h3
                          className="
                            font-semibold
                            text-gray-900
                          "
                        >
                          {currentUser.name}
                        </h3>

                        <p
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          {currentUser.email}
                        </p>

                      </div>

                    </div>

                    {/* CREDIT BALANCE */}

                    <Link
                      to="/credits"
                      onClick={() => setProfile(false)}
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        px-3
                        py-3
                        rounded-lg
                        bg-blue-50
                        hover:bg-blue-100
                        transition
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <FaCoins className="text-[#0A66C2]" />

                        <span
                          className="
                            text-sm
                            font-medium
                            text-gray-700
                          "
                        >
                          Credits
                        </span>
                      </div>

                      <span
                        className="
                          font-bold
                          text-[#0A66C2]
                        "
                      >
                        {currentUser.credits ?? 0}
                      </span>

                    </Link>

                    {/* MANAGE ACCOUNT */}

                    <Link
                      to="/profile-update"
                      onClick={() => setProfile(false)}
                      className="
                        mt-2
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        text-sm
                        hover:bg-blue-50
                        transition
                      "
                    >
                      <MdManageAccounts className="text-blue-600" />

                      Manage Account
                    </Link>

                    {/* LOGOUT */}

                    <button
                      onClick={logout}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        text-sm
                        text-red-600
                        hover:bg-red-50
                        transition
                      "
                    >
                      <RiLogoutCircleRFill />

                      Logout
                    </button>

                  </div>

                )}

              </div>

            </>
          ) : (

            /* =========================
                LOGGED OUT
            ========================= */

            <Link
              to="/signup"
              className="
                px-5
                py-2.5
                rounded-lg
                bg-[#0A66C2]
                text-white
                text-sm
                font-semibold
                hover:bg-blue-700
                transition
              "
            >
              Sign Up
            </Link>

          )}

          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              md:hidden
              text-2xl
              text-gray-700
            "
          >
            {mobileMenu ? <IoClose /> : <IoMenu />}
          </button>

        </div>

      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenu && (

        <div
          className="
            md:hidden
            border-t
            bg-white
            px-5
            py-5
            space-y-4
          "
        >

          {/* CREDITS FOR MOBILE */}

          {currentUser && (
            <Link
              to="/pricing"
              onClick={() => setMobileMenu(false)}
              className="
                flex
                items-center
                justify-between
                px-3
                py-3
                rounded-lg
                bg-blue-50
                text-[#0A66C2]
                font-semibold
              "
            >
              <div className="flex items-center gap-3">
                <FaCoins />
                Credits
              </div>

              <span>
                {currentUser.credits ?? 0}
              </span>
            </Link>
          )}

          {/* INDUSTRY INSIGHTS */}

          <Link
            to="/industry-insights"
            onClick={() => setMobileMenu(false)}
            className="
              flex
              items-center
              gap-3
              text-gray-700
              font-medium
            "
          >
            <CgInsights />

            Industry Insights
          </Link>

          {/* GROWTH TOOLS */}

          <button
            onClick={() => setTools(!tools)}
            className="
              flex
              items-center
              gap-3
              text-gray-700
              font-medium
            "
          >
            <MdInsights />

            Growth Tools

            <IoChevronDown
              className={`
                transition
                ${tools ? "rotate-180" : ""}
              `}
            />

          </button>

          {tools && (

            <div
              className="
                pl-8
                space-y-3
                text-sm
              "
            >

              <Link
                to="/resume-dashboard"
                onClick={() => setMobileMenu(false)}
                className="block text-gray-600"
              >
                📄 Resume Builder
              </Link>

              <Link
                to="/cover-letter"
                onClick={() => setMobileMenu(false)}
                className="block text-gray-600"
              >
                ✉️ Cover Letter
              </Link>

              <Link
                to="/interview-prep"
                onClick={() => setMobileMenu(false)}
                className="block text-gray-600"
              >
                🎤 Interview Prep
              </Link>

              <Link
                to="/career-guides"
                onClick={() => setMobileMenu(false)}
                className="block text-gray-600"
              >
                📚 Career Guides
              </Link>

            </div>

          )}

        </div>

      )}

    </nav>
  );
};

export default Navbar;