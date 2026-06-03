import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import razorpay from "razorpay";
// import transporter from "../config/nodemailer.js";

const sendWelcomeEmail = async (userData) => {
  try {
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "AdvocateAssam",
            email: "support@advocateassam.com",
          },

          to: [
            {
              email: userData.email,
              name: userData.name,
            },
          ],

          subject: "Welcome to AdvocateAssam",

          htmlContent: `
            <h2>Welcome ${userData.name}</h2>
            <p>Your account has been created successfully.</p>
          `,
        }),
      }
    );

    const data = await response.json();

    console.log("Brevo Response:", data);
  } catch (err) {
    console.log("Email Failed:", err);
  }
};


// API to register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }

    //validating strong password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };
////////
    console.log("Step 1");

    const newUser = new userModel(userData);
    const user = await newUser.save();
/////////
    console.log("Step 2");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//////////////
    console.log("Step 3");

    await sendWelcomeEmail(userData);

  //   try {
  //     await transporter.sendMail({
  //       from: process.env.BREVO_USER,
  //       to: userData.email,

  //       subject: "Welcome to AdvocateAssam - Your Account Has Been Created ⚖️",

  //       html: `
  // <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">

  //   <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

  //     <!-- Header -->
  //     <div style="background:#0b2149; padding:30px; text-align:center;">
  //       <h1 style="color:white; margin:0; font-size:32px;">
  //         AdvocateAssam ⚖️
  //       </h1>

  //       <p style="color:#d4af37; margin-top:10px; font-size:15px;">
  //         Connecting Clients with Trusted Legal Professionals
  //       </p>
  //     </div>

  //     <!-- Content -->
  //     <div style="padding:35px;">

  //       <h2 style="color:#0b2149;">
  //         Welcome, ${userData.name}! 🎉
  //       </h2>

  //       <p style="font-size:16px; color:#444; line-height:1.7;">
  //         Thank you for joining AdvocateAssam.
  //         Your account has been successfully created and is now ready to use.
  //       </p>

  //       <p style="font-size:16px; color:#444; line-height:1.7;">
  //         You can now explore verified lawyers, book legal consultations,
  //         and manage your appointments through our platform.
  //       </p>

  //       <!-- Account Details -->
  //       <div style="
  //         background:#f8f9fd;
  //         border-left:5px solid #d4af37;
  //         padding:18px;
  //         margin:25px 0;
  //         border-radius:8px;
  //       ">

  //         <p style="margin:6px 0;">
  //           <strong>Name:</strong> ${userData.name}
  //         </p>

  //         <p style="margin:6px 0;">
  //           <strong>Email:</strong> ${userData.email}
  //         </p>

  //         <p style="margin:6px 0;">
  //           <strong>Status:</strong>
  //           <span style="color:green; font-weight:bold;">
  //             ✓ Active Account
  //           </span>
  //         </p>

  //       </div>

  //       <h3 style="color:#0b2149;">
  //         What you can do now:
  //       </h3>

  //       <ul style="color:#444; line-height:1.9;">
  //         <li>Find verified lawyers</li>
  //         <li>Book legal consultations</li>
  //         <li>Manage appointments online</li>
  //         <li>Track consultation history</li>
  //         <li>Get trusted legal assistance</li>
  //       </ul>

  //       <!-- Login Button -->
  //       <div style="text-align:center; margin-top:35px;">

  //         <a
  //           href="https://advocateassam.com"
  //           style="
  //             display:inline-block;
  //             background:#0b2149;
  //             color:white;
  //             padding:14px 30px;
  //             text-decoration:none;
  //             border-radius:8px;
  //             font-weight:bold;
  //             font-size:16px;
  //           "
  //         >
  //           Visit AdvocateAssam
  //         </a>

  //       </div>

  //       <p style="
  //         margin-top:35px;
  //         color:#555;
  //         line-height:1.7;
  //       ">
  //         We are committed to making legal services more accessible,
  //         transparent, and convenient for everyone.
  //       </p>

  //       <p style="margin-top:25px;">
  //         Regards,<br>
  //         <strong>AdvocateAssam Team</strong>
  //       </p>

  //     </div>

  //     <!-- Footer -->
  //     <div style="
  //       background:#f8f9fd;
  //       padding:20px;
  //       text-align:center;
  //       color:#777;
  //       font-size:13px;
  //     ">
  //       <p>
  //         This is an automated email. Please do not reply directly to this message.
  //       </p>

  //       <p>
  //         © ${new Date().getFullYear()} AdvocateAssam. All Rights Reserved.
  //       </p>
  //     </div>

  //   </div>

  // </div>
  // `,
  //     });
  //     console.log("Step 4");
  //   } catch (err) {
  //     console.log("Email failed:", err);
  //   }

    console.log("Step 5");

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get user profile data
const getProfile = async (req, res) => {
  try {
    const userId = req.userId; // ✅ FIX  // ***********const {userId} = req.body**********//
    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to update user profile
const updateProfile = async (req, res) => {
  try {
    const { name, phone, address, dob, gender } = req.body;
    const userId = req.userId; // ✅ FIX
    const imageFile = req.file; // ✅ FIX

    if (!name || !phone || !address || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: typeof address === "string" ? JSON.parse(address) : address,
      dob,
      gender,
    });

    if (imageFile) {
      //upload image to cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_typ: "image",
      });
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to book appointment
const bookAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const { docId, slotDate, slotTime } = req.body;

    // ✅ validation added
    if (!docId || !slotDate || !slotTime) {
      return res.json({ success: false, message: "Missing data" });
    }

    const docData = await doctorModel.findById(docId).select("-password");

    // ✅ fixed success flag
    if (!docData.available) {
      return res.json({ success: false, message: "Doctor not available" });
    }

    // ✅ prevent undefined error
    let slots_booked = docData.slots_booked || {};

    //Checking for slot availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");

    // ✅ fix unsafe delete
    const docDataObj = docData.toObject();
    delete docDataObj.slots_booked;

    const appointmentData = {
      userId,
      docId,
      userData,
      docData: docDataObj,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    //save new slots data in docData
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get user appointments for frontend my-appointments page
const listAppointment = async (req, res) => {
  try {
    const userId = req.userId; //***********const {userId} = req.body*********** */
    const appointments = await appointmentModel.find({ userId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    //verify appointment user
    if (appointmentData.userId.toString() !== userId) {
      return res.json({ success: false, message: "Unauthorized action" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    //releasing doctor list
    const { docId, slotDate, slotTime } = appointmentData;

    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime,
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//API to make payment of appointment using razorpay
const paymentRazorpay = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData || appointmentData.cancelled) {
      return res.json({
        success: false,
        message: "Appointment cancelled or not found",
      });
    }

    //creating options for razorpay payment
    const options = {
      amount: appointmentData.amount * 100,
      currency: process.env.CURRENCY,
      receipt: appointmentId,
    };

    //creation of an order
    const order = await razorpayInstance.orders.create(options);

    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to verify payment of razorpay
const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
      });
      res.json({ success: true, message: "Payment Successful" });
    } else {
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentRazorpay,
  verifyRazorpay,
};
