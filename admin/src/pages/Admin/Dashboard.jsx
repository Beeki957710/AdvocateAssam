// import React, { useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { useContext } from "react";
// import { assets } from "../../assets/assets";
// import { use } from "react";
// import { AppContext } from "../../context/AppContext";

// const Dashboard = () => {
//   const { aToken, getDashData, cancelAppointment, dashData } =
//     useContext(AdminContext);
//   const { slotDateFormat } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getDashData();
//     }
//   }, [aToken]);

//   return (
//     dashData && (
//       <div className="m-5">
//         <div className="flex flex-wrap gap-3">
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.doctor_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.doctors}
//               </p>
//               <p className="text-gray-500">Doctors</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.appointments_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.appointments}
//               </p>
//               <p className="text-gray-500">Appointments</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.patients_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.patients}
//               </p>
//               <p className="text-gray-500">Patients</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white">
//           <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
//             <img src={assets.list_icon} alt="" />
//             <p className="font-semibold">Latest Bookings</p>
//           </div>

//           <div className="pt-4 border border-t-0">
//             {dashData.latestAppointment?.map((item, index) => (
//               <div
//                 className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
//                 key={index}
//               >
//                 <img
//                   className="rounded-full w-10"
//                   src={item.docData.image}
//                   alt=""
//                 />
//                 <div className="flex-1 text-sm">
//                   <p className="text-gray-800 font-medium">
//                     {item.docData.name}
//                   </p>
//                   <p className="text-gray-600 font-medium">
//                     {slotDateFormat(item.slotDate)}
//                   </p>
//                 </div>

//                 {item.cancelled ? (
//                   <p className="text-red-400 text-xs font-medium">Cancelled</p>
//                 ) : item.isCompleted ? (
//                   <p className="text-green-500 text-xs font-medium">
//                     Completed
//                   </p>
//                 ) : (
//                   <img
//                     onClick={() => cancelAppointment(item._id)}
//                     className="w-10 cursor-pointer"
//                     src={assets.cancel_icon}
//                     alt=""
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Dashboard;

import React, { useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="p-6 bg-[#F5F7FB] min-h-screen">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#071C55]">Admin Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Monitor lawyers, consultations and client activities.
          </p>
        </div>

        {/* Top Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lawyers */}

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Lawyers</p>

                <h2 className="text-4xl font-bold text-[#071C55] mt-2">
                  {dashData.doctors}
                </h2>
              </div>

              <div className="bg-[#071C55]/10 p-4 rounded-2xl">
                <img className="w-12" src={assets.lawyer_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Consultations */}

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Consultations</p>

                <h2 className="text-4xl font-bold text-[#071C55] mt-2">
                  {dashData.appointments}
                </h2>
              </div>

              <div className="bg-[#D4A017]/10 p-4 rounded-2xl">
                <img className="w-12" src={assets.appointments_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Clients */}

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Clients</p>

                <h2 className="text-4xl font-bold text-[#071C55] mt-2">
                  {dashData.patients}
                </h2>
              </div>

              <div className="bg-green-100 p-4 rounded-2xl">
                <img className="w-12" src={assets.patients_icon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Consultations */}

        <div className="mt-10 bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          {/* Header */}

          <div className="flex items-center gap-3 px-6 py-5 border-b bg-[#071C55]">
            <img className="w-7" src={assets.list_icon} alt="" />

            <h2 className="text-xl font-semibold text-white">
              Recent Legal Consultations
            </h2>
          </div>

          {/* List */}

          <div>
            {dashData.latestAppointment?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-5 border-b hover:bg-[#F9FAFB] transition-all duration-300"
              >
                {/* Lawyer Image */}

                <img
                  className="w-14 h-14 rounded-2xl object-cover border"
                  src={item.docData.image}
                  alt=""
                />

                {/* Lawyer Details */}

                <div className="flex-1">
                  <p className="font-semibold text-[#071C55] text-lg">
                    {item.docData.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {/* Status */}

                {item.cancelled ? (
                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl text-sm font-semibold">
                    Completed
                  </span>
                ) : (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
