const chatForm = document.getElementById("chatForm");
const chatWindow = document.getElementById("chatWindow");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!username || !message) return;

  await fetch("chat.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(username)}&message=${encodeURIComponent(message)}`
  });

  document.getElementById("message").value = "";
  loadMessages();
});

async function loadMessages() {
  const res = await fetch("messages.txt");
  const text = await res.text();
  chatWindow.innerHTML = text
    .split("\n")
    .filter(line => line.trim())
    .map(line => `<div>${line}</div>`)
    .join("");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

setInterval(loadMessages, 1000);
loadMessages();
