import React, { useState } from "react";

const Child = (props) => {
  const [childData, setChildData] = useState("This Is Child Data");

  return (
    <div>
      <h2>{props.kshit}</h2>
      <button
        onClick={() => {
          props.kshit(childData);
        }}
      >
        Click To Get Child Data In Parent
      </button>
    </div>
  );
};

export default Child;
