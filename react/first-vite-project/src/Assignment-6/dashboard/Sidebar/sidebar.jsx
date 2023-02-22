import { useState } from "react";
import React, { Component } from "react";
import Table from "../../../Assignment-1/pages/table";
import "./sidebar.scss";
import logo from "../../../../public/assets/D.png";
import { Link, Outlet } from "react-router-dom";
import Header from "../../details/Header/header";

function Sidebar() {
  const webItems = [
    {
      name: "Overview",
      icon: " icon-pie_chart",
      path: "/main/overview"
    },
    {
      name: "Tickets",
      icon: "icon-ticket",
      path: "/main/table"
    },
    {
      name: "Ideas",
      icon: "icon-bulb",
    },
    {
      name: "Contacts",
      icon: "icon-group",
    },
    {
      name: "Agents",
      icon: " icon-profile",
    },
    {
      name: "Articles",
      icon: "icon-book",
    },
    {
      name: "Setting",
      icon: "icon-settings",
      path: "/login",
    },
    {
      name: "Subscription",
      icon: "icon-badge",
    },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <div className="sidebar__top--image">
            <img src={logo}></img>
          </div>
          <div className="sidebar__top--title">Dashboard Kit</div>
        </div>
        <div className="sidebar__menu">
          {webItems.map((item, index) => (
            <div className="sidebar__menu__tab" key={index}>
              <div className="sidebar__menu__tab--icon">
                <i className={item.icon} />
              </div>
              <Link to={item.path} className="sidebar__menu__tab--link">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
