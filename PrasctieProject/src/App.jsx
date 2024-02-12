import * as React from "react";
import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import loader from "./Loderfunction.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      loader={loader}
      errorElement={<h1>Erro</h1>}
    />
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
