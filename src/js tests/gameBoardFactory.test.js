import { GameBoard } from "../js files/factories/gameboardFactory";

describe("GameBoard tests", () => {
  let testBoard;

  beforeEach(() => {
    testBoard = new GameBoard();
    testBoard.placeShip(testBoard.ships[0], 1, 1, 1, 5);
  });

  test("creating a board should have a length of 10", () => {
    expect(testBoard.board.length).toEqual(10);
  });

  test("place ship and make sure the cell sees hasShip has true", () => {
    expect(testBoard.board[1][1].hasShip).toBe(true);
  });

  test("placing a ship off the board should result in an error", () => {
    expect(testBoard.placeShip(testBoard.ships[0], 15, 15, 15, 20)).toBe(
      "Invalid coordinates, please provide valid X & Y coordinates."
    );
  });

  test("place two ships, the second one should not be able to be placed on top of the first one", () => {
    expect(testBoard.placeShip(testBoard.ships[1], 1, 1, 1, 5)).toBe(
      "Invalid location, place ship on a free cell."
    );
    expect(testBoard.board[1][1].shipType).toBe("carrier");
  });

  test("places ship randomly on a coordinate", () => {
    let ship = testBoard.ships[1];
    let result = testBoard.randomizePlacement(ship);
    expect(result).toBe(true);
  });

  test("check what type of ship is placed in all it's cells", () => {
    expect(testBoard.board[1][1].shipType).toBe("carrier");
    expect(testBoard.board[2][1].shipType).toBe("carrier");
    expect(testBoard.board[3][1].shipType).toBe("carrier");
    expect(testBoard.board[4][1].shipType).toBe("carrier");
    expect(testBoard.board[5][1].shipType).toBe("carrier");
    expect(testBoard.board[6][1].shipType).toBe(null);
  });

  test("did attack land", () => {
    expect(testBoard.receiveAttack(1, 1)).toBe("Hit!");
    expect(testBoard.board[1][1].isShot).toBe(true);
    expect(testBoard.board[1][1].shipType).toBe("carrier");
  });

  test("did attack miss", () => {
    expect(testBoard.receiveAttack(5, 5)).toBe("Miss!");
    expect(testBoard.board[5][5].isShot).toBe(true);
    expect(testBoard.board[5][5].hasShip).toBe(false);
  });

  test("attacking the same spot results in an error", () => {
    testBoard.receiveAttack(0, 0);
    expect(testBoard.board[0][0].isShot).toBe(true);
    expect(testBoard.receiveAttack(0, 0)).toBe(
      "This spot has already been attacked, please attack a different coordinate."
    );
  });

  test("give error if the attack is off the board", () => {
    expect(testBoard.receiveAttack(15, 15)).toBe(
      "Invalid coordinates, please provide valid X & Y coordinates."
    );
  });

  test("does the Ship class track the hitCount", () => {
    testBoard.receiveAttack(1, 1);
    expect(testBoard.ships[0].hitCount).toBe(1);
    testBoard.receiveAttack(1, 2);
    expect(testBoard.ships[0].hitCount).toBe(2);
  });

  test("did a ship sink", () => {
    testBoard.receiveAttack(1, 1);
    testBoard.receiveAttack(1, 2);
    testBoard.receiveAttack(1, 3);
    testBoard.receiveAttack(1, 4);
    testBoard.receiveAttack(1, 5);
    expect(testBoard.ships[0].sunk).toBe(true);
  });

  test("if game is over", () => {
    let ship1 = testBoard.ships[0];
    let ship2 = testBoard.ships[1];
    let ship3 = testBoard.ships[2];
    let ship4 = testBoard.ships[3];
    let ship5 = testBoard.ships[4];
    ship1.sunk = true;
    ship2.sunk = true;
    ship3.sunk = true;
    ship4.sunk = true;
    ship5.sunk = true;
    testBoard.checkIfGG();
    expect(testBoard.gg).toBe(true);
  });
});
