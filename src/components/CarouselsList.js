import React from "react";
import CarouselCard from "./CarouselCard"

const CarouselsList = ({carousels}) => {
	console.log ("test2", carousels);
	return (
		<div className="CarouselsContainer">
	 		{carousels.map((item, i) => {
				console.log("item", item)
				return (
					<CarouselCard
						key={i}
						title={item.title}
					/>
				);
			})}
	 	</div>
	);
};

export default CarouselsList;