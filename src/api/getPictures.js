import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getPictures() {
	try {
		const response = await axios.get(`${baseUrl}/pictures`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
