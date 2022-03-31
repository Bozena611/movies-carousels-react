import React from "react";
import MoviesList from "./MoviesList";

const CarouselCard = ({title, movies}) => {
	/*console.log("title", title)*/
	console.log("list", movies)

	return (
			<div className="card-container">
				<h1 className="text-blue">{title}</h1>
				<ul className="movies-container">
					{movies.map((movie, i) => {
						/*console.log("one", movie)*/
						const { id, title, posterUrl } = movie;
						return (
							<MoviesList
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