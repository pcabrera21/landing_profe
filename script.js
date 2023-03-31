function saludo() {
  alert("Hola mundo, bienvenido");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var boton = document.getElementsByClassName("link")[0];

boton.addEventListener("click", function() {
  saludo();
});

