import { useState } from "react";
import React, { Component } from "react";
import Sidebar from "./Assignment-5/dashboard/Sidebar/sidebar";
import Table from "./Assignment-5/pages/table.jsx";
// import { list } from "./Assignment-1/details/ticketList";
import { tableName } from "./Assignment-5/pages/table";
import "./App.scss";
import "./icons/style.scss";
import "./icons/variables.scss";
import Login from "./Assignment-5/dashboard/Login/login";
import Signup from "./Assignment-5/dashboard/Signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBox from "./Assignment-4/details/Hover/MainBox";
import Overview from "./Assignment-6/pages/Overview/overview";

function App() {
  return (
    <div className="App">
      {/* <Sidebar/>
      <Table/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/main" element={<Sidebar />}>
            <Route index element={<Table tableName={tableName} />} />
            <Route
              path="/main/table"
              element={<Table tableName={tableName} />}
            />
            <Route path="/main/overview" element={<Overview/>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
