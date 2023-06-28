import { GameBoard } from "./gameboardFactory";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new GameBoard(this, this.switchTurn);
  }

  fireAttack() {}

  switchTurn = (playersTurnOver) => {
    if (playersTurnOver === this.name) {
      this.gameboard.switchTurn("PC");
    } else if (playersTurnOver === pc) {
      this.gameboard.switchTurn(this.name);
    }
  };
}

export { Player };
