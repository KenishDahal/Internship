import { useState } from "react";
import React, { Component } from "react";
import "./login.scss";
import logo from "../../../../public/assets/D.png";
import { BsEyeSlash } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import useLogin from "./useLogin";
import MainDashboard from "../MainDashboard";

function Login() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let { usersLogin, getLogin, loggedInUser } = useLogin();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    getLogin(formData);

    // if(loggedInUser){
    //   <Navigate to="/main" replace={true} />
    // }
  };

  return (
    <div className="form">
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
              type="text"
              placeholder="Email address"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className="loginForm__page__mainArea__inputHandle">
            <label htmlFor="password">Password </label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
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
      {loggedInUser && <Navigate to="/main" replace={true} />}
    </div>
  );
}

export default Login;
