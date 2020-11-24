import React, { useState } from "react";
import "../../App.css";
import config from "../config.json";

interface Props {
  swapper:() =>void;
}

const Login: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleInputPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    fetch(`${config.SERVER_URL}api/signup`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);

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
          setNotice("This username already exists");
        }
      });
    event.preventDefault();
  }

  return (
    <div className="signup">
      <h4>Sign-Up</h4>
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
        <br />
        (You can leave this blank. No checks for this example.)
        <input
          className="login_password"
          name="password"
          type="text"
          onChange={handleInputPasswordChange}
          value={password}
        />
        <input className="login_button" type="submit" value="Submit" />
        <button type="button" className="signup_button" onClick={props.swapper}>
          Switch to Login
        </button>
      </form>
    </div>
  );
}

export default Login;
