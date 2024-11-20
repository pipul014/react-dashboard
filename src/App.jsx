import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Dashboard />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
