import axios from 'axios';

const TOKEN = 'ckke501r01qnn8pdtjugckke501r01qnn8pdtjv0';

export default axios.create({
	baseURL: 'https://finnhub.io/api/v1',
	params: {
		token: TOKEN,
	},
});
