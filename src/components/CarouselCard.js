import React from "react";

const CarouselCard = ({title}) => {
	console.log("props", title)

	return (
			<div>{title}</div>
		)
};

export default CarouselCard;