import { useState } from "react";
import React, { Component } from "react";
import "./signup.scss";
import logo from "../../assets/D.png";
import { BsEyeSlash } from "react-icons/bs";

function Signup() {
  let [signupFormData, setSignupFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupFormData);
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
            <label htmlFor="email">FULLNAME</label>
            <input
              name="fullName"
              placeholder="Fullname"
              onChange={handleChange}
            />
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="password">Password </label>
            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="form__page__mainArea__inputHandle--icon">
              <BsEyeSlash />
            </div>
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="password">CONFIRM PASSWORD</label>
            <input
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <div className="form__page__mainArea__inputHandle--icon">
              <BsEyeSlash />
            </div>
          </div>

          <button onClick={handleSubmit}>Log in</button>

          <div className="form__page__mainArea__signin">
            <div>Don’t have an account?</div>
            <a>Signup</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
