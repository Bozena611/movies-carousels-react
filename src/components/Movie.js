import React from "react";
import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {
	const { id } = useParams();

	return (
		<div>
		{movies.map((movie, i) => (
			movie.id == id ? (
					<div className="movie-details">
						<h1>{movie.title}</h1>
						<img src={movie.posterUrl} className="card-img" alt={movie.title} />
						<h3>{movie.plot}</h3>
					</div>
					) : null
			))}
		</div>
		);
};

export default Movie;