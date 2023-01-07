import React from "react";
// import { Carousel } from "react-carousel-minimal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
	return (
		<>
			<div className="container layout_padding">
				<Carousel>
					<div className="container">
						<img
							src={require("../assets/images/country-01.jpg")}
							alt="country1"
						/>
						<p className="legend">Legend 1</p>
					</div>
					<div className="container">
						<img
							src={require("../assets/images/country-02.jpg")}
							alt="country2"
						/>
						<p className="legend">Legend 2</p>
					</div>
					<div className="container">
						<img
							src={require("../assets/images/country-03.jpg")}
							alt="country3"
						/>
						<p className="legend">Legend 3</p>
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default Slider;
