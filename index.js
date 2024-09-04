let player = {name: "",chips: 200}
let cards = []
let sum = 0
let gameStarted = false
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let startBtn = document.getElementById("startGameBtn")
let resetBtn = document.getElementById("resetBtn")
let newCardBtn = document.getElementById("newCardBtn")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if(gameStarted == false){
        gameStarted = true
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
        resetBtn.style.background = '#926e12';
        startBtn.style.background = '#926e12'; 
    }
    
}

function renderGame() {
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        resetBtn.disabled = false;
        resetBtn.style.background = 'goldenrod';

    } else {
        message = "You're out of the game!"
        isAlive = false
        resetBtn.style.background = 'goldenrod';
        resetBtn.disabled = false;
        newCardBtn.disabled = true


    }
    messageEl.textContent = message

}
function reset(){
    if(isAlive==true){
    }else{
        cards = []
        sum = 0
        gameStarted = false
        hasBlackJack = false
        isAlive = false
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
        cardsEl.textContent = "Cards : "
        document.getElementById("startGameBtn").style.background = 'goldenrod';
        sumEl.textContent = " Sum : "
        document.getElementById("startGameBtn").disabled = false;
        player.chips = prompt("Please enter your amount");
        playerEl.textContent = player.name + ": $" + player.chips
    }
    
    


}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

window.addEventListener('load',()=>{
    player.name = prompt("Please enter your name");
    player.chips = prompt("Please enter your amount");
    playerEl.textContent = player.name + ": $" + player.chips


})



// let Button = {
//     function disabledStartBtn(){

//     }
//     function disabledNewCardBtn(){

//     }
//     function disabledRestartBtn(){}
 
// }