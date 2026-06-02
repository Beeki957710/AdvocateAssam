import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  // MOBILE SIDEBAR STATE
  const [openSidebar, setOpenSidebar] = useState(false);

  const navStyle = ({ isActive }) =>
    `flex items-center gap-4 px-5 md:px-8 py-4 rounded-2xl transition-all duration-300 group
    ${
      isActive
        ? "bg-gradient-to-r from-[#071C55] to-[#0B2D83] text-white shadow-lg scale-[1.02]"
        : "text-gray-600 hover:bg-[#F5F7FB] hover:text-[#071C55] hover:translate-x-1"
    }`;

  return (
    <>
      {/* MOBILE MENU BUTTON */}

      <button
        onClick={() => setOpenSidebar(true)}
        className="md:hidden fixed bottom-5 left-5 z-50 bg-[#071C55] text-white p-4 rounded-full shadow-2xl"
      >
        <img className="w-6" src={assets.menu_icon} alt="" />
      </button>

      {/* OVERLAY */}

      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* SIDEBAR */}

      <div
        className={`
        fixed md:static top-0 left-0 z-50
        min-h-screen bg-white/90 backdrop-blur-xl border-r border-gray-200 shadow-xl
        transition-all duration-300
        w-[260px] md:w-[290px]

        ${openSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* MOBILE TOP */}

        <div className="flex items-center justify-between px-5 py-5 border-b md:hidden">
          <h1 className="text-2xl font-bold text-[#071C55]">
            Nyay<span className="text-[#D4A017]">Setu</span>
          </h1>

          <button onClick={() => setOpenSidebar(false)}>
            <img className="w-5" src={assets.cross_icon} alt="" />
          </button>
        </div>

        {/* ADMIN SIDEBAR */}

        {aToken && (
          <div className="px-3 py-6 flex flex-col gap-3">
            <NavLink
              to={"/admin-dashboard"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-6" src={assets.home_icon} alt="" />

              <div>
                <p className="font-semibold">Dashboard</p>
                <p className="text-xs opacity-70">Overview & Analytics</p>
              </div>
            </NavLink>

            <NavLink
              to={"/all-appointment"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-6" src={assets.appointment_icon} alt="" />

              <div>
                <p className="font-semibold">Consultations</p>
                <p className="text-xs opacity-70">Client Meetings</p>
              </div>
            </NavLink>

            <NavLink
              to={"/add-doctor"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-6" src={assets.add_icon} alt="" />

              <div>
                <p className="font-semibold">Add Lawyer</p>
                <p className="text-xs opacity-70">Register New Expert</p>
              </div>
            </NavLink>

            <NavLink
              to={"/doctor-list"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-6" src={assets.people_icon} alt="" />

              <div>
                <p className="font-semibold">Lawyers List</p>
                <p className="text-xs opacity-70">Manage Lawyers</p>
              </div>
            </NavLink>

            <NavLink
              to={"/lawyer-applications"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-6" src={assets.people_icon} alt="" />

              <div>
                <p className="font-semibold">Applications</p>
                <p className="text-xs opacity-70">Lawyer Requests</p>
              </div>
            </NavLink>
          </div>
        )}

        {/* LAWYER SIDEBAR */}

        {dToken && (
          <div className="px-3 py-6 flex flex-col gap-3">
            <NavLink
              to={"/doctor-dashboard"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-8" src={assets.home_icon} alt="" />

              <div>
                <p className="font-semibold">Dashboard</p>
                <p className="text-xs opacity-70">Lawyer Overview</p>
              </div>
            </NavLink>

            <NavLink
              to={"/doctor-appointments"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-8" src={assets.appointment_icon} alt="" />

              <div>
                <p className="font-semibold">Appointments</p>
                <p className="text-xs opacity-70">Legal Consultations</p>
              </div>
            </NavLink>

            <NavLink
              to={"/doctor-profile"}
              className={navStyle}
              onClick={() => setOpenSidebar(false)}
            >
              <img className="w-8" src={assets.people_icon} alt="" />

              <div>
                <p className="font-semibold">My Profile</p>
                <p className="text-xs opacity-70">Professional Details</p>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
