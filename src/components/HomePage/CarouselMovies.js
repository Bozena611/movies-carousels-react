import React from "react";
import { Link } from 'react-router-dom';

/* Displays movie cards inside carousels */

const CarouselMovies = ({id, img, name}) => {

	return (
		<div className="movie-card">
			<Link to={`/movies/${id}`}>
				<div className="movie-data">
					<img src={img} className="card-img" alt={name} />
					<h2>{name}</h2>
				</div>
			</Link>
		</div>
		);
};

export default CarouselMovies;