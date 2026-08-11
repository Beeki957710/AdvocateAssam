import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between rounded-3xl overflow-hidden bg-cover bg-center min-h-[650px]"
      style={{
        backgroundImage: `url(${assets.header_img})`,
      }}
    >
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 px-6 md:px-14 lg:px-20 py-10 md:py-16">
        {/* TOP TAG */}
        <div className="inline-flex items-center gap-2 bg-[#F3E5CF] px-4 py-2 rounded-full mb-6">
          <span className="text-[#D49A1F] text-sm">🛡</span>
          <p className="text-sm text-[#2B2B2B] font-medium">
            Trusted Legal Support, Just a Click Away
          </p>
        </div>

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0A1D56]">
          Your Bridge to <br />
          <span className="text-[#D49A1F]">Justice</span> and Trust
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[#3F3F3F] text-base md:text-lg mt-6 leading-8">
          Find experienced lawyers, get legal advice,
          <br className="hidden md:block" />
          and resolve your issues with confidence.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#speciality" className="bg-[#071C55] hover:bg-[#0b2c85] transition-all duration-300 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 w-fit">
            Find a Lawyer
            <span className="text-xl">→</span>
          </a>
          <NavLink to="/how-it-works" className="border-2 border-[#D49A1F] text-[#D49A1F] hover:bg-[#D49A1F] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-medium flex items-center gap-3 w-fit">
            How It Works
            <span>▶</span>
          </NavLink>

          {/* <a className="border-2 border-[#D49A1F] text-[#D49A1F] hover:bg-[#D49A1F] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-medium flex items-center gap-3 w-fit">
            How It Works
            <span>▶</span>
          </a> */}
        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-8 mt-10">
          <div>
            <h2 className="text-[#D49A1F] text-1xl font-bold">500+</h2>
            <p className="text-gray-600">Expert Lawyers</p>
          </div>

          <div>
            <h2 className="text-[#D49A1F] text-1xl font-bold">10K+</h2>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-[#D49A1F] text-1xl font-bold">50+</h2>
            <p className="text-gray-600">Practice Areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
