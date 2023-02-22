import { useState } from "react";
import React, { Component } from "react";
import Table from "../../Assignment-1/pages/table";
import { FaBeer, FaTicketAlt, FaLightbulb } from "react-icons/fa";
import { FcNoIdea } from "react-icons/fc";
import { BsFillPieChartFill } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { MdEmojiPeople } from "react-icons/md";
import "./sidebar.scss";
import logo from "../assets/D.png";
import { Link } from "react-router-dom";
// import Form from './session-1/class/form'

function Sidebar() {
  const webItems = [
    {
      name: "Overview",
      icon: " icon-pie_chart",
    },
    {
      name: "Tickets",
      icon: "icon-ticket",
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
      name: "Settings",
      icon: "icon-settings",
    },
    {
      name: "Subscription",
      icon: "icon-badge",
    },
  ];

  return (
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
            <div className="sidebar__menu__tab--link">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
