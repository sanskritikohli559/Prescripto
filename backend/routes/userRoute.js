import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentStripe, verifyStripe } from '../controllers/userController.js'
import upload from '../middleware/multer.js'
import authUser from '../middleware/authUser.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/getProfile',authUser,getProfile)

userRouter.post('/updateProfile', upload.single('image'), authUser ,updateProfile)

userRouter.post('/bookAppointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancelAppointment', authUser, cancelAppointment)

userRouter.post("/payment-stripe", authUser, paymentStripe);
userRouter.post("/verifyStripe", authUser, verifyStripe);

export default userRouter