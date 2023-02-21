import { useEffect, useState } from "react";

const useLogin = () => {
  let [usersLogin, setUsersLogin] = useState([]);
  let [loggedInUser, setLoggedInUser] = useState(false);

  const getLogin = async (formData) => {
    await fetch(`http://localhost:3000/users?email=${formData.email}&password=${formData.password}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length >= 1) {
          setLoggedInUser(true);
          console.log(loggedInUser);
        }
      });
  };

  return { usersLogin, getLogin,loggedInUser };
};
export default useLogin;
