export function getMoodFromWeather(weather) {
    if (weather === 'clear' || weather === 'sunny') {
        return 'happy'; // Bright, sunny weather feels happy
    } else if (weather === 'cloudy' || weather === 'overcast') {
        return 'chill'; // Overcast can be relaxing or calm
    } else if (weather === 'rain' || weather === 'drizzle') {
        return 'melancholic'; // Rain often feels melancholic
    } else if (weather === 'thunderstorm') {
        return 'metal'; // Thunderstorms bring intense vibes
    } else if (weather === 'snow') {
        return 'cozy'; // Snow feels cozy and peaceful
    } else if (weather === 'windy') {
        return 'energetic'; // Windy weather can feel intense or energetic
    } else if (weather === 'foggy') {
        return 'mysterious'; // Fog creates a mysterious atmosphere
    }
    return 'relaxed'; // Default fallback mood
}
