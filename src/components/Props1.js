import React from "react";
import Props2 from "./Props2";

const Props1 = (props) => {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<button onClick={props.data}>Click the Prop1</button>
				<Props2 dataa={props.data} />
			</div>
		</>
	);
};

export default Props1;
