import axios from 'axios';

const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`;

export const getPlaceData = async (sw, ne) => {
	try {
		const {
			data: { data }
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng
			},
			headers: {
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
				'X-RapidAPI-Key':
					'8c3db628d6mshaf7eedccfd349cap1d2fcejsn39db1e5595c5'
			}
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
