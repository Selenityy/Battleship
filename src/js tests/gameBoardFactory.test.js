import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("GameBoard tests", () => {
  let testBoard;
  let carrier;
  let battleship;

  beforeEach(() => {
    testBoard = new GameBoard();
    carrier = new Ship("carrier", 5);
    battleship = new Ship("battleship", 4);
  });

  test("creating a board should have a length of 10", () => {
    expect(testBoard.board.length).toEqual(10);
  });

  test("place ship and make sure the cell sees hasShip has true", () => {
    testBoard.placeShip("carrier", 1, 1, 1, 5);
    expect(testBoard.board[1][1].hasShip).toBe(true);
  });

  test("placing a ship off the board should result in a false", () => {
    expect(testBoard.placeShip(carrier, 15, 15, 15, 20)).toBe(false);
  });

  test("place two ships, the second one should not be able to be placed on top of the first one", () => {
    testBoard.placeShip(carrier, 5, 5, 5, 9);
    expect(testBoard.placeShip(battleship, 5, 5, 5, 8)).toBe(false);
    expect(testBoard.board[5][5].shipType).toBe("carrier");
  });

  test("check what type of ship is placed in all it's cells", () => {
    testBoard.placeShip(carrier, 0, 0, 0, 4);
    expect(testBoard.board[0][0].shipType).toBe("carrier");
    expect(testBoard.board[1][0].shipType).toBe("carrier");
    expect(testBoard.board[2][0].shipType).toBe("carrier");
    expect(testBoard.board[3][0].shipType).toBe("carrier");
    expect(testBoard.board[4][0].shipType).toBe("carrier");
    expect(testBoard.board[5][0].shipType).toBe(null);
  });

  test("give error for an invalid ship", () => {});

  test("did attack land", () => {});

  test("did attack miss", () => {});

  test("did a ship sink", () => {});

  test("did the attack hit the correct ship", () => {});

  test("does ship have the record of hits", () => {});

  test("if game is over", () => {});
});
