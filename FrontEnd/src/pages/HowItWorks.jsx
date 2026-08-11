import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Find a Lawyer",
      description:
        "Search and explore verified lawyers based on their practice area, experience, and professional expertise.",
    },
    {
      number: "02",
      icon: "👨‍⚖️",
      title: "Choose Your Lawyer",
      description:
        "Review lawyer profiles, qualifications, experience, consultation fees, and availability before making your choice.",
    },
    {
      number: "03",
      icon: "📅",
      title: "Book a Consultation",
      description:
        "Select a convenient date and available time slot to schedule your legal consultation.",
    },
    {
      number: "04",
      icon: "💳",
      title: "Make Secure Payment",
      description:
        "Complete your consultation booking through our secure online payment system.",
    },
    {
      number: "05",
      icon: "💬",
      title: "Connect With Your Lawyer",
      description:
        "After booking, connect with your lawyer and discuss your legal concerns securely and conveniently.",
    },
  ];

  const benefits = [
    {
      icon: "✓",
      title: "Verified Lawyers",
      description:
        "Lawyer profiles go through a verification process before being listed on the platform.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description:
        "Your account and personal information are protected using secure authentication and data handling.",
    },
    {
      icon: "⚡",
      title: "Easy Booking",
      description:
        "Find lawyers and schedule consultations through a simple and convenient booking experience.",
    },
    {
      icon: "💰",
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
      <section className="bg-primary rounded-xl relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-[#D4AF37]/10" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full border border-[#D4AF37]/10" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] text-sm mb-6">
              <span>⚖</span>
              <span>Simple. Secure. Professional.</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              How <span className="text-[#D4AF37]">AdvocateAssam</span> Works
            </h1>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-2xl mx-auto">
              Finding the right legal professional shouldn't be complicated.
              AdvocateAssam makes it simple to discover verified lawyers, book
              consultations, and get the legal assistance you need.
            </p>
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
              {steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Number/Icon */}
                  <div className="relative mx-auto w-32 h-32 rounded-full bg-white border border-gray-200 shadow-lg flex flex-col items-center justify-center group-hover:border-[#D4AF37] group-hover:shadow-xl transition-all duration-300">
                    <span className="text-3xl">{step.icon}</span>

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
              ))}
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
                <span className="text-[#C49A2C]"> simple and accessible.</span>
              </h2>

              <p className="text-gray-500 mt-5 leading-7">
                AdvocateAssam connects clients with legal professionals through
                a streamlined digital platform designed to make finding and
                booking legal consultations easier.
              </p>

              <button
                onClick={() => navigate("/doctors")}
                className="mt-8 px-7 py-3 rounded-lg bg-[#071A2B] text-white font-semibold hover:bg-[#0d2a43] transition-all duration-300 hover:shadow-lg"
              >
                Find a Lawyer
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#071A2B] flex items-center justify-center text-[#D4AF37] text-lg">
                    {benefit.icon}
                  </div>

                  <h3 className="font-semibold text-[#071A2B] mt-5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-6 mt-2">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAWYER SECTION ================= */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center text-3xl shadow-lg">
            <span className="text-white">⚖</span>
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
              "noopener,noreferrer",
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
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-primary rounded-3xl px-8 md:px-16 py-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-[#D4AF37]/10" />

          <div className="relative">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-[0.2em]">
              Get Started Today
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Find the right legal professional for you.
            </h2>

            <p className="text-gray-300 mt-4 max-w-xl mx-auto leading-7">
              Explore verified lawyers and book a consultation that fits your
              needs.
            </p>

            <button
              onClick={() => handleNavigation("/doctors")}
              className="mt-8 px-8 py-3.5 rounded-lg bg-[#D4AF37] text-[#071A2B] font-semibold hover:bg-[#e5c354] transition-all duration-300"
            >
              Explore Lawyers
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
