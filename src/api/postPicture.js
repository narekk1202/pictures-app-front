import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function postPicture(data) {
	try {
		const response = await axios.post(`${baseUrl}/pictures`, data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
