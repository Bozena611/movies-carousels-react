import React from "react";
import MovieDetails from "./MovieDetails"

/* Loops through data and sends movie array to details card */

const MovieCard = ({carousels}) => {
	return (
		<div className="movie-container">
	 		{carousels.map((carousel, i) => {
				return (
					<MovieDetails
						key={i}
						movies={carousel.items}
					/>
				);
			})}
	 	</div>
	);
};

export default MovieCard;