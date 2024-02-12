import * as React from "react";
import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import loader from "./Loderfunction.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={loader} element={<Home />} />
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
