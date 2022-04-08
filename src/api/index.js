import axios from 'axios';

const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`;

const options = {
	method: 'GET',
	params: {
		bl_latitude: '11.847676',
		tr_latitude: '12.838442',
		bl_longitude: '109.095887',
		tr_longitude: '109.149359'
	},
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
		'X-RapidAPI-Key':
			'5c402584c1mshf9ad44bea4d5e27p109868jsn37ce81a5a702'
	}
};

export const getPlaceData = async () => {
	try {
		const {
			data: { data }
		} = await axios.get(URL, options);
		return data;
	} catch (error) {
		console.log(error);
	}
};
