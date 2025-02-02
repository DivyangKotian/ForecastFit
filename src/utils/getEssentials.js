export function updateEssentials(weatherData){
const essentials= document.querySelector(".essential-card");

essentials.textContent="";

if (weatherData.currentConditions.temp <= 5) {
    // Cold weather: Recommend a jacket or coat
    essentials.textContent ="Thermals, warm gloves, hat, and insulated boots. " ;
} else if (weatherData.currentConditions.temp > 5 && weatherData.temp <= 15) {
    // Mild weather: Recommend a light jacket or sweater
    essentials.textContent = "Light gloves, scarf,sunscreen if its sunny and a reusable water bottle." ;
} else {
    // Warm weather: Recommend lighter clothing
    essentials.textContent = "Sunglasses, sunscreen, and a hat for sun protection.";
}

   // only recommend an umbrella if precipitation chance is above 30%
   if (weatherData.currentConditions.precip > 30) {
    essentials.textContent += " Don't forget an umbrella or rain jacket as there is a 30% chance of precipitation.";
}

}