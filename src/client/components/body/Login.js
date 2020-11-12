import React, { useState } from "react";
import "../../App.css";
import config from "../config.json";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleInputPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    fetch(`${config.SERVER_URL}api/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.token);
          document.location.href = "/";
        } else {
          setPassword("");
          setNotice("Incorrect login information");
        }
      });
    event.preventDefault();
  }

  return (
    <div className="login">
      <h4>Sign-In</h4>
      <form onSubmit={handleSubmit}>
        <p className="loginerror">{notice}</p>
        Username
        <input
          className="login_username"
          name="username"
          type="text"
          onChange={handleInputChange}
          value={username}
        />
        Password
        <input
          className="login_password"
          name="password"
          type="text"
          onChange={handleInputPasswordChange}
          value={password}
        />
        <input className="login_button" type="submit" value="Submit" />
        <button type="button" className="signup_button" onClick={props.swapper}>
          Switch to Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
