import { Ship } from "../js files/shipTypes";

test("create a new ship through the ship factory function, have the name match the proper length and set timesHit and sunk to 0/false as default", () => {
  expect(new Ship("carrier", 5)).toEqual({
    name: "carrier",
    length: 5,
    hitCount: 0,
    sunk: false,
  });
});

