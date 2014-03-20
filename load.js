var load_state = {
  preload: function() {
    //this.game.stage.backgroundColor = '#71c5cf';
    this.game.load.image('bird', 'assets/gator2.png');
    this.game.load.image('pipe', 'assets/louisville.png');
    this.game.load.image('background', 'assets/court2.jpg');
    this.game.load.image('menu', 'assets/mm14.png');
    this.game.load.audio('jump', 'assets/basketball_bounce.wav');
  },

  create: function() {
    this.game.state.start('menu');
  }
};