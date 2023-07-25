const Ship = require("../js/ship");

const Gameboard = () => {
  const carrier = Ship(5, 0);
  const battleship = Ship(4, 0);
  const cruiser = Ship(3, 0);
  const submarine = Ship(3, 0);

  const placeShip = (shipType, coordinateStart, corrdinateEnd) => {
    if (shipType == "destroyer") {
      const destroyer = Ship(2, 0);
    }
  };

  const receiveAttack = (coordinates) => {};
  return { placeShip, receiveAttack };
};

const test = Gameboard();

test.placeShip("destoryer", [0,0], [1,0])

module.exports = Gameboard;
