import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import multer from "multer"

const app = express();

const upload = multer();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

app.use(express.json({limit:"16kb"}));   
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public")); 
app.use(cookieParser());
// Middleware to handle form-data (multipart)
app.use(upload.none()); 

//import routes
import userRouter from "./routes/user.route.js"

app.use("/api/v1/user",userRouter)

// Error handling middleware 
app.use(errorHandler);

export default app;