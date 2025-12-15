const boton = document.getElementById("modo.boton");
const cuerpo = document.body;
cuerpo.classList.remove("body");
boton.textContent= ("🔆");

boton.addEventListener("click",function() {
    cuerpo.classList.toggle("claro");

    if(cuerpo.classList.contains("claro")){
        boton.textContent= "🌘";
    }
    else {   boton.textContent="🔆";

    }

});
let nombre = prompt("Ingrese su nombre:");
alert("Hola "+ nombre + " Bienvenido a la seccion NOTICIAS. Necesitamos que nos conteste la siguiente pregunta.");
let edad  = prompt("Ingrese su edad...");
edad = parseInt(edad);
if (isNaN(edad)){
alert("El caracter ingresado no es un numero, porfavor ingrese su edad");
} else {
    if (edad >= 18){
    alert("Bienvenido, usted es mayor de edad, tiene acceso a toda la web.");
}
else {
alert ("Bienvenido, usted es menor de edad, algunos accesos seran denegados.");
}
}