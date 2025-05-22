let turnoActual: number = 0;

const numeroDisplay = document.getElementById("numero-turno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");

function displayActualizado() {
  if (numeroDisplay) {
    numeroDisplay.textContent = turnoActual.toString().padStart(2, "0");
  }
}

function siguiente() {
  turnoActual = turnoActual + 1;
  displayActualizado();
}

function anterior() {
  turnoActual = turnoActual - 1;
  displayActualizado();
}

function reset() {
  turnoActual = 0;
  displayActualizado();
}

botonSiguiente.addEventListener("click", siguiente);
botonAnterior.addEventListener("click", anterior);
botonReset.addEventListener("click", reset);
