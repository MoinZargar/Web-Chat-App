import { Router } from "express";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { registerValidationRules,loginValidationRules } from "../middlewares/validation.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";


const router =Router()

router.route("/register").post(registerValidationRules,registerUser)
router.route("/login").post(loginValidationRules,loginUser)


//secured routes
router.route("/logout").post(verifyJwt,logoutUser)
router.route("/info").get(verifyJwt,getCurrentUser)

export default router