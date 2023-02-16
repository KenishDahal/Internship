import { useState } from "react";
import React from "react";
import DetailRow from "../details/ticketList";
import "./table.scss";
import "./table.css";
import logo from "../assets/man.png";
import Header from "../details/Header/header";

function Table({ tableName }) {
  return (
    <div className="table">
      <Header/>

      {/* Table starts here */}
      <div className="table__info">

        <div className="table__header">
          <div>All tickets</div>
          <div className="table__header__rightSide">
            <div>
              <i className="icon-sort"/>Sort    
            </div>
            <div>
            <i className="icon-filter"/>Filter
            </div>
          </div>
        </div>

        <table className="table__info__main">
          <thead className="table__info__main--head">
            <tr>
              {Object.values(tableName).map((value, index) => (
                <th key={index}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table__info__main--body">
            <DetailRow />
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Table;
