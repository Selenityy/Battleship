import { Ship } from "./shipFactory";

const width = 9;
const height = 9;

class GameBoard {
  constructor() {
    this.board = [];
    this.initialize();
  }

  initialize() {
    for (let y = 0; y <= height; y++) {
      let row = [];
      for (let x = 0; x <= width; x++) {
        row.push({ x, y, hasShip: false, isShot: false, shipType: null });
      }
      this.board.push(row);
    }
  }

  placeShip(ship, startX, startY, endX, endY) {
    // check if cell is valid
    if (
      startX < 0 ||
      startX > width ||
      startY < 0 ||
      startY > height ||
      endX < 0 ||
      endX > width ||
      endY < 0 ||
      endY > height
    ) {
      console.log(
        "Invalid coordinates, please provide valid X & Y coordinates."
      );
      return false;
    }

    let shipType = ship.name;
    let startCell = this.board[startY][startX];
    let endCell = this.board[endY][endX];

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

    // check is cell has a ship already, if not then place it
    if (this.checkIfEmpty(startCell, endCell) === true) {
      (startCell.hasShip = true),
        (startCell.shipType = shipType),
        (endCell.hasShip = true),
        (endCell.shipType = shipType);

      // cells in-between
      if (direction === "vertical") {
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        const x = startX;
        for (let y = minY; y <= maxY; y++) {
          let cell = this.board[y][x];
          cell.hasShip = true;
          cell.shipType = shipType;
        }
      } else if (direction === "horizontal") {
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX);
        const y = startY;
        for (let x = minX; x <= maxX; x++) {
          let cell = this.board[y][x];
          cell.hasShip = true;
          cell.shipType = shipType;
        }
      }
      return true;
    } else {
      console.log("Invalid location, place ship on a free cell.");
      return false;
    }
  }

  receiveAttack(coordinates) {}

  trackShots(coordinates) {}

  checkIfSunk() {}

  checkIfEmpty(startCell, endCell) {
    if (startCell.hasShip === true || endCell.hasShip === true) {
      return false;
    }
    return true;
  }
}

export { GameBoard };
