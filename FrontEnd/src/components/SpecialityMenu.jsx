import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  const categories = [
    "Criminal Law",
    "Family Law",
    "Corporate Law",
    "Civil Law",
    "Property Law",
    "Cyber Law",
    "Consumer Law",
    "Tax Law",
    "Environmental Law",
    "Constitutional Law",
    "Divorce Law",
    "Labour Law",
    "Intellectual Property Law"

  ];

  return (
    <section
      id="speciality"
      className="relative py-14  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-8">

          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#D4A017]">
            Legal Expertise
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0b2149] mt-1">
            Find Legal Experts
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Choose a legal speciality and connect with experienced
            professionals for your case.
          </p>

        </div>


        {/* Scrollable Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 px-1 no-scrollbar snap-x snap-mandatory">

          {categories.map((category, index) => {

            const categoryData = specialityData.find(
              (item) => item.speciality === category
            );

            return (
              <Link
                key={index}
                to={`/doctors/${encodeURIComponent(category)}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex-shrink-0 snap-start">

               <div className="w-[135px] sm:w-[150px] h-[145px] bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#D4A017]/40 transition-all duration-300">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[#F7EEDC] border border-[#E8D8B8] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {categoryData ? (
                      <img
                        src={categoryData.image}
                        alt={category}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <span className="text-2xl text-[#D4A017]">
                        ⚖
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <p className="text-xs font-semibold text-[#0b2149] text-center mt-3 px-2 group-hover:text-[#D4A017] transition-colors">
                    {category}
                  </p>

                </div>

              </Link>
            );
          })}

        </div>


        {/* Scroll Indicator */}
        <div className="flex justify-center items-center gap-2 mt-2">

          <span className="w-6 h-1 rounded-full bg-[#D4A017]" />

          <span className="text-[10px] text-gray-400">
            Swipe to explore
          </span>

          <span className="text-gray-400 text-xs">
            →
          </span>

        </div>

      </div>
    </section>
  );
};

export default SpecialityMenu;