import { createContext, useState } from "react";
import React from "react";
import DetailRow from "../details/ticketList";
import "./table.scss";
import logo from "../assets/man.png";
import Header from "../details/Header/header";

export const tableName = [
  "Ticket details",
  "Customer name",
  "Date",
  "Priority",
  ""
];

export const list = [
  {
    id: 0,
    Ticketdetails: "Contact Email not Linked",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Tom Cruise",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  },
  {
    id: 1,
    Ticketdetails: "Adding Images to Featured Posts",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Matt Damon",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "yellow",
    buttonSituation: "LOW",
    src: logo,
  },
  {
    id: 2,
    Ticketdetails: "When will I be charged this month?",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Robert Downey",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  },
  {
    id: 3,
    Ticketdetails: "Payment not going through",
    TicketdetailsUpdate: "Updated 2 day ago",
    Customername: "Christian Bale",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "green",
    buttonSituation: "NORMAL",
    src: logo,
  },
  {
    id: 4,
    Ticketdetails: "Unable to add replies",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Henry Cavil",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  },
  {
    id: 5,
    Ticketdetails: "Downtime since last week",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Chris Evans",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "green",
    buttonSituation: "NORMAL",
    src: logo,
  },
  {
    id: 6,
    Ticketdetails: "Referral Bonus",
    TicketdetailsUpdate: "Updated 4 day ago",
    Customername: "Sam Smith",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  },
  {
    id: 7,
    Ticketdetails: "How do I change my password?",
    TicketdetailsUpdate: "Updated 6 day ago",
    Customername: "Steve Rogers",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "green",
    buttonSituation: "NORMAL",
    src: logo,
  },
];


// const Context = createContext("");
export const SearchContext = createContext("");

function Table() {

  let [usersDetail, setUsersDetail] = useState(list);

  let [show, setShow] = useState("");

  let [display, setDisplay] = useState(false);

  let [priority, setPriority] = useState("all");

  function showFilterChange() {
    setDisplay(!display);
  }

  function showFilterButton(e) {
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
                 style={{ paddingLeft: "32px" }} key={index}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__info__main--body">

            {/* <DetailRow
              usersDetail={usersDetail}
              setUsersDetail={setUsersDetail}
              priority={priority}
              show ={show}
            /> */}
        <SearchContext.Provider value={show}>
          <DetailRow
              usersDetail={usersDetail}
              setUsersDetail={setUsersDetail}
              priority={priority}
            />
          </SearchContext.Provider>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
