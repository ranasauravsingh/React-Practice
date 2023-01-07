import React from "react";
import Props1 from "./Props1";

const Props = () => {
	function getData() {
		console.log("Hello from prop0");
	}

	return (
		<>
			<div className="container d-flex justify-content-center">
				<Props1 data={getData} />
			</div>
		</>
	);
};

export default Props;
