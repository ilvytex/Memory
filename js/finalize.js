function end() {
  clearInterval(chrono);
  if (currentLevel < levels.length - 1) {
    document.querySelector("#levelUp").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
