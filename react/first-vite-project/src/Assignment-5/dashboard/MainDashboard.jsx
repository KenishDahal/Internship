import React, { Component } from "react";
import Sidebar from "./Sidebar/sidebar.jsx";
import Table, { tableName } from "../pages/table";
import useLogin from "./Login/useLogin.js";

function MainDashboard() {
  let {loggedInUser} = useLogin();
  return (
    <>
 
  <Sidebar />
  <Table tableName={tableName} />
  
    </>
  );
}

export default MainDashboard;
