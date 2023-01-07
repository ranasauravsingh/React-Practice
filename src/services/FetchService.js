import { environment } from "../environments/environment";
let BASE_URL = environment.backendUrl;

export const insert = (data, path) => {
	return fetch(`${BASE_URL}${path}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const view = (path) => {
	return fetch(`${BASE_URL}${path}`)
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const deleteD = (id, path) => {
	return fetch(`${BASE_URL}${path}/${id}`, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const updateU = (data, id, path) => {
	return fetch(`${BASE_URL}${path}/${id}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err.message);
		});
};
