import jwt  from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";

export const verifyJwt =asyncHandler(async(req,_,next)=>{

    const token=req.cookies?.accessToken || req.headers["authorization"]?.replace("Bearer ","");   
    if(!token){
        throw new apiError(403,"Unauthorized request")
    } 
    //returns the payload of the token if it is valid or throws an error if it is invalid
    const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    if(!user){
        throw new apiError(401,"Invalid Access Token")
    }   
    req.user=user;
    next()
})