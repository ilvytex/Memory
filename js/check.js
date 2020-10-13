function gotRight(cards) {
  cards.forEach(function (element) {
    element.classList.add("gotRight");
  });
  document.querySelector("#sound-gotRight").play();
}

function gotWrong(cards) {
  cards.forEach(function (element) {
    element.classList.add("gotWrong");
  });

  document.querySelector("#sound-gotWrong").play();

  setTimeout(function () {
    cards.forEach(function (element) {
      element.classList.remove("uncovered");
      element.classList.remove("gotWrong");
    });
  }, 1000);
}
