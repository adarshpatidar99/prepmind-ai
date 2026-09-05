import express from 'express';
import isAuth from "../middlewares/authMiddleware.js";
import { createCoverLetter, deleteCoverLetter, generateCoverLetterWithAI, getAllCoverLetter, getCoverLetter, updateCoverLetter } from '../controllers/coverLetterController.js';
import { aiRateLimiter } from '../middlewares/rateLimiter.js';

const router = express.Router();
                          
// ===== CRUD =====
router.post('/create', isAuth, createCoverLetter);    
router.get('/get/:id', isAuth, getCoverLetter);
router.get('/getall', isAuth, getAllCoverLetter);
router.delete('/delete/:id', isAuth, deleteCoverLetter);
router.put('/update/:id', isAuth, updateCoverLetter); 
router.post('/ai/generate', isAuth, aiRateLimiter, generateCoverLetterWithAI)    

export default router;             