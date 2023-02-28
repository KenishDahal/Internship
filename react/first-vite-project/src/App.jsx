import { useState } from "react";
import React, { Component } from "react";
import Sidebar from "./Assignment-6/dashboard/Sidebar/sidebar";
// import { list } from "./Assignment-1/details/ticketList";
import Table from "./Assignment-6/dashboard/Ticket/table";
import "./App.scss";
import "./icons/style.scss";
import "./icons/variables.scss";
import Login from "./Assignment-6/dashboard/Login/login";
import Signup from "./Assignment-6/dashboard/Signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBox from "./Assignment-4/details/Hover/MainBox";
import Overview from "./Assignment-6/dashboard/Overview/overview";
import SingleTicket from "./Assignment-6/details/Tickets/SingleTicket/singleTicket";
import NotFound from "./Assignment-6/pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <Sidebar/>
      <Table/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/main" element={<Sidebar />}>
            <Route index element={<Table  />} />
            <Route path="/main/table">
              <Route index element={<Table />} />
              <Route path=":id" element={<SingleTicket />} />
            </Route>
            <Route path="/main/overview" element={<Overview />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
