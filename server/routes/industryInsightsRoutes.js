import { getIndustryInsights } from "../controllers/industryInsightController.js";
import isAuth from "../middlewares/authMiddleware.js";

import express from 'express';
import { aiRateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.get('/insights', isAuth, aiRateLimiter , getIndustryInsights);

export default router;    