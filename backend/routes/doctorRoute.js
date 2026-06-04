import express from 'express'
import { doctorList, loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile, VerifyAsLawyer, forgotPassword, resetPassword} from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js'
import upload from '../middleware/multer.js'

const doctorRouter = express.Router()

doctorRouter.post('/verify-lawyer',authDoctor,upload.fields([{ name: 'image', maxCount: 1 },{ name: 'barCertificate', maxCount: 1 },{ name: 'degreeCertificate', maxCount: 1 }]), VerifyAsLawyer)
doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)

doctorRouter.post("/forgot-password", forgotPassword)
doctorRouter.post("/reset-password/:token", resetPassword)

doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)



export default doctorRouter