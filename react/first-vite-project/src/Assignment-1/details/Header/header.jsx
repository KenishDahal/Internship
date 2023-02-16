import { useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import logo from "../../assets/man.png";
import "./header.scss";
import Modal from "react-modal";
import { list } from "../ticketList";

function Header() {
  let [search, setSearch] = useState(false);

  function displaySearch() {
    setSearch(!search);
    console.log(search);
  }

  const [modalIsOpen, setIsOpen] = useState(false);
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const openNotification = () => {
    setNotificationIsOpen(true);
}

const closeNotification = () => {
    setNotificationIsOpen(false);
}

  return (
    <div className="table__header">
      <div className="table__header--name">Tickets</div>
      <div className="table__header__rightSide">
        <div className="table__header__rightSide--icon">
          <input className={search ? "display" : "none"} />
          <AiOutlineSearch onClick={displaySearch} />
          <i className="icon-notification" onClick={openNotification} />
          <Modal className="modal" ariaHideApp={false} isOpen={notificationIsOpen}>
            <div>You have new session today</div>
             <button className="modal--button" onClick={closeNotification}>Close</button>
          </Modal>
        </div>
        <div className="table__header__rightSide--line"></div>
        <div className="table__header__rightSide--name">Jones Ferdinand</div>

        <div>
          <img src={logo} onClick={openModal}></img>
          <Modal className="modal" ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal}>
            <form className="modal--form"> 
            <img src={logo}></img>
            <div>Id:{list[0].id}</div>
            <div>{list[0].Ticketdetails}</div>
            <div>{list[0].Customername}</div>
            <div>{list[0].CustomernameDate}</div>
            </form>
            <button className="modal--button" onClick={closeModal}>close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
