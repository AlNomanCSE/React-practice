import React, { useEffect, useState } from "react";

const key = "6ae144c0";
const App = (prop) => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  async function showdata() {
    let resposnse = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=Ironman`
    );
    let movie = await resposnse.json();
    console.log(movie.Search);
  }

  function tick() {
    setDate(new Date());
  }
  function addClick() {
    setCount((prev) => prev + 1);
  }
  useEffect(() => {
    console.log("Time");
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p>
        Time : {date.toLocaleTimeString()}--{count}
      </p>
      <button onClick={addClick}>Click</button>
    </>
  );
};

export default App;
