import { useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import logo from "../../assets/man.png";
import "./header.scss";
import { list } from "../../pages/table";

function Header({ show, setShow }) {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);

  return (
    <div className="top__header">
      <div className="top__header--name">Tickets</div>
      <div className="top__header__rightSide">
        <div className="top__header__rightSide--icon">
          <AiOutlineSearch />
          <i className="icon-notification" />
        </div>
        <div className="top__header__rightSide--line"></div>
        <div className="top__header__rightSide--name">Jones Ferdinand</div>

        <div>
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
