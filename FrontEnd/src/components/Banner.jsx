import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mx-4 md:mx-10 my-16 overflow-hidden rounded-[2rem] bg-[#071A2B] shadow-2xl">

      {/* ================= BACKGROUND ================= */}

      {/* Gold Glow */}
      <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-[#D4A017]/10 blur-3xl" />

      {/* Blue Glow */}
      <div className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Large Decorative Circle */}
      <div className="absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full border border-[#D4A017]/10" />

      <div className="absolute -right-20 -top-20 w-[380px] h-[380px] rounded-full border border-[#D4A017]/10" />

      {/* ================= CONTENT ================= */}

      <div className="relative grid lg:grid-cols-2 items-center min-h-[560px]">

        {/* ================= LEFT ================= */}

        <div className="px-8 md:px-12 lg:px-16 py-14 lg:py-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-[#D4A017]/30 backdrop-blur-md mb-7">

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4A017] text-[#071A2B] text-sm">
              ⚖
            </span>

            <span className="text-[#E7C45A] text-xs sm:text-sm font-semibold tracking-wide">
              Trusted Legal Support
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.08] text-white tracking-tight">

            Your Bridge to

            <span className="block mt-2 text-[#D4A017]">
              Justice & Trust.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-7 text-gray-300 text-sm sm:text-base lg:text-lg leading-8 max-w-xl">
            Connect with verified legal professionals, receive expert
            guidance, and take the next step toward resolving your legal
            concerns with confidence.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-9">

            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo(0, 0);
              }}
              className="
                group
                flex
                items-center
                gap-3
                bg-[#D4A017]
                hover:bg-[#E5B82A]
                text-[#071A2B]
                px-7
                py-3.5
                rounded-xl
                font-bold
                shadow-lg
                shadow-[#D4A017]/10
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Create Account

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>

            </button>

            <button
              onClick={() => {
                navigate("/doctors");
                window.scrollTo(0, 0);
              }}
              className="
                group
                flex
                items-center
                gap-3
                px-7
                py-3.5
                rounded-xl
                border
                border-white/20
                bg-white/[0.03]
                backdrop-blur-sm
                text-white
                font-semibold
                hover:bg-white/10
                hover:border-[#D4A017]/50
                transition-all
                duration-300
              "
            >
              Find a Lawyer

              <span className="text-[#D4A017] group-hover:translate-x-1 transition-transform">
                →
              </span>

            </button>

          </div>

          {/* ================= STATS ================= */}

          <div className="flex flex-wrap items-center gap-8 mt-12 pt-7 border-t border-white/10">

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#D4A017]">
                500+
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Expert Lawyers
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#D4A017]">
                10K+
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Happy Clients
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#D4A017]">
                50+
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Practice Areas
              </p>
            </div>

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <div className="hidden lg:flex relative h-full min-h-[560px] items-center justify-center">

          {/* Outer Ring */}

          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#D4A017]/15" />

          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#D4A017]/10" />

          {/* Center Glow */}

          <div className="absolute w-72 h-72 rounded-full bg-[#D4A017]/10 blur-3xl" />

          {/* Main Logo Card */}

          <div className="
            relative
            w-52
            h-52
            rounded-[2.5rem]
            bg-gradient-to-br
            from-white/[0.12]
            to-white/[0.03]
            border
            border-white/10
            backdrop-blur-xl
            shadow-2xl
            flex
            items-center
            justify-center
          ">

            {/* Inner Gold Box */}

            <div className="
              w-28
              h-28
              rounded-3xl
              bg-[#D4A017]
              flex
              items-center
              justify-center
              shadow-2xl
              shadow-[#D4A017]/20
            ">

              <span className="text-6xl text-[#071A2B]">
                ⚖
              </span>

            </div>

          </div>


          {/* ================= FLOATING CARD 1 ================= */}

          <div className="
            absolute
            top-[18%]
            right-[4%]
            bg-white/[0.08]
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            shadow-xl
          ">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <span className="text-green-400 text-lg">
                  ✓
                </span>
              </div>

              <div>
                <p className="text-white text-sm font-semibold">
                  Verified Lawyers
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Trusted professionals
                </p>
              </div>

            </div>

          </div>


          {/* ================= FLOATING CARD 2 ================= */}

          <div className="
            absolute
            bottom-[18%]
            left-[2%]
            bg-white/[0.08]
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            px-5
            py-4
            shadow-xl
          ">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                <span className="text-[#D4A017] text-lg">
                  ⚡
                </span>
              </div>

              <div>
                <p className="text-white text-sm font-semibold">
                  Easy Consultation
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Book in a few clicks
                </p>
              </div>

            </div>

          </div>


          {/* ================= FLOATING CARD 3 ================= */}

          <div className="
            absolute
            bottom-[12%]
            right-[5%]
            bg-[#D4A017]
            text-[#071A2B]
            rounded-2xl
            px-5
            py-3
            shadow-xl
          ">

            <p className="text-xs font-medium">
              Secure & Reliable
            </p>

            <p className="font-bold text-sm">
              Legal Assistance
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;
