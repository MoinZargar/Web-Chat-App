import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { sendMessage,getConversation } from "../controllers/message.controller.js";


const router = Router()

//secured routes

router.route("/send/:id").post(verifyJwt,sendMessage)

router.route("/conversations/:id").get(verifyJwt,getConversation)
export default router