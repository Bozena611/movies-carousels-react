import './App.css';
import React, { useState, useEffect } from "react";
import CarouselsList from "./components/CarouselsList";

function App() {
  const [carousels, setCarousels] = useState([]);

  useEffect(()=> {
    fetch(`https://raw.githubusercontent.com/24i/smartapps-test/main/data.json`)
      .then(res => res.json())
      .then(data => {
        console.log("movies", data.carousels);
        setCarousels(data.carousels);
      });
  }, []);

  return (
    <div className="App">
      <CarouselsList carousels={carousels} />
    </div>
  );
}

export default App;
