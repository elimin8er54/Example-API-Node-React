import React from "react";

function TableHeader(props) {
  const item = props.headVals.map((headVal) => {
    return <th key = {headVal}>{headVal}</th>;
   
  });

  return (
    <thead>
      <tr>{item}</tr>
    </thead>
  );
}

export default TableHeader;
