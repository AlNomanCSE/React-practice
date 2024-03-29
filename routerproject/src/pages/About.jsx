import React from "react";
import "./About.modules.css";
const About = () => {
  return (
    <>
      <div className="imageDiv"></div>
      <div className="textAndOthers">
        <div className="tagline">
          <p>Don’t squeeze in a sedan when you could relax in a car.</p>
        </div>
        <div className="textLines">
          <div className="first">
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
          </div>
          <div className="second">
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </div>
        <div className="boxDiv">
          <div className="sometext">
            <p>Your destination is waiting. Your van is ready.</p>
          </div>
          <button className="btn">Explore our vans</button>
        </div>
      </div>
    </>
  );
};

export default About;
