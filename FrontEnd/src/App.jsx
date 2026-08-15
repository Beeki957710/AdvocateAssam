import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import HowItWorks from "./pages/HowItWorks";
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndCondition'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";



const App = () => {
  return (
    <div className= 'mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/doctors" element={<PageTransition><Doctors /></PageTransition>} />
        <Route path="/doctors/:speciality" element={<PageTransition><Doctors /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/my-profile" element={<PageTransition><MyProfile /></PageTransition>} />
        <Route path="/my-appointments" element={<PageTransition><MyAppointment /></PageTransition>} />
        <Route path="/appointment/:docId" element={<PageTransition><Appointment /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsAndConditions /></PageTransition>} />

  
        <Route path="/verify-email/:token" element={<PageTransition><VerifyEmail /></PageTransition>} />
        <Route path="/forgot-password" element={<PageTransition><ForgotPassword /></PageTransition>} />
        <Route path="/reset-password/:token" element={<PageTransition><ResetPassword /></PageTransition>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
