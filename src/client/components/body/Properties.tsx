import React, { useEffect, useState } from "react";
import TableContainer from "../table/TableContainer";
import config from "../config.json";
import SearchBox from "../table/SearchBox";

function Properties() {
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let theContent;
  let timer;
  useEffect(() => {

    timer = setInterval(() => {
      loadingCheck();
    }, 10);
    if (isLoading) {
      fetchProperties(-1);
    }
    return () => {
      clearInterval();
    };
  }, []);

  function update(val) {

    fetchProperties(val);
  }

  const headers = ["ID", "Street Number", "Street Name", "Unit Number", "Price"];

  function fetchProperties(val?: number) {
    fetch(`${config.SERVER_URL}properties/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
      body:
        JSON.stringify(val)

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

  return <React.Fragment><p>These are from the database from the link on the top left</p><SearchBox update={update} />{theContent}</React.Fragment>;
}

export default Properties;
