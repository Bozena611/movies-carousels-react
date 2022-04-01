import React from "react";
import CarouselMovies from "./CarouselMovies";

/* Displays title for each carousel and sends data for the list of movie cards*/

const CarouselCard = ({title, movies}) => {
	return (
			<div className="card-container">
				<h1 className="text-blue">{title}</h1>
				<ul className="movies-container">
					{movies.map((movie, i) => {
						const { id, title, posterUrl } = movie;
						return (
							<CarouselMovies
								key={movie.id}
								id={id}
								img={posterUrl}
								name={title}
							 />
							)
					})}
				</ul>
			</div>
		);
};

export default CarouselCard;