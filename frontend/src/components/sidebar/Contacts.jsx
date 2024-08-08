import React from "react";

import Contact from "./Contact.jsx";

function Contacts({ contacts,selectContact}) {
  return (
    <>
      {contacts.map((contact, index) => (
        <div key={index} onClick={()=>selectContact(contact)} className="py-2 flex flex-col ">
        <Contact  contact={contact} />
        </div>
      ))}
   </>
  );
}

export default Contacts;
