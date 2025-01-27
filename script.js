console.log("Hello World")
const swag = document.getElementById("Rock")



function getComputerChoice(){
    const rps = getRandomInt();
    let computerChoice;
    switch(rps) {
        case(0):
            computerChoice = "rock"
            break;
        case(1):
            computerChoice = "paper"
            break;
        case(2):
            computerChoice = "scissors"
            break;
    }
    return computerChoice
}

function getRandomInt(){
    return Math.floor(Math.random() * 3);
}

function userChoice(input){
    let btnValue = input.innerText;
    console.log(btnValue)
    let pcChoice = getComputerChoice()
    console.log(pcChoice)

    if (btnValue === "Scissors"){
        if (pcChoice === "scissors"){
            document.getElementById("res").innerHTML="Tie"
        } else if (pcChoice === "paper"){
            document.getElementById("res").innerHTML="Win"
        }
        else {
            document.getElementById("res").innerHTML="Lose"
        }
    }
    else if (btnValue === "Paper"){
        if (pcChoice === "scissors"){
            document.getElementById("res").innerHTML="Lose"
        } else if (pcChoice === "paper"){
            document.getElementById("res").innerHTML="Tie"
        }
        else {
            document.getElementById("res").innerHTML="Win"
        }
    }
    else {
        if (pcChoice === "scissors"){
            document.getElementById("res").innerHTML="Win"
        } else if (pcChoice === "paper"){
            document.getElementById("res").innerHTML="Lose"
        }
        else {
            document.getElementById("res").innerHTML="Tie"
        }
    }


}