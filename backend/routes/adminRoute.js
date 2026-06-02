import express from 'express'
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard, getApplications, approveLawyer, rejectLawyer} from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.fields([{ name: 'image', maxCount: 1 },{ name: 'barCertificate', maxCount: 1 },{ name: 'degreeCertificate', maxCount: 1 }]),addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

adminRouter.get("/applications",authAdmin,getApplications);
adminRouter.post("/approve-lawyer",authAdmin,approveLawyer);
adminRouter.post("/reject-lawyer",authAdmin,rejectLawyer);

export default adminRouter