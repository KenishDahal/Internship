import { useEffect, useState } from "react";
 
const useSignup =() =>{
    let [usersRegistration, setUsersRegistration] = useState([]);

    const addRegistration = async(signupFormData) => {
        // console.log(addticketList.Customername)
        await fetch("http://localhost:3000/users",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: signupFormData.fullName,
            email: signupFormData.email,
            password: signupFormData.password,
            confirmPassword: signupFormData.confirmPassword,
          }),
        })
         .then((res) => res.json())
         .then((data) => {
          //  console.log(usersDetail)
          //  console.log(1)
          setUsersRegistration([data])
       })
      }
      return {usersRegistration,addRegistration}
    }
    
export default useSignup;