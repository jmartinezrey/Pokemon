class Game { // this class controls all the commands
    constructor(){
        this.playerScore = 0
        this.computerScore = 0
        this.start()
        this.myPickedChar 
        this.otherPickedChar
        this.pickRandomCharacter = this.pickRandomCharacter.bind(this)
        this.myMusic
        // this.hide
        // this.gameOver
    }
    
    myMusic(){
       let music = document.getElementById("music");
        function play() {
        myMusic.play();
        }
    }

    // to ++ points
    computerWin(){  
        this.computerScore++;
        $("#computer-score").html(this.computerScore);
        $(".win-big-container").css('display', 'block');
        if (this.computerScore === 3) {
            this.gameOver()           
        }
    }

    playerWin(){   
        this.playerScore++;
        $("#player-score").html(this.playerScore);
        $(".win-big-container").css('display', 'block');
        if (this.playerScore === 3) {
            this.gameOver()          
        }
    }

    // pick a character
    start(){
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img')
        let fixThis = this
        for (let i = 0; i < characters.length; i++){ // I loop in all the characters and add the event listener to all of them
            characters[i].addEventListener("click", function() {
                fixThis.pickMyCharacter(fixThis)               
                 console.log(fixThis.mypickedChar)
            })
        }
    }

    pickMyCharacter(fixThis) { 
        //"this" equals the clicked element inside an event listener
        fixThis.myPickedChar = event.currentTarget
        setTimeout(this.pickRandomCharacter, 500) // another character gets picked after 0.5 sec
    }

    pickRandomCharacter(){
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img');
        let randomIndex = Math.floor(Math.random() * characters.length); // I get a random number and * the number of elements in my array (4)
        this.otherPickedChar = characters[randomIndex]
        if(this.otherPickedChar === this.myPickedChar) { // it compares that it's not equal than the character selected first
            this.pickRandomCharacter();
        }
        this.hide();
        $(".title").html('Ready to fight?');
    }

    hide(){
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img')
        for (let i = 0; i < characters.length; i++){
            if (characters[i] != this.myPickedChar && characters[i] != this.otherPickedChar){
                characters[i].style.display = 'none';
                $(".choice-container").css('display', 'block');
                $(".score-container").css('display', 'block');
            }           
    }
    }

    gameOver(){  
       if(this.playerScore == 3 || this.computerScore == 3){
           let fixThis = this;
        $('.win-container').html('Game over!');
        $('.win-container').css('margin-top','20px');        
        $(".allCharacters").hide();
        $(".choice-container").hide();
        $("#restartbtn").css('display', 'block');
        $("#restartbtn button").click(fixThis.restart);
       }
    }

    restart(){
        location.reload()
    }
}

let game = new Game()



