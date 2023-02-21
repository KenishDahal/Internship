import { useState } from "react";
import React, { Component } from "react";
import "./signup.scss";
import logo from "../../../../public/assets/D.png";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import useSignup from "./useSignup";

function Signup() {
  let [signupFormData, setSignupFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let {usersRegistration,addRegistration} = useSignup();

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
              value={signupFormData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              type="text"
              placeholder="Email address"
              onChange={handleChange}
              value={signupFormData.email}
              required
            />
          </div>

          <div className="form__page__mainArea__inputHandle">
            <label htmlFor="password">Password </label>
            <input
              name="password"
              type="text"
              placeholder="Password"
              onChange={handleChange}
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
              type="text"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={signupFormData.confirmPassword}
              required
            />
            <div className="form__page__mainArea__inputHandle--icon">
              <BsEyeSlash />
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>Log in</button>

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
