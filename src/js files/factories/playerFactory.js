import { GameBoard } from "./gameboardFactory";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new GameBoard(this.name, this.switchTurn);
  }

  fireAttack(toWhichGameboard, x, y) {
    let result = toWhichGameboard.receiveAttack(toWhichGameboard, x, y);
    if (result === "Hit!" || result === "Miss!") {
      let nextTurnIs = toWhichGameboard.player;
      return nextTurnIs;
    }
    return result;
  }
}

export { Player };
