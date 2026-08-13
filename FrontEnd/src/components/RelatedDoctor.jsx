import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  const getSpecialities = (specialityData) => {
    if (!specialityData) return [];

    // Already an array
    if (Array.isArray(specialityData)) {
      return specialityData;
    }

    // JSON string array
    if (typeof specialityData === "string") {
      try {
        const parsed = JSON.parse(specialityData);

        if (Array.isArray(parsed)) {
          return parsed;
        }

        return [specialityData];
      } catch {
        // Normal single speciality
        return [specialityData];
      }
    }

    return [];
  };


  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const currentSpecialities = getSpecialities(speciality);

      const doctorData = doctors.filter((doc) => {
        if (doc._id === docId) return false;

        const doctorSpecialities = getSpecialities(
          doc.speciality
        );

        // Check if lawyer has at least one common speciality
        return doctorSpecialities.some((item) =>
          currentSpecialities.includes(item)
        );
      });

      setRelDoc(doctorData);

    } else {

      setRelDoc([]);

    }
  }, [doctors, speciality, docId]);
  
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <p className="text-xs uppercase tracking-widest text-[#D4A017] font-bold">
          Legal Experts
        </p>

        <h1 className="text-3xl font-bold text-[#0b2149] mt-1">
          Related Lawyers
        </h1>

        <p className="sm:w-1/2 text-center text-sm text-gray-500 mt-2">
          Explore trusted lawyers specializing in similar areas of law.
        </p>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {relDoc.slice(0, 5).map((item, index) => (
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
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctor;


