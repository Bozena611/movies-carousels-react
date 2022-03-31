import React from "react";
import CarouselCard from "./CarouselCard"

const CarouselsList = ({carousels}) => {
	/*console.log ("carousels", carousels);*/
	return (
		<div className="carousels-container">
	 		{carousels.map((carousel, i) => {
			/*	console.log("item", carousel)*/
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