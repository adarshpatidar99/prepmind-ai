import express from "express";
import { getCareerChats, sendCareerMessage } from "../controllers/careerAdvisorController.js";
import isAuth from "../middlewares/authMiddleware.js";   
import { aiRateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/message", isAuth, aiRateLimiter , sendCareerMessage);
router.get("/history", isAuth, getCareerChats)

export default router; 