import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const Lightbox = () => {
	return (
		<>
			<div className="lighbox_section layout_padding">
				<div className="container">
					<h1 className="lightbox_taital">Light Box</h1>
					<SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto d-flex flex-wrap justify-content-around">
						<img
							className="mw-30 rounded"
							src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
							alt="lightbox1"
						/>

						<img
							className="mw-30 rounded"
							src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200"
							alt="lightbox2"
						/>

						<img
							className="mw-30 rounded"
							src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
							alt="lightbox3"
						/>

						<img
							className="mw-30 rounded"
							src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
							alt="lightbox4"
						/>
					</SlideshowLightbox>
				</div>
			</div>
		</>
	);
};

export default Lightbox;
