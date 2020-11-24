import React from "react";
import TableRow from "./TableRow";


interface Props {
  colVals: string[]
}

  const TableBody: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {
  const rows = props.colVals.map((colVal:string) => {

    return (
      <tr>
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
