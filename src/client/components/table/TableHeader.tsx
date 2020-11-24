import React from "react";

interface Props {
  headVals: string[]
}

  const TableHeader: React.FC<Props>=(props: Props): React.ReactElement<Props>  =>   {
  const item = props.headVals.map((headVal:string) => {
    return <th key = {headVal}>{headVal}</th>;
   
  });

  return (
    <thead>
      <tr>{item}</tr>
    </thead>
  );
}

export default TableHeader;
