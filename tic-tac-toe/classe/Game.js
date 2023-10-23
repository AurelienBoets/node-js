class Game {
  constructor() {
    this.tab = [
      {
        position: "1:1",
        value: "",
      },
      {
        position: "1:2",
        value: "",
      },
      {
        position: "1:3",
        value: "",
      },
      {
        position: "2:1",
        value: "",
      },
      {
        position: "2:2",
        value: "",
      },
      {
        position: "2:3",
        value: "",
      },
      {
        position: "3:1",
        value: "",
      },
      {
        position: "3:2",
        value: "",
      },
      {
        position: "3:3",
        value: "",
      },
    ];
  }

  reset() {
    this.tab = [
      {
        position: "1:1",
        value: "",
      },
      {
        position: "1:2",
        value: "",
      },
      {
        position: "1:3",
        value: "",
      },
      {
        position: "2:1",
        value: "",
      },
      {
        position: "2:2",
        value: "",
      },
      {
        position: "2:3",
        value: "",
      },
      {
        position: "3:1",
        value: "",
      },
      {
        position: "3:2",
        value: "",
      },
      {
        position: "3:3",
        value: "",
      },
    ];
  }

  isWinning() {
    let row1 = [this.tab[0], this.tab[1], this.tab[2]];
    let row2 = [this.tab[3], this.tab[4], this.tab[5]];
    let row3 = [this.tab[6], this.tab[7], this.tab[8]];
    let col1 = [this.tab[0], this.tab[3], this.tab[6]];
    let col2 = [this.tab[1], this.tab[4], this.tab[7]];
    let col3 = [this.tab[2], this.tab[5], this.tab[8]];
    let diagonal1 = [this.tab[0], this.tab[4], this.tab[8]];
    let diagonal2 = [this.tab[2], this.tab[4], this.tab[6]];

    if (
      row1.every(
        (element) => element.value !== "" && element.value === row1[0].value
      )
    ) {
      console.log(`Le joueur ${row1[0].value} a gagné`);
      return true;
    }
    if (
      row2.every(
        (element) => element.value !== "" && element.value === row2[0].value
      )
    ) {
      console.log(`Le joueur ${row2[0].value} a gagné`);
      return true;
    }
    if (
      row3.every(
        (element) => element.value !== "" && element.value === row3[0].value
      )
    ) {
      console.log(`Le joueur ${row3[0].value} a gagné`);
      return true;
    }
    if (
      col1.every(
        (element) => element.value !== "" && element.value === col1[0].value
      )
    ) {
      console.log(`Le joueur ${col1[0].value} a gagné`);
      return true;
    }
    if (
      col2.every(
        (element) => element.value !== "" && element.value === col2[0].value
      )
    ) {
      console.log(`Le joueur ${col2[0].value} a gagné`);
      return true;
    }
    if (
      col3.every(
        (element) => element.value !== "" && element.value === col3[0].value
      )
    ) {
      console.log(`Le joueur ${col3[0].value} a gagné`);
      return true;
    }
    if (
      diagonal1.every(
        (element) =>
          element.value !== "" && element.value === diagonal1[0].value
      )
    ) {
      console.log(`Le joueur ${diagonal1[0].value} a gagné`);
      return true;
    }
    if (
      diagonal2.every(
        (element) =>
          element.value !== "" && element.value === diagonal2[0].value
      )
    ) {
      console.log(`Le joueur ${diagonal2[0].value} a gagné`);
      return true;
    }
    return false;
  }

  isDraw() {
    if (this.tab.every((element) => element === "")) {
      console.log("Match nul");
      return true;
    }
    return false;
  }

  isEmpty(position) {
    let selectedPosition = this.tab.find(
      (element) => element.position === position
    );
    if (selectedPosition.value === "") {
      return true;
    }
    return false;
  }
}

export default Game;
