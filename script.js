console.log("Hello World")
const swag = document.getElementById("Rock")
swag.addEventListener("click",waga)


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
    
}