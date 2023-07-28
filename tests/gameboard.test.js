const Gameboard = require("../js/gameboard");

test("ship coordinate array", async () => {
  const gameboard = Gameboard();  
  await gameboard.placeShip("destoryer", [5, 3], [5, 4]);
  expect(gameboard.destoryerCoord).toStrictEqual([
    [5, 3],
    [5, 4],
  ]);
});
