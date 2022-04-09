import axios from 'axios';

const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`;

export const getPlaceData = async (sw, ne) => {
	try {
		const {
			data: { data }
		} = await axios.get(URL, {
			method: 'GET',
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng
			},
			headers: {
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
				'X-RapidAPI-Key':
					'5c402584c1mshf9ad44bea4d5e27p109868jsn37ce81a5a702'
			}
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
