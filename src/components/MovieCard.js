import React from "react";

import Movie from "./Movie"

const MovieCard = ({carousels}) => {
	return (
		<div className="movie-container">
	 		{carousels.map((carousel, i) => {
				return (
					<Movie
						key={i}
						movies={carousel.items}
					/>
				);
			})}
	 	</div>
	);
};

export default MovieCard;