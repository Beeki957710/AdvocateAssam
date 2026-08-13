import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const getSpecialities = (value) => {
    if (!value) return [];

    if (Array.isArray(value)) {
      if (value.length === 1 && typeof value[0] === "string") {
        try {
          const parsed = JSON.parse(value[0]);
          return Array.isArray(parsed) ? parsed : value;
        } catch {
          return value;
        }
      }

      return value;
    }

    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [value];
      } catch {
        return [value];
      }
    }

    return [];
  };

  return (
    <section className="my-16 md:mx-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#D4A017] font-bold mb-2">
          Trusted Legal Professionals
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b2149]">
          Professional Legal Support
        </h1>

        <div className="w-12 h-1 bg-[#D4A017] rounded-full mt-3 mb-4"></div>

        <p className="max-w-2xl text-sm sm:text-base leading-7 text-gray-500">
          Find experienced lawyers committed to delivering trusted legal advice,
          personalised guidance, and strong representation.
        </p>
      </div>

      {/* Lawyer Cards */}
      <div className="w-full grid grid-cols-auto gap-5 pt-10 gap-y-7 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item) => {
          const specialities = getSpecialities(item.speciality);

          return (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              key={item._id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#EEF2FF]">
                <img
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt={item.name}
                />

                {/* Image Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Availability */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg ${
                      item.available
                        ? "bg-white/90 text-green-600"
                        : "bg-white/90 text-red-500"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.available ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </div>

                {/* Verified Badge */}
                {item.isVerified && (
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      <img
                        src={assets.verified_icon}
                        alt="Verified"
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-semibold text-[#0b2149]">
                        Verified Lawyer
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Lawyer Information */}
              <div className="p-5">
                {/* Name */}
                <h2 className="text-lg sm:text-xl font-bold text-[#0b2149] truncate">
                  {item.name}
                </h2>

                {/* Specialities */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {specialities.slice(0, 2).map((speciality, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-full bg-[#F1F5FF] border border-[#DCE5FF] text-[#0b2149] text-[11px] font-semibold"
                      >
                        {speciality}
                      </span>
                    ))}

                    {specialities.length > 2 && (
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold">
                        +{specialities.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"></div>

                {/* Experience & Fees */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Experience
                    </p>

                    <p className="font-bold text-[#0b2149] mt-1">
                      {item.experience}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">
                      Consultation
                    </p>

                    <p className="font-bold text-[#0b2149] mt-1">
                      ₹{item.fees}
                    </p>
                  </div>
                </div>

                {/* View Profile */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-[#0b2149] transition-colors">
                    View Profile
                  </span>

                  <span className="text-[#D4A017] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
          className="group flex items-center gap-3 bg-[#0b2149] text-white px-10 py-3.5 rounded-full font-semibold shadow-lg hover:bg-[#14366f] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Explore All Lawyers
          <span className="text-[#D4A017] text-lg group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;
