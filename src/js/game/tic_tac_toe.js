'use strict';
var //logger = require('../log/log'),
  game = {
    cell: [],
    turn: 1,
    init: function () {
      var i, j;
      for (i = 0; i < 3; i++) {
        this.cell[i] = [];
        for (j = 0; j < 3; j++) {
          this.cell[i][j] = document.getElementById("cell-" + i + "-" + j);
          this.cell[i][j].text = '';
        }
      }
      this.turn = 1;
    },
    isWin: function (tag) {
      for (var i = 0; i < 3; i++) {
        // check x direction
        if (this.cell[i][0].text === this.cell[i][1].text &&
          this.cell[i][0].text === this.cell[i][2].text &&
          this.cell[i][1].text === this.cell[i][2].text &&
          this.cell[i][0].text === tag) {
          return true;
        }

        // check y direction
        if (this.cell[0][i].text === this.cell[1][i].text &&
          this.cell[0][i].text === this.cell[2][i].text &&
          this.cell[1][i].text === this.cell[2][i].text &&
          this.cell[0][i].text === tag) {
          return true;
        }
      }

      //check /,\ direction
      if (this.cell[0][0].text === this.cell[1][1].text &&
        this.cell[0][0].text === this.cell[2][2].text &&
        this.cell[1][1].text === this.cell[2][2].text &&
        this.cell[0][0].text === tag) {
        return true;
      } else if (this.cell[0][2].text === this.cell[1][1].text &&
        this.cell[0][2].text === this.cell[2][0].text &&
        this.cell[1][1].text === this.cell[2][0].text &&
        this.cell[0][2].text === tag) {
        return true;
      }
      return false;
    }
  };
module.exports = game;
