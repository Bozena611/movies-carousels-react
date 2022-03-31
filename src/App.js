import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Home";
import MovieCard from "./components/MovieCard";

function App() {

  const [carousels, setCarousels] = useState([]);

  useEffect(()=> {
    fetch(`https://raw.githubusercontent.com/24i/smartapps-test/main/data.json`)
      .then(res => res.json())
      .then(data => {
       /* console.log("data", data.carousels);*/
        setCarousels(data.carousels);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home  carousels={carousels}/>} />
        <Route path="/movies/:id" element={<MovieCard carousels={carousels} />} />
      </Routes>
    </div>
  )
}

export default App