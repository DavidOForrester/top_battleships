const Gameboard = require("../js/gameboard");

const Player = () => {
  let gameboard = Gameboard();
  let gameOverCheck = null;

  const receiveMove = (type, coord) => {
    let match = "No";
    if (type == "AI") {
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
      gameOverCheck = gameboard.receiveAttack(coord);
    } else {
      return "Guess again"
    }
  };

  return { receiveMove, gameOverCheck };
};

module.exports = Player;

