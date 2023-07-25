const Ship = require("../js/ship");

const Gameboard = () => {
  const carrier = Ship(5, 0);
  const battleship = Ship(4, 0);
  const cruiser = Ship(3, 0);
  const submarine = Ship(3, 0);
  const destroyer = Ship(2, 0);

  let carrierCoord = [];
  let battleshipCoord = [];
  let cruiserCoord = [];
  let submarineCoord = [];
  let destoryerCoord = [];

  const placeShip = (shipType, coordStart, corrdEnd) => {
    let coordArray = [];
    if (coordStart[0] == corrdEnd[0]) {
      for (let i = coordStart[1]; i <= corrdEnd[1]; i++) {
        coordArray.push([coordStart[0], i]);
      }
    } else {
      for (let i = coordStart[0]; i <= corrdEnd[0]; i++) {
        coordArray.push([i, coordStart[1]]);
      }
    }

    if (shipType == "carrier") {
      carrierCoord = coordArray;
    } else if (shipType == "battleship") {
      battleshipCoord = coordArray;
    } else if (shipType == "cruiser") {
      cruiserCoord = coordArray;
    } else if (shipType == "submarine") {
      submarineCoord = coordArray;
    } else if (shipType == "destoryer") {
      destoryerCoord = coordArray;
    }
  };

  const receiveAttack = (coord) => {};
  return { placeShip, receiveAttack, destoryerCoord };
};

module.exports = Gameboard;
