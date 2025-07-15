let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "⛔ Enter a number between 1 and 100.";
    feedback.style.color = "#d32f2f";
    return;
  }

  attemptCount++;

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}. You nailed it in ${attemptCount} tries!`;
    feedback.style.color = "#388e3c";
  } else if (guess < secretNumber) {
    feedback.textContent = "📉 Too low! Try a higher number.";
    feedback.style.color = "#f57c00";
  } else {
    feedback.textContent = "📈 Too high! Try a lower number.";
    feedback.style.color = "#f57c00";
  }

  attempts.textContent = `📊 Attempts: ${attemptCount}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
}
