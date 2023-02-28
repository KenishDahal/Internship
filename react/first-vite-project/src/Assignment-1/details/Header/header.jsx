import { useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import logo from "../../assets/man.png";
import "./header.scss";

function Header({ show, setShow }) {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);

  return (
    <div className="top__header">
      <div className="top__header--name">Tickets</div>
      <div className="top__header__rightSide">
        <div className="top__header__rightSide--icon">
          <AiOutlineSearch />
          <div className="top__header__rightSide--icon--notification"> 
          <i className="icon-notification" />
          <div className="top__header__rightSide--icon--mark"></div>
          </div>
        </div>
        <div className="top__header__rightSide--line"></div>
        <div className="top__header__rightSide--names">Jones Ferdinand</div>

        <div>
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
