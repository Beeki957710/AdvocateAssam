import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import {
  CheckCircle2,
  Scale,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#061A2A] text-white mt-2">
      {/* Gold Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#B8860B] via-[#F2C94C] to-[#B8860B]" />

      {/* Footer Content */}
      <div className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 xl:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={assets.logo}
              alt="AdvocateAssam"
              className="w-52 rounded-full bg-primary p-2 shadow-lg"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Connecting individuals with trusted legal professionals. Access
              reliable legal consultation and professional assistance through
              AdvocateAssam.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#102B40] text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061A2A]"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#102B40] text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061A2A]"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#102B40] text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061A2A]"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#102B40] text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061A2A]"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#102B40] text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061A2A]"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[#102B40] px-5 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-[#061A2A]">
                <CheckCircle2 size={18} strokeWidth={2} />
              </span>

              <span className="text-sm font-medium text-slate-200">
                Trusted Legal Platform
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#D4AF37]" />

            <ul className="mt-7 space-y-4 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => goTo("/")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/about")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/doctors")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  Find Lawyers
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/how-it-works")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  How It Works
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/my-appointments")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  My Appointments
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/my-profile")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  My Profile
                </button>
              </li>

              <li>
                <a
                  href="#faqs"
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  FAQs
                </a>
              </li>

              <li>
                <button
                  onClick={() => goTo("/contact")}
                  className="flex items-center gap-2 hover:text-[#D4AF37]"
                >
                  <ArrowRight size={13} strokeWidth={1.8} />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="text-lg font-bold">Legal Services</h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#D4AF37]" />

            <ul className="mt-7 space-y-4 text-sm text-slate-300">
              {[
                "Criminal Law",
                "Family Law",
                "Corporate Law",
                "Property Law",
                "Civil Law",
                "Consumer Law",
                "Cyber Law",
                "Tax Law",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() =>
                      goTo(`/doctors/${encodeURIComponent(service)}`)
                    }
                    className="flex items-center gap-3 hover:text-[#D4AF37]"
                  >
                    <Scale
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#D4AF37]"
                    />
                    {service}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => goTo("/doctors")}
                  className="font-semibold text-[#D4AF37] hover:text-[#F2C94C]"
                >
                  + More Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#D4AF37]" />

            <div className="mt-7 space-y-6 text-sm text-slate-300">
              <a
                href="mailto:support.advocateassam@gmail.com"
                className="flex items-start gap-4 hover:text-[#D4AF37]"
              >
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#D4AF37]"
                />
                <span className="break-all">
                  support.advocateassam@gmail.com
                </span>
              </a>

              <a
                href="tel:+918011831481"
                className="flex items-center gap-4 hover:text-[#D4AF37]"
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#D4AF37]"
                />
                <span>+91 8011831481</span>
              </a>

              <div className="flex items-center gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#D4AF37]"
                />
                <span>Assam, India</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => goTo("/doctors")}
              className="mt-8 flex w-full items-center justify-center gap-4 rounded-xl bg-[#D4AF37] px-6 py-4 font-semibold text-[#061A2A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2C94C]"
            >
              Find a Lawyer
              <ArrowRight size={19} strokeWidth={2} />
            </button>

            {/* Privacy */}
            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <ShieldCheck
                size={22}
                strokeWidth={1.8}
                className="shrink-0 text-[#D4AF37]"
              />

              <div>
                <p className="font-medium text-slate-300">
                  Your privacy is our priority.
                </p>

                <p className="mt-1 text-xs">Safe, secure and confidential.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-7">
          <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} AdvocateAssam. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => goTo("/privacy-policy")}
                className="hover:text-[#D4AF37]"
              >
                Privacy Policy
              </button>

              <span className="text-slate-600">|</span>

              <button
                onClick={() => goTo("/terms")}
                className="hover:text-[#D4AF37]"
              >
                Terms & Conditions
              </button>

              <span className="text-slate-600">|</span>

              <button
                onClick={() => goTo("/contact")}
                className="hover:text-[#D4AF37]"
              >
                Contact
              </button>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Made with <span className="text-red-500">♥</span> for better legal
            assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
