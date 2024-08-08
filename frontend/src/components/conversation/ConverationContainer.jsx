import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useState } from "react";
import getUsersService from "../../services/users.js";
import getMessageService from "../../services/messages";

function ConverationContainer({selectedContact}) {

  const [ChatSelected, setChatSelected] = useState(false);
  const [conversation, setConversation] = useState([]);

  const getConversation = async () => {
	  try {
    const response = await getMessageService.getConversation(selectedContact._id);
		if(response.statusCode === 200){
		  setConversation(response.data);
		}
	  } catch (error) {
		console.log(error.message);
	  }
  }

  useEffect(() => { 
    
    if(Object.keys(selectedContact).length > 0){
      setChatSelected(true);
      getConversation();
    }
  }, [selectedContact,conversation]);
    
  return (
    <div className="flex-grow flex flex-col pr-8 bg-customGray">
     {!ChatSelected ? <NoChatSelected /> : 
      <>
        
      <div className="bg-customGreen px-4 py-2 mb-2">
        <span className="label-text text-white font-bold">To : </span>{" "}
        <span className="text-white font-bold">{selectedContact.username}</span>
      </div>

      <Messages recieverId={selectedContact._id} conversation={conversation}/>
      <MessageInput recieverId={selectedContact._id}/>
    </>
     }
    </div>
  );
}

const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full bg-gray-900'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Moin ❄</p>
				<p>Select a chat to start messaging</p>
				
			</div>
		</div>
	);
};

export default ConverationContainer;
