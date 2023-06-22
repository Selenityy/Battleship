import { Ship } from "./shipFactory";

const width = 10;
const height = 10;
const rowLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

class GameBoard {
  constructor() {
    this.board = [];
  }

  initialize() {
    for (let y = 1; y <= height; y++) {
      let row = [];
      for (let x = 0; x < width; x++) {
        row.push({ x: rowLabels[x], y: y, hasShip: false, isShot: false });
      }
      this.board.push(row);
    }
  }

  placeShip(ship) {
    let shipType = ship;
    let shipLength = ship.length;

    // check if space is free, if not return false and prompt
    // if space is free, return true and place ship
  }

  receiveAttack(coordinates) {}

  trackShots(coordinates) {}

  checkIfSunk() {}

  checkIfEmpty() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (this.board[y][x].hasShip) {
          return false;
        }
      }
    }
    return true;
  }
}

export { GameBoard };
