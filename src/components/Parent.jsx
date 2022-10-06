import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [parentData, setParentData] = useState("This Is Parents");
  const [dataFromChild, setDataFromChild] = useState("");

  const getChildData = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <Child kshit={parentData} />
      <Child kshit={getChildData} />
      <h1>{dataFromChild}</h1>
    </div>
  );
};

export default Parent;
