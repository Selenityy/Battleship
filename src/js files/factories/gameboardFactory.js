import { Ship } from "./shipFactory";

const width = 9;
const height = 9;

class GameBoard {
  constructor() {
    this.board = [];
    this.ships = [
      new Ship("carrier", 5),
      new Ship("battleship", 4),
      new Ship("cruiser", 3),
      new Ship("submarine", 3),
      new Ship("destroyer", 2),
    ];
    this.gg = false;
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
      return "Invalid coordinates, please provide valid X & Y coordinates.";
    }

    let shipName = ship.name;
    let startCell = this.board[startY][startX];
    let endCell = this.board[endY][endX];

    // check the ship's direction
    let direction;
    if (startX === endX) {
      direction = "vertical";
    } else if (startY === endY) {
      direction = "horizontal";
    } else {
      return "Invalid ship placement, please make sure the ship is places horizontally or vertically";
    }

    // check is cell has a ship already, if not then place it
    if (this.checkIfEmpty(startCell, endCell) === true) {
      (startCell.hasShip = true),
        (startCell.shipType = shipName),
        (endCell.hasShip = true),
        (endCell.shipType = shipName);

      // cells in-between
      if (direction === "vertical") {
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        const x = startX;
        for (let y = minY; y <= maxY; y++) {
          let cell = this.board[y][x];
          cell.hasShip = true;
          cell.shipType = shipName;
        }
      } else if (direction === "horizontal") {
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX);
        const y = startY;
        for (let x = minX; x <= maxX; x++) {
          let cell = this.board[y][x];
          cell.hasShip = true;
          cell.shipType = shipName;
        }
      }
      return true;
    } else {
      return "Invalid location, place ship on a free cell.";
    }
  }

  receiveAttack(x, y) {
    if (y < 0 || y >= height || x < 0 || x >= width) {
      return "Invalid coordinates, please provide valid X & Y coordinates.";
    }

    let cell = this.board[y][x];

    if (cell.isShot) {
      return "This spot has already been attacked, please attack a different coordinate.";
    } else {
      cell.isShot = true;
    }

    if (cell.hasShip) {
      let shipName = cell.shipType;
      let ship = this.ships.find((ship) => ship.name === shipName);
      ship.hit();
      if (ship.isSunk()) {
        if (this.checkIfGG) {
          return "GG!";
        } else {
          return "Hit! Ship has been sunk";
        }
      } else {
        return "Hit!";
      }
    } else {
      return "Miss!";
    }
  }

  checkIfEmpty(startCell, endCell) {
    if (startCell.hasShip === true || endCell.hasShip === true) {
      return false;
    }
    return true;
  }

  checkIfGG() {
    let allShipsSunk = this.ships.every((ship) => ship.sunk === true);
    if (allShipsSunk) {
      this.gg = true;
      return true;
    }
  }
}

export { GameBoard };
