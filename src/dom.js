export function pageLoad() {
  const game = document.createElement("div");
  game.id = "game";
  document.body.appendChild(game);

  const header = document.createElement("div");
  header.id = "header";
  header.innerText = "Battleships"
  game.appendChild(header);

  const main = document.createElement("div");
  main.id = "main";
  game.appendChild(main);

  const footer = document.createElement("div");
  footer.id = "footer";
  game.appendChild(footer);
}
