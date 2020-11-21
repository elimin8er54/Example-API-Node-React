import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


function TableContainer(props) {

  //This will only check the first row of the table body.
  let theRender;
  if (Object.keys(props.colVals).length === 0) {
    theRender = "No results found.";
  }
  else if (Object.keys(props.colVals[0]).length !== props.headVals.length) {
    theRender = <p>
      Table <em>needs</em> to have the same amount of Columns for the Header and Body
      </p>
  } else {
    theRender = <table>

      <TableHeader headVals={props.headVals} />
      <TableBody colVals={props.colVals} />
    </table>

  }

  return <React.Fragment>{theRender}</React.Fragment>;
}

export default TableContainer;
