import config from "./config.json";

export const checkToken = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json",
    'Authorization': 'Bearer ' +   localStorage.getItem("token")  },
   
  };
  fetch(`${config.SERVER_URL}api/jwtauth`, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      document.location.href = "/login";
    })
    .then((data) => {
      // This is what is in the body of the response
    });
};
