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