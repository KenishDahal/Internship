import { useEffect, useState } from "react";
 
const useTickets =() =>{

let [usersDetail, setUsersDetail] = useState([]);
let [loading, setLoading] =  useState(false);

   
   const getTickets= async() => {
     await fetch("http://localhost:3000/tickets")
    .then((res) => res.json())
    .then((data) => {
        console.log(usersDetail)
        console.log(1)
        setUsersDetail(data)
    })
   }

   const addTickets = async(addticketList) => {
    console.log(addticketList.Customername)
    await fetch("http://localhost:3000/tickets",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Ticketdetails: addticketList.TicketdetailsUpdate,
        TicketdetailsUpdate:addticketList.TicketdetailsUpdate,
        Customername:addticketList.Customername, 
        CustomernameDate: addticketList.CustomernameDate,
        Date:addticketList.Date ,
        DateClock: addticketList.DateClock,
        buttonClassName: addticketList.buttonClassName,
        buttonSituation:addticketList.buttonSituation,
        src: "logo"
      }),
    })
     .then((res) => res.json())
     .then((data) => {
      //  console.log(usersDetail)
      //  console.log(1)
       setUsersDetail([...usersDetail,data])
   })
  }

   return {usersDetail,setUsersDetail,getTickets,addTickets}
}

export default useTickets;

