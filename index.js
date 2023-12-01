document.addEventListener("DOMContentLoaded", function() {
    const rainSound = document.getElementById('rainSound');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        if (rainSound.paused) {
            rainSound.play().catch(e => {
                console.error("Audio playback failed:", e);
            });
            playButton.textContent = "Turn Rain Off";
        } else {
            rainSound.pause();
            playButton.textContent = "Play Rain Sound";
        }
    });

    const container = document.getElementById('rainBackgroundContainer');

    // Create raindrops
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');

        const xPosition = Math.random() * 100;
        const dropWidth = Math.random() * 1.5;
        const dropHeight = Math.random() * (80 - 20) + 20; // Between 20 and 80
        const animationDuration = Math.random() * (0.7 - 0.3) + 0.3; // Between 0.3 and 0.7 seconds

        drop.style.left = `${xPosition}%`;
        drop.style.width = `${dropWidth}px`;
        drop.style.height = `${dropHeight}px`;
        drop.style.opacity = Math.random();
        drop.style.animationDuration = `${animationDuration}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(drop);
    }
});
