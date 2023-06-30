import { Player } from "./factories/playerFactory";
import "../../src/styles.css";

// game loop
// set up a new game by creating players & game boards with predetermined coords
// html: display both player names and boards/ships from the gameboard class
// methods to render the game boards & take user's input for attacking
// attacking should be from clicking a coord on enemy gameboard
// game loop steps through the game using only methods from objects
// no new funcs in game loop, if needed figure out which module to put it in
// create win conditions

const removeForm = () => {
  const formDiv = document.getElementById("formBox");
  while (formDiv.firstChild) {
    formDiv.removeChild(formDiv.lastChild);
  }
};

let startBtn = document.getElementById("startBtn");
startBtn.onclick = function (event) {
  event.preventDefault();
  const formName = document.getElementById("username").value;
  if (formName === "") {
    alert("Please input your name.");
    return false;
  }
  const player1 = new Player(formName);
  const pc = new Player("PC");
  const player1Board = player1.gameboard;
  const pcBoard = pc.gameboard;

  removeForm();

  console.log(player1);
  console.log(player1Board);
  console.log(pc);
  console.log(pcBoard);
};
