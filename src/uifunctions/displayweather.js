import { getUserInput } from "../utils/userInput";

export function updateWeatherUI(weatherData) {
    const currentWeather = weatherData.currentConditions;
    const cityName = getUserInput(); // Use the user's input instead of resolvedAddress

    document.getElementById("city-name").textContent = cityName || "Unknown City"; // Fallback if empty
    document.getElementById("date").textContent = new Date().toLocaleDateString();
    // document.getElementById("icon").innerHTML = getWeatherIcon(currentWeather.icon);
    document.getElementById("temp").textContent = `${currentWeather.temp}°C`;
    document.getElementById("description").textContent = currentWeather.conditions;

    document.querySelectorAll(".detail-card")[0].textContent = `Humidity: ${currentWeather.humidity}%`;
    document.querySelectorAll(".detail-card")[1].textContent = `Wind: ${currentWeather.windspeed} km/h`;
    document.querySelectorAll(".detail-card")[2].textContent = `Precipitation: ${currentWeather.precip}%`;
}
