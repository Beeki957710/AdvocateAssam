import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <footer className="w-screen bg-[#071A2B] text-gray-300 mt-24 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Main Footer */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={assets.logo}
              alt="AdvocateAssam"
              className="w-40 rounded-xl border border-[#D4AF37]/30 shadow-md"
            />

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              Connecting individuals with trusted legal professionals. Access
              reliable legal consultation and professional assistance through
              AdvocateAssam.
            </p>

            {/* Trust Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-[#D4AF37]">✓</span>
              <span className="text-xs text-gray-300">
                Trusted Legal Platform
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/doctors")}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  Find Lawyers
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Legal Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Criminal Law
              </li>

              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Family Law
              </li>

              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Corporate Law
              </li>

              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Property Law
              </li>

              <li className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Civil Law
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:support.advocateassam@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <span className="text-[#D4AF37] text-base">✉</span>
                <span>support.advocateassam@gmail.com</span>
              </a>

              <a
                href="tel:+918011831481"
                className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <span className="text-[#D4AF37] text-base">☎</span>
                <span>+91 8011831481</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <span className="text-[#D4AF37] text-base">⌖</span>
                <span>Assam, India</span>
              </div>
            </div>

            {/* CTA */}
           
            <button onClick={() => handleNavigation("/doctors")} className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-[#D4AF37] text-[#071A2B] font-semibold text-sm hover:bg-[#e6c45a] transition-all duration-300 hover:shadow-lg">
              Find a Lawyer
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} AdvocateAssam. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-5 text-xs text-gray-500">
              <NavLink
                to="/privacy-policy"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Privacy Policy
              </NavLink>

              <span className="text-gray-700">|</span>

              <NavLink
                to="/terms"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Terms & Conditions
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-[3px] bg-[#D4AF37]" />
    </footer>
  );
};

export default Footer;
