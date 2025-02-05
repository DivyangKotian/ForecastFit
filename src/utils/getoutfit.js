export function updateOutfitRecommendations(weatherData) {
    const femaleOutfit = document.getElementById("female-outfit");
    const maleOutfit = document.getElementById("male-outfit");

    if (weatherData.currentConditions.temp <= 5) {
        // Cold weather: Recommend a jacket or coat
        femaleOutfit.textContent = "For Women: Stay cozy and stylish with a warm winter jacket, scarf, and gloves.";
        maleOutfit.textContent = "For Men: Bundle up in a heavy coat, warm gloves, and a beanie for the perfect winter look.";
    } else if (weatherData.currentConditions.temp > 5 && weatherData.currentConditions.temp <= 15) {
        // Mild weather: Recommend a light jacket or sweater
        femaleOutfit.textContent = "For Women: Perfect for a casual day out: a light sweater, jeans, and a chic scarf.";
        maleOutfit.textContent = "For Men: Keep it cool and casual with a T-shirt, light jacket, and jeans.";
    } else {
        // Warm weather: Recommend lighter clothing
        femaleOutfit.textContent = "For Women: Perfect for the warm weather: a breezy T-shirt, shorts, and a stylish purse.";
        maleOutfit.textContent = "For Men: Perfect for sunny days: comfortable shorts and a lightweight, breathable T-shirt.";
    }
}
