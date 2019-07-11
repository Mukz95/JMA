var sprite

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

function loadSprite(game, assetName, assetPath){
    game.load.spritesheet(assetName, assetPath, 32, 32);
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

function keyboardControls(game){

    var playerSpeed = 150
    var controls = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };


        sprite.body.velocity.x = 0
        sprite.body.velocity.y = 0

        if (controls.up.isDown){
            sprite.body.velocity.y = 0 - playerSpeed
            console.log("up pressed")
        }
        else if( controls.down.isDown){
            sprite.body.velocity.y = playerSpeed
        }
        else if(controls.left.isDown){
            sprite.body.velocity.x = 0 - playerSpeed
        }
        else if(controls.right.isDown){
            sprite.body.velocity.x = playerSpeed

        }
}

function gamePhysics(game){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(sprite)
    game.camera.follow(sprite)
    sprite.body.collideWorldBounds = true

    
}


function collison(game,layer){
    game.physics.arcade.collide(sprite, layer);
}

function createCollisionObjects(map){
    map.setCollisionBetween(0, 1000);

}

function scaleSpite(game, size){
    game.player.scale.setTo(size);

}

function AddSpriteToGame(game, assetName){
   sprite = game.add.sprite(32, 32, assetName);   
   game.camera.follow(sprite);
 

   return sprite
    
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