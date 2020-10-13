var easyMode = false;
var moves = 0;
var chrono;
var cardIcons = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
var currentLevel = 0;
var levels = [
  {
    cards: cardIcons[0],
    maxMoves: 3
  },
  {
    cards: cardIcons[0].concat(cardIcons[1]),
    maxMoves: 8
  },
  {
    cards: cardIcons[0].concat(cardIcons[1], cardIcons[2]),
    maxMoves: 12
  },
  {
    cards: cardIcons[0].concat(
      cardIcons[1],
      cardIcons[2],
      cardIcons[3]
    ),
    maxMoves: 25
  },
  {
    cards: cardIcons[0].concat(
      cardIcons[1],
      cardIcons[2],
      cardIcons[3],
      cardIcons[4]
    ),
    maxMoves: 60
  }
];
