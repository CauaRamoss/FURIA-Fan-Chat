// Seleciona elementos do DOM
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Função para adicionar mensagens no chat
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para o bot responder
function botResponse(userMessage) {
    let response = "";

    // Respostas básicas
    if (userMessage.includes("jogo")) {
        response = "O próximo jogo da Furia é amanhã 18h contra a NAVI! 🔥";
    } else if (userMessage.includes("time") || userMessage.includes("jogadores")) {
        response = "Line-up atual: KSCERATO, yuurih, chelo, FalleN e arT.";
      } else if (userMessage.includes("torcida") || userMessage.includes("vamo furia")) {
        response = "É O BRASILZÃO EM PESO! 🇧🇷🐆 #VamoFURIA";
      } else {
        response = "Comandos Furiosos: jogo, time ou torcida! #VamoFURIA";
      }

      setTimeout(() => {
        addMessage(response, "FURIA Bot");
      }, 500); // delay
}

// Função para lidar com envio de mensagens
function sendMessage() {
    const message = userInput.value.trim();
    if (message !== "") {
        addMessage(message, "Você");
        userInput.value = "";
        botResponse(message.toLowerCase());
    }
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Boas-vindas
window.onload = function() {
    addMessage("Bem-vindo ao chat oficial dos fãs da FURIA! 🎮🔥", "FURIA Bot");
};