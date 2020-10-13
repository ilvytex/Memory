function updateCounter() {
  var textMove;
  moves++;
  textMove = moves;

  if (moves > levels[currentLevel].maxMoves && !easyMode) {
    gameOver();
    return;
  }

  if (moves < 10) {
    textMove = "0" + moves;
  }
  document.querySelector("#mov").innerText = textMove;
}

function maxCounter() {
  var maxMovesText = levels[currentLevel].maxMoves;
  if (maxMovesText < 10) {
    maxMovesText = "0" + maxMovesText;
  }
  document.querySelector("#mov-total").innerText = maxMovesText;
}
