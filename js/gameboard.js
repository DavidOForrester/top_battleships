const Ship = require("../js/ship");

const Gameboard = () => {
  let carrier = Ship(2, 0);
  let battleship = Ship(2, 0);
  let cruiser = Ship(2, 0);
  let submarine = Ship(2, 0);
  let destroyer = Ship(2, 0);

  let carrierCoord = [];
  let battleshipCoord = [];
  let cruiserCoord = [];
  let submarineCoord = [];
  let destoryerCoord = [];

  let missedCoord = [];

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

  const receiveAttack = (coord) => {
    let hitCheck = false;
    for (let i = 0; i < destoryerCoord.length; i++) {
      if (
        destoryerCoord[i][0] == coord[0] &&
        destoryerCoord[i][1] == coord[1]
      ) {
        destroyer.hit();
        hitCheck = true;
      }
    }
    for (let i = 0; i < submarineCoord.length; i++) {
      if (
        submarineCoord[i][0] == coord[0] &&
        submarineCoord[i][1] == coord[1]
      ) {
        submarine.hit();
        hitCheck = true;
      }
    }
    for (let i = 0; i < cruiserCoord.length; i++) {
      if (cruiserCoord[i][0] == coord[0] && cruiserCoord[i][1] == coord[1]) {
        cruiser.hit();
        hitCheck = true;
      }
    }
    for (let i = 0; i < battleshipCoord.length; i++) {
      if (
        battleshipCoord[i][0] == coord[0] &&
        battleshipCoord[i][1] == coord[1]
      ) {
        battleship.hit();
        hitCheck = true;
      }
    }
    for (let i = 0; i < carrierCoord.length; i++) {
      if (carrierCoord[i][0] == coord[0] && carrierCoord[i][1] == coord[1]) {
        carrier.hit();
        hitCheck = true;
      }
    }
    if (hitCheck !== true) {
      missedCoord.push(coord);
    }

    checkGameover();
  };

  const checkGameover = () => {
    if (
      destroyer.isSunk() == true &&
      submarine.isSunk() == true &&
      cruiser.isSunk() == true &&
      battleship.isSunk() == true &&
      carrier.isSunk() == true
    ) {
      return "gameover";
    }
  };
  return { placeShip, receiveAttack, missedCoord };
};

module.exports = Gameboard;
