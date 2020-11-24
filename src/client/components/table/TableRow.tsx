import React from "react";

interface Props {
  colVals: {};
}

const TableRow: React.FC<Props> = (props: Props): React.ReactElement<Props> => {
  const rows = Object.values(props.colVals).map((val) => {
    if (val == null) {
      val = "N/A";
    }

    return <td>{val}</td>;
  });

  return <React.Fragment>{rows}</React.Fragment>;
};

export default TableRow;
