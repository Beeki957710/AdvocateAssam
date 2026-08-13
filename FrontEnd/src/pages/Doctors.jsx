import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const specialities = [
    { name: "Criminal Law", icon: "⚖️" },
    { name: "Family Law", icon: "👨‍👩‍👧" },
    { name: "Corporate Law", icon: "🏢" },
    { name: "Civil Law", icon: "📜" },
    { name: "Property Law", icon: "🏠" },
    { name: "Cyber Law", icon: "💻" },
    { name: "Consumer Law", icon: "🛒" },
    { name: "Tax Law", icon: "💰" },
    { name: "Environmental Law", icon: "🌱" },
    { name: "Constitutional Law", icon: "⚜️" },
    { name: "Divorce Law", icon: "💍" },
    { name: "Labour Law", icon: "👷" },
    { name: "Intellectual Property Law", icon: "💡" },
  ];

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

  const applyFilter = () => {
    if (!speciality) {
      setFilterDoc(doctors);
      return;
    }

    const filtered = doctors.filter((doc) => {
      const specialities = getSpecialities(doc.speciality);

      return specialities.includes(speciality);
    });

    setFilterDoc(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center mt-2">
        <div className="w-12 h-1 bg-[#D4A017] rounded-full mb-3"></div>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl text-center leading-7">
          Explore verified legal professionals across multiple practice areas
          and get trusted guidance for your legal needs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filter Button */}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`sm:hidden flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-300 ${showFilter ? "bg-[#0b2149] text-white border-[#0b2149] shadow-md" : "bg-white text-[#0b2149] border-gray-200 shadow-sm"}`}
        >
          <span>☰</span>
          Practice Areas
          <span className="text-xs">{showFilter ? "▲" : "▼"}</span>
        </button>

        {/* Sidebar */}
        <div
          className={`${showFilter ? "flex" : "hidden sm:flex"} w-full sm:w-[250px] flex-shrink-0 mb-2`}
        >
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <div>
                <h2 className="text-base font-bold text-[#0b2149]">
                  Practice Areas
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Find the right legal expert
                </p>
              </div>

              <div className="w-9 h-9 rounded-xl bg-[#F1F5FF] flex items-center justify-center text-[#0b2149] text-lg">
                ⚖
              </div>
            </div>

            <button
              onClick={() => navigate("/doctors")}
              className={`w-full flex items-center justify-between px-3 py-2.5 mb-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                !speciality
                  ? "bg-[#0b2149] text-white shadow-md"
                  : "text-gray-600 hover:bg-[#F1F5FF] hover:text-[#0b2149]"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${!speciality ? "bg-white/10" : "bg-[#F1F5FF]"}`}
                >
                  ✦
                </span>
                All Lawyers
              </span>

              {!speciality && <span>✓</span>}
            </button>

            <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
              {specialities.map((item) => {
                const isActive = speciality === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() =>
                      navigate(`/doctors/${encodeURIComponent(item.name)}`)
                    }
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                      isActive
                        ? "bg-[#0b2149] text-white shadow-md"
                        : "text-gray-600 hover:bg-[#F7F9FC] hover:text-[#0b2149]"
                    }`}
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center text-sm transition-all ${
                          isActive
                            ? "bg-white/10"
                            : "bg-[#F5F7FA] group-hover:bg-[#E8EEF9]"
                        }`}
                      >
                        {item.icon}
                      </span>

                      <span className="truncate text-left">{item.name}</span>
                    </span>

                    <span
                      className={`text-xs transition-all ${
                        isActive
                          ? "text-[#D4A017]"
                          : "text-gray-300 group-hover:text-[#0b2149]"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#FFFBF0] border border-[#F3E5B8]">
                <span className="text-[#D4A017]">✓</span>
                <p className="text-[11px] text-gray-600">
                  Verified legal professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Lawyer Image */}

              <div className="relative overflow-hidden">
                <img
                  className="w-full h-72 object-cover bg-[#EEF2FF] group-hover:scale-105 transition-all duration-500"
                  src={item.image}
                  alt=""
                />

                {/* Availability Badge */}

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${item.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"} `}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>

              {/* Lawyer Info */}

              <div className="p-5">
                <h2 className="text-xl font-bold text-[#0b2149]">
                  {item.name}
                </h2>

                {/* Specialities */}

                {/* Specialities */}
                <div className="mt-3">
                  <p className="text-xs text-gray-400 mb-2">Specialities</p>

                  <div className="flex flex-wrap gap-2">
                    {getSpecialities(item.speciality)
                      .slice(0, 2)
                      .map((speciality, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-full bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF] text-xs font-semibold whitespace-nowrap"
                        >
                          {speciality}
                        </span>
                      ))}

                    {getSpecialities(item.speciality).length > 2 && (
                      <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-xs font-semibold whitespace-nowrap">
                        +{getSpecialities(item.speciality).length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Experience */}

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Experience</p>

                    <p className="font-semibold text-[#0b2149]">
                      {item.experience}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Fees</p>

                    <p className="font-semibold text-[#0b2149]">₹{item.fees}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
