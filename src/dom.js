export function pageLoad(player1, player2) {
  //game div
  const game = document.createElement("div");
  game.id = "game";
  document.body.appendChild(game);

  //structure divs
  const header = document.createElement("div");
  header.id = "header";
  header.innerText = "Battleships";
  game.appendChild(header);

  const main = document.createElement("div");
  main.id = "main";
  game.appendChild(main);

  const footer = document.createElement("div");
  footer.id = "footer";
  game.appendChild(footer);

  //divs within the main
  const myGameboard = document.createElement("div");
  myGameboard.id = "my-gameboard";
  main.appendChild(myGameboard);

  //Human gameboard
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.id = "my board: " + i + ", " + j;
      cell.className = "game-cell";
      myGameboard.appendChild(cell);
    }
  }

  const enemyGameboard = document.createElement("div");
  enemyGameboard.id = "enemy-gameboard";
  main.appendChild(enemyGameboard);

  //AI gameboard
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.id = "enemy board: " + i + ", " + j;
      cell.className = "game-cell";
      cell.addEventListener("click", () => {
        let moveStatus = player2.receiveMove([i, j]);
        if (moveStatus == "hit") {
          cell.setAttribute("class", "hit-cell");
          player1.receiveMove();
        } else if (moveStatus == "miss") {
          cell.setAttribute("class", "miss-cell");
          player1.receiveMove()
        } else if (moveStatus == "Guess again") {
        }
      });
      enemyGameboard.appendChild(cell);
    }
  }
}

export function updateDomForShip(coordArray) {
  for (let i = 0; i < coordArray.length; i++) {
    let x = coordArray[i][0];
    let y = coordArray[i][1];

    const gameCell = document.getElementById("my board: " + x + ", " + y);

    gameCell.setAttribute("class", "ship-cell");
  }
}

export function updateDomAIMove(status, coord) {
  let x = coord[0]
  let y = coord[1]

  if(status == "hit") {
    const gameCell = document.getElementById("my board: " + x + ", " + y);

    gameCell.setAttribute("class", "hit-cell");
  } else if (status == "miss") {
    const gameCell = document.getElementById("my board: " + x + ", " + y);

    gameCell.setAttribute("class", "miss-cell");
  } else {
    console.log("weird things happening")
  }
}
