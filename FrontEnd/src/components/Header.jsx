import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-[24px] min-h-[540px] lg:min-h-[600px] bg-[#06172A] shadow-2xl mt-2">

      {/* Background Image */}
      <img src={assets.header_img} alt="Trusted legal professional" className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06172A] via-[#06172A]/95 to-[#06172A]/25"></div>

      {/* Subtle Gold Glow */}
      <div className="absolute -left-32 -top-32 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#173D73]/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[540px] lg:min-h-[600px]">

        <div className="w-full lg:w-[62%] px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10 sm:py-12">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg mb-5">

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4A017] text-[#06172A] text-xs">
              ⚖
            </span>

            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
              Trusted Legal Platform
            </span>

            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>

            <span className="text-[10px] sm:text-xs text-gray-300">
              Verified Professionals
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[2.4rem] sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.04] font-bold tracking-tight text-white max-w-3xl">

            Legal Expertise.

            <span className="block mt-1.5 text-[#D4A017]">
              Trusted Guidance.
            </span>

            <span className="block mt-1.5 text-white">
              Better Decisions.
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-base leading-7 max-w-xl mt-5">
            Connect with verified legal professionals, explore specialised
            practice areas, and get the guidance you need to move forward
            with confidence.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <a
              href="#speciality"
              className="group flex items-center justify-center gap-3 bg-[#D4A017] hover:bg-[#E5B52A] text-[#06172A] px-6 sm:px-8 py-3.5 rounded-xl font-bold shadow-xl shadow-[#D4A017]/20 hover:-translate-y-1 transition-all duration-300"
            >
              Find a Lawyer
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <NavLink
              to="/how-it-works"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4A017]/60 text-white px-6 sm:px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
            >
              How It Works
              <span className="text-xs text-[#D4A017] group-hover:translate-x-1 transition-transform">
                ▶
              </span>
            </NavLink>

          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6">

            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-green-400">
                ✓
              </span>
              Verified Lawyers
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[#D4A017]">
                🔒
              </span>
              Secure Platform
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-blue-400">
                ⚡
              </span>
              Easy Booking
            </div>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-7 pt-5 border-t border-white/10 max-w-2xl">

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                500<span className="text-[#D4A017]">+</span>
              </h2>
              <p className="text-[11px] text-gray-400 mt-1">
                Expert Lawyers
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10"></div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                10K<span className="text-[#D4A017]">+</span>
              </h2>
              <p className="text-[11px] text-gray-400 mt-1">
                Clients Served
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/10"></div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                50<span className="text-[#D4A017]">+</span>
              </h2>
              <p className="text-[11px] text-gray-400 mt-1">
                Practice Areas
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Right Side Floating Trust Card */}
      <div className="hidden lg:block absolute right-8 bottom-8 z-20">

        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl">

          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#D4A017] text-[#06172A] text-sm">
            ✓
          </div>

          <div>
            <p className="text-white text-xs font-semibold">
              Verified Legal Professionals
            </p>

            <p className="text-gray-400 text-[10px] mt-0.5">
              Quality & trust at every step
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Gold Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent"></div>

    </section>
  );
};

export default Header;
