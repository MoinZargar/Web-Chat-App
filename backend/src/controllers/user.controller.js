import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCurrentUser = asyncHandler(async(req,res)=>{
    const user = req.user
    if(!user){
        throw new apiError(500,"Something went wrong while processing your request")
    }
    res.status(200)
       .json(
          new apiResponse(200, user, "Logged in user details")
       )
})

const getAllUsers = asyncHandler(async(req,res)=>{
    const loggedInUserId = req.user?._id
    const allUsers = await User.find(
        {
            _id: { $ne:loggedInUserId }
        }
    ).select("-password -refreshToken")
    
    if(!allUsers){
        throw new apiError(500,"No user to display")
    }

    res.status(200)
    .json(
        new apiResponse(200, allUsers, "All registered users fetched")
    )
})
export{
    getCurrentUser,
    getAllUsers,
}