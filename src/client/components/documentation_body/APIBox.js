import React from "react";
import "../../App.css";
import APIBoxAttribute from "./APIBoxAttribute.js";

function APIBox(props) {
  let items = [];
  if (props.attributes !== undefined) {
    items = props.attributes.map((address) => (
      <APIBoxAttribute attType={address.type} attName={address.name} />
    ));
  } else {
    items = "";
  }

  return (
    <div className="api_block">
      <div className="api_title">
        <b>{props.title}</b>
      </div>
      <div className="api_requestbody">
        <h1>Request Body</h1>
      </div>
      <div className="api_body_info">
        <p>{props.requestBody}</p>

        <p>Content type:application/json</p>

        <p>Production Base URL:http://shauntsite.com:3001</p>
      </div>
      <div className="api_attribute_title">
        <h4>Attributes</h4>
      </div>
      <div className="api_attribute_values">
        <ul className="api_attribute">{items}</ul>
      </div>
    </div>
  );
}

export default APIBox;
