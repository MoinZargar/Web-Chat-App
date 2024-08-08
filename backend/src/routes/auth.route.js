import { Router } from "express";
import {loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/auth.controller.js";
import { registerValidationRules,loginValidationRules } from "../middlewares/validation.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";


const router =Router()

router.route("/register").post(registerValidationRules,registerUser)
router.route("/login").post(loginValidationRules,loginUser)


//secured route
router.route("/logout").get(verifyJwt,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router