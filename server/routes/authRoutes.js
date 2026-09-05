import {
  signup,
  signin,
  logout,
  getCurrentUser,
  completeProfile,
  updatePassword,
  updateProfile
} from "../controllers/authController.js";

import express from "express";
import isAuth from "../middlewares/authMiddleware.js";

import { authRateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/signup", authRateLimiter , signup);

router.post("/signin", authRateLimiter , signin);

router.get("/logout", logout);

router.get("/me", isAuth, getCurrentUser);

router.post("/profile", isAuth, completeProfile);

router.put("/update/profile", isAuth, updateProfile);

router.put("/update/password", isAuth, authRateLimiter , updatePassword);

export default router;