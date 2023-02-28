import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  let showName = [];
  const navigate = useNavigate();

  function displaySearch() {
    setSearch(!search);
    console.log(search);
  }

  let ses = [sessionStorage.getItem("store")];

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

  const logout = (event) => {
    event.preventDefault();
    console.log("logout")
    sessionStorage.clear();
    navigate("/login")
  };

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
          <div className="top__header__rightSide--icon--notification">
            <i className="icon-notification" onClick={openNotification} />
            <div className="top__header__rightSide--icon--mark"></div>
          </div>
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
        <div className="top__header__rightSide--name">
        {ses.filter((item) => {
            for (let i = 0; i < item.length; i++) {
              if (item[i] === "@") {
                break;
              } else {
                showName.push(item[i].toUpperCase());
              }
            }
          })}
          <>Hi, {showName}</>
        </div>
        {/* <Link to="/signup" className="button"> */}
          <button onClick={logout} style={{ height: "30px", width: "65px", background: "skyblue" }}>
            Logout
          </button>
        {/* </Link> */}
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
              <div>HELLO {showName}</div>
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
