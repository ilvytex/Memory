function levelUp() {
  currentLevel++;
}

function updateLevel() {
  var textLevel = currentLevel + 1;
  if (textLevel < 10) {
    textLevel = "0" + textLevel;
  }
  document.querySelector("#level").innerText = textLevel;
}

function loadNewLevel() {
  levelUp();
  updateLevel();
  initiate;
}
