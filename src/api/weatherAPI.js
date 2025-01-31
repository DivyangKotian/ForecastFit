const weatherApiKey = process.env.VISUAL_CROSSING_API_KEY;

export async function fetchWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/today?unitGroup=metric&include=current&key=${weatherApiKey}&contentType=json`);

        
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
