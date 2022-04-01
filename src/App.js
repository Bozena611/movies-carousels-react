import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import CarouselsList from "./components/HomePage/CarouselsList";
import MovieCard from "./components/DetailsPage/MovieCard";

function App() {

  const [carousels, setCarousels] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

/* Fetch data from source and store it in state*/

  useEffect(()=> {
    fetch(`https://raw.githubusercontent.com/24i/smartapps-test/main/data.json`)
      .then(res => res.json())
      .then(
        (data) => {
          setLoaded(true);
          setCarousels(data.carousels);
        }
      )
      .catch(
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return  <div>Error: {error.message}</div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CarouselsList  carousels={carousels}/>} />
          <Route path="/movies/:id" element={<MovieCard carousels={carousels} />} />
        </Routes>
      </div>
    )
  }
}

export default App