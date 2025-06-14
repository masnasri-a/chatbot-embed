(function() {
  const linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.href = 'https://yourdomain.com/chatbot.css';
  document.head.appendChild(linkCSS);

  const scriptBot = document.createElement('script');
  scriptBot.src = 'https://yourdomain.com/chatbot.js';
  document.body.appendChild(scriptBot);
})();