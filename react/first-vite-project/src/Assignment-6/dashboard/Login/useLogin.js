import { useEffect, useState } from "react";

const useLogin = () => {
  let [usersLogin, setUsersLogin] = useState([]);
  let [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const getLogin = async () => {
    await fetch("https://react-ticket-57733-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => {

            const arrFormat = Object.entries(data).map(([key,value]) => (
              {
                id: key,
                ...value,
              }
            ))
            console.log(arrFormat);
          setUsersLogin(arrFormat);
  
        // }
      });
  };
  return { usersLogin, getLogin,togglePassword ,passwordShown,setPasswordShown};
};
export default useLogin;
