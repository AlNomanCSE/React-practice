import React, { useState } from "react";
import "./EventApp.css";

const mesages = [
  "Learn React 📢 ",
  "Apply for jobs 🥋",
  "Invest your new income 👨‍💻",
];
const EventApp = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function hadleClickPrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function hadleClickNext() {
    if (step < 3) {
      setStep((S) => S + 1);
    }
  }
  return (
    <>
      <button onClick={() => setOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <div className="container">
          <div className="middleCard">
            <div className="steps">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step}: {mesages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2" }}
                onClick={hadleClickPrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2" }}
                onClick={hadleClickNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventApp;
