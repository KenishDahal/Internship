import { useState } from "react";
import React, { Component } from "react";
import Table from "../../../Assignment-1/pages/table";
import "./sidebar.scss";
import logo from "../../../../public/assets/D.png";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import Header from "../../details/Header/header";

function Sidebar() {
  let activeStyle = {
    backgroundColor: "hwb(1330 37% 61%)",
  };

  const webItems = [
    {
      name: "Overview",
      icon: " icon-pie_chart",
      path: "/main/overview",
    },
    {
      name: "Tickets",
      icon: "icon-ticket",
      path: "/main/table",
    },
    {
      name: "Ideas",
      icon: "icon-bulb",
      path: "/main/ideas",
    },
    {
      name: "Contacts",
      icon: "icon-group",
      path: "/main/contacts",
    },
    {
      name: "Agents",
      icon: " icon-profile",
      path: "/main/agents",
    },
    {
      name: "Articles",
      icon: "icon-book",
      path: "/main/articles",
    },
    {
      name: "Setting",
      icon: "icon-settings",
      path: "/login",
    },
    {
      name: "Subscription",
      icon: "icon-badge",
      path: "/main/subscription",
    },
  ];

  const session = sessionStorage.getItem("store")

  return (
    <>
    {
      session ?
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
            <NavLink
              to={item.path}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="sidebar__menu__tab"
              key={index}
            >
              <div className="sidebar__menu__tab--icon">
                <i className={item.icon} />
              </div>
              <div className="sidebar__menu__tab--link">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
      </>
        :
        <Navigate to="/login" replace={true} />
    }
    </>
  );
}

export default Sidebar;
