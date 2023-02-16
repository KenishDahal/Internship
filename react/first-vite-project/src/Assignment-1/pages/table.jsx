import { useState } from "react";
import React from "react";
import DetailRow from "../details/ticketList";
import "./table.scss";
import logo from "../assets/man.png";
import Header from "../details/Header/header";

function Table({ tableName }) {
  return (
    <div className="table">
      <Header />

      {/* Table starts here */}
      <div className="table__info">
        <div className="table__info__header">
          <div className="table__info__header--leftSide">All tickets</div>
          <div className="table__info__header__rightSide">
            <div className="table__info__header__rightSide--sort">
              <i className="icon-sort" />
              <div>Sort</div>
            </div>
            <div className="table__info__header__rightSide--filter">
              <i className="icon-filter" />
              <div>Filter</div>
            </div>
          </div>
        </div>

        <table className="table__info__main">
          <thead className="table__info__main--head">
            <tr>
              {Object.values(tableName).map((value, index) => (
                <th style={{ paddingLeft: "32px" }} key={index}>
                  {value}
                </th>
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
