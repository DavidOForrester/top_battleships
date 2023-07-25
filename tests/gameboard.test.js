const Gameboard = require("../js/gameboard");

test("ship coordinate array", () => {
  const gameboard = Gameboard();
  gameboard.placeShip("destoryer", [5, 3], [5, 7]);
  expect(gameboard.destoryerCoord).toStrictEqual([
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
  ]);
});
