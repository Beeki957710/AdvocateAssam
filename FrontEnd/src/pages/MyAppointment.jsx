// import React, {useContext, useEffect, useState} from 'react'
// import {AppContext} from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import {useNavigate} from 'react-router-dom'

// const MyAppointment = () => {

//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)

//   const[appointments, setAppointments] = useState([])
//   const months = ["", "Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return dateArray[0]+" "+months[Number(dateArray[1])] + " " + dateArray[2]
//   }

//   const navigate = useNavigate()

//   const getUserAppointments = async () => {
//     try{

//       const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})

//       if(data.success){
//         setAppointments(data.appointments.reverse())
//         console.log(data.appointments);
//       }

//     } catch (error){
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

// const cancelAppointment = async (appointmentId) => {
//   try {
//     const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment',{ appointmentId },{ headers: { token } })

//     if (data.success) {
//       toast.success(data.message)
//       getUserAppointments()
//       getDoctorsData()
//     }

//     else {
//       toast.error(data.message)
//     }

//   } catch (error) {
//     console.log(error)
//     toast.error(error.message)
//   }

// }

// const initPay = (order) => {

//   const options = {
//     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//     amount: order.amount,
//     currency: order.currency,
//     name: 'Appointment Payment',
//     description: 'Appointment Payment',
//     order_id: order.id,
//     receipt: order.receipt,
//     handler: async(response) => {
//       console.log(response)

//       try {

//         const {data} = await axios.post(backendUrl+ '/api/user/verifyRazorpay', response, {headers: {token}})

//         if (data.success) {
//           getUserAppointments()
//           navigate('/my-appointments')
//         }

//       }catch (error){
//         console.log(error)
//         toast.error(error.message)
//       }
//     }
//   }

//   const rzp = new window.Razorpay(options)
//   rzp.open()
// }

// const appointmentRazorpay = async (appointmentId) => {

//   try{

//     const {data} = await axios.post(backendUrl+'/api/user/payment-razorpay', {appointmentId}, {headers: {token}})

//     if(data.success){
//        initPay(data.order)
//     }

//   } catch (error) {
//     console.log(error)
//     toast.error(error.message)
//   }

// }

//   useEffect(()=>{
//     if(token){
//       getUserAppointments()
//     }
//   },[token])

//   return (
//     <div>
//       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
//       <div>
//         {appointments.map((item, index)=>(
//           <div className='grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
//             <div>
//               <img className='w-32 bg-indigo-50' src={item.docData?.image || "/default.png"}  alt="" />
//             </div>

