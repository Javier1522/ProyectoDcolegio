const form = document.getElementById("formDocente");
const tabla = document.getElementById("tablaDocentes");

let docentes = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const asignatura = document.getElementById("asignatura").value.trim();
  const titulo = document.getElementById("titulo").value.trim();

  if (nombre && asignatura && titulo) {
    docentes.push({ nombre, asignatura, titulo });

    // Ordenar alfabéticamente por asignatura
    docentes.sort((a, b) => a.asignatura.localeCompare(b.asignatura));
    
    mostrarDocentes();
    form.reset();
  }
});

function mostrarDocentes() {
  tabla.innerHTML = "";
  docentes.forEach(docente => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${docente.nombre}</td>
      <td>${docente.asignatura}</td>
      <td>${docente.titulo}</td>
    `;
    tabla.appendChild(fila);
  });
}
