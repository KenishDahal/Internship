import { useState } from "react";
import React from "react";
import Button from "./Button/button";
import logo from "../assets/man.png";

const Detail = ({ Ticketdetails, TicketdetailsUpdate, src, imageDisplay }) => {
  return (
    <td>
      <div className="table__info__main--body--tr__td">
        <figure className={`${imageDisplay}`}>
          <img src={src}></img>
        </figure>
        <div className="table__info__main--body--tr__td--ticketDetails">
          <div className="table__info__main--body--tr__td--ticketDetails--upper">{Ticketdetails}</div>
          <div className="table__info__main--body--tr__td--ticketDetails--lower">{TicketdetailsUpdate}</div>
        </div>
      </div>
    </td>
  );
};

function DetailRow({usersDetail,setUsersDetail,show,setShow}) {


  return (
    <>
      {usersDetail && usersDetail.filter((item)=>{
         return  show.toLowerCase() === ''
         ? item : item.Customername.toLowerCase().includes(show)
 
       })
     .map((item, index) => (
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
          <td>
          <Button
            text={item.buttonSituation}
            className={item.buttonClassName}
          />
          </td>
          
          <td>
           <div className="table__info__main--body--tr__button" >
           <button>Delete</button>
           </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default DetailRow;
