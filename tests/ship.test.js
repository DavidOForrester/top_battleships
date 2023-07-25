const Ship = require("../js/ship");

test("Create ship factory", () => {
  const destroyer = Ship(3, 0);
  expect(destroyer.length).toBe(3);
  expect(destroyer.hits).toBe(0);
  expect(destroyer.isSunk()).toBe(false);
});

test("Test ship sunk", () => {
  const destroyer = Ship(3, 0);
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});
