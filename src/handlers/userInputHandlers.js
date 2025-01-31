import { getUserInput } from '../utils/userInput.js';
import { fetchWeatherData } from '../api/weatherAPI.js';
import { getCords } from '../api/geoCodeapi.js';
import { updateWeatherUI } from '../uifunctions/displayweather.js';

export async function handleUserSubmit() {
  const cityName = getUserInput();  // Get city from input
  const coordinates = await getCords(cityName);

  if (coordinates) {
      const { lat, lon } = coordinates;
      const weatherData = await fetchWeatherData(lat, lon);   // fetch the following datasets
      console.log(weatherData);
      updateWeatherUI(weatherData);  // update the following ui elements
  } else {
      console.log('Failed to retrieve weather data.');
  }
}

