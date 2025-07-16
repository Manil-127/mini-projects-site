window.onload = function () {
  const canvas = document.getElementById("drawCanvas");
  const ctx = canvas.getContext("2d");
  const colorPicker = document.getElementById("colorPicker");

  let drawing = false;

  // Mouse events
  canvas.addEventListener("mousedown", () => drawing = true);
  canvas.addEventListener("mouseup", () => drawing = false);
  canvas.addEventListener("mouseout", () => drawing = false);
  canvas.addEventListener("mousemove", draw);

  // Touch events
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    drawing = true;
    draw(e.touches[0]);
  });

  canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    drawing = false;
  });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (drawing) {
      draw(e.touches[0]);
    }
  });

  function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
};

function clearCanvas() {
  const canvas = document.getElementById("drawCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
