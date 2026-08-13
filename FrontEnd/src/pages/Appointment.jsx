// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets_frontend/assets";
// import RelatedDoctor from "../components/RelatedDoctor";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
//     useContext(AppContext);
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const navigate = useNavigate();

//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");

//   const fetchDocInfo = async () => {
//     const docInfo = doctors.find((doc) => doc._id === docId);
//     setDocInfo(docInfo);
//   };

//   const getAvailableSlots = async () => {
//     setDocSlots([]);
//     //getting current date
//     let today = new Date();

//     for (let i = 0; i < 7; i++) {
//       //getting date with index
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       //setting end time of the data with index
//       let endTime = new Date();
//       endTime.setDate(today.getDate() + i);
//       endTime.setHours(21, 0, 0, 0);

//       //setting hours
//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(
//           currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
//         );
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];

//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });

//         let day = currentDate.getDate();
//         let month = currentDate.getMonth() + 1;
//         let year = currentDate.getFullYear();

//         const slotDate = day + "_" + month + "_" + year;
//         const slotTime = formattedTime;

//         const isSlotAvailable =
//           docInfo?.slots_booked?.[slotDate] &&
//           docInfo?.slots_booked?.[slotDate].includes(slotTime)
//             ? false
//             : true;

//         if (isSlotAvailable) {
//           // add slot to array
//           timeSlots.push({
//             datetime: new Date(currentDate),
//             time: formattedTime,
//           });
//         }

//         //Increment current time by 30min
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       setDocSlots((prev) => [...prev, timeSlots]);
//     }
//   };

//   const bookAppointment = async () => {
//     if (!token) {
//       toast.warn("Login to book appointment");
//       return navigate("/login");
//     }

//     try {
//       const date = docSlots[slotIndex][0].datetime;

//       let day = date.getDate();
//       let month = date.getMonth() + 1;
//       let year = date.getFullYear();

//       const slotDate = day + "_" + month + "_" + year;

//       const { data } = await axios.post(
//         backendUrl + "/api/user/book-appointment",
//         { docId, slotDate, slotTime },
//         { headers: { token } },
//       );

//       if (data.success) {
//         toast.success(data.message);
//         getDoctorsData();
//         navigate("/my-appointments");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const handleWhatsAppClick = () => {
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }

//     window.open(`https://wa.me/${docInfo.whatsapp}`, "_blank");
//   };

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]);

//   useEffect(() => {
//     console.log(docSlots);
//   }, [docSlots]);

//   return (
//     docInfo && (
//       <div>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <div>
//             <img
//               className="bg-primary w-full sm:max-w-72 rounded-lg"
//               src={docInfo.image}
//               alt=""
//             />
//           </div>

//           <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//             {/* <p className="flex item-center gap-2 text-2xl font-medium text-gray-900">
//               {docInfo.name}
//               <img className="w-5" src={assets.verified_icon} alt="" />

//             </p> */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//               {/* Name + Verified */}
//               <div className="flex items-center gap-2">
//                 <p className="text-2xl font-semibold text-[#0b2149]">
//                   {docInfo.name}
//                 </p>

//                 <img
//                   className="w-5 h-5"
//                   src={assets.verified_icon}
//                   alt="Verified"
//                 />
//               </div>

//               {/* WhatsApp Button */}
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 32 32"
//                   className="w-5 h-5 fill-current"
//                 >
//                   <path d="M16.004 3C8.822 3 3 8.822 3 16.004c0 2.602.764 5.126 2.21 7.285L3 29l5.89-2.154a12.95 12.95 0 007.114 2.116h.005C23.182 28.962 29 23.14 29 15.958 29 8.822 23.182 3 16.004 3zm0 23.692a10.63 10.63 0 01-5.414-1.485l-.388-.23-3.494 1.277 1.317-3.407-.253-.398a10.61 10.61 0 01-1.635-5.69c0-5.893 4.796-10.689 10.689-10.689 5.893 0 10.689 4.796 10.689 10.689 0 5.893-4.796 10.689-10.689 10.689zm5.865-7.93c-.32-.16-1.894-.935-2.187-1.04-.293-.106-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.57-1.585-.95-.847-1.59-1.894-1.774-2.214-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.625-.525-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.094 1.307 3.307c.16.213 2.26 3.45 5.475 4.837.765.33 1.36.527 1.825.674.767.244 1.465.21 2.016.127.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
//                 </svg>
//                 Chat on WhatsApp
//               </button>
//             </div>

