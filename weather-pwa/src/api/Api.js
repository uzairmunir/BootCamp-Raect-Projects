import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '47f3e790fa0ca44015e86c6622107aa9';

export const fetchWeather = async (query) => {
  let { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  return data;
};
