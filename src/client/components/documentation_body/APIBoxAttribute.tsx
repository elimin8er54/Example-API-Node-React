import React from "react";
import "../../App.css";

interface Props{
  attName:string;
  attType:string;
}

const APIBoxAttribute: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {
  return (
    <React.Fragment>
      <li className="api_attribute_body">
        <div className="api_attribute_leftbox">
          <div className="api_attribute_name">{props.attName}</div>
        </div>
        <div className="api_attribute_rightbox">
          <div className="api_attribute_type">{props.attType}</div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default APIBoxAttribute;
