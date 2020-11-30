import axios from 'axios';

const api = axios.create({
	// commented out address if testing using physical device
	// baseURL: 'http://192.168.0.18:3333',
	baseURL: 'http://localhost:3333',
});

export default api;
