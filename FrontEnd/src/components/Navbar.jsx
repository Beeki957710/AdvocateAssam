// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets_frontend/assets";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const { token, setToken, userData } = useContext(AppContext);

//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken("");
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
//         {/* Logo */}
//         <img
//           onClick={() => navigate("/")}
//           className="w-36 sm:w-40 cursor-pointer"
//           src={assets.logo}
//           alt=""
//         />

//         {/* Admin / Lawyer Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://api.advocateassam.com",
//               "_blank",
//               "noopener,noreferrer",
//             )
//           }
//           className="text-[11px] sm:text-xs bg-[#0b2149] text-white px-3 py-1 rounded-full shadow-md border border-[#d4af37] hover:bg-[#14367a] hover:scale-105 transition-all duration-300"
//         >
//           Admin / Lawyer
//         </button>
//       </div>

//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1 hover:scale-105 transition-all duration-300">
//             HOME
//           </li>
//           <hr className="border-none outline-none h-0.5 bg-[#5f6FFF]  w-3/5 m-auto hidden" />
//         </NavLink>

//         <NavLink to="/doctors">
//           <li className="py-1 hover:scale-105 transition-all duration-300">
//             ALL LAWYERS
//           </li>
//           <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
//         </NavLink>

//         <NavLink to="/about">
//           <li className="py-1 hover:scale-105 transition-all duration-300">
//             ABOUT
//           </li>
//           <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
//         </NavLink>

//         <NavLink to="/contact">
//           <li className="py-1 hover:scale-105 transition-all duration-300">
//             CONTACT
//           </li>
//           <hr className="border-none outline-none h-0.5 bg-[#5f6FFF]  w-3/5 m-auto hidden" />
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-4">
//         {token && userData ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={userData.image} alt="" />
//             <img className="w-2.5" src={assets.dropdown_icon} alt="" />

//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                 <p
//                   onClick={() => navigate("/my-profile")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Profile
//                 </p>
//                 <p
//                   onClick={() => navigate("/my-appointments")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Appointment
//                 </p>
//                 <p onClick={logout} className="hover:text-black cursor-pointer">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full font-light hidden md:block shadow-md border border-[#d4af37] hover:bg-[#14367a] hover:scale-105 transition-all duration-300"
//           >
//             Create Account
//           </button>
//         )}
//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden"
//           src={assets.menu_icon}
//           alt=""
//         />

