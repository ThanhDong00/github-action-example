const { add, subtract } = require("./app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(2);
});

test("subtracts 5 - 2 to equal 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("adds negative numbers correctly", () => {
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

test("subtracts negative numbers correctly", () => {
  expect(subtract(2, 5)).toBe(-3);
  expect(subtract(0, 0)).toBe(0);
});

test("adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(3);
});
