import express from 'express';
import { createInterview, deleteInterview, evaluateInterview, generateInterviewReport, generateQuestions, getInterview, getInterviewReport, getUserInterviews, submitAnswer, submitMcqAnswer } from '../controllers/interviewController.js';
import isAuth from '../middlewares/authMiddleware.js'; 
import { aiRateLimiter } from '../middlewares/rateLimiter.js';

const router = express.Router();

router.post('/create', isAuth, createInterview);

router.get('/get/:id', isAuth, getInterview); 

router.post('/generatequestion/:id', isAuth, aiRateLimiter , generateQuestions);

router.post('/submit-answer/:id', isAuth, submitAnswer);  

router.post('/evaluate/:id',  isAuth, aiRateLimiter , evaluateInterview);

router.get('/report/:id', isAuth,  getInterviewReport); 

router.post('/generate-report/:id', isAuth, aiRateLimiter , generateInterviewReport);                                    
        
router.delete('/delete/:id', isAuth, deleteInterview);  

router.get('/my-interviews', isAuth, getUserInterviews); 

router.post('/submit-answer/:id', isAuth , submitAnswer);

router.post('/submit-mcq-answer/:id', isAuth, submitMcqAnswer);  

export default router;                   

                                      