import React, { useState } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  let localTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(localTime);

  const updateTime = () => {
    localTime = new Date().toLocaleTimeString();
    setTime(localTime);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="mainBox">
      <h2 className="country">India</h2>
      <h1 className="time">{time}</h1>
      {/* <button onChangeCapture={updateTime}>change</button> */}
    </div>
  );
};

export default DigitalClock;
