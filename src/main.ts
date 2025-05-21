function sumar() {
  const sumando1 = document.getElementById("sumando1").value;
  const sumando2 = document.getElementById("sumando2").value;

  const resultado = parseInt(sumando1) + parseInt(sumando2);

  document.getElementById("resultado").innerHTML = resultado;
}

const botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", sumar);
