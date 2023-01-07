import React from "react";
import "../css/Header.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div className="header_section">
				<div className="header_main">
					<div className="mobile_menu">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<div className="logo_mobile">
								<NavLink to="/">
									<img src={logo} alt="logo" />
								</NavLink>
							</div>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink className="nav-link" to="/">
											Home
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/about">
											About
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/service">
											Services
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link " to="/blog">
											Blog
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link " to="/contact">
											Contact
										</NavLink>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					<div className="container-fluid">
						<div className="logo">
							<NavLink to="/">
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
						<div className="menu_main">
							<ul>
								<li className="active">
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="/about">About</NavLink>
								</li>
								<li>
									<NavLink to="/service">Services</NavLink>
								</li>
								<li>
									<NavLink to="/blog">Blog</NavLink>
								</li>
								<li>
									<NavLink to="/contact">Contact us</NavLink>
								</li>
								{/* <li>
									<NavLink to="/props">Props</NavLink>
								</li> */}
								<li>
									<NavLink to="/form">Forms</NavLink>
								</li>
								<li>
									<NavLink to="/useeffect">Use Effect</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
