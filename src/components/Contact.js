import { React, useEffect, useState } from "react";
import "../css/Contact.css";
import { Table } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { insert, view } from "../services/AjaxService";
// import { insert, view } from "../services/AxiosService";
import { insert, view, deleteD, updateU } from "../services/FetchService";
// import { event } from "jquery";

const Contact = () => {
	// let [form] = useState([]);
	// let [status, setStatus] = useState(true);

	// let [fname, setFname] = useState("");
	// let [fnum, setFnum] = useState("");
	// let [fmail, setFmail] = useState("");
	// let [fmessage, setFmessage] = useState("");

	// let changeName = (e) => {
	// 	setFname(e.target.value);
	// };

	// let changeNum = (e) => {
	// 	setFnum(e.target.value);
	// };

	// let changeMail = (e) => {
	// 	setFmail(e.target.value);
	// };

	// let changeMessage = (e) => {
	// 	setFmessage(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	let obj = { Name: fname, Number: fnum, Mail: fmail, Message: fmessage };
	// 	form.push(obj);
	// 	// form.push(fnum);
	// 	// form.push(fmail);
	// 	// form.push(fmessage);

	// 	// console.log("saurav");
	// 	e.preventDefault();
	// 	status = true;
	// 	setFname("");
	// 	setFnum("");
	// 	setFmail("");
	// 	setFmessage("");
	// };

	let obj = {
		id: "",
		fname: "",
		mobile: "",
		email: "",
		gender: "",
		message: "",
		hobbie: [],
	};
	let [formData, setFormData] = useState([]);
	let [inputs, setInputs] = useState(obj);
	const [errors, setErrors] = useState({});

	const displayData = () => {
		view("fetchData").then((res) => {
			let output = res;
			setFormData(output);
			// setFormData(res);
		});
	};

	useEffect(() => {
		displayData();
	}, []);

	const handleCheckbox = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		// inputs.hobbie.push(value);
		// setInputs(inputs.hobbie);
		let dummy = inputs.hobbie;
		dummy.push(value);

		setInputs((ccc) => ({ ...ccc, [name]: dummy }));
		console.log(inputs.hobbie);

		if (!name.length) {
			setErrors((ccc) => ({
				...ccc,
				hobbie: "Plz Select at least one Hobbie.",
			}));
			toast.error("Plz Select at least one Hobbie.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else {
			// console.log(value);
			setErrors((ccc) => ({ ...ccc, [name]: "" }));
		}
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		const id = event.target.id;
		// const lengthMax = event.target.maxLength;
		const lengthMin = event.target.minLength;

		setInputs((ccc) => ({ ...ccc, [name]: value }));

		if (value === "") {
			setErrors((ccc) => ({ ...ccc, [name]: `Plz Insert ${id} First.` }));
		} else if (value.length < lengthMin) {
			setErrors((ccc) => ({
				...ccc,
				[name]: `${id} must be at least ${lengthMin} characters long`,
			}));
		} else {
			setErrors((ccc) => ({ ...ccc, [name]: "" }));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputs.fname === "") {
			setErrors((ccc) => ({ ...ccc, fname: "Plz Insert Fullname First." }));
			toast.error("Plz Insert Fullname First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (inputs.mobile === "") {
			setErrors((ccc) => ({ ...ccc, mobile: "Plz Insert Mobile First." }));
			toast.error("Plz Insert Mobile First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (inputs.email === "") {
			setErrors((ccc) => ({ ...ccc, email: "Plz Insert Email First." }));
			toast.error("Plz Insert Email First.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (inputs.gender === "") {
			setErrors((ccc) => ({ ...ccc, gender: "Plz Select Gender." }));
			toast.error("Plz Select Gender.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else if (inputs.hobbie.length === 0) {
			setErrors((ccc) => ({
				...ccc,
				hobbie: "Plz Select at least one Hobbie.",
			}));
			toast.error("Plz Select at least one Hobbie.", {
				theme: "colored",
				autoClose: 2000,
			});
		} else {
			/* -----------------------Ajax Service------------------------*/
			// inputs["hobbie"] = inputs.hobbie; // for "hobbie[]" -> 'hobbie'

			// let response = insert(inputs);
			// if (response === "") {
			// 	toast.error("Error occur while inserting data", {
			// 		theme: "colored",
			// 		autoClose: 2000,
			// 	});
			// } else {
			// 	toast.success("Data inserted successfully", {
			// 		theme: "colored",
			// 		autoClose: 2000,
			// 	});
			// }
			// let output = view();
			// setFormData(output);
			// console.log(output);

			/* -----------------------Axios Service------------------------*/
			// insert(inputs).then((res) => {
			// 	if (res == "") {
			// 		toast.error("Error occur while inserting data", {
			// 			theme: "colored",
			// 			autoClose: 2000,
			// 		});
			// 	} else {
			// 		toast.success("Data inserted successfully", {
			// 			theme: "colored",
			// 			autoClose: 2000,
			// 		});
			// 	}
			// });

			// view().then((res) => {
			// 	let output = res;
			// 	setFormData(output);
			// 	// setFormData(res);
			// });

			/* -----------------------Fetch Service------------------------*/

			insert(inputs, "fetchData").then((res) => {
				if (res === "") {
					toast.error("Error occur while inserting data", {
						theme: "colored",
						autoClose: 2000,
					});
				} else {
					displayData();
					toast.success("Data inserted successfully", {
						theme: "colored",
						autoClose: 2000,
					});
				}
			});

			console.log(formData);

			/*-----------Form Resetting-------------*/
			setErrors({});
			setInputs(obj);
			document.getElementById("formId").reset();

			console.log(inputs);
		}
	};

	const deleteUser = (id) => {
		console.log(id);
		deleteD(id, "fetchData").then((res) => {
			if (res === "") {
				toast.error("Error occur while deleting data", {
					theme: "colored",
					autoClose: 2000,
				});
			} else {
				displayData();
				toast.success("Data deleted successfully", {
					theme: "colored",
					autoClose: 2000,
				});
			}
		});
	};

	let updateId = 0;
	const selectUser = (id) => {
		updateId = id - 1;
		console.log(formData[updateId]);
		let item = formData[updateId];
		setInputs(item);
	};

	// const updateUser = () => {
	// 	console.log(updateId);
	// 	updateU(inputs, updateId, "fetchData").then((res) => {
	// 		if (res === "") {
	// 			toast.error("Error occur while updating data", {
	// 				theme: "colored",
	// 				autoClose: 2000,
	// 			});
	// 		} else {
	// 			displayData();
	// 			toast.success("Data updated successfully", {
	// 				theme: "colored",
	// 				autoClose: 2000,
	// 			});
	// 		}
	// 	});
	// 	console.log(formData[updateId]);
	// };

	return (
		<>
			<div className="contact_section layout_padding">
				<div className="container">
					<h1 className="contact_taital">Request A Call Back</h1>
					<ToastContainer />
					<div className="email_text">
						<form id="formId" onSubmit={handleSubmit}>
							<div className="form-group">
								<span className="fieldName">Fullname</span>
								<span>{errors.fname}</span>
								<input
									type="text"
									className="email-bt"
									name="fname"
									value={inputs.fname || ""}
									onChange={handleChange}
									placeholder="Enter Fullname.."
									id="Fullname"
									minLength="10"
								/>
							</div>
							<div className="form-group">
								<span className="fieldName">Phone Number</span>

								<span>{errors.mobile}</span>
								<input
									type="number"
									className="email-bt"
									placeholder="Enter Phone Number..."
									name="mobile"
									onChange={handleChange}
									value={inputs.mobile || ""}
									id="Mobile"
									minLength="10"
								/>
							</div>
							<div className="form-group">
								<span className="fieldName">Email</span>

								<span>{errors.email}</span>
								<input
									type="email"
									className="email-bt"
									placeholder="Enter Email..."
									name="email"
									onChange={handleChange}
									value={inputs.email || ""}
									id="Email"
								/>
							</div>

							<div className="form-group">
								<span className="fieldName">Gender</span>
								<span>{errors.gender}</span>
								<div className="radioBtn">
									<input
										type="radio"
										className="email-bt"
										name="gender"
										onChange={handleChange}
										value="Male"
										id="male"
									/>
									<h3>Male</h3>
								</div>
								<br />
								<div className="radioBtn">
									<input
										type="radio"
										className="email-bt"
										name="gender"
										onChange={handleChange}
										value="Female"
										id="female"
									/>
									<h3>Female</h3>
								</div>
							</div>

							<div className="form-group">
								<span className="fieldName">Hobbies</span>

								<span>{errors.hobbie}</span>
								<div className="radioBtn">
									<input
										type="checkbox"
										className="email-bt"
										name="hobbie"
										onChange={handleCheckbox}
										value="Playing Games"
									/>
									<h3>Playing Games</h3>
								</div>

								<div className="radioBtn">
									<input
										type="checkbox"
										className="email-bt"
										name="hobbie"
										onChange={handleCheckbox}
										value="Cooking"
									/>
									<h3>Cooking</h3>
								</div>

								<div className="radioBtn">
									<input
										type="checkbox"
										className="email-bt"
										name="hobbie"
										onChange={handleCheckbox}
										value="Reading Book"
									/>
									<h3>Reading Book</h3>
								</div>

								<div className="radioBtn">
									<input
										type="checkbox"
										className="email-bt"
										name="hobbie"
										onChange={handleCheckbox}
										value="Travelling"
									/>
									<h3>Travelling</h3>
								</div>

								<div className="radioBtn">
									<input
										type="checkbox"
										className="email-bt"
										name="hobbie"
										onChange={handleCheckbox}
										value="Coding"
									/>
									<h3>Coding</h3>
								</div>
							</div>

							<div className="form-group">
								<span className="fieldName">Message</span>

								<textarea
									className="massage-bt"
									placeholder="Enter Message..."
									rows="5"
									id="Message"
									name="message"
									onChange={handleChange}
									value={inputs.message || ""}
								/>
							</div>
							<div className="send_btn">
								<input type="submit" value="Send" />
								{/* <input type="button" value="Update" onClick={updateUser} /> */}
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				{/* {status ? ( */}

				<Table variant="primary" striped bordered>
					<thead>
						<tr>
							<td>Sr No.</td>
							<td>Name</td>
							<td>Number</td>
							<td>Mail</td>
							<td>Gender</td>
							<td>Hobbies</td>
							<td>Message</td>
							<td colSpan={2}>Action</td>
						</tr>
					</thead>
					<tbody>
						{formData &&
							formData.map((ind, i) => {
								return (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{ind.fname}</td>
										<td>{ind.mobile}</td>
										<td>{ind.email}</td>
										<td>{ind.gender}</td>
										<td>
											<Table>
												<tbody>
													{ind.hobbie &&
														ind.hobbie.map((hobby, j) => {
															return (
																<tr key={j}>
																	<td>{hobby}</td>
																</tr>
															);
														})}
												</tbody>
											</Table>
										</td>

										<td>{ind.message}</td>
										<td>
											<button
												type="button"
												className="btn btn-secondary"
												onClick={() => deleteUser(ind.id)}
											>
												Delete
											</button>
										</td>
										<td>
											<button
												type="button"
												className="btn btn-secondary"
												onClick={() => selectUser(ind.id)}
											>
												Update
											</button>
										</td>
									</tr>
								);
							})}
					</tbody>
				</Table>
				{/* ) : null} */}
			</div>
			<br />
			<br />
			{/* <div className="container d-flex justify-content-center">
				<button onClick={() => setStatus(!status)}>Toggle</button>
			</div> */}
		</>
	);
};

export default Contact;
