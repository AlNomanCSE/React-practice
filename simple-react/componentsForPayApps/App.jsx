import React, { useState } from "react";
import { BillInput } from "./BillInput";
import { Likings } from "./Likings";
import { BillPay } from "./BillPay";

const App = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  function handelReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <Likings parcentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </Likings>
      <Likings parcentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </Likings>
      <BillPay
        bill={bill}
        parcentageA={Number(percentage1)}
        parcentageB={Number(percentage2)}
        onResetBill={handelReset}
      />
    </>
  );
};

export default App;
