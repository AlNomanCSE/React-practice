import React from "react";

export function BillInput({ bill, onSetBill }) {
  function handelTotal(e) {
    onSetBill(Number(e.target.value));
  }
  return (
    <div>
      <label htmlFor="" style={{ margin: "0 0 0 1rem" }}>
        How much was the bill?
      </label>
      <input
        type="text"
        style={{ width: "5rem", margin: "1rem 0 0 0" }}
        value={bill}
        onChange={handelTotal}
      />
    </div>
  );
}
