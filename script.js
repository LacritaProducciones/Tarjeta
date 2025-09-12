const ribbon = document.getElementById("ribbon");
const chat = document.getElementById("chat");
const messageBox = document.getElementById("messageBox");
const notifSound = document.getElementById("notifSound");
const typeSound = document.getElementById("typeSound");
const loveText = document.getElementById("loveText");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const card = document.getElementById("card");

// Máquina de escribir con sonido
function typeWriter(text, element, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);

      // sonido de tecla
      typeSound.currentTime = 0;
      typeSound.play();

      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Botón "Abrir"
startBtn.addEventListener("click", () => {
  // Caja se desvanece
  startScreen.classList.add("fade-out");

  setTimeout(() => {
    startScreen.style.display = "none";
    card.classList.remove("hidden");

    // Después de 1 seg aparece el chat + suena notificación
    setTimeout(() => {
      chat.classList.remove("hidden");
      chat.style.animation = "slideIn 0.8s ease forwards";

      // sonido notificación
      notifSound.currentTime = 0;
      notifSound.play();

      // vibración animada
      chat.classList.add("vibrate");
      setTimeout(() => chat.classList.remove("vibrate"), 400);
    }, 1000);
  }, 800);
});

// Al jalar la cuerda
ribbon.addEventListener("click", () => {
  ribbon.style.display = "none";
  chat.style.display = "none";

  messageBox.classList.remove("hidden");
  messageBox.style.opacity = "1";

  setTimeout(() => {
    loveText.textContent = "";
    typeWriter("Te amo ❤️", loveText, 400);
  }, 1000);
});
