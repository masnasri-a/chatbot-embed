// chatbot.js
(function() {
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  chatbotContainer.innerHTML = `
    <div id="chatbot">
      <div id="chatbot-header">🤖 Chatbot</div>
      <div id="chatbot-messages"></div>
      <input id="chatbot-input" placeholder="Type a message..." />
    </div>
  `;

  const input = chatbotContainer.querySelector('#chatbot-input');
  const messages = chatbotContainer.querySelector('#chatbot-messages');

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const userMsg = input.value;
      appendMessage('You', userMsg);
      respond(userMsg);
      input.value = '';
    }
  });

  function appendMessage(sender, text) {
    const div = document.createElement('div');
    div.className = 'chat-message';
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function respond(msg) {
    // Replace this with AI API or rules
    let response = "I don't understand.";
    if (/hello|hi/i.test(msg)) response = "Hello! How can I help you?";
    if (/help/i.test(msg)) response = "Sure, I'm here to help!";
    setTimeout(() => appendMessage('Bot', response), 500);
  }
})();
