import express from "express";
import isAuth from "../middlewares/authMiddleware.js";
import { aiRateLimiter } from "../middlewares/rateLimiter.js";
import {
  getResume,
  generateResumePdf,
  createResume,
  updateResume,
  deleteResume,
  getAllResumes,
  previewResume,
  changeTemplate,
  getPublicResume,
  fetchAnalyze,
  resumeDashboard,
  resumeAnalyze,
  resumeCorrection,
  resumeSuggestions,
} from "../controllers/resumeController.js";

const router = express.Router();

// Resume
router.post("/create", isAuth, createResume);
router.get("/getall", isAuth, getAllResumes);
router.get("/get/:id", isAuth, getResume);
router.put("/update/:id", isAuth, updateResume);
router.delete("/delete/:id", isAuth, deleteResume);

// Preview / Template / PDF
router.get("/preview/:id", isAuth, previewResume);
router.put("/template/:id", isAuth, changeTemplate);
router.get("/pdf/:id", isAuth, generateResumePdf);

// Public Resume
router.get("/u/:username", getPublicResume);

// AI Resume
router.post("/analysis/ai/:id", isAuth, aiRateLimiter, resumeAnalyze);
router.post("/ai/optimize/:id", isAuth, aiRateLimiter, resumeCorrection);
router.post("/ai/suggestions/:id", isAuth, aiRateLimiter, resumeSuggestions);
router.get("/analysis/ai/:id", isAuth, fetchAnalyze);

// Dashboard
router.get("/dashboard/:id", isAuth, resumeDashboard);

export default router;