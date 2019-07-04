

var config = {
    "width": 800,
    "height": 600,
    "renderer": Phaser.AUTO,
    "parent":"game_div",

    
    
    //"resolution": window.devicePixelRatio
};



var game = new Phaser.Game(config);



game.state.add("MainMenu", MainMenu(game))
game.state.add('Game', Game(game));

game.state.start('MainMenu')