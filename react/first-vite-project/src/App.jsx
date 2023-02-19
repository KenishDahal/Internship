import { useState } from "react";
import React, { Component } from "react";
import Sidebar from "./Assignment-2/dashboard/Sidebar/sidebar";
import Table from "./Assignment-2/pages/table";
// import { list } from "./Assignment-1/details/ticketList";
import { tableName } from "./Assignment-1/pages/table";
import "./App.scss";
import "./icons/style.scss";
import "./icons/variables.scss";
import Login from "./Assignment-2/dashboard/Login/login";
import Signup from "./Assignment-2/dashboard/Signup/signup";
import MainBox from "./Assignment-1/details/Hover/MainBox";
import MainDashboard from "./Assignment-2/dashboard/MainDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
