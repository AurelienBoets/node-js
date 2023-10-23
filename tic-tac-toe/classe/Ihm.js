import Game from "./Game.js";
import { input } from "../tool.js";

class Ihm {
  constructor() {
    this.run = true;
    this.game = new Game();
    this.player = "X";
  }

  async selectPosition() {
    let choice = "";
    let column = "";
    let row = "";
    let isFair = false;

    while (!isFair) {
      console.log("Selectionnez une colonne");
      while (column === "") {
        choice = await input("Saisir une option: ");
        switch (choice) {
          case "1":
            column = "1";
            break;
          case "2":
            column = "2";
            break;
          case "3":
            column = "3";
            break;
        }
      }

      console.log("Selectionnez une ligne");
      while (row === "") {
        choice = await input("Saisir une option: ");
        switch (choice) {
          case "1":
            row = "1";
            break;
          case "2":
            row = "2";
            break;
          case "3":
            row = "3";
            break;
        }
      }
      choice = row + ":" + column;
      if (this.game.isEmpty(choice)) {
        isFair = true;
        let index = this.game.tab.findIndex(
          (element) => element.position === choice
        );
        this.game.tab[index].value = this.player;
      }
      row = "";
      column = "";
      if (!isFair) {
        console.log("Selectionnez une case vide");
      }
    }
  }

  async play() {
    while (this.run === true) {
      let display = "";

      this.game.tab.forEach((element) => {
        if (element.position[2] === "1" && element.position[0] !== "1") {
          display += `|\n| ${element.value === "" ? " " : element.value} `;
        } else if (element.position[2] === "3" && element.position[0] === "3") {
          display += `| ${element.value === "" ? " " : element.value} | `;
        } else {
          display += `| ${element.value === "" ? " " : element.value} `;
        }
      });
      console.log(display);
      this.player = this.player === "X" ? "O" : "X";
      await this.selectPosition();
      if (this.game.isWinning()) {
        this.run = false;
      }
      if (this.game.isDraw()) {
        this.run = false;
      }
    }
  }
}

export default Ihm;
