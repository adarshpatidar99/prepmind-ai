import { getIndustryInsight } from "../controllers/interviewController.js";
import isAuth from "../middlewares/authMiddleware.js";

import express from 'express';

const router = express.Router();

router.get('/insights', isAuth, getIndustryInsight);

export default router;