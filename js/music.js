const spotifySearch = (title, artist) => 
    `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`;

const song = (title, artist) => ({title, artist, link: spotifySearch(title, artist)})

const musicRecommendations = {
    happy: {
        description: "Upbeat and cheerful music to brighten your mood.",
        songs: [

            song("Happy", "Pharrell Williams"),
            song("Can't Stop the Feeling", "Justin Timberlake"),
            song("Good as Hell", "Lizzo"),
        ]
    },

    sad: {
        description: "Slow and emotional music for reflective moments.",
        songs: [
            song("Someone Like You", "Adele"),
            song("Fix You", "Coldplay"),
            song("When I Was Your Man", "Bruno Mars"),
        ]
    },

    calm: {
        description: "Relaxing music to help you unwind.",
        songs: [

            song("Weightless", "Marconi Union"),
            song("River Flows in You", "Yiruma"),
            song("Sunset Lover", "Petit Biscuit"),
        ]

    },

    energetic: {
        description: "High-energy music to keep you motivated.",
        songs: [

            song("Stronger", "Kanye West"),
            song("Eye of the Tiger", "Survivor"),
            song("Titanium", "David Guetta ft. Sia")
        ]
    }
};


const lastRecommendedSong = {};

function getMusicRecommendations(mood) {

    if (typeof mood !== "string") return null;

    const selectedMood = mood.trim().toLowerCase();
    const recommendations = musicRecommendations[selectedMood];

    if (!recommendations) return null;

    const availableSongs = recommendations.songs.filter(
        song => song !== lastRecommendedSong[selectedMood]
    );

    const randomIndex = Math.floor(Math.random() * availableSongs.length);

    const selectedSong = availableSongs[randomIndex];

    lastRecommendedSong[selectedMood] = selectedSong;

    return {
        description: recommendations.description,
        song: selectedSong
    };
}

