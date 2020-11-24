import "../App.css";
import React from 'react'
function Logout() {
  localStorage.removeItem("token");
  document.location.href = "/";
//Incase it dosnt redirect for some reason.
return(<div>You have been logged out : )</div>)
}

export default Logout;