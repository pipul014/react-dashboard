import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Layout from "./layouts/Layout";


const App = () => {
  return (
    <Router>
      <div className="flex flex-1">
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/logout" element={<Layout><Logout /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

