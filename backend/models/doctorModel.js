import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    whatsapp: { type: String, required: true },

    password: { type: String, required: true },

    image: { type: String, required: true },

    speciality: { type: String, required: true },

    degree: { type: String, required: true },

    experience: { type: String, required: true },

    about: { type: String, required: true },

    available: { type: Boolean, default: true },

    fees: { type: Number, required: true },

    address: { type: Object, required: true },

    date: { type: Number, required: true },

    slots_booked: { type: Object, default: {} },

    // =========================
    // Lawyer Verification Fields
    // =========================

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    barCouncilNumber: {
      type: String,
      default: "",
    },

    stateBarCouncil: {
      type: String,
      default: "",
    },

    advocateId: {
      type: String,
      default: "",
    },

    barCertificate: {
      type: String,
      default: "",
    },

    degreeCertificate: {
      type: String,
      default: "",
    },

    verifiedAt: {
      type: Date,
      default: null,
    },

    resetPasswordToken: {type: String, default: "",},
    resetPasswordExpire: {type: Date,},
  },
  { minimize: false },
);

const doctorModel = mongoose.models.Lawyers || mongoose.model("Lawyers", doctorSchema);

export default doctorModel;
