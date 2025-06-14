(function() {
  const linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.href = 'https://cdn.jsdelivr.net/gh/masnasri-a/chatbot-embed/chatbot.css';
  document.head.appendChild(linkCSS);

  const scriptBot = document.createElement('script');
  scriptBot.src = 'https://cdn.jsdelivr.net/gh/masnasri-a/chatbot-embed/chatbot.js';
  document.body.appendChild(scriptBot);
})();