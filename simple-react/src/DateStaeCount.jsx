import React, { useState } from "react";

const DateStaeCount = () => {
  const dateExtract = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [state, setState] = useState(0);
  const [count, setCount] = useState(1);

  return (
    <>
      <div
        className="step"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "10rem",
          width: "12rem",
        }}
      >
        <button
          style={{ height: "2rem", width: "2rem", margin: "1rem" }}
          onClick={() => setState((s) => s - 1)}
        >
          -
        </button>
        <h3> Step :{state}</h3>
        <button
          style={{ height: "2rem", width: "2rem", margin: "1rem" }}
          onClick={() => setState((s) => s + 1)}
        >
          +
        </button>
      </div>
      <div>
        {dayNames[dateExtract.getDay() + count]}/
        {monthNames[dateExtract.getMonth()]}/{dateExtract.getFullYear()}
      </div>
      <div
        className="step"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "10rem",
          width: "12rem",
        }}
      >
        <button
          style={{ height: "2rem", width: "2rem", margin: "1rem" }}
          onClick={() => setCount((s) => s - state)}
        >
          -
        </button>
        <h3> Count:{count}</h3>
        <button
          style={{ height: "2rem", width: "2rem", margin: "1rem" }}
          onClick={() => setCount((s) => s + state)}
        >
          +
        </button>
      </div>

      {/* <h1>{dayNames[dateExtract.getDay()]}</h1>
      <h1>{monthNames[dateExtract.getMonth()]}</h1>
      <h1>{dateExtract.getFullYear()}</h1> */}
    </>
  );
};

export default DateStaeCount;
