const Gameboard = require("../js/gameboard");

const Player = () => {
  let gameboard = Gameboard();

  const receiveMove = (type, coord) => {
    if (type == "AI") {
      //random generate attack
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      let gameOverCheck = gameboard.receiveAttack([x, y]);
    } else {
      let gameOverCheck = gameboard.receiveAttack(coord);
    }

    if(gameOverCheck == "gameover") {
      return gameOverCheck
    }
  };

  return { receiveMove };
};

module.exports = Player;

let player1 = Player();
let AIplayer = Player();

player1.receiveMove("AI");
AIplayer.receiveMove([0, 0]);
