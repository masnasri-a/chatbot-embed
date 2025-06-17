(function () {

    const currentScript = document.currentScript;
    const apiKey = currentScript.getAttribute('data-api-key') || 'default';
    console.log(`Chatbot API Key: ${apiKey}`);
    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.href = 'chatbot.css';
    document.head.appendChild(linkCSS);
    console.log('Chatbot CSS loaded');
    const scriptBot = document.createElement('script');
    scriptBot.src = 'chatbot.js';
    scriptBot.setAttribute('data-api-key', apiKey);
    document.body.appendChild(scriptBot);
    console.log('Chatbot script loaded');
})();