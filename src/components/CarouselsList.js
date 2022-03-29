import React from "react";
import CarouselCard from "./CarouselCard"

const CarouselsList = props => {
	console.log ("test2", props);
	return (
		<div className="CarouselsContainer">
	 		{props.carousels.map((item, i) => {
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