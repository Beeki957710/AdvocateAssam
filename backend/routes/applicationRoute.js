import express from "express";
import { applyLawyer } from "../controllers/applicationController.js";
import upload from "../middleware/multer.js";

const applicationRouter = express.Router();

applicationRouter.post(
  "/apply-lawyer",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "barCertificate", maxCount: 1 },
    { name: "degreeCertificate", maxCount: 1 },
  ]),
  applyLawyer
);

export default applicationRouter;