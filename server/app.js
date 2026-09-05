// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
// import express from "express";
// import dbConnection from "./config/db.js";
// import userRouter from './routes/authRoutes.js'
// import cors from 'cors'
// import fileUpload from "express-fileupload";
// import cookieParser from "cookie-parser";
// import resumeRouter from './routes/resumeRoutes.js';
// import interviewRouter from './routes/interviewRoutes.js';              
// import coverLetterRouter from "./routes/coverLetterRoutes.js";
// import paymentRouter from "./routes/paymentRoutes.js"; 
// import careerAdvisorRoute from "./routes/careerAdvisorRoutes.js";
// import industryRoutes from "./routes/industryInsightsRoutes.js";

// const app = express();

// app.use(express.json({
//      verify: (req, res, buf) => {
//           if(req.originalUrl.includes("/api/v1/payment/webhook")) {
//               req.rawBody = buf;   
//           }                       
//      }
// }));

// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));
                                      
// app.use(
//   cors({           
//     origin: [process.env.FRONTEND_URL],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//   })
// );  

// app.use('/api/v1/user', userRouter);
// app.use('/api/v1/resume', resumeRouter);
// app.use('/api/v1/interview', interviewRouter);   
// app.use('/api/v1/industry', industryRoutes);
// app.use('/api/v1/coverletter', coverLetterRouter);
// app.use('/api/v1/payment', paymentRouter);
// app.use("/api/v1/career-advisor", careerAdvisorRoute)   

// dbConnection();

// export default app;






import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import express from "express";
import dbConnection from "./config/db.js";

import userRouter from "./routes/authRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

import resumeRouter from "./routes/resumeRoutes.js";
import interviewRouter from "./routes/interviewRoutes.js";
import coverLetterRouter from "./routes/coverLetterRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
import careerAdvisorRoute from "./routes/careerAdvisorRoutes.js";
import industryRoutes from "./routes/industryInsightsRoutes.js";
import requestLogger from "./middlewares/requestLogger.js";
import helmet from 'helmet';

import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();


// =====================================================
// BODY PARSERS                                         
// =====================================================

// JSON request body limit
app.use(
  express.json({
    limit: "1mb",

    // Keep raw body for Razorpay webhook
    verify: (req, res, buf) => {
      if (
        req.originalUrl.includes(
          "/api/v1/payment/webhook"
        )
      ) {
        req.rawBody = buf;
      }
    },
  })
);


// URL encoded request body limit
app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
);


// =====================================================
// COOKIES
// =====================================================

app.use(cookieParser());

app.use(requestLogger);

app.use(helmet());

                                      
// =====================================================
// FILE UPLOAD
// =====================================================

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);


// =====================================================
// CORS
// =====================================================

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
    ],

    credentials: true,
  })
);


// =====================================================
// ROUTES
// =====================================================

app.use(
  "/api/v1/user",
  userRouter
);

app.use(
  "/api/v1/resume",
  resumeRouter
);

app.use(
  "/api/v1/interview",
  interviewRouter
);

app.use(
  "/api/v1/industry",
  industryRoutes
);

app.use(
  "/api/v1/coverletter",
  coverLetterRouter
);

app.use(
  "/api/v1/payment",
  paymentRouter
);

app.use(
  "/api/v1/career-advisor",
  careerAdvisorRoute
);

app.use(errorMiddleware);

// =====================================================
// DATABASE
// =====================================================

dbConnection();


export default app;