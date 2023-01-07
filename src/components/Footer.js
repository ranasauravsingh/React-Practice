import React from "react";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<>
			<div className="footer_section layout_padding">
				<div className="container">
					<div className="input_btn_main">
						<input
							type="text"
							className="mail_text"
							placeholder="Enter your email"
							name="Enter your email"
						/>
						<div className="subscribe_bt">
							<NavLink to="/">Subscribe</NavLink>
						</div>
					</div>
					<div className="location_main">
						<div className="call_text">
							<FontAwesomeIcon icon={faPhone} />
						</div>
						<div className="call_text">
							<NavLink to="/">Call +01 1234567890</NavLink>
						</div>
						<div className="call_text">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="call_text">
							<NavLink to="/">demo@gmail.com</NavLink>
						</div>
					</div>
					<div className="social_icon">
						<ul>
							<li>
								<NavLink to="/">
									<FontAwesomeIcon icon={faFacebookF} />
								</NavLink>
							</li>
							<li>
								<NavLink to="/">
									<FontAwesomeIcon icon={faInstagram} />
								</NavLink>
							</li>
							<li>
								<NavLink to="/">
									<FontAwesomeIcon icon={faLinkedinIn} />
								</NavLink>
							</li>
							<li>
								<NavLink to="/">
									<FontAwesomeIcon icon={faTwitter} />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="copyright_section">
				<div className="container">
					<p className="copyright_text">
						2020 All Rights Reserved. Design by{" "}
						<NavLink to="/">Free html Templates</NavLink>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
