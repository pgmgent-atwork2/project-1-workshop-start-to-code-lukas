const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
    const playButton = item.querySelector(".play-button");
    const pauseButton = item.querySelector(".pause-button");
    const audioPlayer = item.querySelector("audio");

    playButton.addEventListener("click", () => {
        audioPlayer.play();
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
    });

    pauseButton.addEventListener("click", () => {
        audioPlayer.pause();
        pauseButton.classList.add("hidden");
        playButton.classList.remove("hidden");
    });
});

