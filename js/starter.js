function initiate {
  moves = 0;
  dealCards(levels[currentLevel].cards);
  document.querySelector("#mov").innerText = "00";
  maxCounter();
  document.querySelector(".level-selector").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeUp").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#levelUp").classList.remove("visible");

  document.querySelectorAll(".card").forEach(function (element) {
    element.addEventListener("click", flip);
  });

  if (!easyMode) {
    chronoStart();
  } else {
    document.querySelector("#chrono").classList.add("hidden-chrono");
  }
}

function restart() {
  currentLevel = 0;
  updateLevel();
  initiate;
}

function startRegular() {
  easyMode = false;
  document.querySelector("#welcomeMessage").classList.remove("visible");
  initiate;
  document.querySelector(".show-level").classList.add("hidden-controls");
}

function startEasy() {
  easyMode = true;
  document.querySelector("#welcomeMessage").classList.remove("visible");
  initiate;
}
