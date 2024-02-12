import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./Home.modules.css";
const Home = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="form">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form action="" className="formDiv">
        {action === "Login" ? (
          <></>
        ) : (
          <div className="inputs name">
            <FaUser />
            <input type="text" className="input" placeholder="Name" />
          </div>
        )}

        <div className="inputs email">
          <MdEmail />
          <input type="text" className="input" placeholder="Email" />
        </div>
        <div className="inputs password">
          <RiLockPasswordFill />
          <input type="text" className="input" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <></>
        ) : (
          <div className="forget-Password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-Container">
          <button
            className={action === "Sign Up" ? "bgColor btn" : "btn"}
            onClick={(e) => {
              e.preventDefault();
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>

          <button
            className={action === "Login" ? "bgColor btn" : "btn"}
            onClick={(e) => {
              e.preventDefault();
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
