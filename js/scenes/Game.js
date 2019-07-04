function Game(game){
    return{
        update: update,
        create: create,
        preload: preload

    }


    function preload(){
        loadGameMap(game, 'map', 'assets/images/test_map.json');
  
        loadImage(game, 'tiles', 'assets/images/Tiles_32x32.png');
    }

    function update(){

    }

    function create(){
  
        createGameMap(game, "map", "Tiles_32x32", "tiles", "Tile Layer 1")

    }
}