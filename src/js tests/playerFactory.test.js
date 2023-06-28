import { Player } from "../js files/factories/playerFactory";
import { GameBoard } from "../js files/factories/gameboardFactory";
import { Ship } from "../js files/factories/shipFactory";

describe("Player tests", () => {
  let player1;
  let pc;
  let testBoard1;
  let testBoard2;

  beforeEach(() => {
    player1 = new Player("Mew");
    pc = new Player("PC");
    testBoard1 = new GameBoard();
    testBoard2 = new GameBoard();
  });

  test("create a player with a name", () => {});

  test("create a PC opponent", () => {});

  test("create Player gameboard", () => {});

  test("create PC gameboard", () => {});

  test("places ship on a coordinate", () => {});

  test("places ship randomly on a coordinate", () => {});

  test("fire an attack on the gameboard", () => {});

  test("fire an attack off the gameboard and get an error", () => {});

  test("fire an attack on the same spot and get an error", () => {});

  test("alerts player if PC ship was sank", () => {});

  test("switches turns", () => {});
});
