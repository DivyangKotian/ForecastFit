async function getAccessToken() {
    const clientId=process.env.SPOTIFY_CLIENT_ID;
    const clientSecret=process.env.SPOTIFY_CLIENT_SECRET;

   try{
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        },
        body: 'grant_type=client_credentials'
    });    

    const data= await response.json();
    return data.access_token;
   }
   catch(error){
    console.log(error);
    return null;
   }
}

function randomizePlaylists(playlists) {            // randomize it cause spotify suggests the same playlists in same order
    return playlists.sort(() => Math.random() - 0.5); // Randomizes the order
}

export async function getPlaylist(mood) {
    try {
        const accessToken = await getAccessToken();
        if (!accessToken) {
            throw new Error('Failed to get access token');
        }

        // Search for playlists that include mood and also check for "top 100" and filter by follower count
        const response = await fetch(`https://api.spotify.com/v1/search?q=${mood}%20top%20100&type=playlist&limit=20&locale=en_US`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Unable to fetch playlists');
        }

        const data = await response.json();
        const playlists = data.playlists.items.filter(item => item !== null); // removing all null data from fetched data

        if (playlists.length === 0) {
            console.log('No playlists found for mood:', mood);
            // Optionally, handle this case by retrying with different terms.
            return null;
        }

        const randomizedPlaylists = randomizePlaylists(playlists); // to keep it fresh
        const random4Playlists = randomizedPlaylists.splice(0, 4); // we will display 4 playlists
        console.log(mood) //debugging
        return random4Playlists;
    } catch (error) {
        console.error(error);
        return null;
    }
}
