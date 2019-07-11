function MainMenu(game){
    return{
        preload: preload,
        create: create,
        init: init,
    }


    function init(){
        screenSettings(game)
    }

    function preload(){
        //LOAD ASSETS HERE Sprite Sheet, Image and Sound
        loadImage(game, "bg", "assets/images/background.jpg")
        loadImage(game, "logo", "assets/images/background3.png")
        loadImage(game, "pb", "assets/images/play_button.png")



    }



    function actionOnClick () {
        startScene(game,"Game")
    }
    

  

    function create(){

        //goFullScreen()

        //Create Images

        //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'tiles', 92);

        setBackground(game, "bg")
        addLogo(game, 95, 0)

        addButton(game,95, 400, actionOnClick)

        /*
        PointerEvenets:
            button.onInputOver - hovering
            button.oninputOut - click and release
            button.onInputUp- just click
        */
        
        
    

        //Create Sprite 

        //Create Audio

        //Create Animation

        //Create image Buttons
        //game.state.start("Game")
    }
}