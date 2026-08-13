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

  const handleNavigation = (path) => {
    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
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

      <header className="sticky top-0 z-50 px-3 sm:px-5 lg:px-8 pt-2">
        <div className="max-w-7xl mx-auto h-[64px] px-4 sm:px-6 lg:px-7 flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E7EAF0] shadow-[0_6px_25px_rgba(7,26,43,0.08)]">
          {/* Logo */}
          <div onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer group">
            <img src={assets.logo} alt="AdvocateAssam" className="w-32 sm:w-36 lg:w-40 transition-transform duration-300 group-hover:scale-[1.02] rounded-2xl" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) => `relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isActive ? "text-[#0b2149]" : "text-gray-500 hover:text-[#0b2149]"}`}
              >
                {({ isActive }) => (
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>
                    <span className={`absolute -bottom-0.5 h-[2px] rounded-full bg-[#D4A017] transition-all duration-300 ${isActive ? "w-5 opacity-100" : "w-0 opacity-0"}`} />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lawyer Portal */}
            <button
              onClick={() => window.open("https://api.advocateassam.com", "_blank", "noopener,noreferrer")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-2xl border border-[#D4A017]/40 bg-[#071A2B] text-white text-xs font-semibold shadow-sm hover:bg-[#0d2942] hover:border-[#D4A017] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-[#D4A017] text-sm">⚖</span>
              Lawyer Portal
            </button>

            {/* Logged In User */}
            {token && userData ? (
              <div className="relative">
                <button onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-2 rounded-lg p-1 hover:bg-gray-50 transition-all">
                  <div className="relative">
                    <img src={userData.image} alt="" className="w-8 h-8 rounded-lg object-cover border border-gray-200" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                  </div>

                  <img src={assets.dropdown_icon} alt="" className={`w-2.5 transition-transform duration-300 ${showProfile ? "rotate-180" : ""}`} />
                </button>

                {/* Profile Dropdown */}
                {showProfile && (
                  <div className="absolute right-0 top-[48px] w-64 bg-white rounded-xl border border-gray-100 shadow-[0_15px_45px_rgba(7,26,43,0.15)] overflow-hidden z-50">
                    <div className="px-4 py-4 bg-[#F8FAFD] border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <img src={userData.image} alt="" className="w-10 h-10 rounded-lg object-cover border border-white shadow-sm" />

                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-[#0b2149] truncate">{userData.name}</p>
                          <p className="text-[11px] text-gray-400 truncate mt-0.5">{userData.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={() => {
                          navigate("/my-profile");
                          setShowProfile(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-[#F3F6FC] hover:text-[#0b2149] transition-all"
                      >
                        <span>👤</span>
                        <span>My Profile</span>
                      </button>

                      <button
                        onClick={() => {
                          navigate("/my-appointments");
                          setShowProfile(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-[#F3F6FC] hover:text-[#0b2149] transition-all"
                      >
                        <span>📅</span>
                        <span>My Appointments</span>
                      </button>

                      <div className="h-px bg-gray-100 my-1.5" />

                      <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-all">
                        <span>↪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden md:flex items-center gap-2 px-5 py-1.5 rounded-2xl bg-[#0b2149] text-white text-sm font-semibold border border-[#D4A017]/50 shadow-md hover:bg-[#14367a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
                <span className="text-[#D4A017] text-sm">→</span>
              </button>
            )}

            {/* Mobile Menu */}
            <button onClick={() => setShowMenu(true)} className="lg:hidden w-7 h-7 rounded-lg bg-[#F5F7FA] flex items-center justify-center hover:bg-[#EDF1F7] transition-all">
              <img src={assets.menu_icon} alt="Menu" className="w-3" />
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================== */}
      {/* ================= MOBILE MENU ======================== */}
      {/* ====================================================== */}

      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${showMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* Overlay */}
        <div onClick={() => setShowMenu(false)} className="absolute inset-0 bg-[#071A2B]/60 backdrop-blur-sm" />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-[400px] bg-white shadow-2xl transition-transform duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
          {/* Mobile Header */}
          <div className="px-6 py-6 flex items-center justify-between border-b border-gray-100">
            <img src={assets.logo} alt="AdvocateAssam" className="w-36" />

            <button onClick={() => setShowMenu(false)} className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-all">
              <img src={assets.cross_icon} alt="Close" className="w-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="px-5 pt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
              Explore
            </p>

            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) => `block px-5 py-4 rounded-xl text-sm font-semibold transition-all ${isActive ? "bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF]" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Professional Access */}
            <div className="mt-8 pt-7 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
                Professional Access
              </p>

              <button
                onClick={() => window.open("https://api.advocateassam.com", "_blank", "noopener,noreferrer")}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#071A2B] text-white text-sm font-semibold border border-[#D4A017]/40 hover:bg-[#0d2942] transition-all"
              >
                <span className="text-[#D4A017] text-lg">⚖</span>
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
                className="w-full mt-4 py-2 rounded-xl bg-[#D4A017] text-[#071A2B] font-bold text-sm hover:bg-[#E5B82A] transition-all"
              >
                Get Started →
              </button>
            )}
          </div>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#FAFBFC] border-t border-gray-100">
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
