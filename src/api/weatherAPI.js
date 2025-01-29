const apiKey = process.env.WEATHERFORCAST_API_KEY;

export async function fetchWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`Weather data not fetched`);
        }   
        
        const weatherData = await response.json();
        return weatherData;
        
    } catch (error) {
        console.error(`Error fetching weather data:`, error);
        return null;
    }
}
