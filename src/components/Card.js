import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
	return (
		<>
			<div className="visit-country">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="section-heading">
								<h2>Visit One Of Our Countries Now</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<div className="items">
								<div className="row">
									{props.list.map((ind, i) => {
										return (
											<div key={i} className="col-lg-12">
												<div className="item">
													<div className="row">
														<div className="col-lg-4 col-sm-5">
															<div className="image">
																<img src={ind.image} alt="country1" />
															</div>
														</div>
														<div className="col-lg-8 col-sm-7">
															<div className="right-content">
																<h4>{ind.cityName}</h4>
																<span>{ind.countryName}</span>
																<div className="main-button">
																	<NavLink to="/about">Explore More</NavLink>
																</div>
																<p>
																	Woox Travel is a professional Bootstrap 5
																	theme HTML CSS layout for your website. You
																	can use this layout for your commercial work.
																</p>
																<ul className="info">
																	<li>
																		<FontAwesomeIcon icon={faUser} /> {ind.user}{" "}
																		Mil People
																	</li>
																	<li>
																		<FontAwesomeIcon icon={faGlobe} />{" "}
																		{ind.globe}
																		km2
																	</li>
																	<li>
																		<FontAwesomeIcon icon={faHome} /> $
																		{ind.home}
																	</li>
																</ul>
																<div className="text-button">
																	<NavLink to="/about">
																		Need Directions ?{" "}
																		<FontAwesomeIcon icon={faArrowRight} />
																	</NavLink>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})}

									{/* <div className="col-lg-12">
										<div className="item">
											<div className="row">
												<div className="col-lg-4 col-sm-5">
													<div className="image">
														<img src={country2} alt="country2" />
													</div>
												</div>
												<div className="col-lg-8 col-sm-7">
													<div className="right-content">
														<h4>CARIBBEAN</h4>
														<span>North America</span>
														<div className="main-button">
															<NavLink to="/about">Explore More</NavLink>
														</div>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod.
														</p>
														<ul className="info">
															<li>
																<FontAwesomeIcon icon={faUser} /> 44.48 Mil
																People
															</li>
															<li>
																<FontAwesomeIcon icon={faGlobe} /> 275.400 km2
															</li>
															<li>
																<FontAwesomeIcon icon={faHome} /> $946.000
															</li>
														</ul>
														<div className="text-button">
															<NavLink to="/about">
																Need Directions ?{" "}
																<FontAwesomeIcon icon={faArrowRight} />
															</NavLink>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="item last-item">
											<div className="row">
												<div className="col-lg-4 col-sm-5">
													<div className="image">
														<img src={country3} alt="country3" />
													</div>
												</div>
												<div className="col-lg-8 col-sm-7">
													<div className="right-content">
														<h4>FRANCE</h4>
														<span>Europe</span>
														<div className="main-button">
															<NavLink to="/about">Explore More</NavLink>
														</div>
														<p>
															We hope this WoOx template is useful for you,
															please support us a{" "}
															<NavLink
																to="/"
																// target="_blank"
															>
																small amount of PayPal
															</NavLink>{" "}
															to info [at] templatemo.com for our survival. We
															really appreciate your contribution.
														</p>
														<ul className="info">
															<li>
																<FontAwesomeIcon icon={faUser} /> 67.41 Mil
																People
															</li>
															<li>
																<FontAwesomeIcon icon={faGlobe} /> 551.500 km2
															</li>
															<li>
																<FontAwesomeIcon icon={faHome} /> $425.600
															</li>
														</ul>
														<div className="text-button">
															<NavLink to="/about">
																Need Directions ?{" "}
																<FontAwesomeIcon icon={faArrowRight} />
															</NavLink>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
									<div className="col-lg-12">
										<ul className="page-numbers">
											<li>
												<NavLink to="/">
													<FontAwesomeIcon icon={faArrowLeft} />
												</NavLink>
											</li>
											<li>
												<NavLink to="/">1</NavLink>
											</li>
											<li className="active">
												<NavLink to="/">2</NavLink>
											</li>
											<li>
												<NavLink to="/">3</NavLink>
											</li>
											<li>
												<NavLink to="/">
													<FontAwesomeIcon icon={faArrowRight} />
												</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
