import React from "react";

function TableRow(props) {

  const rows = Object.values(props.colVals).map((val) => {

    if (val == null) {
      val = "N/A";
    }

    return <td>{ val } </td>;

  });

  return <React.Fragment>{ rows } </React.Fragment>;
}

export default TableRow;
