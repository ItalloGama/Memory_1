let extraHelp = document.querySelector('#help')
let extraButton = document.querySelector('#motiv')
let tiles = document.querySelectorAll('.tiles')
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', tileClick)
}
extraHelp.addEventListener('click', () => {
  alert ('Just look at the sequence and click the Tiles! have fun!')
})
extraButton.addEventListener('click', () => {
  alert ('Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you! Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you')
})
setTimeout(function(){
    let gameSequence = document.getElementById('gameSequence')
    gameSequence.parentNode.removeChild(gameSequence)
}, 3000);
let turn = 0
const levelSequence1 = [0, 4, 0]
let playerChoices = []

function tileClick(event) {
  let playerChoice = parseInt(event.target.id)
  let match = checkMatch(playerChoice, levelSequence1[turn])
  playerChoices.push(match)
  console.log(`match; ${match}`)
  console.log(`turn; ${turn}`)
  console.log(`playerChoice; ${playerChoice}`)
  turn++
  checkWinner()
  if (match === false) {
    gameLost()
  }
}

function gameLost() {
  alert('You Lost!')
  turn = 0
  playerChoices = []
}

function checkWinner() {
  if (playerChoices.length === levelSequence1.length) {
    alert('we have a winner')
    turn = 0
    playerChoices = []
  }
}
function checkMatch(playerChoice, sequesenceValue) {
  if (playerChoice === sequesenceValue) {
    return true
  } else {
    return false
  }
}

