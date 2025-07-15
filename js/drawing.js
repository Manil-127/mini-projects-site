const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  // Save drawing if needed
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Resize
  canvas.width = canvas.clientWidth;
  canvas.height = 500;

  // Restore drawing (optional)
  ctx.putImageData(imageData, 0, 0);
}


let isDrawing = false;
let brushColor = "#000000";
let brushSize = 5;

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseout", endDraw);
canvas.addEventListener("mousemove", draw);

function startDraw(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function endDraw() {
  isDrawing = false;
}

document.getElementById("colorPicker").addEventListener("input", (e) => {
  brushColor = e.target.value;
});

document.getElementById("brushSize").addEventListener("input", (e) => {
  brushSize = e.target.value;
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

