import { useState } from "react";
import React, { Component } from "react";
import "./signup.scss";
import logo from "../../../../public/assets/D.png";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import useSignup from "./useSignup";
import Input from "../../details/Input/input";

function Signup() {
  let [signupFormData, setSignupFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let {
    usersRegistration,
    addRegistration,
    togglePassword,
    passwordShown,
    setPasswordShown,
  } = useSignup();

  const handleChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration(signupFormData);
    console.log(signupFormData);
    setSignupFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="form">
      <form className="form__page">
        <div className="form__page--heading">
          <figure>
            <img src={logo}></img>
          </figure>
        </div>
        <div className="form__page--title">Dashboard Kit</div>

        <div className="form__page--signup">Sign up to Dashboard Kit</div>

        <div className="form__page__mainArea">
          <div className="form__page__mainArea__inputHandle">
            <Input 
              text="Fullname" 
              type="text"
              name="fullName"
              formData={signupFormData.fullName}
              handleChange={handleChange} />
          </div>

          <div className="form__page__mainArea__inputHandle">
          <Input 
               type="text"
               name="email"
               text="Email"
               handleChange={handleChange}
               formData={signupFormData.email}
               required />
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="password">Password </label>
            <input
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              onClick={togglePassword}
              value={signupFormData.password}
              required
            />
            <div className="form__page__mainArea__inputHandle--icon">
              <BsEyeSlash />
            </div>
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="password">CONFIRM PASSWORD</label>
            <input
              name="confirmPassword"
              type={passwordShown ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              value={signupFormData.confirmPassword}
              required
            />
            <div
              onClick={togglePassword}
              className="form__page__mainArea__inputHandle--icon"
            >
              <BsEyeSlash />
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Signup
          </button>

          <div className="form__page__mainArea__signin">
            <div>Don’t have an account?</div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
