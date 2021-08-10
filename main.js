let tiles = document.querySelectorAll('.tiles')
console.log(tiles)
let tileId0 = document.getElementById('0')
let tileId1 = document.getElementById('1')
let tileId2 = document.getElementById('2')
let tileId3 = document.getElementById('3')
let tileId4 = document.getElementById('4')

let gameSequence = document.getElementById('gameSequence')


const levelSequence1 = [1, 4, 0]
const playerChoice = []

function tileClick (event){
tiles.addEventListener('click', () => {
console.log(event.target.id)
})
}
// function tileChoice
