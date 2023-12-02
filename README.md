# intrntchld2.0
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* CSS code here */
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
    }

    /* ... (rest of the CSS code) ... */
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
    // JavaScript code here
    function showError(icon) {
      alert(`Error: ${icon} is not accessible. This is a simulation.`);
    }

    // ... (rest of the JavaScript code) ...
  </script>
</body>
</html>
