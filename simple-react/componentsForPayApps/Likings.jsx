import React from "react";

export function Likings({ parcentage, setPercentage, children }) {
  function handelPercentage(e) {
    setPercentage(() => e.target.value);
  }

  return (
    <div>
      <label htmlFor="" style={{ margin: "0 0 0 1rem" }}>
        {children}
      </label>
      <select value={parcentage} onChange={handelPercentage}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
