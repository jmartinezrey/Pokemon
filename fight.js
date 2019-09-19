$(document).ready(function(){

    $('.userpick').click(function(){
        debugger
        let userChoice = $(this).text()
        let compChoice = computerChoice()
        compareChoice(userChoice, compChoice)
     })

})

function computerChoice(){
    let computerChoice = Math.floor(Math.random()*3+1)
        if (computerChoice === 1){
            return "Special Power";
        }
        else if(computerChoice === 2 ){
            return "Element";
        }
        else{
            return"Strength";
        }
}

// Rock > scissors
// Scissors > paper
// Paper > rock 
// =
// Special power > Element
// Element > Strength
// Strength > Special Power 

function compareChoice(choice1, choice2){
    if(choice1==="Special Power" && choice2==="Element"|| 
    choice1==="Element" && choice2==="Strength"||
    choice1==="Strength" && choice2==="Special Power"){
        game.playerWin();
        $('.win').html('Player Wins!')
     }
     else if(choice2==="Special Power" && choice1==="Element"|| 
     choice2==="Element" && choice1==="Strength"||
     choice2==="Strength" && choice1==="Special Power"){
         game.computerWin();
         $('.win').html('Computer Wins!')
     }
     else{
         $('.win').html('You are both great!')
     }
 };


