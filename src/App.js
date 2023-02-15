import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import CarouselsList from "./components/HomePage/CarouselsList";
import MovieDetails from "./components/DetailsPage/MovieDetails";

function App() {

  const [carousels, setCarousels] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

/* Fetch data from source and store it in state*/

  useEffect(()=> {
    fetch(`https://bozena611.github.io/data/movie_data.json`)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          setLoaded(true);
          setCarousels(data);
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
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    )
  }
}

export default App