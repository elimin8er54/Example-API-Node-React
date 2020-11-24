import React from "react";
import "../../App.css";
import APIBox from "./APIBox";

interface Props {
  kind:string;
  attribute?:{name:string,type:string}[];
}

const API: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {
  let apiBoxes;
  if (props.kind === "property") {
    apiBoxes = [
      <APIBox
        requestBody="POST /api/properties"
        title="Create a property"
     
        attributes={[
          { name: "street_number", type: "String" },
          { name: "unit_number", type: "String" },
          { name: "price", type: "decimal" },
        ]}
      />,
      <APIBox
        requestBody="GET /api/properties (up to 100) or /api/properties/{property_id}"
        title="Get a property"
   
      />,
      <APIBox
        requestBody="DELETE /api/properties/{property_id} (Wont actually delete in this test case)"
        title="Delete a property"
    
      />,
      <APIBox
        requestBody="Patch /api/properties/{property_id}"
        title="Update a property"
    
        attributes={[
          { name: "street_number", type: "String" },
          { name: "unit_number", type: "String" },
          { name: "price", type: "decimal" },
        ]}
      />,
    ];
  } else if (props.kind === "landlord") {
    apiBoxes = [
      <APIBox
        requestBody="POST /api/landlords"
        title="Create a landord"
    
        attributes={[
          { name: "first_name", type: "String" },
          { name: "last_name", type: "String" },
          { name: "company_name", type: "String" },
        ]}
      />,
      <APIBox
        requestBody="GET /api/landlords (up to 100) or /api/landlords/{landlord_id}"
        title="Get a landlord"
      
      />,
      <APIBox
        requestBody="DELETE /api/landlords  (Wont actually delete in this test case)"
        title="Delete a landlord"
     
      />,
      <APIBox
        requestBody="Patch /api/landlords/{landlord_id}"
        title="Update a landlord"
       
        attributes={[
          { name: "first_name", type: "String" },
          { name: "last_name", type: "String" },
          { name: "company_name", type: "String" },
        ]}
      />,
    ];
  }

  return <React.Fragment>{apiBoxes}</React.Fragment>;
}

export default API;
