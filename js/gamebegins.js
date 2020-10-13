writeLevel();

// Asignamos eventos iniciales
document.querySelectorAll(".restart").forEach(function (element) {
  element.addEventListener("click", restart);
});

document
  .querySelector("#regular")
  .addEventListener("click", startRegular);
document
  .querySelector("#easy")
  .addEventListener("click", startEasy);

document
  .querySelector("#show-level")
  .addEventListener("click", showLevelMenu);
document
  .querySelector("#hide-level")
  .addEventListener("click", hideLevelMenu);

document.querySelectorAll(".level").forEach(function (element) {
  element.addEventListener("click", changeLevel);
});

document.querySelector("#uplevel").addEventListener("click", loadNewLevel);

document.querySelector("body").addEventListener("click", clickOutside);

document.addEventListener("keydown", keyEscapeClose);

document.querySelector("#welcomeMessage").classList.add("visible");
