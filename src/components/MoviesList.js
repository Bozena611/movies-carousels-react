import React from "react";

const MoviesList = ({img, name}) => {
	/*console.log("name", name)*/

	return (
		<li>
			<img src={img} className="card-img" alt={name} />
			<p>{name}</p>
		</li>
		);
};

export default MoviesList;