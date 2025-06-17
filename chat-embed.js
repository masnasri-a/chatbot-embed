(function () {
    const currentScript = document.currentScript;
    const apiKey = currentScript.getAttribute('data-api-key') || 'default';
    console.log(`Chatbot API Key: ${apiKey}`);
    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.href = 'https://cdn.jsdelivr.net/gh/masnasri-a/chatbot-embed@main/chatbot.css';
    document.head.appendChild(linkCSS);
    console.log('Chatbot CSS loaded');
    const scriptBot = document.createElement('script');
    scriptBot.src = 'https://cdn.jsdelivr.net/gh/masnasri-a/chatbot-embed@main/chatbot.js';
    scriptBot.setAttribute('data-api-key', apiKey);
    document.body.appendChild(scriptBot);
    console.log('Chatbot script loaded');
})();