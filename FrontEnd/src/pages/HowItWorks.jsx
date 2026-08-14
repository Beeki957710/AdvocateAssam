import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Scale,
  ShieldCheck,
  CalendarDays,
  Search,
  MessageCircle,
  CheckCircle2,
  Clock3,
  CreditCard,
} from "lucide-react";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Find a Lawyer",
      description:
        "Search and explore verified lawyers based on their practice area, experience, and professional expertise.",
    },
    {
      number: "02",
      icon: Scale,
      title: "Choose Your Lawyer",
      description:
        "Review lawyer profiles, qualifications, experience, consultation fees, and availability before making your choice.",
    },
    {
      number: "03",
      icon: CalendarDays,
      title: "Book a Consultation",
      description:
        "Select a convenient date and available time slot to schedule your legal consultation.",
    },
    {
      number: "04",
      icon: CreditCard,
      title: "Make Secure Payment",
      description:
        "Complete your consultation booking through our secure online payment system.",
    },
    {
      number: "05",
      icon: MessageCircle,
      title: "Connect With Your Lawyer",
      description:
        "After booking, connect with your lawyer and discuss your legal concerns securely and conveniently.",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Verified Lawyers",
      description:
        "Lawyer profiles go through a verification process before being listed on the platform.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Your account and personal information are protected using secure authentication and data handling.",
    },
    {
      icon: Clock3,
      title: "Easy Booking",
      description:
        "Find lawyers and schedule consultations through a simple and convenient booking experience.",
    },
    {
      icon: Scale,
      title: "Transparent Fees",
      description:
        "View consultation fees before booking so you can make informed decisions.",
    },
  ];

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
    <div className="bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden rounded-3xl bg-primary">
        {/* Background Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Decorative Rings */}
        <div className="absolute top-10 right-10 w-56 h-56 rounded-full border border-[#D4AF37]/10" />
        <div className="absolute top-20 right-20 w-36 h-36 rounded-full border border-[#D4AF37]/10" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#D4AF37]/30 backdrop-blur-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37] text-[#071A2B]">
                  <Scale size={14} strokeWidth={2} />
                </span>

                <span className="text-[#D4AF37] text-sm font-medium">
                  Simple • Secure • Professional
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-7">
                Your Legal Journey,
                <span className="block text-[#D4AF37]">
                  Made Simple.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-xl">
                AdvocateAssam connects you with verified legal professionals,
                making it easier to find the right lawyer, book consultations,
                and get the legal assistance you need.
              </p>

              {/* Mini Stats */}
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <CheckCircle2
                    size={25}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Verified Lawyers
                  </p>
                </div>

                <div>
                  <Clock3
                    size={25}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Easy Booking
                  </p>
                </div>

                <div>
                  <ShieldCheck
                    size={25}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Secure Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[360px] h-[360px]">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20" />

                {/* Middle Circle */}
                <div className="absolute inset-8 rounded-full border border-[#D4AF37]/20" />

                {/* Inner Circle */}
                <div className="absolute inset-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-3xl bg-[#D4AF37] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/20">
                    <Scale
                      size={58}
                      strokeWidth={1.5}
                      className="text-[#071A2B]"
                    />
                  </div>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute top-10 -left-8 bg-white rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-xs text-gray-400">
                    Professional
                  </p>

                  <p className="font-bold text-[#071A2B]">
                    Verified Lawyers
                  </p>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute bottom-10 -right-8 bg-white rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-xs text-gray-400">
                    Consultation
                  </p>

                  <p className="font-bold text-[#071A2B]">
                    Easy Booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
              Getting Started
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
              Your Legal Journey in 5 Simple Steps
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
              From finding the right lawyer to completing your consultation,
              AdvocateAssam keeps the entire process simple and convenient.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] border-t-2 border-dashed border-[#D4AF37]/30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
              {steps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={index}
                    className="relative text-center group"
                  >
                    {/* Number/Icon */}
                    <div className="relative mx-auto w-32 h-32 rounded-full bg-white border border-gray-200 shadow-lg flex flex-col items-center justify-center group-hover:border-[#D4AF37] group-hover:shadow-xl transition-all duration-300">
                      <StepIcon
                        size={30}
                        strokeWidth={1.8}
                        className="text-[#0b2149]"
                      />

                      <span className="text-[#D4AF37] text-xs font-bold mt-2">
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#071A2B] mt-7">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-6 mt-3">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ADVOCATEASSAM ================= */}
      <section className="bg-[#F8F9FC] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
                Why AdvocateAssam
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 leading-tight">
                Legal assistance made
                <span className="text-[#C49A2C]">
                  {" "}
                  simple and accessible.
                </span>
              </h2>

              <p className="text-gray-500 mt-5 leading-7">
                AdvocateAssam connects clients with legal professionals through
                a streamlined digital platform designed to make finding and
                booking legal consultations easier.
              </p>

              <button
                onClick={() => handleNavigation("/doctors")}
                className="mt-8 px-7 py-3 rounded-lg bg-[#071A2B] text-white font-semibold hover:bg-[#0d2a43] transition-all duration-300 hover:shadow-lg"
              >
                Find a Lawyer
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#071A2B] flex items-center justify-center text-[#D4AF37]">
                      <BenefitIcon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="font-semibold text-[#071A2B] mt-5">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-6 mt-2">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAWYER SECTION ================= */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center shadow-lg">
            <Scale
              size={34}
              strokeWidth={1.6}
              className="text-white"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-6">
            Are You a Legal Professional?
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-7">
            Join AdvocateAssam and connect with clients looking for professional
            legal assistance. Submit your application and complete our
            verification process.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://api.advocateassam.com/verify-lawyer",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="mt-8 px-8 py-3.5 rounded-lg bg-[#D4AF37] text-primary font-semibold hover:bg-[#e5c354] transition-all duration-300 hover:shadow-lg"
          >
            Join as a Lawyer
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-primary">
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Decorative Circles */}
          <div className="absolute top-8 right-8 w-44 h-44 rounded-full border border-[#D4AF37]/10" />

          <div className="absolute top-16 right-16 w-28 h-28 rounded-full border border-[#D4AF37]/10" />

          <div className="relative px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#D4AF37]/30">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />

                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                  Get Started Today
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-tight">
                Find the Right Lawyer
                <span className="block text-[#D4AF37]">
                  For Your Legal Needs.
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-5 max-w-xl mx-auto leading-7 text-sm md:text-base">
                Explore verified legal professionals, compare their expertise,
                and book a consultation at your convenience.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => handleNavigation("/doctors")}
                  className="px-8 py-3.5 rounded-xl bg-[#D4AF37] text-[#071A2B] font-bold shadow-lg shadow-[#D4AF37]/10 hover:bg-[#E5C354] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Lawyers
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => handleNavigation("/doctors")}
                  className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Book a Consultation
                </button>
              </div>

              {/* Trust Text */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} strokeWidth={1.8} />
                  Verified Professionals
                </span>

                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} strokeWidth={1.8} />
                  Secure Payments
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} strokeWidth={1.8} />
                  Easy Scheduling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
