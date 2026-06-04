import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import DoctorList from "./pages/Admin/DoctorList";
import AddDoctor from "./pages/Admin/AddDoctor";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import VerifyAsLawyer from "./pages/Doctor/VerifyAsLawyer";
import LawyerApplications from "./pages/Admin/LawyerApplications";
import ForgotPassword from "./pages/Doctor/ForgotPassword";
import ResetPassword from "./pages/Doctor/ResetPassword";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/verify-lawyer" element={<VerifyAsLawyer />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {aToken || dToken ? (
          <Route
            path="/*"
            element={
              <div className="bg-[#F8F9FD]">
                <Navbar />
                <div className="flex items-start">
                  <Sidebar />

                  <Routes>
                    <Route path="admin-dashboard" element={<Dashboard />} />
                    <Route
                      path="all-appointment"
                      element={<AllAppointment />}
                    />
                    <Route path="add-doctor" element={<AddDoctor />} />
                    <Route path="doctor-list" element={<DoctorList />} />
                    <Route
                      path="lawyer-applications"
                      element={<LawyerApplications />}
                    />

                    <Route
                      path="doctor-dashboard"
                      element={<DoctorDashboard />}
                    />
                    <Route
                      path="doctor-appointments"
                      element={<DoctorAppointments />}
                    />
                    <Route path="doctor-profile" element={<DoctorProfile />} />
                  </Routes>
                </div>
              </div>
            }
          />
        ) : null}
      </Routes>
    </>
  );
};

export default App;
