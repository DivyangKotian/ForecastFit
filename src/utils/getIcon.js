const weatherIcons = {              //mapping possible values to emojis, instead of using svgs
    "clear-day": "Clear skies ☀️",      //including description cause i may delete the prev description box, if this can inlcude both desc and emoji
    "clear-night": "Clear night 🌙",
    "partly-cloudy-day": "Partly cloudy ⛅",
    "partly-cloudy-night": "Partly cloudy night 🌙",
    "cloudy": "Overcast ☁️",
    "rain": "Rain showers 🌧",
    "showers-day": "Light rain showers 🌦️",
    "showers-night": "Light rain showers 🌧️",
    "thunderstorm": "Thunderstorms ⛈️",
    "snow": "Snowfall ❄️",
    "fog": "Foggy 🌫️"
};


export function getWeatherIcon(icon){       //pass currentConditions.icon here
    return weatherIcons[icon];              //mapping corresponding description and emoji
}