import "../App.css";

function Logout() {
  localStorage.removeItem("token");
  document.location.href = "/login";
}

export default Logout;
