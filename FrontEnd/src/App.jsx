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



const App = () => {
  return (
    <div className= 'mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/doctors' element={<Doctors />} />
        <Route path ='/doctors/:speciality' element={<Doctors />} />
        <Route path ='/login' element={<Login />}/>
        <Route path ='/about' element={<About />}/>
        <Route path ='/contact' element={<Contact />}/>
        <Route path ='/my-profile' element={<MyProfile />}/>
        <Route path ='/my-appointments' element={<MyAppointment />}/>
        <Route path ='/appointment/:docId' element={<Appointment />}/>
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsAndConditions />} />

//////////////
        <Route path="/verify-email/:token" element={<VerifyEmail/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password/:token" element={<ResetPassword />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
