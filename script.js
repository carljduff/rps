let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let yourChoice = document.getElementById("yourchoice")
let computerChoice = document.getElementById("computerchoice")
let win = document.getElementById("win")

const choices = ["Rock", "Paper", "Scissors"]

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return computerChoice.innerHTML = item;
}

function winHandler() {
    if(yourChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Paper") {
        win.innerHTML = "Paper beats Rock! Computer Wins!"
    } 

    if(yourChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Rock") {
        win.innerHTML = "Paper beats Rock! You Win!"
    } 

    if(yourChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissors") {
        win.innerHTML = "Rock beats Scissors! You Win!"
    } 

    if(yourChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Rock") {
        win.innerHTML = "Rock beats Scissors! Computer Wins!"
    } 

    if(yourChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Rock" || yourChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Paper" || yourChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Scissors" ) {
        win.innerHTML = "Try again!"
    } 

    if(yourChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissors") {
        win.innerHTML = "Rock beats Scissors! You Win!"
    } 

    if(yourChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissors") {
        win.innerHTML = "Rock beats Scissors! You Win!"
    } 

    if(yourChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Scissors") {
        win.innerHTML = "Scissors beats Paper! Computer Wins!"
    } 

    if(yourChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Paper") {
        win.innerHTML = "Scissors beats Paper! You Win!"
    } 
}

function choiceHandler(text, e) {
    yourChoice.innerHTML = text
    getRandomItem(choices)
    winHandler()
}

rock.addEventListener("click", () => choiceHandler("Rock"))
paper.addEventListener("click", () => choiceHandler("Paper"))
scissors.addEventListener("click", () => choiceHandler("Scissors"))

/*
Rock-Paper
Rock-Scissors
Rock-Rock
Paper-Rock
Paper- Scissors
Paper-Paper
Scissors-Rock
Scissors-Paper
Scissors-Scissors
*/