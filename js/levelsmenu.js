function writeLevel() {
  var levelMenu = document.querySelector(".level-selector ul");
  levels.forEach(function (element, index) {
    var whatLevel = document.createElement("li");
    whatLevel.innerHTML =
      "<button class='level' data-level=" +
      index +
      ">Level " +
      (index + 1) +
      "</button>";
    levelMenu.appendChild(whatLevel);
  });
}

function changeLevel() {
  var level = parseInt(this.dataset.level);
  currentLevel = level;
  updateLevel();
  initiate;
}

function showLevelMenu(event) {
  event.stopPropagation();
  document.querySelector(".level-selector").classList.toggle("visible");
}

function hideLevelMenu() {
  document.querySelector(".level-selector").classList.remove("visible");
}

function clickOutside(event) {
  if (event.target.closest(".level-selector")) {
    return;
  }
  document.querySelector(".level-selector").classList.remove("visible");
}

function keyEscapeClose(event) {
  console.log(event.key);
  if (event.key === "Escape") {
    hideLevelMenu();
  }
}
