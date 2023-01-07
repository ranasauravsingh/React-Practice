import React from "react";
import "../css/Home.css";
import { NavLink } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Services from "./Services";
import Card from "./Card";

import quick from "../assets/images/quick-icon.png";
import client from "../assets/images/client-img.png";

import country1 from "../assets/images/country-01.jpg";
import country2 from "../assets/images/country-02.jpg";
import country3 from "../assets/images/country-03.jpg";
import Slider from "./Slider";
import Lightbox from "./Lightbox";

const Home = () => {
	let countryData = [
		{
			image: country1,
			cityName: "SWITZERLAND",
			countryName: "Europe",
			user: "8.66",
			globe: "41.290",
			home: "1.100.200",
		},
		{
			image: country2,
			cityName: "CARIBBEAN",
			countryName: "North America",
			user: "44.48",
			globe: "275.400",
			home: "946.000",
		},
		{
			image: country3,
			cityName: "FRANCE",
			countryName: "Europe",
			user: "67.41",
			globe: "551.500",
			home: "425.600",
		},
	];

	return (
		<>
			<div className="header_section">
				<div className="banner_section layout_padding">
					<div
						id="carouselExampleSlidesOnly"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="container">
									<h1 className="banner_taital">Adventure</h1>
									<p className="banner_text">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have sufferedThere are ma
										available, but the majority have suffered
									</p>
									<div className="read_bt">
										<NavLink to="/">Get A Quote</NavLink>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<h1 className="banner_taital">Adventure</h1>
									<p className="banner_text">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have sufferedThere are ma
										available, but the majority have suffered
									</p>
									<div className="read_bt">
										<NavLink to="/">Get A Quote</NavLink>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<h1 className="banner_taital">Adventure</h1>
									<p className="banner_text">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have sufferedThere are ma
										available, but the majority have suffered
									</p>
									<div className="read_bt">
										<NavLink to="/">Get A Quote</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Card list={countryData} />

			<Slider />

			<Services />

			<Lightbox />

			<About />

			<Blog />

			<div className="client_section layout_padding">
				<div className="container">
					<h1 className="client_taital">Testimonial</h1>
					<div className="client_section_2">
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-ride="carousel"
						>
							<ol className="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									className="active"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"
								></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"
								></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="client_main">
										<div className="box_left">
											<p className="lorem_text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugia
											</p>
										</div>
										<div className="box_right">
											<div className="client_taital_left">
												<div className="client_img">
													<img src={client} alt="client" />
												</div>
												<div className="quick_icon">
													<img src={quick} alt="quick" />
												</div>
											</div>
											<div className="client_taital_right">
												<h4 className="client_name">Dame</h4>
												<p className="customer_text">Customer</p>
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="client_main">
										<div className="box_left">
											<p className="lorem_text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugia
											</p>
										</div>
										<div className="box_right">
											<div className="client_taital_left">
												<div className="client_img">
													<img src={client} alt="client" />
												</div>
												<div className="quick_icon">
													<img src={quick} alt="quick" />
												</div>
											</div>
											<div className="client_taital_right">
												<h4 className="client_name">Dame</h4>
												<p className="customer_text">Customer</p>
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="client_main">
										<div className="box_left">
											<p className="lorem_text">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugia
											</p>
										</div>
										<div className="box_right">
											<div className="client_taital_left">
												<div className="client_img">
													<img src={client} alt="client" />
												</div>
												<div className="quick_icon">
													<img src={quick} alt="quick" />
												</div>
											</div>
											<div className="client_taital_right">
												<h4 className="client_name">Dame</h4>
												<p className="customer_text">Customer</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="choose_section layout_padding">
				<div className="container">
					<h1 className="choose_taital">Why Choose Us</h1>
					<p className="choose_text">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All{" "}
					</p>
					<div className="read_bt_1">
						<NavLink to="/">Read More</NavLink>
					</div>
					<div className="newsletter_box">
						<h1 className="let_text">Let Start Talk with Us</h1>
						<div className="getquote_bt">
							<NavLink to="/">Get A Quote</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
