import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import crypto from "crypto";

//Api for forgot password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const lawyer = await doctorModel.findOne({ email });

    if (!lawyer) {
      return res.json({
        success: false,
        message: "No account found with this email",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    lawyer.resetPasswordToken = resetToken;
    lawyer.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    await lawyer.save();

    const resetLink = `https://advocateassam.com/reset-password/${resetToken}`;

    await fetch("https://api.brevo.com/v3/smtp/email", {
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
            email: lawyer.email,
            name: lawyer.name,
          },
        ],

        subject: "Reset Your Password",

        htmlContent: `
          <h2>Password Reset Request</h2>

          <p>Click the button below to reset your password.</p>

          <a href="${resetLink}"
             style="
               background:#0b2149;
               color:white;
               padding:12px 20px;
               text-decoration:none;
               border-radius:6px;
             ">
             Reset Password
          </a>

          <p>This link expires in 15 minutes.</p>
        `,
      }),
    });

    res.json({
      success: true,
      message: "Password reset email sent",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};


//API to reset password
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;

    const lawyer = await doctorModel.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!lawyer) {
      return res.json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    const salt = await bcrypt.genSalt(10);

    lawyer.password = await bcrypt.hash(password, salt);

    lawyer.resetPasswordToken = "";
    lawyer.resetPasswordExpire = null;

    await user.save();

    res.json({
      success: true,
      message: "Password reset successful",
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for VerifyAslawyer
const VerifyAsLawyer = async (req, res) => {
  try {

    const {
      name,
      email,
      whatsapp,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
      barCouncilNumber,
      stateBarCouncil,
      advocateId
    } = req.body;

    const imageFile = req.files?.image?.[0];
    const barCertificateFile = req.files?.barCertificate?.[0];
    const degreeCertificateFile = req.files?.degreeCertificate?.[0];

    // Check required fields
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload profile image
    let imageUrl = "";

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(
        imageFile.path,
        { resource_type: "image" }
      );

      imageUrl = imageUpload.secure_url;
    }

    // Upload Bar Certificate
    let barCertificateUrl = "";

    if (barCertificateFile) {
      const upload = await cloudinary.uploader.upload(
        barCertificateFile.path,
        { resource_type: "auto" }
      );

      barCertificateUrl = upload.secure_url;
    }

    // Upload Degree Certificate
    let degreeCertificateUrl = "";

    if (degreeCertificateFile) {
      const upload = await cloudinary.uploader.upload(
        degreeCertificateFile.path,
        { resource_type: "auto" }
      );

      degreeCertificateUrl = upload.secure_url;
    }

    const lawyerData = {
      name,
      email,
      whatsapp,
      password: hashedPassword,
      image: imageUrl,

      speciality,
      degree,
      experience,
      about,

      fees,
      address: JSON.parse(address),

      date: Date.now(),

      // Verification Fields
      barCouncilNumber,
      stateBarCouncil,
      advocateId,

      barCertificate: barCertificateUrl,
      degreeCertificate: degreeCertificateUrl,

      isVerified: false,
      verificationStatus: "Pending",
      verifiedAt: null
    };

    const newLawyer = new doctorModel(lawyerData);

    await newLawyer.save();

    res.json({
      success: true,
      message: "Lawyer Added Successfully"
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message
    });
  }
};

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);

    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



//API for lawyer login
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get doctor appointments for doctor model
const appointmentsDoctor = async (req, res) => {
  try {
    const docId = req.user.id;
    const appointments = await appointmentModel.find({ docId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//API to mark appointment completed for doctor panel
const appointmentComplete = async (req, res) => {
  try {
    const docId = req.user.id;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (appointmentData && appointmentData.docId.toString() === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        isCompleted: true,
      });
      return res.json({ success: true, message: "Appointment Completed" });
    } else {
      return res.json({ success: false, message: "Marked Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//API to cancel appointment for doctor panel
const appointmentCancel = async (req, res) => {
  try {
    const docId = req.user.id;
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (appointmentData && appointmentData.docId.toString() === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
      });
      return res.json({ success: true, message: "Appointment Cancelled" });
    } else {
      return res.json({ success: false, message: "Cancellation Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get dashboard data for doctor panel
const doctorDashboard = async (req, res) => {
  try {
    const docId = req.user.id;

    const appointments = await appointmentModel.find({ docId });

    let earnings = 0;

    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount;
      }
    });

    let patients = [];

    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get doctor profile for Doctor Panel
const doctorProfile = async (req, res) => {
    try{

      const docId = req.user.id
      const profileData = await doctorModel.findById(docId).select('-password')

      res.json({success: true, profileData})

    }catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
}

//API to update doctor data from Doctor Panel
const updateDoctorProfile = async (req, res) => { 
  try { 

    const docId = req.user.id 
    const {fees, address, available} = req.body

    await doctorModel.findByIdAndUpdate(docId, {fees, address, available})

    res.json ({success: true, message:'Profile Updated'})

  }catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }
}
export {
  changeAvailability,
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
  VerifyAsLawyer
};
