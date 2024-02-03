import React from "react";

export function BillPay({ bill, parcentageA, parcentageB, onResetBill }) {
  bill = bill + (parcentageA + parcentageB) / 2;
  function handelReset() {
    onResetBill("");
    onResetParcentage1(0);
    onResetParcentage2(0);
  }
  return (
    <div>
      <span>
        <h3>
          You pay ${bill} (${parcentageA} + ${parcentageB} tip)
        </h3>
      </span>
      <button onClick={onResetBill}>Reset</button>
    </div>
  );
}
