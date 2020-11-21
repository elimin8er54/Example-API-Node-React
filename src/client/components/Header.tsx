import React, { useEffect } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import About from "./body/About";
import Documentation from "./body/Documentation";
import Home from "./body/Home";
import Fun from "./body/Fun";
import { checkToken } from "./JWTAuth";
import Logout from "./Logout";
import Properties from "./body/Properties";

import "../App.css";

function Header() {
  useEffect(() => {
    checkToken();
  });

  return (
    <React.Fragment>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="headerlink"
          href="https://shauntsite.com"
        >
          Back to Shauntsite.com.
        </a>
        <BrowserRouter>
          <div className="container">
            <ul className="nav">
              <li>
                <NavLink exact to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/documentation/properties">Documentation </NavLink>
              </li>
              <li>
                <NavLink to="/properties">Properties </NavLink>
              </li>
              <li>
                <NavLink to="/fun">For Fun </NavLink>
              </li>
              <li className="logoutheader">
                <NavLink to="/logout">Logout </NavLink>
              </li>
            </ul>
            <div className="pages">
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/documentation/properties"
                component={Documentation}
              />
              <Route
                exact
                path="/documentation/landlords"
                component={Documentation}
              />
              <Route
                exact
                path="/properties"
                component={Properties}
              />
              <Route
                exact
                path="/fun"
                component={Fun}
              />
              <Route exact path="/logout" component={Logout} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default Header;
