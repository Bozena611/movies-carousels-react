import React from "react";
import MoviesList from "./MoviesList";
import '../styles.css';



const CarouselCard = ({title, movies}) => {
	/*console.log("title", title)
	console.log("list", movies)*/

	return (
			<div>
				<h1>{title}</h1>
				<ul className="movies-container">
					{movies.map((movie, i) => {
						/*console.log("one", movie)*/
						return (
							<MoviesList
								key={movie.id}
								img={movie.posterUrl}
								name={movie.title}
							 />
							)
					})}
				</ul>
			</div>
		);
};

export default CarouselCard;