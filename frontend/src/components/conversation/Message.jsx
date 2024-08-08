import React from 'react'

function Message({message, recieverId}) {
  const fromMe = message.senderId !== recieverId? true : false
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  return (
    <div className={`chat ${chatClassName}`}>
			
			<div className={`chat-bubble text-white bg-blue-500 pb-2 mr-4`}>{message.content}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center mr-4'>5:30</div>
		</div>
  )
}

export default Message