//         {/*-----MObile_Menu-----*/}
//         <div
//           className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//         >
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={assets.logo} alt="" />
//             <img
//               className="w-7"
//               onClick={() => setShowMenu(false)}
//               src={assets.cross_icon}
//               alt=""
//             />
//           </div>
//           <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
//             <NavLink onClick={() => setShowMenu(false)} to="/">
//               <p className="px-4 py-2 rounded inline-block">Home</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/doctors">
//               <p className="px-4 py-2 rounded inline-block">ALL LAWYERS</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/about">
//               <p className="px-4 py-2 rounded inline-block">ABOUT</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/contact">
//               <p className="px-4 py-2 rounded inline-block">CONTACT</p>
//             </NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setShowProfile(false);
    navigate("/");
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Find Lawyers",
      path: "/doctors",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}

      <header className="sticky top-0 z-50 px-3 sm:px-5 lg:px-8 pt-3">

        <div
          className="
            max-w-7xl
            mx-auto
            h-[78px]
            px-5
            sm:px-7
            lg:px-8
            flex
            items-center
            justify-between
            rounded-2xl
            bg-white/95
            backdrop-blur-xl
            border
            border-[#E7EAF0]
            shadow-[0_8px_35px_rgba(7,26,43,0.08)]
          "
        >

          {/* ================= LOGO ================= */}

          <div
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              cursor-pointer
              group
            "
          >
            <img
              src={assets.logo}
              alt="AdvocateAssam"
              className="
                w-36
                sm:w-40
                lg:w-44
                transition-transform
                duration-300
                group-hover:scale-[1.02]
              "
            />
          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="hidden lg:flex items-center gap-1">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative
                  px-5
                  py-2.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#0b2149]"
                      : "text-gray-500 hover:text-[#0b2149]"
                  }
                `}
              >
                {({ isActive }) => (
                  <div className="flex flex-col items-center">

                    <span>{item.name}</span>

                    {/* Active Indicator */}

                    <span
                      className={`
                        absolute
                        -bottom-1
                        h-[2px]
                        rounded-full
                        bg-[#D4A017]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />

                  </div>
                )}
              </NavLink>
            ))}

          </nav>


          {/* ================= RIGHT SECTION ================= */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* Lawyer Portal */}

            <button
              onClick={() =>
                window.open(
                  "https://api.advocateassam.com",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="
                hidden
                sm:flex
                items-center
                gap-2
                px-5
                py-1.5
                rounded-xl
                border
                border-[#D4A017]/40
                bg-[#071A2B]
                text-white
                text-xs
                font-semibold
                shadow-sm
                hover:bg-[#0d2942]
                hover:border-[#D4A017]
                hover:shadow-md
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              <span className="text-[#D4A017] text-base">
                ⚖
              </span>

              Lawyer Portal
            </button>


            {/* ================= LOGGED IN USER ================= */}

            {token && userData ? (

              <div className="relative">

                {/* Profile Button */}

                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    p-1.5
                    pr-2.5
                    hover:bg-gray-50
                    transition-all
                  "
                >

                  <div className="relative">

                    <img
                      src={userData.image}
                      alt=""
                      className="
                        w-10
                        h-10
                        rounded-xl
                        object-cover
                        border
                        border-gray-200
                      "
                    />

                    {/* Online Indicator */}

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        w-3
                        h-3
                        bg-green-500
                        rounded-full
                        border-2
                        border-white
                      "
                    />

                  </div>

                  <img
                    src={assets.dropdown_icon}
                    alt=""
                    className={`
                      w-3
                      transition-transform
                      duration-300
                      ${
                        showProfile
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>


                {/* ================= PROFILE DROPDOWN ================= */}

                {showProfile && (

                  <div
                    className="
                      absolute
                      right-0
                      top-[60px]
                      w-72
                      bg-white
                      rounded-2xl
                      border
                      border-gray-100
                      shadow-[0_20px_60px_rgba(7,26,43,0.15)]
                      overflow-hidden
                      z-50
                    "
                  >

                    {/* Profile Header */}

                    <div
                      className="
                        px-5
                        py-5
                        bg-[#F8FAFD]
                        border-b
                        border-gray-100
                      "
                    >

                      <div className="flex items-center gap-3">

                        <img
                          src={userData.image}
                          alt=""
                          className="
                            w-12
                            h-12
                            rounded-xl
                            object-cover
                            border
                            border-white
                            shadow-sm
                          "
                        />

                        <div className="min-w-0">

                          <p className="font-semibold text-[#0b2149] truncate">
                            {userData.name}
                          </p>

                          <p className="text-xs text-gray-400 truncate mt-1">
                            {userData.email}
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Dropdown Options */}

                    <div className="p-2.5">

                      {/* Profile */}

                      <button
                        onClick={() => {
                          navigate("/my-profile");
                          setShowProfile(false);
                        }}
                        className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3.5
                          rounded-xl
                          text-sm
                          text-gray-600
                          hover:bg-[#F3F6FC]
                          hover:text-[#0b2149]
                          transition-all
                        "
                      >

                        <span className="text-lg">
                          👤
                        </span>

                        <span>
                          My Profile
                        </span>

                      </button>


                      {/* Appointments */}

                      <button
                        onClick={() => {
                          navigate("/my-appointments");
                          setShowProfile(false);
                        }}
                        className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3.5
                          rounded-xl
                          text-sm
                          text-gray-600
                          hover:bg-[#F3F6FC]
                          hover:text-[#0b2149]
                          transition-all
                        "
                      >

                        <span className="text-lg">
                          📅
                        </span>

                        <span>
                          My Appointments
                        </span>

                      </button>


                      <div className="h-px bg-gray-100 my-2" />


                      {/* Logout */}

                      <button
                        onClick={logout}
                        className="
                          w-full
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3.5
                          rounded-xl
                          text-sm
                          text-red-500
                          hover:bg-red-50
                          transition-all
                        "
                      >

                        <span className="text-lg">
                          ↪
                        </span>

                        <span>
                          Logout
                        </span>

                      </button>

                    </div>

                  </div>

                )}

              </div>

            ) : (

              /* ================= CREATE ACCOUNT ================= */

              <button
                onClick={() => navigate("/login")}
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  px-6
                  py-1.5
                  rounded-xl
                  bg-[#0b2149]
                  text-white
                  text-sm
                  font-semibold
                  border
                  border-[#D4A017]/50
                  shadow-md
                  hover:bg-[#14367a]
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >

                Get Started

                <span className="text-[#D4A017] text-base">
                  →
                </span>

              </button>

            )}


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setShowMenu(true)}
              className="
                lg:hidden
                w-11
                h-11
                rounded-xl
                bg-[#F5F7FA]
                flex
                items-center
                justify-center
                hover:bg-[#EDF1F7]
                transition-all
              "
            >

              <img
                src={assets.menu_icon}
                alt="Menu"
                className="w-5"
              />

            </button>

          </div>

        </div>

      </header>


      {/* ====================================================== */}
      {/* ================= MOBILE MENU ======================== */}
      {/* ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          lg:hidden
          transition-all
          duration-300
          ${
            showMenu
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >

        {/* Overlay */}

        <div
          onClick={() => setShowMenu(false)}
          className="
            absolute
            inset-0
            bg-[#071A2B]/60
            backdrop-blur-sm
          "
        />


        {/* Drawer */}

        <div
          className={`
            absolute
            right-0
            top-0
            bottom-0
            w-[88%]
            max-w-[400px]
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            ${
              showMenu
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >

          {/* Mobile Header */}

          <div
            className="
              px-6
              py-6
              flex
              items-center
              justify-between
              border-b
              border-gray-100
            "
          >

            <img
              src={assets.logo}
              alt="AdvocateAssam"
              className="w-36"
            />

            <button
              onClick={() => setShowMenu(false)}
              className="
                w-11
                h-11
                rounded-xl
                bg-gray-50
                flex
                items-center
                justify-center
                hover:bg-gray-100
                transition-all
              "
            >

              <img
                src={assets.cross_icon}
                alt="Close"
                className="w-5"
              />

            </button>

          </div>


          {/* Mobile Navigation */}

          <div className="px-5 pt-8">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                font-bold
                text-gray-400
                mb-4
              "
            >
              Explore
            </p>


            <div className="space-y-2">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `
                    block
                    px-5
                    py-4
                    rounded-xl
                    text-sm
                    font-semibold
                    transition-all
                    ${
                      isActive
                        ? "bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF]"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.name}
                </NavLink>

              ))}

            </div>


            {/* Professional Access */}

            <div
              className="
                mt-8
                pt-7
                border-t
                border-gray-100
              "
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-gray-400
                  mb-4
                "
              >
                Professional Access
              </p>


              <button
                onClick={() =>
                  window.open(
                    "https://api.advocateassam.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-2
                  rounded-xl
                  bg-[#071A2B]
                  text-white
                  text-sm
                  font-semibold
                  border
                  border-[#D4A017]/40
                  hover:bg-[#0d2942]
                  transition-all
                "
              >

                <span className="text-[#D4A017] text-lg">
                  ⚖
                </span>

                Lawyer / Admin Portal

              </button>

            </div>


            {/* Get Started */}

            {!token && (

              <button
                onClick={() => {
                  navigate("/login");
                  setShowMenu(false);
                }}
                className="
                  w-full
                  mt-4
                  py-2
                  rounded-xl
                  bg-[#D4A017]
                  text-[#071A2B]
                  font-bold
                  text-sm
                  hover:bg-[#E5B82A]
                  transition-all
                "
              >
                Get Started →
              </button>

            )}

          </div>


          {/* Mobile Footer */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-6
              bg-[#FAFBFC]
              border-t
              border-gray-100
            "
          >

            <p className="text-center text-xs text-gray-400">
              Trusted legal assistance, simplified.
            </p>

            <p className="text-center text-[10px] text-gray-300 mt-1">
              © {new Date().getFullYear()} AdvocateAssam
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar;



