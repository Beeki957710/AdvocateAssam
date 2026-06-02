import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";
import lawyerApplicationModel from "../models/lawyerApplicationModel.js";
import transporter from "../config/nodemailer.js";
import apiInstance from "../config/brevo.js";

// API for adding lawyer
const addDoctor = async (req, res) => {
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
      advocateId,
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
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });

      imageUrl = imageUpload.secure_url;
    }

    // Upload Bar Certificate
    let barCertificateUrl = "";

    if (barCertificateFile) {
      const upload = await cloudinary.uploader.upload(barCertificateFile.path, {
        resource_type: "auto",
      });

      barCertificateUrl = upload.secure_url;
    }

    // Upload Degree Certificate
    let degreeCertificateUrl = "";

    if (degreeCertificateFile) {
      const upload = await cloudinary.uploader.upload(
        degreeCertificateFile.path,
        { resource_type: "auto" },
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
      verifiedAt: null,
    };

    const newLawyer = new doctorModel(lawyerData);

    await newLawyer.save();

    res.json({
      success: true,
      message: "Lawyer Added Successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API to get lawyer's applications
const getApplications = async (req, res) => {
  try {
    const applications = await lawyerApplicationModel.find({});

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API to Approve Lawyer
const approveLawyer = async (req, res) => {
  try {
    const { applicationId } = req.body;

    const application = await lawyerApplicationModel.findById(applicationId);

    if (!application) {
      return res.json({
        success: false,
        message: "Application not found",
      });
    }

    const lawyerData = {
      name: application.name,
      email: application.email,
      whatsapp: application.whatsapp,
      password: application.password,

      image: application.image,

      speciality: application.speciality,
      degree: application.degree,
      experience: application.experience,

      about: application.about,

      fees: application.fees,

      address: application.address,

      date: Date.now(),

      slots_booked: {},

      isVerified: true,
      verificationStatus: "Approved",

      barCouncilNumber: application.barCouncilNumber,

      stateBarCouncil: application.stateBarCouncil,

      advocateId: application.advocateId,

      barCertificate: application.barCertificate,

      degreeCertificate: application.degreeCertificate,

      verifiedAt: new Date(),
    };

    const lawyer = new doctorModel(lawyerData);

    await lawyer.save();

    //Email sending
    await transporter.sendMail({
      from: process.env.BREVO_USER,
      to: application.email,

      subject: "Welcome to AdvocateAssam - Lawyer Account Approved ⚖️",

      html: `
  <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">

    <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:#0b2149; padding:30px; text-align:center;">
        <h1 style="color:white; margin:0; font-size:32px;">
          AdvocateAssam ⚖️
        </h1>

        <p style="color:#d4af37; margin-top:10px; font-size:15px;">
          Connecting Clients with Trusted Legal Professionals
        </p>
      </div>

      <!-- Content -->
      <div style="padding:35px;">

        <h2 style="color:#0b2149; margin-bottom:20px;">
          Congratulations, ${application.name}! 🎉
        </h2>

        <p style="font-size:16px; color:#444; line-height:1.7;">
          We are delighted to inform you that your lawyer verification request
          has been successfully approved by the AdvocateAssam Verification Team.
        </p>

        <p style="font-size:16px; color:#444; line-height:1.7;">
          Your professional profile is now active and visible on the
          AdvocateAssam platform. You can start receiving legal consultation
          requests from clients across Assam.
        </p>

        <!-- Verification Card -->
        <div style="
          background:#f8f9fd;
          border-left:5px solid #d4af37;
          padding:18px;
          margin:25px 0;
          border-radius:8px;
        ">

          <p style="margin:6px 0;">
            <strong>Name:</strong> ${application.name}
          </p>

          <p style="margin:6px 0;">
            <strong>Email:</strong> ${application.email}
          </p>

          <p style="margin:6px 0;">
            <strong>Status:</strong>
            <span style="color:green; font-weight:bold;">
              ✓ Verified Lawyer
            </span>
          </p>

        </div>

        <h3 style="color:#0b2149;">
          You can now:
        </h3>

        <ul style="color:#444; line-height:1.9;">
          <li>Accept legal consultation requests</li>
          <li>Manage appointments with clients</li>
          <li>Update your professional profile</li>
          <li>Showcase your legal expertise</li>
          <li>Grow your legal practice online</li>
        </ul>

        <!-- Button -->
        <div style="text-align:center; margin-top:35px;">

          <a
            href="http://localhost:5175"
            style="
              display:inline-block;
              background:#0b2149;
              color:white;
              padding:14px 30px;
              text-decoration:none;
              border-radius:8px;
              font-weight:bold;
              font-size:16px;
            "
          >
            Login to AdvocateAssam
          </a>

        </div>

        <p style="
          margin-top:35px;
          color:#555;
          line-height:1.7;
        ">
          Thank you for joining AdvocateAssam. We look forward to helping
          you connect with clients and expand your professional reach.
        </p>

        <p style="margin-top:25px;">
          Regards,<br>
          <strong>AdvocateAssam Team</strong>
        </p>

      </div>

      <!-- Footer -->
      <div style="
        background:#f8f9fd;
        padding:20px;
        text-align:center;
        color:#777;
        font-size:13px;
      ">
        <p>
          This is an automated email. Please do not reply directly to this message.
        </p>

        <p>
          © ${new Date().getFullYear()} AdvocateAssam. All Rights Reserved.
        </p>
      </div>

    </div>

  </div>
  `,
    });

    await lawyerApplicationModel.findByIdAndDelete(applicationId);

    res.json({
      success: true,
      message: "Lawyer Approved",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API to reject Lawyer
const rejectLawyer = async (req, res) => {
  try {
    const { applicationId } = req.body;

    const application = await lawyerApplicationModel.findById(applicationId);

    if (!application) {
      return res.json({
        success: false,
        message: "Application Not Found",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: application.email,

      subject: "AdvocateAssam Verification Update",

      html: `
    <h2>Verification Update</h2>

    <p>
      Dear ${application.name},
    </p>

    <p>
      Your lawyer verification request was not approved.
    </p>

    <p>
      You may submit a new application with corrected documents.
    </p>
  `,
    });

    await lawyerApplicationModel.findByIdAndDelete(applicationId);

    res.json({
      success: true,
      message: "Lawyer Application Rejected",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get all appointments list
const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

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

//API for dashboard data for admin panel
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointment: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
  getApplications,
  approveLawyer,
  rejectLawyer,
};
