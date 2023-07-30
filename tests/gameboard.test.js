const Gameboard = require("../js/gameboard");

test("Play a game to completion", () => {
  const gameboard = Gameboard();
  gameboard.placeShip("destoryer", [5, 3], [5, 4]);
  gameboard.placeShip("submarine", [6, 3], [6, 5]);
  gameboard.placeShip("cruiser", [7, 3], [7, 5]);
  gameboard.placeShip("battleship", [8, 3], [8, 6]);
  gameboard.placeShip("carrier", [9, 3], [9, 7]);
  gameboard.receiveAttack([5, 3]);
  gameboard.receiveAttack([5, 4]);
  gameboard.receiveAttack([6, 3]);
  gameboard.receiveAttack([6, 4]);
  gameboard.receiveAttack([6, 5]);
  gameboard.receiveAttack([7, 3]);
  gameboard.receiveAttack([7, 4]);
  gameboard.receiveAttack([7, 5]);
  gameboard.receiveAttack([8, 3]);
  gameboard.receiveAttack([8, 4]);
  gameboard.receiveAttack([8, 5]);
  gameboard.receiveAttack([8, 6]);
  gameboard.receiveAttack([9, 3]);
  gameboard.receiveAttack([9, 4]);
  gameboard.receiveAttack([9, 5]);
  gameboard.receiveAttack([9, 6]);
  expect(gameboard.receiveAttack([9, 7])).toBe("gameover");
});
