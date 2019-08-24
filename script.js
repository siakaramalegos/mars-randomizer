const SIDE_LENGTH = 20
const ANGLE = 1.0472 // 60 degrees in radians
const INNER_TRIANGLE_LONG_SIDE = Math.sin(ANGLE) * SIDE_LENGTH
const INNER_TRIANGLE_SHORT_SIDE = Math.cos(ANGLE) * SIDE_LENGTH
const BOARD = [
  ['land', 'ocean', 'land', 'ocean', 'ocean'],
  ['land', 'land', 'land', 'land', 'land', 'ocean'],
  ['land', 'land', 'land', 'land', 'land', 'land', 'land'],
  ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'ocean'],
  ['land', 'land', 'noctis', 'ocean', 'ocean', 'ocean', 'land', 'land', 'land'],
  ['land', 'land', 'land', 'land', 'land', 'ocean', 'ocean', 'ocean'],
  ['land', 'land', 'land', 'land', 'land', 'land', 'land'],
  ['land', 'land', 'land', 'land', 'land', 'land'],
  ['land', 'land', 'land', 'land', 'ocean']
]
const FILL_STYLES = {
  ocean: 'rgba(173, 216, 230, 0.8)',
  city: '#CCCCCC',
  greenery: 'green',
  noctis: '#AAAAAA',
  land: '#DEB887',
}

function drawHex({ctx, x, y, spot}) {
  ctx.strokeStyle = 'black'
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
}

function drawHexRow({ctx, x, y, row}) {
  for (let i = 0; i < row.length; i++) {
    const startX = x + i * 2 * INNER_TRIANGLE_LONG_SIDE
    drawHex({ctx, x: startX, y, spot: row[i]})
  }
}

function renderBoard() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // Top rown starting point)
  const x = INNER_TRIANGLE_LONG_SIDE * 4 + 20
  const y = INNER_TRIANGLE_SHORT_SIDE

  drawHexRow({ ctx, x, y, row: BOARD[0] })
  drawHexRow({
    ctx,
    x: x - INNER_TRIANGLE_LONG_SIDE,
    y: y + SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE,
    row: BOARD[1]
  })
  drawHexRow({
    ctx,
    x: x - 2 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 2 * ( SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE ),
    row: BOARD[2]
  })
  drawHexRow({
    ctx,
    x: x - 3 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 3 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[3]
  })
  drawHexRow({
    ctx,
    x: x - 4 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 4 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[4]
  })
  drawHexRow({
    ctx,
    x: x - 3 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 5 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[5]
  })
  drawHexRow({
    ctx,
    x: x - 2 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 6 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[6]
  })
  drawHexRow({
    ctx,
    x: x - 1 * INNER_TRIANGLE_LONG_SIDE,
    y: y + 7 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[7]
  })
  drawHexRow({
    ctx,
    x: x,
    y: y + 8 * (SIDE_LENGTH + INNER_TRIANGLE_SHORT_SIDE),
    row: BOARD[8]
  })
}

document.addEventListener('DOMContentLoaded', function () {
  renderBoard()
  // const select = document.getElementById('num-players')
  // select.addEventListener('change', selectPlayers)
})
