import React from "react";
import CarouselCard from "./CarouselCard"

/* Loops through the data and extracts nested array to CarouselCard */

const CarouselsList = ({carousels}) => {
	return (
		<div className="carousels-container">
	 		{carousels.map((carousel, i) => {
				return (
					<CarouselCard
						key={i}
						title={carousel.title}
						movies={carousel.items}
					/>
				);
			})}
	 	</div>
	);
};

export default CarouselsList;