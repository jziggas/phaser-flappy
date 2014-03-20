var game = new Phaser.Game(640, 384, Phaser.AUTO, 'game_div');
// 400, 490
// 724, 384
// 640, 384
var score = 0;
var background;
var menu;

game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

game.state.start('load');