function MainMenu(game){
    return{
        preload: preload,
        create: create
    }

    function preload(){
        //LOAD ASSETS HERE Sprite Sheet, Image and Sound
        this.load.image("bg", "assets/images/background.jpg")
        this.load.image("logo", "assets/images/background3.png")
        this.load.image("pb", "assets/images/play_button.png")
       // game.load.audio('hotttt', ['assets/audio/hotttt.mp3', 'assets/audio/hotttt.ogg']);



    }

    // function to scale up the game to full screen
	function goFullScreen(){
		// setting a background color
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		// using RESIZE scale mode
		game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		game.scale.setScreenSize(true);
	}

    function actionOnClick () {

        game.state.start("Game")
    }
    

  

    function create(){
        //goFullScreen()

        //Create Images

        //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'tiles', 92);

        this.background = game.add.image(0,0, "bg")
        this.splash = this.add.image(this.game.width/2.5,this.game.height/10, 'logo');

        let playButton = game.add.button(game.world.centerX - 95, 400, 'pb', actionOnClick, this, 2, 1, 0);


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