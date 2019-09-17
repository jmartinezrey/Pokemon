$(document).ready(function(){

    $('.userpick').click(function(){
        debugger
        let userChoice = $(this).text()
        let compChoice = computerChoice()
        compareChoice(userChoice, compChoice)
     })

})

function computerChoice(){
    debugger
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
    debugger
    if(choice1==="Special Power" && choice2==="Element"|| 
    choice1==="Element" && choice2==="Strength"||
    choice1==="Strength" && choice2==="Special Power"){
        game.playerWin();
        alert("player wins!")
     }
     else if(choice2==="Special Power" && choice1==="Element"|| 
     choice2==="Element" && choice1==="Strength"||
     choice2==="Strength" && choice1==="Special Power"){
         game.computerWin();
         alert("computer wins!")
     }
     else{
         alert("You are both great!")
     }
 };

