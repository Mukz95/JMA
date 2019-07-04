function screenSettings(game){
    if (this.game.device.desktop)
    {
        //  If you have any desktop specific settings, they can go in here
        console.log("Desktop")
        game.scale.pageAlignHorizontally = true;
    }
    else
    {
        console.log("Mobile")

        //  Same goes for mobile settings.
        //  "scale the game, no lower than 480x260 and no higher than 1024x768"
        game.scale.setMinMax(480, 260, 1024, 768);
        game.scale.forceLandscape = true;
        game.scale.pageAlignHorizontally = true;
    }
}



function startScene(game, scene){
    game.state.start(scene)
}

function loadImage(game, assetName, assetPath){
    game.load.image(assetName, assetPath)
}

function loadSound(game, assetName, assetPath){
    game.load.image(assetName, assetPath)
}

function loadGameMap(game, assetName, assetPath){
    game.load.tilemap(assetName, assetPath, null, Phaser.Tilemap.TILED_JSON);
}

function createGameMap(game, mapName, tilesetNameJson, tilesetNameImage, layerNameJson ){
    var map = game.add.tilemap(mapName);
    map.addTilesetImage(tilesetNameJson, tilesetNameImage);
    var groundLayer = map.createLayer(layerNameJson)
    groundLayer.resizeWorld()
}

function setBackground(game, assetName){
    game.add.image(0,0, assetName)
}

function addLogo(game, width, height){
     game.add.image(game.world.centerX - width ,height , 'logo');
}


function addButton(game, width, height, action){
    game.add.button(game.world.centerX - width, height, 'pb', action, this, 2, 1, 0);

}