import { environment } from "../environments/environment";
import $ from "jquery";

let BASE_URL = environment.backendUrl;
// let BASE_URL = "http://localhost:5000/";

export const insert = (data) => {
	let response = "";
	$.ajax({
		url: `${BASE_URL}ajaxData`,
		method: "POST",
		data: data,
		async: false,
		success: function (res) {
			response = res;
		},
		error: function (err) {
			response = err;
		},
	});
	return response;
};

export const view = () => {
	let response = "";
	$.ajax({
		url: `${BASE_URL}ajaxData`,
		method: "GET",
		data: {},
		async: false,
		success: function (res) {
			response = res;
		},
		error: function (err) {
			response = err;
		},
	});
	return response;
};
