import React from "react";
import "./Homehero.modules.css";
const Homehero = () => {
  return (
    <div className="homehero">
      <div className="herodiv">
        <div className="tagline">
          It’s not the destination, it's the journey.
        </div>
        <div className="tagdetails">
          In life's voyage, the journey holds sway, Not the end, but how we find
          our way. Each step we take, each moment we learn, Defines the path,
          from which we discern.
        </div>
        <button className="hreobutton">Find your car</button>
      </div>
    </div>
  );
};

export default Homehero;
