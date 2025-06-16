// === chatbot.js ===
(function () {
    const currentScript = document.currentScript;
    const apiKey = currentScript.getAttribute('data-api-key');
    console.log(`Chatbot API Key Chatbot: ${apiKey}`);

    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    document.body.appendChild(chatbotContainer);

    fetch('chat.html')
        .then(response => response.text())
        .then(html => {
            chatbotContainer.innerHTML = html;
            const toggleBtn = document.getElementById("chat-toggle");
            const chatWidget = document.getElementById("chat-widget");
            const minimizeBtn = document.getElementById("minimize-btn");
            toggleBtn.addEventListener("click", () => {
                chatWidget.classList.toggle("hidden");
            });
            minimizeBtn.addEventListener("click", () => {
                chatWidget.classList.add("hidden");
            });

            const userInput = document.getElementById("user-input");
            userInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    sendMessage();
                }
            });

            window.sendMessage = function () {
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
                botReply.innerHTML = "Typing...";
                chatBody.appendChild(botReply);
                const url = 'https://n8n-pv66ocxm.n8x.biz.id/webhook/' + apiKey;
                console.log('Sending message to:', url);
                // Send message to n8n webhook
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        apiKey: apiKey,
                        message: message,
                        timestamp: new Date().toISOString()
                    })
                }).catch(error => {
                    console.error('Error sending to webhook:', error);
                }).then((resp) => {
                    // Append user message and bot reply;
                    let jsonResponse = resp.json();
                    jsonResponse.then((data) => {
                        console.log('Response from webhook:', data);
                        // Assuming the response contains a 'message' field
                        const message = data.reply || data.response_given;
                        let parsed_message = message.replace(/<[^>]*>/g, ''); // Remove HTML tags
                        parsed_message = parsed_message.replace(/ -/g, '</br> -');
                        parsed_message = parsed_message.replace(/\n/g, '<br>');
                        botReply.innerHTML = `<span style="max-width: 80%;">${parsed_message}</span>`;
                    }).catch(err => {
                        console.error('Error parsing JSON:', err);
                    });
                });
                input.value = "";
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        })
        .catch(error => {
            console.error('Error loading chat.html:', error);
            chatbotContainer.innerHTML = '<div>Error loading chat interface</div>';
        });
})();
