import { useEffect, useState } from "react";
import React from "react";
import DetailRow from "../details/ticketList";
import "./table.scss";
import "./addListForm/addListForm.scss";
import logo from "../../../public/assets/man.png";
import Header from "../details/Header/header";
import Modal from "react-modal";
import useTickets from "../details/Tickets/useTickets";

export const tableName = [
  "Ticket details",
  "Customer name",
  "Date",
  "Priority",
  "",
];

// export const list = [
//   {
//     id: 0,
//     Ticketdetails: "Contact Email not Linked",
//     TicketdetailsUpdate: "Updated 1 day ago",
//     Customername: "Tom Cruise",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "red",
//     buttonSituation: "HIGH",
//     src: logo,
//   },
//   {
//     id: 1,
//     Ticketdetails: "Adding Images to Featured Posts",
//     TicketdetailsUpdate: "Updated 1 day ago",
//     Customername: "Matt Damon",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "yellow",
//     buttonSituation: "LOW",
//     src: logo,
//   },
//   {
//     id: 2,
//     Ticketdetails: "When will I be charged this month?",
//     TicketdetailsUpdate: "Updated 1 day ago",
//     Customername: "Robert Downey",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "red",
//     buttonSituation: "HIGH",
//     src: logo,
//   },
//   {
//     id: 3,
//     Ticketdetails: "Payment not going through",
//     TicketdetailsUpdate: "Updated 2 day ago",
//     Customername: "Christian Bale",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "green",
//     buttonSituation: "NORMAL",
//     src: logo,
//   },
//   {
//     id: 4,
//     Ticketdetails: "Unable to add replies",
//     TicketdetailsUpdate: "Updated 1 day ago",
//     Customername: "Henry Cavil",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "red",
//     buttonSituation: "HIGH",
//     src: logo,
//   },
//   {
//     id: 5,
//     Ticketdetails: "Downtime since last week",
//     TicketdetailsUpdate: "Updated 1 day ago",
//     Customername: "Chris Evans",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "green",
//     buttonSituation: "Normal",
//     src: logo,
//   },
//   {
//     id: 6,
//     Ticketdetails: "Referral Bonus",
//     TicketdetailsUpdate: "Updated 4 day ago",
//     Customername: "Sam Smith",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "red",
//     buttonSituation: "HIGH",
//     src: logo,
//   },
//   {
//     id: 7,
//     Ticketdetails: "How do I change my password?",
//     TicketdetailsUpdate: "Updated 6 day ago",
//     Customername: "Steve Rogers",
//     CustomernameDate: "on 24.05.2019",
//     Date: "May 26, 2019",
//     DateClock: "6:30 PM",
//     buttonClassName: "green",
//     buttonSituation: "Normal",
//     src: logo,
//   },
// ];

function Table() {
  // let [usersDetail, setUsersDetail] = useState(list);
  let { usersDetail, setUsersDetail, getTickets, addTickets } = useTickets();

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
    // setCustomername("");
    addTickets(addticketList);

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
    // let vvv = e.target.value

    // setUsersDetail(current =>
    //   current.filter(ticket =>
    //        ticket.buttonSituation === vvv
    //   )    )

    setPriority(e.target.value);
  }

  return (
    <div className="table">
      <Header show={show} setShow={setShow} />

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
                <form className="addTicket__page" onSubmit={onSubmitting}>
                  <div className="addTicket__page--title">Add Tickets</div>

                  <div className="addTicket__page__mainArea">
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="Ticketdetails">Ticketdetails</label>
                      <input
                        value={addticketList.Ticketdetails}
                        name="Ticketdetails"
                        onChange={handleChange}
                        placeholder="Ticketdetails"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label>name</label>
                      <input
                        // value={Customername}
                        type="text"
                        placeholder="Customername"
                        name="Customername"
                        value={addticketList.Customername}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="email">TicketdetailsUpdate</label>
                      <input
                        name="TicketdetailsUpdate"
                        value={addticketList.TicketdetailsUpdate}
                        onChange={handleChange}
                        placeholder="TicketdetailsUpdate"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="CustomernameDate">CustomernameDate</label>
                      <input
                        name="CustomernameDate"
                        value={addticketList.CustomernameDate}
                        onChange={handleChange}
                        placeholder="CustomernameDate"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="Date">Date</label>
                      <input
                        name="Date"
                        value={addticketList.Date}
                        onChange={handleChange}
                        placeholder="Date"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="DateClock">DateClock</label>
                      <input
                        name="DateClock"
                        value={addticketList.DateClock}
                        onChange={handleChange}
                        placeholder="DateClock"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="buttonClassName">buttonClassName</label>
                      <input
                        name="buttonClassName"
                        value={addticketList.buttonClassName}
                        onChange={handleChange}
                        placeholder="buttonClassName"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="buttonSituation">buttonSituation</label>
                      <input
                        name="buttonSituation"
                        value={addticketList.buttonSituation}
                        onChange={handleChange}
                        placeholder="buttonSituation"
                      />
                    </div>
                    <div className="addTicket__page__mainArea__inputHandle">
                      <label htmlFor="src">src</label>
                      <input
                        name="src"
                        value={addticketList.src}
                        onChange={handleChange}
                        placeholder="src"
                      />
                    </div>
                    <button>Add</button>
                    <button className="modal--button" onClick={closeAddPage}>
                      Close
                    </button>
                  </div>
                </form>
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
                <th className="table__info__main--head--tr--th" style={{ paddingLeft: "32px" }} key={index}>
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
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
