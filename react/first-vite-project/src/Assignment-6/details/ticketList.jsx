import { useState } from "react";
import React from "react";
import Button from "./Button/button";
import useTickets from "./Tickets/useTickets";
import { Link } from "react-router-dom";

// gives details in ticket list
const Detail = ({
  Ticketdetails,
  TicketdetailsUpdate,
  src,
  imageDisplay,
  id,
}) => {
  return (
    <td>
      <div className="table__info__main--body--tr__td">
        <figure className={`${imageDisplay}`}>
          <Link to={`/main/table/${id}`}>
            <img src={src}></img>
          </Link>
        </figure>
        <div className="table__info__main--body--tr__td--ticketDetails">
          <div className="table__info__main--body--tr__td--ticketDetails--upper">
            {Ticketdetails}
          </div>
          <div className="table__info__main--body--tr__td--ticketDetails--lower">
            {TicketdetailsUpdate}
          </div>
        </div>
      </div>
    </td>
  );
};

// show ticketlist table
function DetailRow({
  usersDetail,
  setUsersDetail,
  show,
  priority,
  deleteTickets,
}) {
  return (
    <>
    {/* maps over ticket details(usersDetail)  */}
      {usersDetail &&
        usersDetail
          .filter((item) => {     /**filters name from search box */
            return show.toLowerCase() === ""
              ? item
              : item.Customername.toLowerCase().includes(show);
          })
          .filter((item) => {
            if (priority === "all") { /**filters button situation from priority */
              return true;
            } else {
              return item.buttonSituation === priority;
            }
          })
          .map((item, index) => (
            <tr className="table__info__main--body--tr" key={index}>
              <Detail
                Ticketdetails={item.Ticketdetails}
                TicketdetailsUpdate={item.TicketdetailsUpdate}
                src={item.src}
                id={item.id}
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
              <td>
                <Button
                  text={item.buttonSituation}
                  className={item.buttonClassName}
                />
              </td>

              <td>
                <div className="table__info__main--body--tr__button">
                  <button onClick={() => deleteTickets(item.nodename)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
    </>
  );
}

export default DetailRow;
