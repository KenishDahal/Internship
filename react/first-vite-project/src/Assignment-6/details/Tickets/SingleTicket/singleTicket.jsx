import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import useTickets from "../useTickets";
import "./singleTicket.scss";

const SingleTicket = () => {
  let { id } = useParams();

  let { singleDetail, getSingleTickets } = useTickets();

  useEffect(() => {
    getSingleTickets(id);
  }, []);
  return (
    <div className="singleTicket">
      <figure>
        <img src={singleDetail.src}></img>
      </figure>
      <div style={{fontSize: '20px'}}>Name: <span >{singleDetail.Customername}</span></div>
      <div style={{fontSize: '20px'}}>Ticketdetails: <span>{singleDetail.Ticketdetails}</span></div>
      <div style={{fontSize: '20px'}}>TicketdetailsUpdate: <span>{singleDetail.TicketdetailsUpdate}</span></div>
      <div style={{fontSize: '20px'}}>CustomernameDate: {singleDetail.CustomernameDate}</div>
    </div>
  );
};

export default SingleTicket;
