import { useEffect, useState } from "react";

const useTickets = () => {
  let [usersDetail, setUsersDetail] = useState([]);
  let [loading, setLoading] = useState(false);
  let [singleDetail, setSingleDetail] = useState([]);

  const getTickets = async () => {
    await fetch(
      "https://react-ticket-57733-default-rtdb.firebaseio.com/tickets.json"
    )
      .then((res) => res.json())
      .then((data) => {

        const arrFormat = Object.keys(data).map((key) => (
          {
            ...data[key],
            nodename: key
          }
        ))

        setUsersDetail(arrFormat.reverse());
      });
  };

  const getSingleTickets = async (id) => {
    await fetch(
      `https://my-json-server.typicode.com/KenishDahal/mockjson/tickets/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        
        setSingleDetail(data);
      });
  };

  const addTickets = async (addticketList) => {
    console.log(addticketList.Customername);
    await fetch(
      "https://react-ticket-57733-default-rtdb.firebaseio.com/tickets.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Ticketdetails: addticketList.TicketdetailsUpdate,
          TicketdetailsUpdate: addticketList.TicketdetailsUpdate,
          Customername: addticketList.Customername,
          CustomernameDate: addticketList.CustomernameDate,
          Date: addticketList.Date,
          DateClock: addticketList.DateClock,
          buttonClassName: addticketList.buttonClassName,
          buttonSituation: addticketList.buttonSituation,
          src: "logo",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //  console.log(usersDetail)
        //  console.log(1)
        setUsersDetail([data,...usersDetail]);
      });
  };

  const deleteTickets = async (nodename) => {
    console.log(nodename)
    await fetch(
      `https://react-ticket-57733-default-rtdb.firebaseio.com/tickets/${nodename}/.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsersDetail((current) =>
          current.filter((ticket) => {
            return ticket.nodename !== nodename;
          })
        );
      });
  };

  return {
    usersDetail,
    setUsersDetail,
    getTickets,
    addTickets,
    deleteTickets,
    singleDetail,
    getSingleTickets,
  };
};

export default useTickets;