//             <div className="flex flex-wrap items-center gap-2 mt-2">
//               {/* Degree */}
//               <span className="text-sm font-medium text-gray-600">
//                 {docInfo.degree}
//               </span>

//               <span className="text-gray-300">•</span>

//               {/* Specialities */}
//               <div className="flex flex-wrap gap-1.5">
//                 {(() => {
//                   let specialities = [];

//                   if (Array.isArray(docInfo.speciality)) {
//                     specialities = docInfo.speciality;
//                   } else if (typeof docInfo.speciality === "string") {
//                     try {
//                       const parsed = JSON.parse(docInfo.speciality);

//                       specialities = Array.isArray(parsed)
//                         ? parsed
//                         : [docInfo.speciality];
//                     } catch {
//                       specialities = [docInfo.speciality];
//                     }
//                   }

//                   return specialities.map((speciality, index) => (
//                     <span
//                       key={index}
//                       className="px-2.5 py-1 rounded-full bg-[#F1F5FF] text-[#0b2149] border border-[#DCE5FF] text-xs font-medium whitespace-nowrap">
//                       {speciality}
//                     </span>
//                   ));
//                 })()}
//               </div>

//               {/* Experience */}
//               <span className="px-2.5 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-medium whitespace-nowrap">
//                 {docInfo.experience}
//               </span>
//             </div>

//             <div>
//               <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
//                 About <img src={assets.info_icon} alt="" />
//               </p>
//               <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//                 {docInfo.about}
//               </p>
//             </div>
//             <p className="text-gray-500 font-medium mt-4">
//               Appointment fee:{" "}
//               <span className="text-gray-600">
//                 {currencySymbol}
//                 {docInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/*-------Booking_Slots----- */}
//         <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
//           <p>Booking Slots</p>
//           <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//             {docSlots.length &&
//               docSlots.map((item, index) => (
//                 <div
//                   onClick={() => setSlotIndex(index)}
//                   className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`}
//                   key={index}
//                 >
//                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                   <p>{item[0] && item[0].datetime.getDate()}</p>
//                 </div>
//               ))}
//           </div>

//           <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
//             {docSlots.length &&
//               docSlots[slotIndex].map((item, index) => (
//                 <p
//                   onClick={() => setSlotTime(item.time)}
//                   className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
//                   key={index}
//                 >
//                   {item.time.toLowerCase()}
//                 </p>
//               ))}
//           </div>
//           <button
//             onClick={bookAppointment}
//             className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
//           >
//             Book an appointment
//           </button>
//         </div>

