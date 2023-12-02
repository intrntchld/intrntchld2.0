<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Windows 98 Music Player</title>
</head>
<body>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">Windows 98 Music Player</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="content">
      <audio id="audioPlayer" type="audio/mp3"></audio>
      <div class="controls">
        <button id="toggleButton">Play</button>
        <input id="volumeControl" type="range" min="0" max="1" step="0.1" value="1">
      </div>
      <div class="status">Status: Stopped</div>
      <div class="progress-bar">
        <div id="progressIndicator"></div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
/* styles.css */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #008080;
}

.window {
  width: 400px;
  margin: 50px auto;
  background-color: #C0C0C0;
  border: 2px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.title-bar {
  background: #008080;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-bar-text {
  color: #fff;
  font-weight: bold;
}

.title-bar-controls button {
  width: 16px;
  height: 16px;
  margin-left: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

.content {
  padding: 20px;
  text-align: center;
}

.controls {
  margin-bottom: 20px;
}

button, input {
  margin: 5px;
}

.status {
  font-size: 14px;
  color: #555;
}

.progress-bar {
  height: 10px;
  background-color: #fff;
  position: relative;
}

#progressIndicator {
  height: 100%;
  width: 0;
  background-color: red;
  position: absolute;
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audioPlayer');
  const toggleButton = document.getElementById('toggleButton');
  const volumeControl = document.getElementById('volumeControl');
  const status = document.querySelector('.status');
  const progressIndicator = document.getElementById('progressIndicator');

  let isPlaying = false;

  toggleButton.addEventListener('click', function() {
    if (!isPlaying) {
      isPlaying = true;
      status.textContent = 'Status: Playing';
      toggleButton.textContent = 'Pause';
      audioPlayer.src = 'audio-file.mp3'; // Replace with the actual path to your audio file
      audioPlayer.play();
      updateProgressBar();
    } else {
      isPlaying = false;
      status.textContent = 'Status: Paused';
      toggleButton.textContent = 'Play';
      audioPlayer.pause();
    }
  });

  volumeControl.addEventListener('input', function() {
    audioPlayer.volume = volumeControl.value;
  });

  function updateProgressBar() {
    const duration = audioPlayer.duration;
    const currentTime = audioPlayer.currentTime;
    const progressPercentage = (currentTime / duration) * 100;
    progressIndicator.style.width = progressPercentage + '%';

    if (isPlaying) {
      requestAnimationFrame(updateProgressBar);
    }
  }

  audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
    toggleButton.textContent = 'Play';
    status.textContent = 'Status: Stopped';
    progressIndicator.style.width = '0';
  });
});

