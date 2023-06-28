import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

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

  test("did a ship sink", () => {});

  test("if game is over", () => {});
});
