import { useState } from "react";
import React, { Component } from "react";
import "./login.scss";
import logo from "../../assets/D.png";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="loginForm">
      <form className="loginForm__page">
        {/* <div> */}
        <figure>
          <img src={logo}></img>
        </figure>
        <div className="loginForm__page--title">Dashboard Kit</div>
        <div className="loginForm__page--login">Log In to Dashboard Kit</div>
        <div className="loginForm__page--label">
          Enter your email and password below
        </div>
        {/* </div>   */}
        <div className="loginForm__page__mainArea">
          <div className="loginForm__page__mainArea__inputHandle">
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          <div className="loginForm__page__mainArea__inputHandle">
            <label htmlFor="password">Password </label>
            <input
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="loginForm__page__mainArea__inputHandle--icon">
              <BsEyeSlash />
            </div>
          </div>

          <div className="loginForm__page__mainArea__checkbox">
            <input type="checkbox" id="a" />
            <label htmlFor="a">Remember me</label>
          </div>

          <button onClick={handleSubmit}>Log in</button>

          <div className="loginForm__page__mainArea__signin">
            <div>Don’t have an account?</div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
