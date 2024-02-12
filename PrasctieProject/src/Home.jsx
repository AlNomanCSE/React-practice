import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const error = new Error(data);
  return <>{error}</>;
};

export default Home;
