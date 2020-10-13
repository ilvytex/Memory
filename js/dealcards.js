function shuffleCards(cards) {
  var result;
  var totalCards = cards.concat(cards);
  result = totalCards.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}

function dealCards(cards) {
  var table = document.querySelector("#table");
  var shuffledCards = shuffleCards(cards);
  table.innerHTML = "";

  shuffledCards.forEach(function (element) {
    var card = document.createElement("div");

    card.innerHTML =
      "<div class='card' data-value= " +
      element +
      ">" +
      "<div class='card__content'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card);
  });
}
