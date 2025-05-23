import axios from 'axios';

const API_KEY = '32e4f094ec3bc10cfc58792002b24be4';

const pattern = /^\/weather\s+(.+)/i;

const execute = async (match) => {
  const city = match[1];

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      }
    );

    const data = response.data;

    return {
      city,
      description: data.weather[0].description,
      temperature: data.main.temp,
    };
  } catch (error) {
    console.error('Weather plugin error:', error.message);
    return {
      city,
      description: 'Error fetching weather data.',
      temperature: 'N/A',
    };
  }
};

export default {
  name: 'weather',
  pattern,
  execute,
};
