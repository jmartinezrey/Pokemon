class Game { // this class controls all the commands
    constructor(){
        this.pikachu = new Pikachu()
        this.charmander = new Charmander()
        this.squirtle = new Squirtle()
        this.bulbasaur = new Bulbasaur()
        this.score = 0
        this.start()
        this.myPickedChar
        this.otherPickedChar
        this.pickRandomCharacter = this.pickRandomCharacter.bind(this)
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
        setTimeout(this.pickRandomCharacter, 2000) // another character gets picked after 2 sec
    }

    pickRandomCharacter(){
        let charactersDiv = document.getElementsByClassName("allCharacters")[0];
        let characters = charactersDiv.getElementsByTagName('img')
        let randomIndex = Math.floor(Math.random() * characters.length) // I get a random number and * the number of elements in my array (4)
        this.otherPickedChar = characters[randomIndex]
        if(this.otherPickedChar == this.myPickedChar) { // it compares that it's not equal than the character selected first
            this.pickRandomCharacter()
        }
    }

}

// Hide an element
// let hide = function (myPickedChar) {
// 	myPickedChar.style.display = 'none';
// };



// Rock > scissors
// Scissors > paper
// Paper > rock 


// Special power > Element
// Element > Strength
// Strength > Special Power 


let userChoice = //
let computerChoice = Math.random();

if (computerChoice < 0.34){
    computerChoice = "Special Power";
}
else if(computerChoice <= 0.67){
    computerChoice = "Element";
}
else{
    computerChoice = "Strength";
}

let compareChoice = function(choice1,choice2){
   if(choice1==="Special Power" && choice2==="Element"){
        return "Special Power wins!";
    }
    else if(choice1==="Element" && choice2==="Strength"){
        return "Element wins!";
    }
    else if(choice1==="Strength" && choice2==="Special Power"){
        return "Strength wins!";
    }
    else{
        return "Both are amazing!";
    }
};

compareChoice(userChoice,computerChoice);

/*
class Pokemon{ // class pokemon general
    constructor(strength) {
        this.strength = strength
        // this.getsHurt = this.getsHurt.bind(this)
    }

    getsHurt() {
        this.strength -= 10
    }
}

class Pikachu extends Pokemon { // class for every pokemon based on the general one

    constructor(){
        super()
        this.pikachu = document.getElementById("pikachu")
        this.initiateControls()
}

    initiateControls(){

    }

}

class Charmander extends Pokemon {

}

class Squirtle extends Pokemon {

}

class Bulbasaur extends Pokemon {

}

let game = new Game()