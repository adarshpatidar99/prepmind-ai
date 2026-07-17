import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import dbConnection from "./config/db.js";
import userRouter from './routes/authRoutes.js'
import cors from 'cors'
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import resumeRouter from './routes/resumeRoutes.js';
import interviewRouter from './routes/interviewRoutes.js';
import industryRouter from './routes/industryRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
                                      
app.use(
  cors({           
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);  

app.use('/api/v1/user', userRouter);
app.use('/api/v1/resume', resumeRouter);
app.use('/api/v1/interview', interviewRouter);   
app.use('/api/v1/industry', industryRouter);

dbConnection();

export default app;
