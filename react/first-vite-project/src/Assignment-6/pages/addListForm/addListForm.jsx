import { useEffect, useState } from "react";
import React from "react";
import "./addListForm.scss";

function AddListForm({
  onSubmitting,
  addticketList,
  handleChange,
  closeAddPage,
}) {
  return (
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
        {/* <div className="addTicket__page__mainArea__inputHandle">
          <label htmlFor="src">src</label>
          <input
            name="src"
            value={addticketList.src}
            onChange={handleChange}
            placeholder="src"
          />
        </div> */}
        <button>Add</button>
        <button className="modal--button" onClick={closeAddPage}>
          Close
        </button>
      </div>
    </form>
  );
}

export default AddListForm;
