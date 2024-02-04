import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventApp from "./EventApp.jsx";
import DateStaeCount from "./DateStaeCount.jsx";
import FarAwaye from "../components/FarAwaye.jsx";
import Student from "./Student.jsx";
import App from "../EatNSplitComponent/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <EventApp /> */}
    {/* <DateStaeCount/> */}
    {/* <FarAwaye/> */}
    <App />
  </React.StrictMode>
);
