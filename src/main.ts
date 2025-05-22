let turnoActual: number = 0;

const numeroDisplay = document.getElementById("numero-turno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const botonCambiar = document.getElementById("cambiar");
const cajita = document.getElementById("caja") as HTMLInputElement | null;

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

function cambiar() {
  if (cajita) turnoActual = parseInt(cajita.value);
  displayActualizado();
}

if (
  botonCambiar !== null &&
  botonCambiar !== undefined &&
  botonCambiar instanceof HTMLButtonElement
) {
  botonCambiar.addEventListener("click", cambiar);
}

if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", siguiente);
}

if (
  botonAnterior !== null &&
  botonAnterior !== undefined &&
  botonAnterior instanceof HTMLButtonElement
) {
  botonAnterior.addEventListener("click", anterior);
}

if (
  botonReset !== null &&
  botonReset !== undefined &&
  botonReset instanceof HTMLButtonElement
) {
  botonReset.addEventListener("click", reset);
}
