import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function TableContainer(props) {
 

  //This will only check the first row of the table body.
  const theRender =
  Object.keys(props.colVals[0]).length !== props.headVals.length ? (
      <p>
        Table <em>needs</em> to have the same amount of Columns for the Header and Body
      </p>
    ) : (
      <table>
        <TableHeader headVals={props.headVals} />
        <TableBody colVals={props.colVals} />
      </table>
    );

  return <React.Fragment>{theRender}</React.Fragment>;
}

export default TableContainer;
