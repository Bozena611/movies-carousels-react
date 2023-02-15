import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

/* Fetch details from location state and display details for the chosen movie */

const MovieDetails = () => {
	const { id } = useParams();
	const location = useLocation();
  const { movie } = location.state.movie;

	return (
		<div className="movie-container">
		{(movie.id === parseInt(id)) ? (
				<div key={movie.id}>
					<Link to={`/`}>
						<h2 className="align-left">Back to list</h2>
					</Link>
					<div className="movie-details">
						<h1>{movie.title}</h1>
						<p className="year">
							<span>{movie.year}</span>
							<span>{movie.runtime} min</span>
						</p>
						<img src={movie.posterUrl} className="details-img" alt={movie.title} />
						<h3>
							<span>Directed by: </span>
							<span className="text-blue">{movie.director}</span>
						</h3>
						<h3><span>Actors:</span> <span className="text-blue">{movie.actors}</span></h3>
						<h3>{movie.plot}</h3>
					</div>
				</div>
					) : null
			}
		</div>
		);
};

export default MovieDetails;