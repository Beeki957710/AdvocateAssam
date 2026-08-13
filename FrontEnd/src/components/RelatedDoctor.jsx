import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);


  const normalizeSpeciality= (value) => {
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

useEffect(() => {
  if (!doctors.length || !speciality) {
    setRelDoc([]);
    return;
  }

  const currentSpecialities = normalizeSpeciality(speciality);

  const filtered = doctors.filter((doc) => {
    if (doc._id === docId) return false;

    const doctorSpecialities = normalizeSpeciality(doc.speciality);

    return doctorSpecialities.some((item) =>
      currentSpecialities.includes(item)
    );
  });

  setRelDoc(filtered);
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

      {relDoc.length > 0 ? (
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {relDoc.slice(0, 5).map((item) => {
            const specialities = normalizeSpeciality(item.speciality);

            return (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-72 object-cover bg-[#EEF2FF] group-hover:scale-105 transition-all duration-500"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                        item.available
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#0b2149]">
                    {item.name}
                  </h2>

                  <div className="mt-3">
                    <p className="text-xs text-gray-400 mb-2">
                      Areas of Practice
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {specialities.slice(0, 2).map((itemSpeciality, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF] text-xs font-semibold"
                        >
                          {itemSpeciality
                            .split(" ")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                        </span>
                      ))}

                      {specialities.length > 2 && (
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          +{specialities.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Experience</p>
                      <p className="font-semibold text-[#0b2149]">
                        {item.experience}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Fees</p>
                      <p className="font-semibold text-[#0b2149]">
                        ₹{item.fees}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-10 text-center">
          <p className="text-gray-400 text-sm">
            No lawyers found with similar areas of practice.
          </p>
        </div>
      )}

      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="bg-[#F1F5FF] text-[#0b2149] font-semibold px-12 py-3 rounded-full mt-6 hover:bg-[#0b2149] hover:text-white transition-all duration-300"
      >
        View All Lawyers →
      </button>
    </div>
  );
};

export default RelatedDoctor;