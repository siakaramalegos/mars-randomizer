import HEXES from './hexes.js'
import BOARDS from './boards.js'

const SIDE_LENGTH = 20
const ANGLE = 1.0472 // 60 degrees in radians
const INNER_TRIANGLE_LONG_SIDE = Math.sin(ANGLE) * SIDE_LENGTH
const INNER_TRIANGLE_SHORT_SIDE = Math.cos(ANGLE) * SIDE_LENGTH
const FILL_STYLES = {
  ocean: '#9091B7',
  city: '#CCCCCC',
  greenery: '#BCD7CB',
  noctis: '#AAAAAA',
  land: '#DEB887',
}

const state = {
  board: 'base',
}

function drawHex({ctx, x, y, spot}) {
  ctx.strokeStyle = 'white'
  ctx.fillStyle = FILL_STYLES[spot]
  ctx.beginPath();
  ctx.moveTo(x, y); // upper left
  ctx.lineTo(x + INNER_TRIANGLE_LONG_SIDE, y - INNER_TRIANGLE_SHORT_SIDE); // top
  ctx.lineTo(x + 2 * INNER_TRIANGLE_LONG_SIDE, y); // upper right
  ctx.lineTo(x + 2 * INNER_TRIANGLE_LONG_SIDE, y + SIDE_LENGTH); // lower right
  ctx.lineTo(x + INNER_TRIANGLE_LONG_SIDE, y + SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE); // bottom
  ctx.lineTo(x, y + SIDE_LENGTH); // lower left
  ctx.fill();
  ctx.closePath();
  ctx.stroke();

  if (spot === 'greenery') {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x + INNER_TRIANGLE_LONG_SIDE/2 - 2, y, 22, 22);
    }
    img.src = "./tree-silhouette.svg";
  }
  if (spot === 'city') {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x + INNER_TRIANGLE_LONG_SIDE / 2, y, 20, 20);
    }
    img.src = "./buildings.svg";
  }
}

function drawHexRow({ctx, x, y, row}) {
  for (let i = 0; i < row.length; i++) {
    const startX = x + i * 2 * INNER_TRIANGLE_LONG_SIDE
    drawHex({ctx, x: startX, y, spot: row[i]})
  }
}

function renderBoard() {
  const ctx = state.ctx
  // Top rown starting point)
  const x = INNER_TRIANGLE_LONG_SIDE * 4 + 1
  const y = INNER_TRIANGLE_SHORT_SIDE
  const board = BOARDS[state.board]
  for (const [index, row] of board.entries()) {
    const xIndex = 4 - Math.abs(index - 4)
    drawHexRow({
      ctx,
      x: x - xIndex * INNER_TRIANGLE_LONG_SIDE,
      y: y + index * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
      row
    })
  }
}

// Generate a random number between 0 and max, exclusive of max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) );
}

function getRandomNoDupes(max, current) {
  let randomNumber = getRandomInt(max)
  if (current.includes(randomNumber)) {
    randomNumber = getRandomNoDupes(max, current)
  }
  return randomNumber
}

function getPossibleGreeneries(cityIndex, placements) {
  let adjacents = HEXES[state.board][cityIndex].adjacents
  for (let placement of placements) {
    adjacents = adjacents.filter(element => element !== placement)
  }
  return adjacents
}

function getCity2NoDupes(max, placements) {
  let cityIndex = getRandomNoDupes(max, placements)
  const possibleGreeneries = getPossibleGreeneries(cityIndex, placements)
  if (possibleGreeneries.length === 0) {
    cityIndex = getCity2NoDupes(max, placements)
  }
  return { cityIndex, possibleGreeneries }
}

function renderPlacement({ctx, column, row, type}) {
  drawHex({
    ctx,
    x: INNER_TRIANGLE_LONG_SIDE * column + 1 ,
    y: row * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE) + INNER_TRIANGLE_SHORT_SIDE,
    spot: type
  })
}

function generatePlacements() {
  const ctx = state.ctx
  // Reset board
  renderBoard()

  const hexMapping = HEXES[state.board]
  const numPlacements = hexMapping.length
  const city1Index = getRandomInt(numPlacements)
  const city1 = hexMapping[city1Index]
  const greenery1Index = city1.adjacents[getRandomInt(city1.adjacents.length)]
  const greenery1 = hexMapping[greenery1Index]

  const placements = [city1Index, greenery1Index]
  const city2Info = getCity2NoDupes(numPlacements, placements)
  const city2 = hexMapping[city2Info.cityIndex]
  const greenery2Index = city2Info.possibleGreeneries[getRandomInt(city2Info.possibleGreeneries.length)]
  const greenery2 = hexMapping[greenery2Index]

  renderPlacement({ ctx, column: city1.column, row: city1.row, type: 'city' })
  renderPlacement({ ctx, column: greenery1.column, row: greenery1.row, type: 'greenery' })
  renderPlacement({ ctx, column: city2.column, row: city2.row, type: 'city' })
  renderPlacement({ ctx, column: greenery2.column, row: greenery2.row, type: 'greenery' })
}

function selectBoard(e) {
  state.board = e.target.value
  renderBoard()
}

document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('board')
  select.addEventListener('change', selectBoard)
  const canvas = document.getElementById('canvas');
  state.ctx = canvas.getContext('2d');
  renderBoard()
  const button = document.getElementById('generate-button')
  button.addEventListener('click', generatePlacements)
})
