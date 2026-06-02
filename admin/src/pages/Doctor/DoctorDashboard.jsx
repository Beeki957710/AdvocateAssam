import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="p-6 bg-[#F5F7FB] min-h-screen">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#071C55]">
            Lawyer Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your consultations, clients and legal appointments.
          </p>
        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Earnings */}

          <div className="bg-gradient-to-r from-[#071C55] to-[#0B2D83] rounded-3xl p-6 shadow-lg text-white hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Earnings</p>

                <h2 className="text-4xl font-bold mt-2">
                  {currency}
                  {dashData.earnings}
                </h2>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                <img className="w-10" src={assets.earning_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Consultations */}

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Consultations</p>

                <h2 className="text-4xl font-bold text-[#071C55] mt-2">
                  {dashData.appointments}
                </h2>
              </div>

              <div className="bg-[#E8D8B8] p-4 rounded-2xl">
                <img className="w-10" src={assets.appointments_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Clients */}

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Clients</p>

                <h2 className="text-4xl font-bold text-[#071C55] mt-2">
                  {dashData.patients}
                </h2>
              </div>

              <div className="bg-[#071C55] p-4 rounded-2xl">
                <img className="w-10" src={assets.patients_icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Latest Consultations */}

        <div className="bg-white rounded-3xl shadow-md mt-10 overflow-hidden border border-gray-100">
          {/* Header */}

          <div className="flex items-center justify-between px-8 py-5 bg-[#071C55]">
            <div className="flex items-center gap-3">
              <img className="w-6" src={assets.list_icon} alt="" />

              <h2 className="text-white text-xl font-semibold">
                Latest Consultations
              </h2>
            </div>

            <button className="text-sm bg-white text-[#071C55] px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition-all">
              View All
            </button>
          </div>

          {/* Table */}

          <div className="divide-y divide-gray-100">
            {dashData.latestAppointments?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between px-8 py-5 hover:bg-gray-50 transition-all duration-300"
              >
                {/* User */}

                <div className="flex items-center gap-4">
                  <img
                    className="w-14 h-14 rounded-2xl object-cover border"
                    src={item.userData.image}
                    alt=""
                  />

                  <div>
                    <p className="text-[#071C55] font-semibold text-lg">
                      {item.userData.name}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      {slotDateFormat(item.slotDate)}
                    </p>
                  </div>
                </div>

                {/* Status / Actions */}

                <div className="mt-4 md:mt-0 flex items-center gap-3">
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
                      <button
                        onClick={async () => {
                          await cancelAppointment(item._id);
                          getDashData();
                        }}
                        className="bg-red-50 hover:bg-red-100 text-red-600 px-5 py-2 rounded-xl text-sm font-semibold transition-all"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={async () => {
                          await completeAppointment(item._id);
                          getDashData();
                        }}
                        className="bg-[#071C55] hover:bg-[#0B2D83] text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all"
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
    )
  );
};

export default DoctorDashboard;
