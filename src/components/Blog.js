import React from "react";
import "../css/Blog.css";
import { NavLink } from "react-router-dom";
import play from "../assets/images/play-icon.png";

const Blog = () => {
	return (
		<>
			<div className="blog_section layout_padding margin_top_90">
				<div className="container">
					<h1 className="blog_taital">See Our Video</h1>
					<p className="blog_text">
						many variations of passages of Lorem Ipsum available, but the
						majority have suffered alteration in some form, by injected humour,
						or randomised words which
					</p>
					<div className="play_icon_main">
						<div className="play_icon">
							<NavLink href="#">
								<img src={play} alt="play" />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
