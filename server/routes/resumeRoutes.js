import express from 'express';
import isAuth from "../middlewares/authMiddleware.js";

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
  resumeSuggestions
} from "../controllers/resumeController.js";

const router = express.Router();

// ===== CRUD =====
router.post('/create', isAuth, createResume);    // check 
router.get('/', isAuth, getAllResumes);  // check
router.get('/:id', isAuth, getResume);   // check
router.put('/:id', isAuth, updateResume);   // check
router.delete('/:id', isAuth, deleteResume);   // check
                                                                                     
// ===== Resume Features =====
router.get('/preview/:id', isAuth, previewResume);     // check
router.put('/template/:id', isAuth, changeTemplate);  // check
router.get('/pdf/:id', isAuth, generateResumePdf);  // check

// ===== Public =====
router.get('/u/:username', getPublicResume);   // for checking this need make new resume
                             
// ===== Analysis =====
router.get('/analysis/:id', isAuth, fetchAnalyze); // check
router.post('/analysis/ai/:id', isAuth, resumeAnalyze ); // check

// ===== AI Features ====
router.post('/ai/optimize/:id', isAuth, resumeCorrection ); // check
router.post('/ai/suggestions/:id', isAuth, resumeSuggestions);  // check

// ===== Dashboard =====
router.get('/dashboard/:id', isAuth, resumeDashboard);  // check 

export default router;                                