import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout_a = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  const logout_d = () => {
    navigate("/");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
  };

  return (
    <div className="flex justify-between items-center px-3 sm:px-10 py-3 border-b bg-white">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* LOGO + CLIENT BUTTON */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            className="w-28 sm:w-40 cursor-pointer"
            src={assets.logo}
            alt=""
          />

          {/* ROLE */}
          <p className="border px-2 py-0.5 rounded-full border-gray-500 text-gray-600 text-[10px] sm:text-xs whitespace-nowrap">
            {aToken ? "Admin" : "Lawyer"}
          </p>
        </div>
        {/* Client Button */}
        <button
          onClick={() => (window.location.href = "http://localhost:5175")}
          className="text-[10px] sm:text-xs bg-[#0b2149] text-white px-2.5 sm:px-3 py-1 rounded-full shadow-md border border-[#d4af37] hover:bg-[#14367a]  hover:scale-105 transition-all duration-300 whitespace-nowrap"
        >
          Client
        </button>
      </div>

      {/* LOGOUT BUTTON */}
      <button
        onClick={aToken ? logout_a : logout_d}
        className="bg-primary text-white text-xs sm:text-sm px-4 sm:px-10 py-2 rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
