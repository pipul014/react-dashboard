import React from "react";
import {LayoutGrid, Home, User, Settings, LogOut } from "lucide-react"; 

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid />, name: "Dashboard" },
    { icon: <Home />, name: "Home" },
    { icon: <User />, name: "Profile" },
    { icon: <Settings />, name: "Settings" },
    { icon: <LogOut />, name: "Logout" },
  ];

  return (
    <div className="w-40 bg-gray-800 text-white h-screen flex flex-col ">
      <ul className="space-y-1 mt-10">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <div className="flex items-center p-2 cursor-pointer  hover:bg-teal-600 rounded  ">
              <div className="text-xl ">{item.icon}</div>
              <span className="absolute left-20 opacity-0  group-hover:opacity-100 transition-opacity duration-200 text-sm  ">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
