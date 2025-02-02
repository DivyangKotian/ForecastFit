import { getUserInput } from '../utils/userInput.js';
import { fetchWeatherData } from '../api/weatherAPI.js';
import { getCords } from '../api/geoCodeapi.js';
import { updateWeatherUI } from '../uifunctions/displayweather.js';
import { getMoodFromWeather } from '../utils/getmood.js';
import { getPlaylist } from '../api/musicapi.js';
import { updateMusicUI } from '../uifunctions/displaymusic.js';
import { updateOutfitRecommendations } from '../utils/getoutfit.js';
import { updateEssentials } from '../utils/getEssentials.js';

export async function handleUserSubmit() {
  const cityName = getUserInput();  // Get city from input
  const coordinates = await getCords(cityName);

  if (coordinates) {
      const { lat, lon } = coordinates;
      const weatherData = await fetchWeatherData(lat, lon);   // fetch the following datasets
      console.log(weatherData);
      const mood=getMoodFromWeather(weatherData.currentConditions.conditions)
      console.log(weatherData.currentConditions.conditions) //debugging
      const playlist= await getPlaylist(mood);

      console.log(playlist)
      
      updateWeatherUI(weatherData);  // update the following ui elements
      updateMusicUI(playlist);
      updateOutfitRecommendations(weatherData);
      updateEssentials(weatherData);

    } else {
      console.log('Failed to retrieve weather data.');
  }
}

