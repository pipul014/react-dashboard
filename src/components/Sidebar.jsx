import React from "react";
import { Link } from "react-router-dom"; 
import { LayoutGrid, Home, User, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid />, name: "Dashboard", link: "/dashboard" },
    { icon: <Home />, name: "Home", link: "/" },
    { icon: <User />, name: "Profile", link: "/profile" },
    { icon: <Settings />, name: "Settings", link: "/settings" },
    { icon: <LogOut />, name: "Logout", link: "/logout" },
  ];

  return (
    <div className="w-40 bg-gray-800 text-white h-screen flex flex-col">
      <ul className="space-y-1 mt-10">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link to={item.link} className="flex items-center p-2 cursor-pointer hover:bg-teal-600 rounded">
              <div className="text-xl">{item.icon}</div>
              <span className="absolute left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
