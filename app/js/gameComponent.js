'use strict';
var game = require('./tic_tac_toe'),
  logger = require('./log');

function GameComponent(element) {
  this.element_ = element;
  this.init_();
}

GameComponent.prototype.Constant_ = {
  CHECK: '√',
  CROSS: '×'
};

GameComponent.prototype.CssClasses_ = {};

GameComponent.prototype.move_ = function (event) {
  if (this.element_.innerHTML === '') {
    this.element_.innerHTML = game.turn === 1 ? this.Constant_.CHECK : this.Constant_.CROSS;
    game.turn = game.turn === 1 ? 0 : 1;
    if (game.isWin(this.element_.innerHTML)) {
      logger.info('game over......');
      alert("The winner is the player with " + this.element_.innerHTML);
      game.init();
    }
  }
};

GameComponent.prototype.init_ = function () {
  game.init();
  if (this.element_) {
    this.element_.addEventListener('click', this.move_.bind(this));
  }
};

componentHandler.register({
  constructor: GameComponent,
  classAsString: 'GameComponent',
  cssClass: 'cell'
});
