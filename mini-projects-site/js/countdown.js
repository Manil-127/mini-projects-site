
let countdownDate = null;
let countdownInterval = null;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const errorElem = document.getElementById("error");
  errorElem.textContent = "";

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").style.display = "none";
    errorElem.textContent = "🎉 Time's up!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function startCountdown() {
  const input = document.getElementById("dateInput").value;
  const errorElem = document.getElementById("error");
  const countdownDiv = document.getElementById("countdown");

  if (!input) {
    errorElem.textContent = "❌ Please select a valid date and time.";
    return;
  }

  const selectedDate = new Date(input);

  if (selectedDate <= new Date()) {
    errorElem.textContent = "❌ Date must be in the future!";
    return;
  }

  countdownDate = selectedDate.getTime();

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownDiv.style.display = "block";
  errorElem.textContent = "";
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function resetCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  countdownDate = null;
  document.getElementById("countdown").style.display = "none";
  document.getElementById("dateInput").value = "";
  document.getElementById("error").textContent = "";
}
