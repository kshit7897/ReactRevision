import React, { useState } from "react";
import "./PtocChange.css";
import Child from "./Child";

const Parent = () => {
  // const [parentData, setParentData] = useState("THIS IS PARENT DATA");
  const [dataFromChild, setDataFromChild] = useState("");
  const getDataFromCHild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      {/* <h1>{parentData}</h1> */}
      {/* <Child kshit={parentData} /> */}
      <Child getDataFromCHild={getDataFromCHild} />
      <h2>{dataFromChild}</h2>
    </div>
  );
};

export default Parent;
