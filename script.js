const ribbon = document.getElementById("ribbon");
const chat = document.getElementById("chat");
const messageBox = document.getElementById("messageBox");
const notifSound = document.getElementById("notifSound");
const typeSound = document.getElementById("typeSound");
const loveText = document.getElementById("loveText");

// Mostrar el chat después de 1 segundo con animación + sonido
setTimeout(() => {
  chat.classList.remove("hidden");
  chat.style.animation = "slideIn 0.8s ease forwards";
  notifSound.play();
}, 1000);

// Función para escribir texto lentamente con sonido
function typeWriter(text, element, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      typeSound.currentTime = 0;
      typeSound.play();
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Al hacer click en la cuerda
ribbon.addEventListener("click", () => {
  // Ocultar cuerda y chat
  ribbon.style.display = "none";
  chat.style.display = "none";

  // Mostrar mensaje final + gif con animación
  messageBox.classList.remove("hidden");
  messageBox.style.opacity = "1";

  // Activar máquina de escribir debajo del gif con sonido
  setTimeout(() => {
    loveText.textContent = "";
    typeWriter("Te amo ❤️", loveText, 400); // velocidad lenta
  }, 1000);
});
