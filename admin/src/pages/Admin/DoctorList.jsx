import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="w-full min-h-screen bg-[#F5F7FB] p-4 md:p-8">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0b2149]">Lawyers Directory</h1>

        <p className="text-gray-500 mt-2">
          Manage all registered legal experts and their availability.
        </p>
      </div>

      {/* Lawyers Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.map((item, index) => (
          <div
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
                  className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md
                  
                    ${
                      item.available
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }
                  
                  `}
                >
                  {item.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* Lawyer Info */}

            <div className="p-5">
              <h2 className="text-xl font-bold text-[#0b2149]">{item.name}</h2>

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
                          {specialities.map((speciality, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF] text-xs font-semibold whitespace-nowrap"
                            >
                              {speciality}
                            </span>
                          ))}
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

              {/* Availability Toggle */}

              <div className="mt-5 pt-4 border-t flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">
                  Availability
                </p>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={item.available}
                    onChange={() => changeAvailability(item._id)}
                  />

                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#0b2149] transition-all duration-300"></div>

                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
