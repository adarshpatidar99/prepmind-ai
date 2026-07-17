import { Register, login, logout, getCurrentUser, completeProfile} from '../controllers/authController.js'
import express from 'express';
import isAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', Register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/get', isAuth , getCurrentUser);
router.post('/profile', isAuth ,completeProfile);

export default router;


                                   