

var config = {
    "width": "100%",
    "height": "100%",
    "renderer": Phaser.CANVAS,
    "parent":"game_div",

    
    
    //"resolution": window.devicePixelRatio
};



var game = new Phaser.Game(config);

game.state.add("MainMenu", MainMenu(game))
game.state.add('Game', Game(game));

game.state.start('MainMenu')