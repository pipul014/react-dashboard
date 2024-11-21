import React from "react";
import Headers from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen flex-col md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className=" flex flex-col flex-1">
        <div>
          <Headers />
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-teal-50">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
