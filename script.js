function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBody = document.getElementById("chat-body");

  const userMsg = document.createElement("div");
  userMsg.className = "message user-message";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  const botReply = document.createElement("div");
  botReply.className = "message bot-message";
  botReply.innerHTML = "Thanks for your message. We'll get back to you shortly!";
  setTimeout(() => chatBody.appendChild(botReply), 800);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

const toggleBtn = document.getElementById("chat-toggle");
const chatWidget = document.getElementById("chat-widget");
const minimizeBtn = document.getElementById("minimize-btn");

// Show widget
toggleBtn.addEventListener("click", () => {
    console.log("Toggle button clicked");
  chatWidget.classList.toggle("hidden");
});

// Minimize widget
minimizeBtn.addEventListener("click", () => {
  chatWidget.classList.add("hidden");
});
