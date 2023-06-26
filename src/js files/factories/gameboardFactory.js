import { Ship } from "./shipFactory";

const width = 10;
const height = 10;

class GameBoard {
  constructor() {
    this.board = [];
    this.initialize();
  }

  initialize() {
    for (let y = 1; y <= height; y++) {
      let row = [];
      for (let x = 1; x <= width; x++) {
        row.push({ x, y, hasShip: false, isShot: false, shipType: null });
      }
      this.board.push(row);
    }
  }

  placeShip(ship, startX, startY, endX, endY) {
    let shipType = ship.name;
    let startCell = this.board[startY - 1][startX - 1];
    let endCell = this.board[endY - 1][endX - 1];

    // check the ship's direction
    let direction;
    if (startX === endX) {
      direction = "vertical";
    } else if (startY === endY) {
      direction = "horizontal";
    } else {
      console.log(
        "Invalid ship placement, please make sure the ship is places horizontally or vertically"
      );
      return false;
    }

    // find the cells between
    let betweenCells = [];
    if (direction === "horizontal") {
      const minY = Math.min(startY, endY);
      const maxY = Math.max(startY, endY);
      for (let y = minY; y < maxY; y++) {
        betweenCells.push(this.board[y - 1][startX - 1]);
      }
    } else if (direction === "vertical") {
      const minX = Math.min(startX, endX);
      const maxX = Math.max(startX, endX);
      for (let x = minX; x < maxX; x++) {
        betweenCells.push(this.board[startY - 1][x - 1]);
      }
    }

    // check is cell has a ship already, if not then place it
    let allCellsEmpty = betweenCells.every((cell) => !cell.hasShip);
    if (
      startCell.hasShip === false &&
      endCell.hasShip === false &&
      allCellsEmpty
    ) {
      return [
        (startCell.hasShip = true),
        (startCell.shipType = shipType),
        (endCell.hasShip = true),
        (endCell.shipType = shipType),
        (betweenCells.hasShip = true),
        (betweenCells.shipType = shipType),
      ];
    } else {
      console.log("Invalid location, place ship on a free cell.");
      return false;
    }
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
