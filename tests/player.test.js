import Player from "../js/player";

test("Guess again", () => {
  let player = Player();
  player.receiveMove(null, [0, 0]);
  expect(player.receiveMove(null, [0, 0])).toBe("Guess again");
});
