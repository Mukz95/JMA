var groundLayer

function Game(game){
    return{
        update: update,
        create: create,
        preload: preload

    }


    function preload(){
        loadGameMap(game, 'map', 'assets/images/test_map.json');
  
        loadImage(game, 'tiles', 'assets/images/Tiles_32x32.png');
        loadImage(game,"tiles1", "assets/images/owlishmedia_pixel_tiles.png")
        loadImage(game,"tiles2", "assets/images/tileset00R.png")
        loadSprite(game,"ball", "assets/images/ball.png")
    }

    function update(){
        keyboardControls(game)
        collison(game, groundLayer )

    }

    function create(){
  
        var map = game.add.tilemap("map");
        map.addTilesetImage("mmm", "tiles");
        map.addTilesetImage("owlishmedia_pixel_tiles", "tiles1");
        map.addTilesetImage("tileset00R", "tiles2");
        AddSpriteToGame(game, "ball")
        gamePhysics(game)
        createCollisionObjects(map)



        groundLayer = map.createLayer("Tile Layer 1")
        groundLayer.resizeWorld()


    }
}