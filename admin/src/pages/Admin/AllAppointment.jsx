import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointment = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full min-h-screen bg-[#F5F7FB] p-4 md:p-8">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0b2149]">
          Legal Consultations
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all lawyer consultations and client meetings.
        </p>
      </div>

      {/* Main Table */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header */}

        <div className="hidden lg:grid grid-cols-[0.5fr_2.5fr_1fr_2fr_2.5fr_1fr_1fr] items-center px-8 py-5 bg-[#0b2149] text-white text-sm font-semibold">
          <p>#</p>
          <p>Clients</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Lawyer</p>
          <p>Fees</p>
          <p>Status</p>
        </div>

        {/* Appointments */}

        <div className="max-h-[80vh] overflow-y-auto">
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:grid lg:grid-cols-[0.5fr_2.5fr_1fr_2fr_2.5fr_1fr_1fr] gap-4 lg:gap-2 items-start lg:items-center px-5 lg:px-8 py-5 border-b hover:bg-[#F9FAFB] transition-all duration-300"
            >
              {/* Number */}

              <p className="hidden lg:block text-gray-500">{index + 1}</p>

              {/* Client */}

              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-2xl object-cover border"
                  src={item.userData.image}
                  alt=""
                />

                <div>
                  <p className="font-semibold text-[#0b2149]">
                    {item.userData?.name}
                  </p>

                  <p className="text-xs text-gray-500 lg:hidden">
                    Age: {calculateAge(item.userData.dob)}
                  </p>
                </div>
              </div>

              {/* Age */}

              <p className="hidden lg:block text-gray-600">
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date */}

              <div>
                <p className="font-medium text-gray-700">
                  {slotDateFormat(item.slotDate)}
                </p>

                <p className="text-sm text-gray-500">{item.slotTime}</p>
              </div>

              {/* Lawyer */}

              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-2xl object-cover border bg-gray-100"
                  src={item.docData.image}
                  alt=""
                />

                <div>
                  <p className="font-semibold text-[#0b2149]">
                    {item.docData.name}
                  </p>

                  <p className="text-xs text-gray-500">Legal Expert</p>
                </div>
              </div>

              {/* Fees */}

              <p className="font-bold text-[#0b2149]">
                {currency}
                {item.amount}
              </p>

              {/* Status */}

              <div>
                {item.cancelled ? (
                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-semibold">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl text-xs font-semibold">
                    Completed
                  </span>
                ) : (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="bg-red-50 hover:bg-red-100 transition-all p-2 rounded-xl"
                  >
                    <img className="w-8" src={assets.cancel_icon} alt="" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAppointment;
