import { Player } from "../js files/factories/playerFactory";
import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("Player tests", () => {
  let player1;
  let pc;
  let testBoard1;
  let testBoard2;
  let nextTurnIs;

  beforeEach(() => {
    player1 = new Player("Mew");
    pc = new Player("PC");
    testBoard1 = player1.gameboard;
    testBoard2 = pc.gameboard;
    nextTurnIs = null;
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

  test("player fires attack & switches turns", () => {
    testBoard2.placeShip(testBoard2.ships[3], 3, 3, 5, 3);
    nextTurnIs = player1.fireAttack(testBoard2, 3, 3);
    expect(nextTurnIs).toBe("PC");
    testBoard1.placeShip(testBoard1.ships[3], 3, 3, 5, 3);
    nextTurnIs = pc.fireAttack(testBoard1, 3, 3);
    expect(nextTurnIs).toBe("Mew");
  });

  test("alerts player if PC ship was sank", () => {
    let ship1 = player1.gameboard.ships[0];
    ship1.sunk = true;
    expect(testBoard1.ships[0].sunk).toBe(true);
  });
});
