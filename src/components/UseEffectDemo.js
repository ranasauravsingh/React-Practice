import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
	const [defaultText, setDefaultText] = useState("");
	const [useEffectText, setUseEffectText] = useState("");
	const [inputText, setInputText] = useState("");

	useEffect(() => {
		// inputText.map((ch) => {
		// 	if (ch === "s" || ch === "S") {
		// 		setUseEffectText(inputText);
		// 		setDefaultText("");
		// 	}
		// });

		let ch = "s";
		let ch1 = "S";

		if (inputText.includes(ch || ch1)) {
			setUseEffectText(inputText);
			setDefaultText("");
		} else {
			setUseEffectText("");
			setDefaultText(inputText);
		}
	}, [inputText]);

	const handleChange = ($event) => {
		setInputText($event.target.value);
	};

	// const handleCheck = () => {};

	return (
		<div className="App">
			<div className="container">
				{/* <label for="Message1">Default Output Screen</label> */}
				<textarea
					className="massage-bt w-50"
					rows="5"
					id="Message1"
					name="message"
					placeholder="Default Output Screen"
					readOnly={true}
					value={defaultText}
				/>

				{/* <label for="Message2">UseEffect Output Screen</label> */}
				<textarea
					className="massage-bt w-50"
					rows="5"
					id="Message2"
					name="message"
					placeholder="UseEffect Output Screen"
					readOnly={true}
					value={useEffectText}
				/>
				<input
					type="text"
					className="email-bt"
					placeholder="Enter Text..."
					name="text"
					onChange={handleChange}
					value={inputText}
					id="Text"
				/>
				{/* <button onClick={handleCheck}>Check Input</button> */}
			</div>
		</div>
	);
};

export default UseEffectDemo;
