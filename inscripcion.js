document.getElementById("formInscripcion").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const confirmarClave = document.getElementById("confirmarClave").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (clave !== confirmarClave) {
    mensaje.textContent = "⚠️ Las contraseñas no coinciden.";
    mensaje.style.backgroundColor = "#f8d7da";
    mensaje.style.color = "#721c24";
    mensaje.style.display = "block";
  } else if (clave.length < 4) {
    mensaje.textContent = "⚠️ La contraseña debe tener al menos 4 caracteres.";
    mensaje.style.backgroundColor = "#f8d7da";
    mensaje.style.color = "#721c24";
    mensaje.style.display = "block";
  } else {
    mensaje.textContent = `✅ Usuario ${nombre} inscrito correctamente.`;
    mensaje.style.backgroundColor = "#d4edda";
    mensaje.style.color = "#155724";
    mensaje.style.display = "block";
    this.reset();
  }
});
