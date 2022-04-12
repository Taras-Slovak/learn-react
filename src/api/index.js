import axios from 'axios';

export const getPlaceData = async (type, sw, ne) => {
	try {
		const {
			data: { data }
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					tr_latitude: ne.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng
				},
				headers: {
					'X-RapidAPI-Host':
						'travel-advisor.p.rapidapi.com',
					'X-RapidAPI-Key':
						'8c3db628d6mshaf7eedccfd349cap1d2fcejsn39db1e5595c5'
				}
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getWeatherData = async (lat, lon) => {
	try {
		const { data } = await axios.get(
			'https://community-open-weather-map.p.rapidapi.com/weather',
			{
				params: {
					lat: lat,
					lon: lon
				},
				headers: {
					'X-RapidAPI-Host':
						'community-open-weather-map.p.rapidapi.com',
					'X-RapidAPI-Key':
						'5c402584c1mshf9ad44bea4d5e27p109868jsn37ce81a5a702'
				}
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
