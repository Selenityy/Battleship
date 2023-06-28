import { Player } from "../js files/factories/playerFactory";
import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("Player tests", () => {
  let player1;
  let pc;
  let testBoard1;
  let testBoard2;
  let whoseTurnNext;

  beforeEach(() => {
    player1 = new Player("Mew");
    pc = new Player("PC");
    testBoard1 = player1.gameboard;
    testBoard2 = pc.gameboard;
    whoseTurnNext = "Mew";
  });

  test("create a player with a name", () => {
    expect(player1.name).toBe("Mew");
  });

  test("create a PC opponent", () => {
    expect(pc.name).toBe("PC");
  });

  test("create Player gameboard", () => {
    expect(player1.gameboard).toBe(testBoard1);
  });

  test("create PC gameboard", () => {
    expect(pc.gameboard).toBe(testBoard2);
  });

  test("alerts player if PC ship was sank", () => {
    let ship1 = player1.gameboard.ships[0];
    ship1.sunk = true;
    expect(testBoard1.ships[0].sunk).toBe(true);
  });

  test("switches turns", () => {
    let mockSwitchTurn = jest.fn();
    player1.gameboard.switchTurn = mockSwitchTurn;
    player1.switchTurn("Mew");
    expect(mockSwitchTurn).toHaveBeenCalledWith("PC");
  });
});
