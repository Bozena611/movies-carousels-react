import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselMovies from "./CarouselMovies";

/* Displays title for each carousel and sends data for the list of movie cards*/

const CarouselCard = ({title, movies}) => {
	const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

	return (
			<div className="card-container">
				<h1 className="text-blue">{title}</h1>
				<div className="movies-container" style={{ position: "relative" }}>
					<Carousel
					responsive={responsive}
					autoPlay={false}
					shouldResetAutoplay={false}
					>
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
					</Carousel>
				</div>
			</div>
		);
};

export default CarouselCard;