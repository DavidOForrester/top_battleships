import _ from "lodash";
import "./style.css";
import Player from "./player.js";
import * as dom from "./dom.js";

dom.pageLoad();

const player1 = Player();
const player2 = Player();

player1.gameboard.placeShip("destoryer", [1, 3], [1, 4]);
player1.gameboard.placeShip("submarine", [3, 3], [3, 5]);
player1.gameboard.placeShip("cruiser", [5, 3], [5, 5]);
player1.gameboard.placeShip("battleship", [7, 3], [7, 6]);
player1.gameboard.placeShip("carrier", [9, 3], [9, 7]);

player1.gameboard.receiveAttack([5, 3]);

//console.log(player1.gameboard.checkGameover())
