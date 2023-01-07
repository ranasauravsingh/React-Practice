import React from "react";
import "../css/Services.css";
import { NavLink } from "react-router-dom";
import rafting from "../assets/images/img-1.png";
import hiking from "../assets/images/img-2.png";
import camping from "../assets/images/img-3.png";

const Services = () => {
	return (
		<>
			<div className="services_section layout_padding">
				<div className="container">
					<h1 className="services_taital">Services </h1>
					<p className="services_text">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration
					</p>
					<div className="services_section_2">
						<div className="row">
							<div className="col-md-4">
								<div>
									<img src={rafting} className="services_img" alt="rafting" />
								</div>
								<div className="btn_main">
									<NavLink to="/">Rafting</NavLink>
								</div>
							</div>
							<div className="col-md-4">
								<div>
									<img src={hiking} className="services_img" alt="hiking" />
								</div>
								<div className="btn_main active">
									<NavLink to="/">Hiking</NavLink>
								</div>
							</div>
							<div className="col-md-4">
								<div>
									<img src={camping} className="services_img" alt="camping" />
								</div>
								<div className="btn_main">
									<NavLink to="/">Camping</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
