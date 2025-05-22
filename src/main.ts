let turnoActual: number = 0;

const numeroDisplay = document.getElementById("numero-turno");
const botonSiguiente = document.getElementById("siguiente");

function displayActualizado() {
  if (numeroDisplay) {
    numeroDisplay.textContent = turnoActual.toString().padStart(2, "0");
  }
}

function siguiente() {
  turnoActual = turnoActual + 1;
  displayActualizado;
}

botonSiguiente.addEventListener("click", siguiente);
