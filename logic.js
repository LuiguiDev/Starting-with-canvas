window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.height = 500;
  canvas.width = 500;

// Filled rectangles
  ctx.fillStyle = 'White'
  ctx.fillRect(50, 50, 110, 110)
  ctx.fillStyle = 'Blue'
  ctx.fillRect(90, 90, 110, 110)

// Stroke rectangles
  ctx.lineWidth = 2
  ctx.strokeStyle = 'Blue'
  ctx.strokeRect(300, 300, 110, 110)
  ctx.strokeStyle = 'White'
  ctx.strokeRect(340, 340, 110, 110)

// Lines crossed
  ctx.strokeStyle = 'Blue'
  ctx.beginPath()
  ctx.moveTo(90, 410)
  ctx.lineTo(200, 300)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(200, 410)
  ctx.lineTo(90, 300)
  ctx.stroke()

  ctx.strokeStyle = 'White'
  ctx.beginPath()
  ctx.moveTo(50, 450)
  ctx.lineTo(160, 340)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(160, 450)
  ctx.lineTo(50, 340)
  ctx.stroke()

// Inner rectangle
  ctx.strokeStyle = 'Grey'
  ctx.lineWidth = 0.5
  ctx.strokeRect(450, 50, -110, 110)
  ctx.strokeRect(410, 90, -110, 110)

  ctx.strokeStyle = 'Blue'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(340, 90)
  ctx.lineTo(410, 90)
  ctx.lineTo(410, 160)
  ctx.stroke()
  ctx.strokeStyle = 'White'
  ctx.beginPath()
  ctx.moveTo(340, 90)
  ctx.lineTo(340, 160)
  ctx.lineTo(410, 160)
  ctx.stroke()

// Margin
  ctx.fillStyle = 'Grey'
  ctx.fillRect(0, 0, 50, 50)
  ctx.fillRect(450, 0, 50, 50)
  ctx.fillRect(0, 450, 50, 50)
  ctx.fillRect(450, 450, 50, 50)
})



