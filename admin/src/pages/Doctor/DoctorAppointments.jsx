import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full px-6 py-6 bg-[#F5F7FB] min-h-screen">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#071C55]">
          Legal Consultations
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all client meetings and legal appointments.
        </p>
      </div>

      {/* Table Container */}

      <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
        {/* Table Header */}

        <div className="hidden lg:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1.5fr] gap-4 bg-[#071C55] text-white px-8 py-5 text-sm font-semibold">
          <p>#</p>
          <p>Client</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Appointments */}

        <div className="max-h-[78vh] overflow-y-auto">
          {appointments.reverse().map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1.5fr] gap-4 items-center px-8 py-5 border-b hover:bg-gray-50 transition-all duration-300"
            >
              {/* Index */}

              <p className="hidden lg:block text-gray-500 font-medium">
                {index + 1}
              </p>

              {/* Client */}

              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-2xl object-cover border"
                  src={item.userData.image}
                  alt=""
                />

                <div>
                  <p className="font-semibold text-[#071C55]">
                    {item.userData.name}
                  </p>

                  <p className="text-xs text-gray-500">Client</p>
                </div>
              </div>

              {/* Payment */}

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.payment
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.payment ? "Online" : "Cash"}
                </span>
              </div>

              {/* Age */}

              <p className="text-gray-600 font-medium">
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date */}

              <div>
                <p className="font-medium text-[#071C55]">
                  {slotDateFormat(item.slotDate)}
                </p>

                <p className="text-sm text-gray-500">{item.slotTime}</p>
              </div>

              {/* Fees */}

              <p className="font-bold text-[#071C55]">
                {currency}
                {item.amount}
              </p>

              {/* Actions */}

              <div className="flex items-center gap-3">
                {item.cancelled ? (
                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl text-sm font-semibold">
                    Completed
                  </span>
                ) : (
                  <>
                    {/* Cancel */}

                    <button
                      onClick={async () => {
                        await cancelAppointment(item._id);
                        getAppointments();
                      }}
                      className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>

                    {/* Complete */}

                    <button
                      onClick={async () => {
                        await completeAppointment(item._id);
                        getAppointments();
                      }}
                      className="bg-[#071C55] hover:bg-[#0B2D83] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Complete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
