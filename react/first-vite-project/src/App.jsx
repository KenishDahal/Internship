import { useState } from "react";
import React, { Component } from "react";
import Sidebar from "./Assignment-1/dashboard/sidebar";
import Table from "./Assignment-1/pages/table";
// import { list } from "./Assignment-1/details/ticketList";
import { tableName } from "./Assignment-1/details/ticketList";
import "./App.scss";
import "./icons/style.scss";
import "./icons/variables.scss";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar />
      <Table tableName={tableName} />
    </div>
  );
}

export default App;
