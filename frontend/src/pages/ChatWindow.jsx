import React, { useEffect, useState } from 'react'
import SideBar from '../components/sidebar/SideBar'
import ConversationContainer from '../components/conversation/ConverationContainer'
import getUsersService from '../services/users.js'

function ChatWindow() {
  const [contacts,setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState([]);

  const getContacts = async () => {
      try {
        const response = await getUsersService.getAllUsers();
        if(response.statusCode === 200){
          setContacts((response.data).map((contact)=>contact));
        }
      } catch (error) {
        console.log(error.message);
      }
  }
 
  const getSelectedContact = async (contact) => {
    setSelectedContact(contact);
  } 

  useEffect(() => {
    getContacts();  
  }, [])

  
  return (
   
    <>
     <div className='flex h-screen w-screen overflow-hidden'>
			<SideBar contacts={contacts} selectContact={getSelectedContact}/>
			<ConversationContainer selectedContact={selectedContact}/>
		</div>
    </>
    
  )
}

export default ChatWindow