import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("GameBoard", () => {
  let testBoard;

  beforeEach(() => {
    testBoard = new GameBoard();
  });

  test("create a 10x10 board", () => {
    expect(testBoard.board.length).toEqual(10);
  });

  test("check if the square has a ship placed in it", () => {
    testBoard.placeShip("carrier", 1, 1, 1, 5);
    expect(testBoard.board[0][0].hasShip).toBe(true);
  });

  test("prevents ship placed off the board", () => {});

  test("prevents ship placed on top of another ship", () => {});

  test("check what type of ship is placed", () => {});

  test("give error for an invalid ship", () => {});

  test("did attack land", () => {});

  test("did attack miss", () => {});

  test("did a ship sink", () => {});

  test("did the attack hit the correct ship", () => {});

  test("does ship have the record of hits", () => {});

  test("if game is over", () => {});
});
