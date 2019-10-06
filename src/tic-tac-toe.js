class TicTacToe {
  constructor() {
    let matrix = [[null, null, null], [null, null, null], [null, null, null]];
    this.matrix = matrix;
    this.player = "x";
    this.winner = null;
    this.countHit = 0;
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.player;
      if (this.player === "o") {
        this.player = "x";
      } else {
        this.player = "o";
      }
      this.countHit += 1;
    }
  }

  isFinished() {
    if (this.getWinner() !== null || this.isDraw()) {
      return true;
    } else {
      return false;
    }
  }

  getWinner() {
    for (let index = 0; index < 3; index++) {
      if (
        this.matrix[index][0] === this.matrix[index][1] &&
        this.matrix[index][0] === this.matrix[index][2]
      ) {
        this.winner = this.matrix[index][0];
      }
      if (
        this.matrix[0][index] === this.matrix[1][index] &&
        this.matrix[0][index] === this.matrix[2][index]
      ) {
        this.winner = this.matrix[0][index];
      }
    }
    if (
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[0][0] === this.matrix[2][2]
    ) {
      this.winner = this.matrix[0][0];
    }
    if (
      this.matrix[0][2] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][0]
    ) {
      this.winner = this.matrix[1][1];
    }

    return this.winner;
  }

  noMoreTurns() {
    if (this.countHit === 9) {
      return true;
    }
    return false;
  }

  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
