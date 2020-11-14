import React, { useState } from "react";
import "../App.css";
import Login from "./body/Login";
import Signup from "./body/Signup";

function MainLogin() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  function swapper() {
    setIsLoginPage(!isLoginPage);
  }

  const page = isLoginPage ? (
    <Login swapper={swapper} />
  ) : (
      <Signup swapper={swapper} />
    );

  return (
    <React.Fragment>
      <div class="login-container">
        <p className="login_title">
          Login page using JWT tokens and a MySQL database.
          <br />
          Create an account, do not put a password you use personally.
          <br />
          You don't need any autherization to use http methods.
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://shauntsite.com"
          >
            Back to Shauntsite.com.
          </a>
        </p>

        <div className="login-box">{page}</div>
      </div>
    </React.Fragment>
  );
}

export default MainLogin;
