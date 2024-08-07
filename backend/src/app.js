import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import multer from "multer"
import dotenv from "dotenv";
const app = express();

const upload = multer();

dotenv.config({
    path: '.env'
})

const corsOptions = {
    origin: process.env.CORS_ORIGIN, 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true 
};
app.use(cors(corsOptions));
app.use(express.json({limit:"16kb"}));   
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public")); 
app.use(cookieParser());

// Middleware to handle form-data (multipart)
app.use(upload.none()); 

//import routes

import authRouter from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)


// Error handling middleware 
app.use(errorHandler);

export default app;