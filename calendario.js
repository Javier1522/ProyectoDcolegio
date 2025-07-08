const calendario = document.getElementById("calendario");
const mesAnio = document.getElementById("mesAnio");

const fecha = new Date();
const mes = fecha.getMonth(); // 0-11
const anio = fecha.getFullYear();

const nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesAnio.textContent = `${nombreMeses[mes]} ${anio}`;

// Eventos académicos (día: tipo)
const eventos = {
  5: "evento",      // Día 5: evento académico
  15: "vacacion",   // Día 15: vacaciones
  25: "evento"      // Día 25: evento académico
};

function crearCalendario(mes, anio) {
  calendario.innerHTML = ""; // Limpiar

  const primerDia = new Date(anio, mes, 1).getDay(); // 0 = domingo
  const diasEnMes = new Date(anio, mes + 1, 0).getDate(); // Total días mes

  // Nombres de los días
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  diasSemana.forEach(dia => {
    const div = document.createElement("div");
    div.classList.add("dia");
    div.style.background = "#dde5f2";
    div.textContent = dia;
    calendario.appendChild(div);
  });

  // Espacios vacíos antes del primer día
  for (let i = 0; i < primerDia; i++) {
    const div = document.createElement("div");
    calendario.appendChild(div);
  }

  // Crear días del mes
  for (let dia = 1; dia <= diasEnMes; dia++) {
    const div = document.createElement("div");
    div.classList.add("dia");
    div.textContent = dia;

    if (eventos[dia]) {
      div.classList.add(eventos[dia]);
    }

    calendario.appendChild(div);
  }
}

crearCalendario(mes, anio);
