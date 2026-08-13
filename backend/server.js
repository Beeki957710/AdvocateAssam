import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoute.js";

// App config
const app = express();
const port = process.env.PORT || 5000;

// Database & Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5175",
      "http://localhost:5176",
      

      "https://advocateassam.com",
      "https://www.advocateassam.com",
      "https://advocate-assam.vercel.app",
      "https://api.advocateassam.com"
    ],
    credentials: true
  })
);

// API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
app.use("/api/application", applicationRouter);

// Test API
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(port, () => {
  console.log("Server Started", port);
});