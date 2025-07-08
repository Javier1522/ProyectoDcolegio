// Animación básica de mensaje interactivo
document.addEventListener("DOMContentLoaded", function() {
  const mensaje = document.getElementById("mensajeInteractivo");
  setInterval(() => {
    mensaje.style.color = mensaje.style.color === "darkblue" ? "#004080" : "darkblue";
  }, 1000);
});