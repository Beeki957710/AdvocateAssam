import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (!speciality) {
      setFilterDoc(doctors);
      return;
    }

    const filtered = doctors.filter((doc) => {
      let specialities = [];

      // Case 1: speciality is already an array
      if (Array.isArray(doc.speciality)) {
        specialities = doc.speciality;
      }

      // Case 2: speciality is a JSON string
      else if (typeof doc.speciality === "string") {
        try {
          const parsed = JSON.parse(doc.speciality);

          if (Array.isArray(parsed)) {
            specialities = parsed;
          } else {
            specialities = [doc.speciality];
          }
        } catch {
          // Case 3: normal single speciality string
          specialities = [doc.speciality];
        }
      }

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
      <p className="text-gray-600 text-medium">
        Browse through our trusted legal experts and experienced attorneys.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filter Button */}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-2 px-4 border rounded-lg text-sm transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
        >
          Filters
        </button>

        {/* Sidebar */}
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          <p
            onClick={() =>
              speciality === "Criminal Law"
                ? navigate("/doctors")
                : navigate(`/doctors/${encodeURIComponent("Criminal Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Criminal Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Criminal Lawyer
          </p>

          <p
            onClick={() =>
              speciality === "Family Law"
                ? navigate("/doctors")
                : navigate(`/doctors/${encodeURIComponent("Family Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Family Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Family Lawyer
          </p>

          <p
            onClick={() =>
              speciality === "Corporate Law"
                ? navigate("/doctors")
                : navigate(`/doctors/${encodeURIComponent("Corporate Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Corporate Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Corporate Lawyer
          </p>

          <p
            onClick={() =>
              speciality === "Civil Law"
                ? navigate("/doctors")
                : navigate(`/doctors/${encodeURIComponent("Civil Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Civil Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Civil Lawyer
          </p>

          <p
            onClick={() =>
              speciality === "Property Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Property Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Property Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Property Lawyer
          </p>

          <p
            onClick={() =>
              speciality === "Cyber Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Cyber Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Cyber Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Cyber Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Consumer Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Consumer Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Consumer Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Consumer Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Tax Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Tax Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Tax Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Tax Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Environmental Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Environmental Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Environmental Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Environmental Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Constitutional Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Constitutional Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Constitutional Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Constitutional Lawyer
          </p>
           <p
            onClick={() =>
              speciality === "Divorce Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Divorce Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Divorce Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Divorce Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Labour Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Labour Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Labour Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Labour Lawyer
          </p>
            <p
            onClick={() =>
              speciality === "Intellectual Property Law"
                ? navigate("/doctors")
                :  navigate(`/doctors/${encodeURIComponent("Intellectual Property Law")}`)
            }
            className={`w-[220px] pl-4 py-3 border rounded-lg transition-all cursor-pointer ${
              speciality === "Intellectual Property Law"
                ? "bg-primary text-white border-primary"
                : "hover:border-primary"
            }`}
          >
            Intellectual Property Lawyer
          </p>
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

                <div className="mt-3">
                  <p className="text-xs text-gray-400 mb-2">Specialities</p>

                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      let specialities = [];

                      if (Array.isArray(item.speciality)) {
                        specialities = item.speciality;
                      } else if (typeof item.speciality === "string") {
                        try {
                          const parsed = JSON.parse(item.speciality);
                          specialities = Array.isArray(parsed)
                            ? parsed
                            : [item.speciality];
                        } catch {
                          specialities = [item.speciality];
                        }
                      }

                      return (
                        <>
                          {specialities.slice(0, 2).map((speciality, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF] text-xs font-semibold whitespace-nowrap"
                            >
                              {speciality}
                            </span>
                          ))}

                          {specialities.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold whitespace-nowrap">
                              +{specialities.length - 2} more
                            </span>
                          )}
                        </>
                      );
                    })()}
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
