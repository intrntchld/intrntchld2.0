<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
    }

    .desktop {
      background: #008080;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    .icon {
      background: #C0C0C0;
      padding: 5px;
      margin: 5px;
      cursor: pointer;
    }

    #musicPlayer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background: #FFFFFF;
      border: 2px solid #000000;
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
    }

    .hidden {
      display: none;
    }

    #playlist {
      margin-top: 10px;
    }

    .moving-icon {
      width: 20px;
      height: 20px;
      background: red;
      position: absolute;
      top: 0;
      left: 0;
      animation: moveIcon 2s linear infinite;
    }

    @keyframes moveIcon {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(0);
      }
    }
  </style>
  <title>Windows 98 Music Player</title>
</head>
<body>
  <div id="desktop" class="desktop">
    <div class="icon" onclick="showError('My Computer')">My Computer</div>
    <div class="icon" onclick="showError('Network')">Network</div>
    <div class="icon" onclick="showError('Trash')">Recycle Bin</div>
    <div class="icon" onclick="showError('Documents')">Documents</div>
    <div class="icon" onclick="showError('Settings')">Settings</div>
  </div>

  <div id="musicPlayer" class="hidden">
    <div class="title-bar">
      <div class="title-bar-text">Windows 98 Music Player</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" onclick="minimize()"></button>
        <button aria-label="Maximize" onclick="maximize()"></button>
        <button aria-label="Close" onclick="closePlayer()"></button>
      </div>
    </div>
    <div id="radioPage" class="content">
      <button onclick="playMusic()">Play Music</button>
      <input type="file" id="fileInput" onchange="handleFileSelect()" />
      <div id="playlist"></div>
    </div>
  </div>

  <script>
    function showError(icon) {
      alert(`Error: ${icon} is not accessible. This is a simulation.`);
    }

    function playMusic() {
      const radioPage = document.getElementById('radioPage');
      const movingIcon = document.createElement('div');
      movingIcon.classList.add('moving-icon');
      radioPage.appendChild(movingIcon);
      // Placeholder for actual audio playback logic
    }

    function handleFileSelect() {
      const fileInput = document.getElementById('fileInput');
      const playlist = document.getElementById('playlist');

      const files = fileInput.files;

      for (const file of files) {
        const listItem = document.createElement('div');
        listItem.textContent = file.name;
        playlist.appendChild(listItem);
      }
    }

    function minimize() {
      // Placeholder for minimize logic
    }

    function maximize() {
      // Placeholder for maximize logic
    }

    function closePlayer() {
      const movingIcon = document.querySelector('.moving-icon');
      if (movingIcon) {
        movingIcon.remove();
        // Placeholder for actual audio stop logic
      }
      document.getElementById('musicPlayer').classList.add('hidden');
      document.getElementById('desktop').classList.remove('hidden');
    }
  </script>
</body>
</html>
