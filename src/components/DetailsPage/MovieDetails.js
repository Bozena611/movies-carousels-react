import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

/* Loops through the nested array and displays details for the chosen movie */

const MovieDetails = ({ movies }) => {
	const { id } = useParams();

	return (
		<div>
		{movies.map((movie, i) => (
			movie.id === parseInt(id) ? (
				<div key={movie.id}>
					<Link to={`/`}>
						<h2 className="align-left">Back to list</h2>
					</Link>
					<div className="movie-details">
						<h1>{movie.title}</h1>
						<p className="year">
							<span>{movie.year}</span>
							<span>{movie.duration} min</span>
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
			))}
		</div>
		);
};

export default MovieDetails;