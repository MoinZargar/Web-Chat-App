import React from 'react'
import Message from './Message.jsx'


function Messages({recieverId , conversation}) {
  
  
  return (
	<div className='px-4 flex-1 overflow-auto'>
    {conversation.map((message, index) => ( 
		
		  <Message key={index} message={message} recieverId={recieverId}/>
		
        
	))}
     </div>
  )
}

export default Messages