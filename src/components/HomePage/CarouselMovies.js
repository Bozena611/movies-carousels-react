import React from "react";
import { Link } from 'react-router-dom';

/* Displays movie cards inside carousels and links each movie to the page for movie details*/

const CarouselMovies = ({ id, img, name, movie }) => {

	return (
		<div className="movie-card">
			<Link to={`/movies/${id}`} state={{
				movie: {movie}
			}}>
				<div className="movie-data">
					<img src={img} className="card-img" alt={name} />
					<h2>{name}</h2>
				</div>
			</Link>
		</div>
		);
};

export default CarouselMovies;