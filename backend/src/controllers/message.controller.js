import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

const sendMessage = asyncHandler(async(req,res)=>{
    const { message } = req.body
    const senderId = req.user?._id
    const recieverId = new mongoose.Types.ObjectId(req.params.id)
   

    
    
    if(!message) throw new apiError(400, 'Message is required')
    if(!recieverId) throw new apiError(400, 'Reciever ID is required')

    //check for reciever in the database

    const reciever = await User.findById(recieverId)
    if(!reciever) throw new apiError(400, 'Reciever does not exist')

    // check if conversation already exists

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    })
    
    // if conversation does not exist, it means that they are sending a message for the first time

    if(!conversation){
        await Conversation.create({
            participants: [senderId, recieverId],
    
        })
    }

    //if conversation exists, create a new message and add it to the conversation

    const newMessage = await Message.create({
        senderId : senderId,
        recieverId: recieverId,
        content : message,
    })
    
    if(!newMessage) throw new apiError(500, 'Something went wrong while sending message')
        
    // add the message to the conversation
    conversation.messages.push(newMessage._id)

    await conversation.save({validatebeforeSave:false})   

    return res.status(200).
    json(new apiResponse(200, newMessage ,'Message sent successfully'))
})

const getConversation = asyncHandler(async(req,res)=>{
    const senderId = req.user?._id
    const recieverId = new mongoose.Types.ObjectId(req.params.id)

    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    })

    if(!conversation) throw new apiError(404, 'No conversation found')
    
    const allMessages = await conversation.populate('messages')

    if(!allMessages) throw new apiError(404, 'No messages found')
    

    return res.status(200).
    json(new apiResponse(200,allMessages.messages, 'Messages fetched successfully'))
})



export{
    sendMessage,
    getConversation
}