import express from 'express';
import { deleteInterview, evaluateInterview, generateQuestions, getInterviewReport, getUserInterviews, startInterview, submitAnswer } from '../controllers/interviewController.js';
import isAuth from '../middlewares/authMiddleware.js'; 

const router = express.Router();

router.post('/start', isAuth, startInterview); // check
router.post('/generatequestion/:id', isAuth, generateQuestions); // check
router.post('/submit-answer/:id', isAuth, submitAnswer); //check
router.post('/evaluate/:id', isAuth, evaluateInterview); // check
router.get('/report/:id', isAuth,  getInterviewReport);  // check
router.delete('/delete/:id', isAuth, deleteInterview);  // check
router.get('/my-interviews', isAuth, getUserInterviews); // check

export default router;    

                                      