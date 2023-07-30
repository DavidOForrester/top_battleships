const Gameboard = require("../js/gameboard");

test("ship coordinate array", () => {
  const gameboard = Gameboard();
  gameboard.placeShip("destoryer", [5, 3], [5, 4]);
  gameboard.placeShip("submarine", [6, 3], [6, 4]);
  gameboard.placeShip("cruiser", [7, 3], [7, 4]);
  gameboard.placeShip("battleship", [8, 3], [8, 4]);
  gameboard.placeShip("carrier", [9, 3], [9, 4]);
  gameboard.receiveAttack([5, 3]);
  gameboard.receiveAttack([5, 4]);
  gameboard.receiveAttack([6, 3]);
  gameboard.receiveAttack([6, 4]);
  gameboard.receiveAttack([7, 3]);
  gameboard.receiveAttack([7, 4]);
  gameboard.receiveAttack([8, 3]);
  gameboard.receiveAttack([8, 4]);
  gameboard.receiveAttack([9, 3]);
  expect(gameboard.receiveAttack([9, 4])).toBe("gameover");
});
