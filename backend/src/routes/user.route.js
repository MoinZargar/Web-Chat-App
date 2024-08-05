import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { registerValidationRules,loginValidationRules } from "../middlewares/validation.middleware.js";


const router =Router()

router.route("/register").post(registerValidationRules,registerUser)


export default router