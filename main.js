let tiles = document.querySelectorAll('.tiles')
for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', tileClick)
}

let gameSequence = document.getElementById('gameSequence')
let turn = 0
// console.log(tiles)
const levelSequence1 = [0, 4, 0]
const playerChoices = []

function tileClick(event) {
  let playerChoice = parseInt(event.target.id)
  let match = checkMatch(playerChoice, levelSequence1[turn])
  playerChoices.push(match)
  console.log(`match; ${match}`)
  console.log(`turn; ${turn}`)
  console.log(`playerChoice; ${playerChoice}`)
  turn++
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
  }
}
function checkMatch(playerChoice, sequesenceValue) {
  if (playerChoice === sequesenceValue) {
    return true
  } else {
    return false
  }
}

// tileId1.addEventListener('click', (event) => {
//     console.log(parseInt(event.target.id))
//     playerChoice.push(parseInt(event.target.id))
// })
// tileId2.addEventListener('click', (event) => {
//     console.log(parseInt(event.target.id))
//     playerChoice.push(parseInt(event.target.id))
// })
// tileId3.addEventListener('click', (event) => {
//     console.log(parseInt(event.target.id))
//     playerChoice.push(parseInt(event.target.id))
// })
// tileId4.addEventListener('click', (event) => {
//     console.log(parseInt(event.target.id))
//     playerChoice.push(parseInt(event.target.id))
// })
