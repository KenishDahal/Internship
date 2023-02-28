import { useEffect, useState } from "react";
import React from "react";
import "./table.scss";
import "./../../pages/addListForm/addListForm.scss";
import logo from "../../../../public/assets/man.png";
import Header from "../../details/Header/header";
import Modal from "react-modal";
import useTickets from "../../details/Tickets/useTickets";
import DetailRow from "../../details/ticketList";
import AddListForm from "../../pages/addListForm/addListForm";
import { Link } from "react-router-dom";

export const tableName = [
  "Ticket details",
  "Customer name",
  "Date",
  "Priority",
  "",
];

function Table() {
  
  let { usersDetail, setUsersDetail, getTickets, addTickets, deleteTickets } =
    useTickets();

  useEffect(() => {
    getTickets();
  }, []);

  let [addticketList, setAddTicketList] = useState({
    id: "",
    Ticketdetails: "",
    TicketdetailsUpdate: "",
    Customername: "",
    CustomernameDate: "",
    Date: "",
    DateClock: "",
    buttonClassName: "",
    buttonSituation: "",
    src: "",
  });

  function handleChange(e) {
    setAddTicketList((recentValue) => ({
      ...recentValue,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmitting(e) {
    e.preventDefault();
    console.log(addticketList);

    addTickets(addticketList);

    setAddTicketList({
      id: "",
      Ticketdetails: "",
      TicketdetailsUpdate: "",
      Customername: "",
      CustomernameDate: "",
      Date: "",
      DateClock: "",
      buttonClassName: "",
      buttonSituation: "",
      src: ""
    })

    console.log(usersDetail);
  }

  let [show, setShow] = useState("");

  let [display, setDisplay] = useState(false);

  let [priority, setPriority] = useState("all");

  const [addPageIsOpen, setAddPageIsOpen] = useState(false);

  const closeAddPage = () => {
    setAddPageIsOpen(false);
  };

  const openAddPage = () => {
    setAddPageIsOpen(true);
  };

  function showFilterChange() {
    setDisplay(!display);
  }

  function showFilterButton(e) {
    setPriority(e.target.value);
  }

  return (
    <div className="table">
      <Header show={show} setShow={setShow} text="Tickets" />

      {/* Table starts here */}
      <div className="table__info">
        <div className="table__info__header">
          <div className="table__info__header--leftSide">All tickets</div>
          <div className="table__info__header__rightSide">
            <div className="table__info__header__rightSide--sort">
              <button onClick={openAddPage}>Add Tickets</button>
              <Modal
                className="addModel"
                ariaHideApp={false}
                isOpen={addPageIsOpen}
              >
                <AddListForm
                  onSubmitting={onSubmitting}
                  addticketList={addticketList}
                  handleChange={handleChange}
                  closeAddPage={closeAddPage}
                />
              </Modal>
            </div>
            <div className="table__info__header__rightSide--sort">
              <i className="icon-sort" />
              <div>Sort</div>
            </div>
            <div className="table__info__header__rightSide--filter">
              <i className="icon-filter" onClick={showFilterChange} />
              <div>Filter</div>
            </div>
            {display ? (
              <div>
                <button value="HIGH" onClick={showFilterButton}>
                  High
                </button>
                <button value="LOW" onClick={showFilterButton}>
                  lOW
                </button>
                <button value="NORMAL" onClick={showFilterButton}>
                  Normal
                </button>
              </div>
            ) : (
              true
            )}
          </div>
        </div>

        <table className="table__info__main">
          <thead className="table__info__main--head">
            <tr className="table__info__main--head--tr">
              {Object.values(tableName).map((value, index) => (
                <th
                  className="table__info__main--head--tr--th"
                  style={{ paddingLeft: "32px" }}
                  key={index}
                >
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__info__main--body">
            <DetailRow
              usersDetail={usersDetail}
              setUsersDetail={setUsersDetail}
              show={show}
              priority={priority}
              deleteTickets={deleteTickets}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
