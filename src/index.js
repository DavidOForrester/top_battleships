import _ from "lodash";
import "./style.css";
import Player from "./player.js";

const player1 = Player();
const player2 = Player();

console.log(player1.receiveMove(null, [0,0]));
console.log(player1.receiveMove(null, [0,0]));