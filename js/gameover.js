function gameOver() {
  clearInterval(chrono);
  document.querySelector("#gameOver").classList.add("visible");
}

function timeUp() {
  document.querySelector("#timeUp").classList.add("visible");
}
