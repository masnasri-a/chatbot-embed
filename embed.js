(function() {
  const linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.href = 'https://raw.githubusercontent.com/masnasri-a/chatbot-embed/refs/heads/main/chatbot.css';
  document.head.appendChild(linkCSS);

  const scriptBot = document.createElement('script');
  scriptBot.src = 'https://raw.githubusercontent.com/masnasri-a/chatbot-embed/refs/heads/main/chatbot.js';
  document.body.appendChild(scriptBot);
})();