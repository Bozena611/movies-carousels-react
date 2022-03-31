import React from "react";
import { Link } from 'react-router-dom';

const MoviesList = ({id, img, name}) => {
	return (
		<li className="movie-card">
			<Link to={`/movies/${id}`}>
				<div className="movie-data">
					<img src={img} className="card-img" alt={name} />
					<h3>{name}</h3>
				</div>
			</Link>
		</li>
		);
};

export default MoviesList;