//             <div className='flex-1 text-sm text-zinc-600'>
//               <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
//               <p>{item.docData.speciality}</p>
//               <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//               <p className='text-xs'>{item.docData.address.line1}</p>
//               <p className='text-xs'>{item.docData.address.line2}</p>
//               <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
//             </div>
//             <div></div>
//             <div className='flex flex-col gap-2 justify-end'>
//               {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Paid</button>}
//               {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentRazorpay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
//               {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>}
//               {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
//               {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Appointment completed</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppointment/

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);

  const navigate = useNavigate();

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ================= DATE FORMAT =================

  const slotDateFormat = (slotDate) => {
    if (!slotDate) return "";

    const dateArray = slotDate.split("_");

    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  // ================= GET APPOINTMENTS =================

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });

      if (data.success) {
        setAppointments([...data.appointments].reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ================= CANCEL APPOINTMENT =================

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } },
      );

      if (data.success) {
        toast.success(data.message);

        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ================= RAZORPAY =================

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "AdvocateAssam",

      description: "Legal Consultation Appointment",

      order_id: order.id,

      receipt: order.receipt,

      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verifyRazorpay",
            response,
            {
              headers: { token },
            },
          );

          if (data.success) {
            toast.success("Payment successful");

            getUserAppointments();

            navigate("/my-appointments");
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  };

  // ================= PAYMENT =================

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-razorpay",
        { appointmentId },
        {
          headers: { token },
        },
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getSpecialities = (speciality) => {
    if (Array.isArray(speciality)) {
      return speciality;
    }
    // ================= SPECIALITY =================
    if (typeof speciality === "string") {
      try {
        const parsed = JSON.parse(speciality);

        if (Array.isArray(parsed)) {
          return parsed;
        }

        return [speciality];
      } catch (error) {
        return [speciality];
      }
    }

    return [];
  };

  // ================= LOAD =================

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-16">
      {/* ================= HEADER ================= */}

      <div className="pt-10 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0b2149] flex items-center justify-center shadow-md">
            <span className="text-[#D4A017] text-lg">⚖</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0b2149]">
              My Appointments
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your upcoming and previous legal consultations.
            </p>
          </div>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}

      {appointments.length === 0 ? (
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            p-10
            sm:p-16
            text-center
          "
        >
          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-2xl
              bg-[#F1F5FF]
              flex
              items-center
              justify-center
            "
          >
            <span className="text-3xl">📅</span>
          </div>

          <h2 className="text-xl font-bold text-[#0b2149] mt-6">
            No appointments yet
          </h2>

          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
            Find a trusted lawyer and book a consultation that works for you.
          </p>

          <button
            onClick={() => {
              navigate("/doctors");
              window.scrollTo(0, 0);
            }}
            className="
              mt-6
              px-7
              py-3
              rounded-xl
              bg-[#0b2149]
              text-white
              text-sm
              font-semibold
              border
              border-[#D4A017]/50
              hover:bg-[#14367a]
              hover:-translate-y-0.5
              transition-all
            "
          >
            Find a Lawyer →
          </button>
        </div>
      ) : (
        /* ================= APPOINTMENTS ================= */

        <div className="space-y-5">
          {appointments.map((item, index) => {
            const lawyer = item.docData || {};

            return (
              <div
                key={item._id || index}
                className="
                  bg-white
                  rounded-3xl
                  border
                  border-gray-100
                  shadow-[0_6px_25px_rgba(11,33,73,0.06)]
                  hover:shadow-[0_12px_35px_rgba(11,33,73,0.10)]
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                <div className="p-5 sm:p-6 lg:p-7">
                  {/* ================= TOP ================= */}

                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Lawyer Image */}

                    <div className="relative flex-shrink-0">
                      <img
                        className="
                          w-full
                          sm:w-36
                          lg:w-40
                          h-44
                          sm:h-36
                          lg:h-40
                          object-cover
                          rounded-2xl
                          bg-[#EEF2FF]
                          border
                          border-gray-100
                        "
                        src={lawyer.image || "/default.png"}
                        alt={lawyer.name || "Lawyer"}
                      />

                      {/* Verified */}

                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          flex
                          items-center
                          gap-1
                          px-2.5
                          py-1
                          rounded-full
                          bg-white/95
                          backdrop-blur-sm
                          shadow-md
                        "
                      >
                        <span className="text-green-500 text-xs">✓</span>

                        <span className="text-[10px] font-semibold text-gray-600">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* ================= LAWYER DETAILS ================= */}

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#0b2149]">
                            {lawyer.name}
                          </h2>

                          {/* Specialities */}
                          {/* ================= SPECIALITIES ================= */}

                          <div className="mt-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400">
                                Specialist In
                              </span>

                              <div className="h-px bg-gray-100 w-16" />
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {getSpecialities(lawyer.speciality).map(
                                (speciality, index) => (
                                  <span
                                    key={index}
                                    className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded-full
            bg-[#F5F7FC]
            border
            border-[#DCE3EF]
            text-[#0b2149]
            text-[11px]
            font-semibold
            shadow-sm
            hover:bg-[#0b2149]
            hover:text-white
            hover:border-[#0b2149]
            transition-all
            duration-300
          "
                                  >
                                    <span
                                      className="
              w-1.5
              h-1.5
              rounded-full
              bg-[#D4A017]
              flex-shrink-0
            "
                                    />

                                    {speciality}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ================= APPOINTMENT INFO ================= */}

                      <div className="grid sm:grid-cols-2 gap-3 mt-5">
                        {/* Date */}

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            p-3.5
                            rounded-xl
                            bg-[#FAFBFD]
                            border
                            border-gray-100
                          "
                        >
                          <div
                            className="
                              w-10
                              h-10
                              rounded-xl
                              bg-[#F1F5FF]
                              flex
                              items-center
                              justify-center
                            "
                          >
                            📅
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
                              Appointment
                            </p>

                            <p className="text-sm font-semibold text-[#0b2149] mt-0.5">
                              {slotDateFormat(item.slotDate)}
                            </p>
                          </div>
                        </div>

                        {/* Time */}

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            p-3.5
                            rounded-xl
                            bg-[#FAFBFD]
                            border
                            border-gray-100
                          "
                        >
                          <div
                            className="
                              w-10
                              h-10
                              rounded-xl
                              bg-[#F8F0DC]
                              flex
                              items-center
                              justify-center
                            "
                          >
                            🕐
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
                              Time
                            </p>

                            <p className="text-sm font-semibold text-[#0b2149] mt-0.5">
                              {item.slotTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ================= ADDRESS ================= */}

                      {lawyer.address && (
                        <div className="mt-4 flex items-start gap-3">
                          <span className="text-gray-400 mt-0.5">📍</span>

                          <div>
                            <p className="text-xs font-semibold text-gray-500">
                              Consultation Address
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                              {lawyer.address.line1}
                              {lawyer.address.line2 &&
                                `, ${lawyer.address.line2}`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ================= BOTTOM ACTIONS ================= */}

                  <div
                    className="
                      mt-6
                      pt-5
                      border-t
                      border-gray-100
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-4
                    "
                  >
                    {/* Payment Status */}

                    <div className="flex items-center gap-2">
                      {item.payment ? (
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-green-600
                            font-semibold
                          "
                        >
                          <span
                            className="
                              w-8
                              h-8
                              rounded-lg
                              bg-green-50
                              flex
                              items-center
                              justify-center
                            "
                          >
                            ✓
                          </span>
                          Payment Completed
                        </div>
                      ) : !item.cancelled && !item.isCompleted ? (
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-orange-500
                            font-semibold
                          "
                        >
                          <span
                            className="
                              w-8
                              h-8
                              rounded-lg
                              bg-orange-50
                              flex
                              items-center
                              justify-center
                            "
                          >
                            !
                          </span>
                          Payment Pending
                        </div>
                      ) : null}
                    </div>

                    {/* Buttons */}

                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Pay */}

                      {!item.cancelled &&
                        !item.payment &&
                        !item.isCompleted && (
                          <button
                            onClick={() => appointmentRazorpay(item._id)}
                            className="
                              min-w-[160px]
                              py-3
                              px-5
                              rounded-xl
                              bg-[#0b2149]
                              text-white
                              text-sm
                              font-semibold
                              border
                              border-[#D4A017]/50
                              hover:bg-[#14367a]
                              hover:-translate-y-0.5
                              shadow-sm
                              transition-all
                              duration-300
                            "
                          >
                            Pay Online →
                          </button>
                        )}

                      {/* Paid */}

                      {!item.cancelled && item.payment && !item.isCompleted && (
                        <button
                          disabled
                          className="
                              min-w-[160px]
                              py-3
                              px-5
                              rounded-xl
                              bg-green-50
                              text-green-600
                              border
                              border-green-100
                              text-sm
                              font-semibold
                              cursor-default
                            "
                        >
                          ✓ Paid
                        </button>
                      )}

                      {/* Cancel */}

                      {!item.cancelled && !item.isCompleted && (
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className="
                              min-w-[160px]
                              py-3
                              px-5
                              rounded-xl
                              border
                              border-red-100
                              bg-red-50
                              text-red-500
                              text-sm
                              font-semibold
                              hover:bg-red-500
                              hover:text-white
                              transition-all
                              duration-300
                            "
                        >
                          Cancel Appointment
                        </button>
                      )}

                      {/* Cancelled */}

                      {item.cancelled && !item.isCompleted && (
                        <button
                          disabled
                          className="
                              min-w-[180px]
                              py-3
                              px-5
                              rounded-xl
                              bg-red-50
                              text-red-500
                              border
                              border-red-100
                              text-sm
                              font-semibold
                            "
                        >
                          Appointment Cancelled
                        </button>
                      )}

                      {/* Completed */}

                      {item.isCompleted && (
                        <button
                          disabled
                          className="
                            min-w-[180px]
                            py-3
                            px-5
                            rounded-xl
                            bg-green-50
                            text-green-600
                            border
                            border-green-100
                            text-sm
                            font-semibold
                          "
                        >
                          ✓ Appointment Completed
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
