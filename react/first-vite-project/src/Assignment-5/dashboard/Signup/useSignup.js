import { useEffect, useState } from "react";

const useSignup = () => {
  let [usersRegistration, setUsersRegistration] = useState([]);

  let [passwordShown, setPasswordShown] = useState(false);

  let togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const addRegistration = async (signupFormData) => {
    // console.log(addticketList.Customername)
    await fetch(
      "https://react-ticket-57733-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: signupFormData.fullName,
          email: signupFormData.email,
          password: signupFormData.password,
          confirmPassword: signupFormData.confirmPassword,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //  console.log(usersDetail)
        //  console.log(1)
        setUsersRegistration([data]);
      });
  };
  return {
    usersRegistration,
    addRegistration,
    togglePassword,
    passwordShown,
    setPasswordShown,
  };
};

export default useSignup;
