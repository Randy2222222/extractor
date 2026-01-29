const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');

const songs = [
    { title: "Lazy", artist: "Deep Purple", src: "Lazy.mp3" },
    { title: "What Baby Wants", artist: "Alice Cooper", src: "Baby.mp3" },
    { title: "Sitting On The Dock By The Bay", artist: "Otis Redding", src: "Sitting On The Dock By The Bay Otis Redding.Otis Platoon.mp3" },
    { title: "Low Rider", artist: "War", src: "War.mp3" },
    { title: "Mary Had A Little Lamb", artist: "Deep Purple", src: "Mary Had A Little Lamb.mp3" },
    { title: "I Know Where I Belong", artist: "Joe Bonamassa", src: "joe.mp3" },
    { title: "The Sound of Silence", artist: "Simon And Garfunkel", src: "The Sound Of Silence.mp3" }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    trackName.textContent = song.title;
    trackArtist.textContent = song.artist;
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
previousButton.addEventListener('click', previousSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Load the first song
loadSong(songs[currentSongIndex]);
