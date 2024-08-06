import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { getAllUsers, getCurrentUser } from "../controllers/user.controller.js";


const router =Router()

//secured routes
router.route("/current").get(verifyJwt,getCurrentUser)
router.route("/all").get(verifyJwt,getAllUsers)

export default router