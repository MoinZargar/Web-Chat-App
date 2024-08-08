import React from "react";
import SearchInput from "./SearchInput.jsx";
import Contacts from "./Contacts.jsx";
import LogoutButton from "./LogoutButton.jsx";

function SideBar({contacts , selectContact}) {
  
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 h-full border-r border-slate-500 p-4 flex flex-col bg-customGreen overflow-auto">
      <SearchInput />
      <div className="divider px-3"></div>
      <Contacts contacts={contacts} selectContact={selectContact}/>
      <LogoutButton />
    </div>
  );
}

export default SideBar;