//         {/*Listing Related Doctors*/}
//         <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
//       </div>
//     )
//   );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams();

  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
    useContext(AppContext);

  const navigate = useNavigate();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // --------------------------------------------------
  // GET LAWYER INFORMATION
  // --------------------------------------------------

  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  // --------------------------------------------------
  // GET AVAILABLE SLOTS
  // --------------------------------------------------

  const getAvailableSlots = async () => {
    if (!docInfo) return;

    setDocSlots([]);

    const today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );

        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const slotDate = `${day}_${month}_${year}`;

        const isSlotAvailable = docInfo?.slots_booked?.[slotDate]?.includes(
          formattedTime,
        )
          ? false
          : true;

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  // --------------------------------------------------
  // BOOK APPOINTMENT
  // --------------------------------------------------

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book an appointment");
      return navigate("/login");
    }

    if (!slotTime) {
      toast.warning("Please select an appointment time");
      return;
    }

    if (!docSlots[slotIndex]?.[0]) {
      toast.warning("No slots available for this date");
      return;
    }

    try {
      const date = docSlots[slotIndex][0].datetime;

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const slotDate = `${day}_${month}_${year}`;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        {
          docId,
          slotDate,
          slotTime,
        },
        {
          headers: { token },
        },
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // --------------------------------------------------
  // WHATSAPP
  // --------------------------------------------------

  const handleWhatsAppClick = () => {
    if (!token) {
      toast.info("Please login to contact the lawyer");
      navigate("/login");
      return;
    }

    if (!docInfo?.whatsapp) {
      toast.error("WhatsApp number is not available");
      return;
    }

    window.open(`https://wa.me/${docInfo.whatsapp}`, "_blank");
  };

  // --------------------------------------------------
  // SPECIALITIES
  // --------------------------------------------------

  const getSpecialities = () => {
    if (!docInfo?.speciality) return [];

    if (Array.isArray(docInfo.speciality)) {
      return docInfo.speciality;
    }

    if (typeof docInfo.speciality === "string") {
      try {
        const parsed = JSON.parse(docInfo.speciality);

        return Array.isArray(parsed) ? parsed : [docInfo.speciality];
      } catch {
        return [docInfo.speciality];
      }
    }

    return [];
  };

  // --------------------------------------------------
  // USE EFFECTS
  // --------------------------------------------------

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    docInfo && (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* ==========================================
            BREADCRUMB
        ========================================== */}

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-[#0b2149]"
          >
            Home
          </span>

          <span>/</span>

          <span
            onClick={() => navigate("/doctors")}
            className="cursor-pointer hover:text-[#0b2149]"
          >
            Lawyers
          </span>

          <span>/</span>

          <span className="text-[#0b2149] font-medium">{docInfo.name}</span>
        </div>

        {/* ==========================================
            LAWYER PROFILE
        ========================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-6">
          {/* LAWYER IMAGE */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-[#EEF2FF]">
              <img
                src={docInfo.image}
                alt={docInfo.name}
                className="
                  w-full
                  h-[430px]
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              {/* Availability */}

              <div className="absolute top-4 left-4">
                <span
                  className={`
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    text-sm font-semibold
                    backdrop-blur-md
                    shadow-lg
                    ${
                      docInfo.available
                        ? "bg-green-500/95 text-white"
                        : "bg-red-500/95 text-white"
                    }
                  `}
                >
                  <span
                    className={`
                      w-2 h-2 rounded-full
                      ${docInfo.available ? "bg-white" : "bg-white"}
                    `}
                  ></span>

                  {docInfo.available ? "Available" : "Unavailable"}
                </span>
              </div>

              {/* Verified */}

              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <img
                    src={assets.verified_icon}
                    alt="Verified"
                    className="w-5 h-5"
                  />

                  <span className="text-sm font-semibold text-[#0b2149]">
                    Verified Lawyer
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              LAWYER DETAILS
          ========================================== */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 sm:p-8">
            {/* NAME + WHATSAPP */}

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-[#0b2149]">
                    {docInfo.name}
                  </h1>

                  <img
                    src={assets.verified_icon}
                    alt="Verified"
                    className="w-6 h-6"
                  />
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Trusted Legal Professional
                </p>
              </div>

              {/* WHATSAPP BUTTON */}

              <button
                onClick={handleWhatsAppClick}
                className="
                  flex items-center justify-center gap-2
                  bg-[#25D366]
                  hover:bg-[#1ebe5d]
                  text-white
                  px-5 py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.004 3C8.822 3 3 8.822 3 16.004c0 2.602.764 5.126 2.21 7.285L3 29l5.89-2.154a12.95 12.95 0 007.114 2.116h.005C23.182 28.962 29 23.14 29 15.958 29 8.822 23.182 3 16.004 3zm0 23.692a10.63 10.63 0 01-5.414-1.485l-.388-.23-3.494 1.277 1.317-3.407-.253-.398a10.61 10.61 0 01-1.635-5.69c0-5.893 4.796-10.689 10.689-10.689 5.893 0 10.689 4.796 10.689 10.689 0 5.893-4.796 10.689-10.689 10.689zm5.865-7.93c-.32-.16-1.894-.935-2.187-1.04-.293-.106-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.57-1.585-.95-.847-1.59-1.894-1.774-2.214-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.625-.525-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.094 1.307 3.307c.16.213 2.26 3.45 5.475 4.837.765.33 1.36.527 1.825.674.767.244 1.465.21 2.016.127.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            {/* DEGREE + EXPERIENCE */}

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-xs text-gray-400">Qualification</span>

                <span className="font-semibold text-[#0b2149]">
                  {docInfo.degree}
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-xs text-gray-400">Experience</span>

                <span className="font-semibold text-[#0b2149]">
                  {docInfo.experience}
                </span>
              </div>
            </div>

            {/* SPECIALITIES */}

            <div className="mt-6">
              <p className="text-sm font-semibold text-[#0b2149] mb-3">
                Areas of Practice
              </p>

              <div className="flex flex-wrap gap-2">
                {getSpecialities().map((speciality, index) => (
                  <span
                    key={index}
                    className="
                        px-3 py-1.5
                        rounded-full
                        bg-[#F1F5FF]
                        text-[#0b2149]
                        border border-[#DCE5FF]
                        text-xs
                        font-semibold
                        hover:bg-[#0b2149]
                        hover:text-white
                        transition-all duration-200
                      "
                  >
                    {speciality}
                  </span>
                ))}
              </div>
            </div>

            {/* DIVIDER */}

            <div className="border-t border-gray-100 my-6"></div>

            {/* ABOUT */}

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F1F5FF] flex items-center justify-center">
                  <img src={assets.info_icon} alt="" className="w-4" />
                </div>

                <h3 className="font-semibold text-[#0b2149]">
                  About the Lawyer
                </h3>
              </div>

              <p className="text-sm leading-6 text-gray-500">{docInfo.about}</p>
            </div>

            {/* FEE */}

            <div className="mt-6 bg-gradient-to-r from-[#F8FAFF] to-[#EEF3FF] border border-[#DCE5FF] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Consultation Fee</p>

                <p className="text-2xl font-bold text-[#0b2149] mt-1">
                  {currencySymbol}
                  {docInfo.fees}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">Consultation</p>

                <p className="text-sm font-semibold text-[#0b2149]">
                  30 Minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            BOOKING SECTION
        ========================================== */}

        <div className="mt-10">
          {/* SECTION HEADER */}

          <div className="mb-5">
            <p className="text-xs uppercase tracking-wider text-[#D4A017] font-bold">
              Schedule Consultation
            </p>

            <h2 className="text-2xl font-bold text-[#0b2149] mt-1">
              Choose your appointment
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Select a convenient date and available time slot.
            </p>
          </div>

          {/* DATE */}

          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-5">
            <p className="font-semibold text-[#0b2149] mb-4">Select Date</p>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {docSlots.map((item, index) => {
                const selected = slotIndex === index;

                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      setSlotIndex(index);
                      setSlotTime("");
                    }}
                    className={`
                      min-w-[76px]
                      h-[88px]
                      rounded-2xl
                      flex flex-col
                      items-center
                      justify-center
                      border
                      transition-all duration-300
                      ${
                        selected
                          ? "bg-[#0b2149] text-white border-[#0b2149] shadow-lg scale-105"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#0b2149] hover:bg-[#F8FAFF]"
                      }
                    `}
                  >
                    <span className="text-xs font-semibold uppercase">
                      {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                    </span>

                    <span className="text-xl font-bold mt-1">
                      {item[0] && item[0].datetime.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* TIME */}

            <div className="mt-7">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-[#0b2149]">Available Times</p>

                <span className="text-xs text-gray-400">
                  30 min consultation
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {docSlots[slotIndex]?.map((item, index) => {
                  const selected = item.time === slotTime;

                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setSlotTime(item.time)}
                      className={`
                          px-4 py-2.5
                          rounded-xl
                          text-sm
                          font-medium
                          border
                          transition-all duration-200
                          ${
                            selected
                              ? "bg-[#0b2149] text-white border-[#0b2149] shadow-md"
                              : "bg-white text-gray-600 border-gray-200 hover:border-[#0b2149] hover:text-[#0b2149]"
                          }
                        `}
                    >
                      {item.time}
                    </button>
                  );
                })}
              </div>

              {/* NO SLOTS */}

              {docSlots[slotIndex]?.length === 0 && (
                <div className="py-8 text-center text-sm text-gray-400">
                  No available slots for this date.
                </div>
              )}
            </div>

            {/* BOOK BUTTON */}

            <div className="mt-8">
              <button
                onClick={bookAppointment}
                disabled={!slotTime}
                className={`
                  w-full sm:w-auto
                  px-10 py-3.5
                  rounded-xl
                  font-semibold
                  text-sm
                  transition-all duration-300
                  ${
                    slotTime
                      ? "bg-[#0b2149] hover:bg-[#071832] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {slotTime ? "Confirm Appointment" : "Select a Time Slot"}
              </button>
            </div>
          </div>
        </div>

        {/* ==========================================
            RELATED LAWYERS
        ========================================== */}

        <div className="mt-12">
          <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
