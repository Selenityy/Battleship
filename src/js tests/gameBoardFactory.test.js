import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("GameBoard", () => {
  let board;
  beforeEach(() => {
    board = new GameBoard();

    // carrier = new Ship("carrier", 5, "A1", "A5");
    // battleship = new Ship("battleship", 4, "B1", "B4");
    // cruiser = new Ship("cruiser", 3, "C1", "C3");
    // submarine = new Ship("submarine", 3, "D1", "D3");
    // destroyer = new Ship("destroyer", 2, "E1", "E3");
  });

  test("create board", () => {
    let expectedBoard = [
      [
        { x: "A", y: 1, value: null },
        { x: "B", y: 1, value: null },
        { x: "C", y: 1, value: null },
        { x: "D", y: 1, value: null },
        { x: "E", y: 1, value: null },
        { x: "F", y: 1, value: null },
        { x: "G", y: 1, value: null },
        { x: "H", y: 1, value: null },
        { x: "I", y: 1, value: null },
        { x: "J", y: 1, value: null },
      ],
      [
        { x: "A", y: 2, value: null },
        { x: "B", y: 2, value: null },
        { x: "C", y: 2, value: null },
        { x: "D", y: 2, value: null },
        { x: "E", y: 2, value: null },
        { x: "F", y: 2, value: null },
        { x: "G", y: 2, value: null },
        { x: "H", y: 2, value: null },
        { x: "I", y: 2, value: null },
        { x: "J", y: 2, value: null },
      ],
      [
        { x: "A", y: 3, value: null },
        { x: "B", y: 3, value: null },
        { x: "C", y: 3, value: null },
        { x: "D", y: 3, value: null },
        { x: "E", y: 3, value: null },
        { x: "F", y: 3, value: null },
        { x: "G", y: 3, value: null },
        { x: "H", y: 3, value: null },
        { x: "I", y: 3, value: null },
        { x: "J", y: 3, value: null },
      ],
      [
        { x: "A", y: 4, value: null },
        { x: "B", y: 4, value: null },
        { x: "C", y: 4, value: null },
        { x: "D", y: 4, value: null },
        { x: "E", y: 4, value: null },
        { x: "F", y: 4, value: null },
        { x: "G", y: 4, value: null },
        { x: "H", y: 4, value: null },
        { x: "I", y: 4, value: null },
        { x: "J", y: 4, value: null },
      ],
      [
        { x: "A", y: 5, value: null },
        { x: "B", y: 5, value: null },
        { x: "C", y: 5, value: null },
        { x: "D", y: 5, value: null },
        { x: "E", y: 5, value: null },
        { x: "F", y: 5, value: null },
        { x: "G", y: 5, value: null },
        { x: "H", y: 5, value: null },
        { x: "I", y: 5, value: null },
        { x: "J", y: 5, value: null },
      ],
      [
        { x: "A", y: 6, value: null },
        { x: "B", y: 6, value: null },
        { x: "C", y: 6, value: null },
        { x: "D", y: 6, value: null },
        { x: "E", y: 6, value: null },
        { x: "F", y: 6, value: null },
        { x: "G", y: 6, value: null },
        { x: "H", y: 6, value: null },
        { x: "I", y: 6, value: null },
        { x: "J", y: 6, value: null },
      ],
      [
        { x: "A", y: 7, value: null },
        { x: "B", y: 7, value: null },
        { x: "C", y: 7, value: null },
        { x: "D", y: 7, value: null },
        { x: "E", y: 7, value: null },
        { x: "F", y: 7, value: null },
        { x: "G", y: 7, value: null },
        { x: "H", y: 7, value: null },
        { x: "I", y: 7, value: null },
        { x: "J", y: 7, value: null },
      ],
      [
        { x: "A", y: 8, value: null },
        { x: "B", y: 8, value: null },
        { x: "C", y: 8, value: null },
        { x: "D", y: 8, value: null },
        { x: "E", y: 8, value: null },
        { x: "F", y: 8, value: null },
        { x: "G", y: 8, value: null },
        { x: "H", y: 8, value: null },
        { x: "I", y: 8, value: null },
        { x: "J", y: 8, value: null },
      ],
      [
        { x: "A", y: 9, value: null },
        { x: "B", y: 9, value: null },
        { x: "C", y: 9, value: null },
        { x: "D", y: 9, value: null },
        { x: "E", y: 9, value: null },
        { x: "F", y: 9, value: null },
        { x: "G", y: 9, value: null },
        { x: "H", y: 9, value: null },
        { x: "I", y: 9, value: null },
        { x: "J", y: 9, value: null },
      ],
      [
        { x: "A", y: 10, value: null },
        { x: "B", y: 10, value: null },
        { x: "C", y: 10, value: null },
        { x: "D", y: 10, value: null },
        { x: "E", y: 10, value: null },
        { x: "F", y: 10, value: null },
        { x: "G", y: 10, value: null },
        { x: "H", y: 10, value: null },
        { x: "I", y: 10, value: null },
        { x: "J", y: 10, value: null },
      ],
    ];
    board.initialize();
    expect(board.board).toEqual(expectedBoard);
  });

  //   test("place the ship", (ship, startCoord, endCoord) => {
  //     expect(placeShip("carrier", "A1", "A5")).toBe(true);
  //   });
});
