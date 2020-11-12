import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import API from "./documentation_body/API";

import "../App.css";

function Sidebar() {
  return (
    <BrowserRouter>
      <div className="sidenav">
        <NavLink exact to="/documentation/properties">
          Properties
        </NavLink>
        <NavLink exact to="/documentation/landlords">
          Landlords
        </NavLink>
      </div>
      <div className="pages">
        <Route
          path="/documentation/properties"
          render={(props) => <API {...props} kind="property" />}
        />

        <Route
          path="/documentation/landlords"
          render={(props) => <API {...props} kind="landlord" />}
        />
      </div>
    </BrowserRouter>
  );
}

export default Sidebar;
