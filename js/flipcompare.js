function flip() {
  var uncovereds;
  var pendingCards;
  var totaluncovereds = document.querySelectorAll(
    ".uncovered:not(.gotRight)"
  );

  if (totaluncovereds.length > 1) {
    return;
  }

  this.classList.add("uncovered");
  document
    .querySelector("#card-sound")
    .cloneNode()
    .play();

  uncovereds = document.querySelectorAll(".uncovered:not(.gotRight)");
  if (uncovereds.length < 2) {
    return;
  }

  check(uncovereds);
  updateCounter();
  pendingCards = document.querySelectorAll(".card:not(.gotRight)");
  if (pendingCards.length === 0) {
    setTimeout(end, 1000);
  }
}

function check(cardsToCheck) {
  if (
    cardsToCheck[0].dataset.value === cardsToCheck[1].dataset.value
  ) {
    gotRight(cardsToCheck);
  } else {
    gotWrong(cardsToCheck);
  }
}
