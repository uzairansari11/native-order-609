import axios from "axios";

export const getProductFromApi = async () => {
	try {
		let response = await axios.get(`http://localhost:8080/products`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};