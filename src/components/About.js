import React from "react";
import "../css/About.css";
import { NavLink } from "react-router-dom";
import Card from "./Card";

import about from "../assets/images/about-img.png";

import country4 from "../assets/images/country-04.jpg";
import country5 from "../assets/images/country-05.jpg";
import country6 from "../assets/images/country-06.jpg";

const About = () => {
	let countryData = [
		{
			image: country4,
			cityName: "VANCOUVER",
			countryName: "Canada",
			user: "10.67",
			globe: "77.830",
			home: "990.760",
		},
		{
			image: country6,
			cityName: "KARKOW",
			countryName: "Poland",
			user: "8.98",
			globe: "50.720",
			home: "443.590",
		},
		{
			image: country5,
			cityName: "SEATTLE",
			countryName: "North America",
			user: "97.61",
			globe: "896.700",
			home: "1.764.900",
		},
	];

	return (
		<>
			<div className="about_section layout_padding">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<div className="about_taital_main">
								<h1 className="about_taital">About Us</h1>
								<p className="about_text">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, you need to be sure there isn't anything
									embarrassing hidden in the middle of text. All{" "}
								</p>
								<div className="readmore_bt">
									<NavLink to="/">Read More</NavLink>
								</div>
							</div>
						</div>
						<div className="col-md-6 padding_right_0">
							<div>
								<img src={about} className="about_img" alt="about" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Card list={countryData} />
		</>
	);
};

export default About;
