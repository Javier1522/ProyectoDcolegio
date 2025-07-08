document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const error = document.getElementById("error");

  // Usuario de ejemplo
  const usuarioValido = "admin";
  const claveValida = "1234";

  if (usuario === usuarioValido && clave === claveValida) {
    window.location.href = "http://127.0.0.1:5500/index.html"; // redirige a otra página
  } else {
    error.textContent = "⚠️ Usuario o contraseña incorrectos.";
  }
});

function olvidoClave() {
  alert("Por favor comunícate con la institución para recuperar tu contraseña.");
}
