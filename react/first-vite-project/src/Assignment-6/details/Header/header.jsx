import { useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import logo from "../../../../public/assets/man.png";
import "./header.scss";
import Modal from "react-modal";
// import { list } from "../../pages/table";
import "../Button/button.scss";
import { Link } from "react-router-dom";
import useLogin from "../../dashboard/Login/useLogin";

function Header({ show, setShow, text }) {
  let [search, setSearch] = useState(false);

  let { usersLogin } = useLogin();

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
  };

  const closeNotification = () => {
    setNotificationIsOpen(false);
  };

  // const filterBySearch = (event) => {
  //   // Access input value
  //   let query = event.target.value;
  //   // Create copy of item list
  //   let updatedList = [...usersDetail];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item !== -1;
  //   });
  //   // Trigger render with updated values
  //   setUsersDetail(updatedList);
  // };
  // let [show, setShow] = useState('');

  return (
    <div className="top__header">
      <div className="top__header--name">{text}</div>
      <div className="top__header__rightSide">
        <div className="top__header__rightSide--icon">
          <input
            className={search ? "display" : "none"}
            onChange={(e) => setShow(e.target.value)}
          />
          <AiOutlineSearch onClick={displaySearch} />
          <i className="icon-notification" onClick={openNotification} />
          <Modal
            className="modal"
            ariaHideApp={false}
            isOpen={notificationIsOpen}
          >
            <div>You have new session today</div>
            <button className="modal--button" onClick={closeNotification}>
              Close
            </button>
          </Modal>
        </div>

        <div className="top__header__rightSide--line"></div>
        <div className="top__header__rightSide--name">Jones Ferdinand</div>
        <Link to="/signup" className="button">
          <button style={{ height: "70px", width: "70px", background: "blue" }}>
            Signup
          </button>
        </Link>
        <div>
          <img src={logo} onClick={openModal}></img>
          <Modal
            className="modal"
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <form className="modal--form">
              <img src={logo}></img>
              <div>Tom Cruise</div>
            </form>
            <button className="modal--button" onClick={closeModal}>
              close
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
