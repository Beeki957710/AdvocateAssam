import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoutes.js'
import applicationRouter from "./routes/applicationRoute.js"

//app config
const app = express()
const port = process.env.PORT || 5000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors({
  origin: [
    "https://advocateassam.com",
    "https://www.advocateassam.com",
    "https://advocate-assam.vercel.app",
    "https://api.advocateassam.com"
  ],
  credentials: true
}))


// api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)
app.use("/api/application",applicationRouter);
//localhost:5000/api/admin/add-doctor

//testing email sending
app.get("/test-mail", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.BREVO_USER,
      to: "your-email@gmail.com",
      subject: "Test Email",
      text: "Brevo is working!",
    });

    res.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
    });
  }
});


app.get('/', (req, res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log("Server Started", port))