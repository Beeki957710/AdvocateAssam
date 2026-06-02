import lawyerApplicationModel from "../models/lawyerApplicationModel.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import validator from "validator";
import upload from "../middleware/multer.js";
import transporter from "../config/nodemailer.js";


const applyLawyer = async (req, res) => {
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

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid Email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload lawyer photo
    const imageUpload = await cloudinary.uploader.upload(
      imageFile.path,
      {
        resource_type: "image",
      }
    );

    // Upload certificates
    let barCertificateUrl = "";
    let degreeCertificateUrl = "";

    if (barCertificateFile) {
      const upload = await cloudinary.uploader.upload(
        barCertificateFile.path,
        {
          resource_type: "auto",
        }
      );

      barCertificateUrl = upload.secure_url;
    }

    if (degreeCertificateFile) {
      const upload = await cloudinary.uploader.upload(
        degreeCertificateFile.path,
        {
          resource_type: "auto",
        }
      );

      degreeCertificateUrl = upload.secure_url;
    }

    const applicationData = {
      name,
      email,
      whatsapp,
      password: hashedPassword,
      image: imageUpload.secure_url,

      speciality,
      degree,
      experience,
      about,

      fees,

      address: JSON.parse(address),

      barCouncilNumber,
      stateBarCouncil,
      advocateId,

      barCertificate: barCertificateUrl,
      degreeCertificate: degreeCertificateUrl,

      verificationStatus: "Pending",

      date: Date.now(),
    };

    const application =
      new lawyerApplicationModel(applicationData);

    await application.save();

    //Email sending

    await transporter.sendMail({
  from: process.env.BREVO_USER,

  to: email,

  subject: "AdvocateAssam Application Received",

  html: `
    <h2>Application Submitted</h2>

    <p>
      Dear ${name},
    </p>

    <p>
      We have received your lawyer verification request.
    </p>

    <p>
      Our team will review your documents shortly.
    </p>
  `,
});

    res.json({
      success: true,
      message: "Application Submitted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });

  }
};

export { applyLawyer };