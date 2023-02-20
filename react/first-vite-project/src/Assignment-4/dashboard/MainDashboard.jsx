import React, { Component } from "react";
import Sidebar from "./Sidebar/sidebar.jsx";
import Table, { tableName } from "../pages/table";

function MainDashboard() {
  return (
    <>
      <Sidebar />
      <Table tableName={tableName} />
    </>
  );
}

export default MainDashboard;
