import { useEffect, useState } from "react";
import React from "react";
import Header from "../../details/Header/header.jsx";
import "./overview.scss";

function Overview() {
  return (
    <>
      <div className="overview">
        <Header text="Overview" />
        <div className="overview__layer">
          <div className="overview__layer__box">
            <h2>Unresolved</h2>
            <span>60</span>
          </div>
          <div className="overview__layer__box">
            <h2>Unresolved</h2>
            <span>60</span>
          </div>
          <div className="overview__layer__box">
            <h2>Unresolved</h2>
            <span>60</span>
          </div>
          <div className="overview__layer__box">
            <h2>Unresolved</h2>
            <span>60</span>
          </div>
        </div>
        <div className="overview__lowerLayer"></div>
      </div>
    </>
  );
}

export default Overview;
