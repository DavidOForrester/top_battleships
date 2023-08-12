import _ from "lodash";
import "./style.css";
import Player from "./player.js";
import * as dom from "./dom.js";

const player1 = Player("Human");
const player2 = Player("AI");

dom.pageLoad(player1, player2);

player1.gameboard.placeShip("destoryer", [1, 3], [1, 4]);
player1.gameboard.placeShip("submarine", [3, 3], [3, 5]);
player1.gameboard.placeShip("cruiser", [5, 3], [5, 5]);
player1.gameboard.placeShip("battleship", [7, 3], [7, 6]);
player1.gameboard.placeShip("carrier", [9, 3], [9, 7]);

player2.gameboard.placeShip("destoryer", [0, 3], [0, 4]);
player2.gameboard.placeShip("submarine", [2, 3], [2, 5]);
player2.gameboard.placeShip("cruiser", [4, 3], [4, 5]);
player2.gameboard.placeShip("battleship", [6, 3], [6, 6]);
player2.gameboard.placeShip("carrier", [8, 3], [8, 7]);



//console.log(player1.gameboard.checkGameover())
