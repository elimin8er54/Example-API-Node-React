import React from "react";
import TableRow from "./TableRow";

function TableBody(props) {

  const rows = props.colVals.map((colVal) => {

    return (
      <tr key={colVal[Object.keys(colVal)[0]]}>
        <TableRow colVals={colVal} />
      </tr>
    );
  });

  return (
    <React.Fragment>
      <tbody>{rows}</tbody>
    </React.Fragment>
  );
}

export default TableBody;
