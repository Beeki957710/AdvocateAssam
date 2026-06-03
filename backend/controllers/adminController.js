import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";
import lawyerApplicationModel from "../models/lawyerApplicationModel.js";

import {
  sendApplicationSubmittedEmail,
  sendApplicationApprovedEmail,
  sendApplicationRejectedEmail,
} from "../utils/sendLawyerEmails.js";

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

    // Delete application
    await lawyerApplicationModel.findByIdAndDelete(applicationId);

    // Send approval email
    try {
      await sendApplicationApprovedEmail(lawyerData);
    } catch (emailError) {
      console.log("Email sending failed:", emailError);
    }

    return res.json({
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

    const lawyerData = {
      name: application.name,
      email: application.email,
    };

    // Send rejection email
    try {
      await sendApplicationRejectedEmail(lawyerData);
    } catch (emailError) {
      console.log("Email sending failed:", emailError);
    }

    // Delete application
    await lawyerApplicationModel.findByIdAndDelete(applicationId);

    return res.json({
      success: true,
      message: "Lawyer Application Rejected",
    });
  } catch (error) {
    console.log(error);

    return res.json({
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
