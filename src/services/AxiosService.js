import Http from "./HttpClient";

export const insert = (data) => {
	return Http.post("axiosData", data)
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};

export const view = () => {
	return Http.get("axiosData")
		.then((response) => {
			if (response.status === 200 && response != null) {
				// console.log(response);
				return response.data;
			} else {
				return response.statusText;
			}
		})
		.catch((error) => {
			return error;
		});
};
