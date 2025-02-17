const geoCodeApiKey= process.env.OPENWEATHER_API_KEY;
export async function getCords(cityName) {
    try{
        const response=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${geoCodeApiKey}`)
        
        if(!response.ok){
            throw new Error(`unable to fetch ${cityName} cords`);
        }

        const data= await response.json();
        console.log(data)
        if (data.length === 0) {
            console.error("No location found!");
            return null;
          }
          const { lat, lon } = data[0]; // create 2 variables lat and lon and access those properties from the data object 
          console.log(`latitude for ${cityName} is ${lat}`);
          console.log(`longitude for ${cityName} is ${lon}`);
          return { lat, lon }; // Return the coordinates
    }
    catch(error){
        console.log(`unable to fetch data `+ error);   
        return null; // Handle errors
    }
}