import { GameBoard } from "./factories/gameboardFactory";
import { Ship } from "./factories/shipFactory";

let testGameBoard = new GameBoard();
let ship = new Ship("carrier", 5);

let cells = testGameBoard.placeShip(ship, 1, 1, 1, 5);
console.log(cells);
