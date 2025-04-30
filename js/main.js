const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector(".pause-button")
const audioPlayer = document.getElementById('audio-player');


playButton.addEventListener("click", () => {
    audioPlayer.play();
    playButton.classList.add("hidden")
    pauseButton.classList.remove("hidden")
});

pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
    pauseButton.classList.add("hidden")
    playButton.classList.remove("hidden")
});

