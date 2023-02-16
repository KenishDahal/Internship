import { useState } from "react";
import React from "react";
import Button from "./Button/button";
import logo from "../assets/man.png";

export const tableName = [
  "Ticket details",
  "Customer name",
  "Date",
  "Priority",
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
    Ticketdetails: "bbbbbbb Email not Linked",
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
    Ticketdetails: "Contact Email not Linked",
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
    Ticketdetails: "Contact Email not Linked",
    TicketdetailsUpdate: "Updated 1 day ago",
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
    Ticketdetails: "Contact Email not Linked",
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
    Ticketdetails: "Contact Email not Linked",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Chris Evans",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  },
  {
    id: 6,
    Ticketdetails: "Contact Email not Linked",
    TicketdetailsUpdate: "Updated 1 day ago",
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
    Ticketdetails: "Contact Email not Linked",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Steve Rogers",
    CustomernameDate: "on 24.05.2019",
    Date: "May 26, 2019",
    DateClock: "6:30 PM",
    buttonClassName: "red",
    buttonSituation: "HIGH",
    src: logo,
  }
];

const Detail = ({ Ticketdetails, TicketdetailsUpdate, src, imageDisplay }) => {
  return (
    <td>
      <div className="table__info__main--body--tr__td">
        <figure className={`${imageDisplay}`}>
          <img src={src}></img>
        </figure>
        <div>
          <div className="icon">{Ticketdetails}</div>
          <div className="link_items">{TicketdetailsUpdate}</div>
        </div>
      </div>
    </td>
  );
};

function DetailRow() {

  let [deleteInfo, setdeleteInfo] = useState(list);
  const deleteInformation = (id) => {
    // console.log(id)
    // // console.log("clicked");
    // const copy = [...deleteInfo]
    // copy.splice(id, 1);
    // // console.log(rr);
    // setdeleteInfo(copy);
    setdeleteInfo(current => 
            current.filter(ticket => {
                return ticket.id !== id;
            })    
        )

  };

  return (
    <>
      {deleteInfo.map((item, index) => (
        <tr className="table__info__main--body--tr" key={index}>
          <Detail
            Ticketdetails={item.Ticketdetails}
            TicketdetailsUpdate={item.TicketdetailsUpdate}
            src={item.src}
          />
          <Detail
            Ticketdetails={item.Customername}
            TicketdetailsUpdate={item.CustomernameDate}
            imageDisplay="d-none"
          />
          <Detail
            Ticketdetails={item.Date}
            TicketdetailsUpdate={item.DateClock}
            imageDisplay="d-none"
          />
          <Button
            text={item.buttonSituation}
            className={item.buttonClassName}
          />
          <td>
           <button onClick={() => deleteInformation(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default DetailRow;
