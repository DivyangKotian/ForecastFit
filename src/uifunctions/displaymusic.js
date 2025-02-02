export function updateMusicUI(playlists) {
    const musicContainer = document.querySelectorAll('.playlist-card');

    for (let i = 0; i < playlists.length && i < musicContainer.length; i++) {
        const playlistTitle = document.createElement('a');
        playlistTitle.classList.add('playlist-title');
        playlistTitle.textContent = playlists[i].name;
        playlistTitle.href = playlists[i].external_urls.spotify;
        playlistTitle.target = '_blank';

        musicContainer[i].textContent = ''; // Clear previous content
        musicContainer[i].appendChild(playlistTitle); // Append new element
    }
}
