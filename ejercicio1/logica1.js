// Obtener todos los enlaces del documento HTML
const enlaces = document.getElementsByTagName("a");

// Obtener el número total de enlaces
console.log("Número total de enlaces: " + enlaces.length);

// Mostrar el contenido de cada enlace
console.log("Contenido de cada enlace:");
for (let i = 0; i < enlaces.length; i++) {
  console.log(enlaces[i].textContent);
}

// Obtener la dirección del penúltimo enlace
if (enlaces.length > 1) {
  console.log("Dirección del penúltimo enlace: " + enlaces[enlaces.length - 2].href);
}

// Obtener el número de enlaces que enlazan a la dirección http://prueba
let enlacesPrueba = 0;
for (let i = 0; i < enlaces.length; i++) {
  if (enlaces[i].href === "http://prueba/") {
    enlacesPrueba++;
  }
}
console.log("Número de enlaces que enlazan a http://prueba: " + enlacesPrueba);

// Obtener el número de enlaces en el tercer párrafo
const tercerParrafo = document.getElementsByTagName("p")[2];
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a");
console.log("Número de enlaces en el tercer párrafo: " + enlacesTercerParrafo.length);

