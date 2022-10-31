import React, { useState } from "react";

const Child = (props) => {
  const [childData, setChildData] = useState("THIS IS CHILD DATA");
  return (
    <div>
      {/* <h1>{props.kshit}</h1> */}
      <button
        onClick={() => {
          props.getDataFromCHild(childData);
        }}
      >
        GET CHILD DATA
      </button>
    </div>
  );
};

export default Child;
