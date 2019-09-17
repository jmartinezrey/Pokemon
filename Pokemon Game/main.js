class Game { // this class controls all the commands
    constructor(){
        // this.pikachu = new Pikachu()
        // this.charmander = new Charmander()
        // this.squirtle = new Squirtle()
        // this.bulbasaur = new Bulbasaur()
        this.playerScore = 0
        this.computerScore = 0
        this.start()
        this.myPickedChar 
        this.otherPickedChar
        this.pickRandomCharacter = this.pickRandomCharacter.bind(this)
        this.hide
    }

    // to ++ points
    computerWin(){
        this.computerScore++;
        $("#computer-score").html(this.computerScore);
    }

    playerWin(){
        this.playerScore++;
        $("#player-score").html(this.playerScore);
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
        debugger
        //"this" equals the clicked element inside an event listener
        fixThis.myPickedChar = event.currentTarget
        setTimeout(this.pickRandomCharacter, 1000) // another character gets picked after 2 sec
    }

    pickRandomCharacter(){
        debugger
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img');
        let randomIndex = Math.floor(Math.random() * characters.length); // I get a random number and * the number of elements in my array (4)
        this.otherPickedChar = characters[randomIndex]
        if(this.otherPickedChar === this.myPickedChar) { // it compares that it's not equal than the character selected first
            this.pickRandomCharacter();
        }
        this.hide();
    }

    hide(){
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img')
        for (let i = 0; i < characters.length; i++){
            if (characters[i] != this.myPickedChar && characters[i] != this.otherPickedChar){
                characters[i].style.display = 'none';
            }
    }
    }
}

let game = new Game()

