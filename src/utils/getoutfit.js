export function updateOutfitRecommendations(weatherData) {
    const femaleOutfit = document.getElementById("female-outfit");
    const maleOutfit = document.getElementById("male-outfit");

    // Example: Check temperature and precipitation to decide outfits
    if (weatherData.currentConditions.temp <= 5) {
        // Cold weather: Recommend a jacket or coat
        femaleOutfit.textContent = "Stay cozy and stylish with a warm winter jacket, scarf, and gloves.";
        maleOutfit.textContent = "Bundle up in a heavy coat, warm gloves, and a beanie for the perfect winter look.";
    } else if (weatherData.currentConditions.temp > 5 && weatherData.temp <= 15) {
        // Mild weather: Recommend a light jacket or sweater
        femaleOutfit.textContent = "Perfect for a casual day out: a light sweater, jeans, and a chic scarf.";
        maleOutfit.textContent = "Keep it cool and casual with a T-shirt, light jacket, and jeans.";
    } else {
        // Warm weather: Recommend lighter clothing
        femaleOutfit.textContent = "Perfect for the warm weather: a breezy T-shirt, shorts, and a stylish purse.";
        maleOutfit.textContent = "Perfect for sunny days: comfortable shorts and a lightweight, breathable T-shirt.";
    }
}