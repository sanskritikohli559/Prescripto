import express from 'express'
import { doctorList, loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard, doctorProfile, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/completeAppointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancelAppointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/updateProfile', authDoctor, updateDoctorProfile)
export default doctorRouter