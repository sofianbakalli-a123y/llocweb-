// Carregar la pàgina d'inici en obrir
document.addEventListener('DOMContentLoaded', function() {
    changeContent('home');
});

function changeContent(page) {
  var contentDiv = document.getElementById('content');
  
  switch (page) {
    case 'home':
      contentDiv.innerHTML = `
        <img src="https://images.unsplash.com/photo-1614632537190-23e4146777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pilota de futbol">
        <h2>
          Benvingut al teu analista de Futbol!
        </h2>
        <p>
          Aquesta és la pàgina principal. Aquí podràs consultar estadístiques
          i resultats en directe.
        </p>
        <p>
          Tria una opció del menú per començar.
        </p>
      `;
      break;
      
    case 'about':
      contentDiv.innerHTML = `
        <h2>Sobre FutbolBot</h2>
        <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Estadi">
        <p>
          Som un equip d'apassionats del futbol.
        </p>
        <p>
          Aquest bot utilitza dades simulades per dir-te qui és
          el millor jugador de la jornada.
        </p>
      `;
      break;
      
    case 'chat':
      // Aquí està el canvi important: en lloc d'un formulari estàtic, posem el xat
      contentDiv.innerHTML = `
        <h2>Xat amb el Bot</h2>
        <p>
          Tens dubtes sobre l'alineació d'avui? Pregunta-ho!
        </p>
        <div class="chat-window">
            <div id="chat-messages">
                <div class="msg-bubble bot-msg">Hola! Pregunta'm sobre La Lliga, Messi o la Champions.</div>
            </div>
            <form class="chat-input-area" onsubmit="processUserMessage(event)">
                <input type="text" id="user-input" placeholder="Escriu la teva pregunta..." required autocomplete="off">
                <button type="submit">Enviar</button>
            </form>
        </div>`;
      break;

    default:
      contentDiv.innerHTML = '<h2>Error: Fora de joc! (Pàgina no trobada)</h2>';
  }
}

// --- LÒGICA DEL CHATBOT ---
// Aquesta funció s'activa quan envies el formulari del xat
function processUserMessage(event) {
    event.preventDefault(); // Evita que la pàgina es recarregui
    
    var inputField = document.getElementById('user-input');
    var messageContainer = document.getElementById('chat-messages');
    var userText = inputField.value;
    
    if (userText.trim() === "") return;

    // 1. Mostrar el missatge de l'usuari
    messageContainer.innerHTML += `<div class="msg-bubble user-msg">${userText}</div>`;
    inputField.value = ""; // Netejar l'input
    
    // Fer scroll cap avall
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // 2. Respondre automàticament (Simulació d'IA)
    setTimeout(function() {
        var botReply = getFootballReply(userText);
        messageContainer.innerHTML += `<div class="msg-bubble bot-msg">${botReply}</div>`;
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 800);
}

// Funció que decideix què respondre (Base de dades simple)
function getFootballReply(text) {
    text = text.toLowerCase();
    
    if (text.includes('messi')) {
        return "Leo Messi és el GOAT (El millor de tots els temps).";
    } else if (text.includes('ronaldo') || text.includes('cr7')) {
        return "Cristiano Ronaldo és una màquina de fer gols!";
    } else if (text.includes('barça') || text.includes('barcelona')) {
        return "El Barça aposta sempre per la Masia i el toc de pilota.";
    } else if (text.includes('madrid') || text.includes('real')) {
        return "El Reial Madrid és el rei d'Europa amb les seves Champions.";
    } else if (text.includes('champions')) {
        return "La Champions League és la competició més difícil del món.";
    } else if (text.includes('lliga')) {
        return "La Lliga espanyola és molt tècnica comparada amb la Premier.";
    } else if (text.includes('hola')) {
        return "Hola crack! De quin equip ets?";
    } else {
        return "Interessant... però el futbol és imprevisible. Qui creus que guanyarà el mundial?";
    }
}
