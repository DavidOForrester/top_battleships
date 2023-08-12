import Gameboard from "./gameboard";

const Player = (type) => {
  let gameboard = Gameboard(type);
  let playerType = type;

  const receiveMove = (coord) => {
    let match = "No";
    if (playerType == "Human") {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      coord = [x, y];
    }

    let guesses = gameboard.missedCoord.concat(gameboard.hitCoord);

    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i][0] == coord[0] && guesses[i][1] == coord[1]) {
        match = "Yes";
      }
    }

    if (match == "No") {
      return gameboard.receiveAttack(coord);
    } else {
      return "Guess again";
    }
  };

  return { receiveMove, gameboard };
};

export default Player;
