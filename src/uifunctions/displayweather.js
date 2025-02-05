import { getUserInput } from "../utils/userInput";
import { getWeatherIcon } from "../utils/getIcon";

export function updateWeatherUI(weatherData) {
    const currentWeather = weatherData.currentConditions;
    const cityName = getUserInput(); // Use the user's input 

    document.getElementById("city-name").textContent = cityName || "Unknown City"; // Fallback if empty, might have to change this if i add autocomplete
    document.getElementById("date").textContent = new Date().toLocaleDateString(); // change if i add a 7 day section etc
    document.getElementById("icon").innerHTML = getWeatherIcon(currentWeather.icon); // write a func to assign icons to the icon we get from api data
    document.getElementById("temp").textContent = `${currentWeather.temp}°C`;  //maybe allow users to switch units of measurement, have to switch api calls
    document.getElementById("description").textContent = currentWeather.conditions;

    document.querySelectorAll(".detail-card")[0].textContent = `Humidity: ${currentWeather.humidity}%`;
    document.querySelectorAll(".detail-card")[1].textContent = `Wind: ${currentWeather.windspeed} km/h`;
    const precipitation = currentWeather.precip ?? 0; // If null, treat it as 0
    document.querySelectorAll(".detail-card")[2].textContent = `Precipitation: ${precipitation}%`;

}
