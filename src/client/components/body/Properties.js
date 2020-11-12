import React, { useEffect, useState } from "react";
import TableContainer from "../table/TableContainer";
import config from "../config.json";

function Properties() {
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let theContent;
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      loadingCheck();
    }, 10);
    fetchProperties();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const headers = ["ID", "Street Number","Street Name", "Unit Number" , "Price"];

  function fetchProperties() {
    fetch(`${config.SERVER_URL}properties/search`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("failed");
        }
      })
      .then((data) => {
        setProperties(data);
      });
  }

  function loadingCheck() {
    setIsLoading(false);
    clearInterval(timer);
  }

  if (isLoading) {
    theContent = "Loading";
  } else if (properties) {
    theContent = <TableContainer headVals={headers} colVals={properties} />;
  }

  return <React.Fragment>{theContent}</React.Fragment>;
}

export default Properties;
