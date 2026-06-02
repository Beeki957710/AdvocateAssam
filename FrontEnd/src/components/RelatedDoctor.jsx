import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorData = doctors.filter(
        (doc) =>
          doc.speciality === speciality &&
          doc.speciality === speciality &&
          doc._id !== docId,
      );
      setRelDoc(doctorData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Lawyers to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted Lawyers.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
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
              <h2 className="text-xl font-bold text-[#0b2149]">{item.name}</h2>

              <p className="text-sm text-gray-500 mt-1">{item.speciality}</p>

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
