import { Ship } from "../js files/factories/shipFactory";

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship("carrier", 5, "A1");
  });

  test("create ship", () => {
    expect(ship).toEqual({
      name: "carrier",
      length: 5,
      coordinates: "A1",
      hitCount: 0,
      sunk: false,
    });
  });

  test("hit ship", () => {
    const originalHitCount = ship.hitCount;

    ship.hit();

    expect(ship.hitCount).toBe(originalHitCount + 1);
    expect(ship.isSunk()).toBe(false);
  });

  test("sink ship", () => {
    while (!ship.isSunk()) {
      ship.hit();
    }
    expect(ship.hitCount).toBe(ship.length);
    expect(ship.isSunk()).toBe(true);
  });
});
