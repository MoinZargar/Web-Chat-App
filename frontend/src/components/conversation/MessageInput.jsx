import React from "react";
import { BsSend } from "react-icons/bs";
import getMessageService from "../../services/messages";
import { useState } from "react";

function MessageInput({recieverId}) {
  
  const [message, setMessage] = useState("");

  const SendMessage=async(e)=>{
    e.preventDefault();
    const response=await getMessageService.sendMessage({recieverId,message});
    
    setMessage("");
  }

  return (
    <form onSubmit={SendMessage} className="px-4 my-3 relative">
    <div className="w-full relative">
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-400 border-gray-600 text-white"
        placeholder="Send a message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type="submit"
        className="bg-customGreen absolute inset-y-0 right-0 flex items-center px-5 "
      >
        <BsSend />
      </button>
    </div>
  </form>
  );
}

export default MessageInput;
