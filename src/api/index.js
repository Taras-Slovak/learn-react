/* eslint-disable no-console */
/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        },
      },
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getWeatherData = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: {
          lat,
          lon,
        },
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
