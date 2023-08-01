const Gameboard = require("../js/gameboard");

const Player = () => {
  let gameboard = Gameboard();

  const makeMove = (type, coord) => {
    if (type == "AI") {
      //random generate attack
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      gameboard.receiveAttack([x, y]);
    } else {
      gameboard.receiveAttack(coord);
    }
  };

  return { makeMove };
};

module.exports = Player;

let player1 = Player();

player1.makeMove("AI");
