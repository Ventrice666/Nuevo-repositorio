alert("El siguiente contenido puede puede herir su sensibilidad");

var confirmacion=confirm("¿Desea una busqueda en particular?");

if(confirmacion== true){
   var opcion = prompt("Ingrese el numero de lo que desea ver\n"+
   "1.delicuente menor\n"+
   "2.delicuente busqueda municipal\n"+
   "3.delicuente provincial\n"+
   "4.delicuente busqueda nacional\n"+
   " 5.delicuente busqueda internacional \n"+
   "6. Busqueda vivo o muerto");

}


  switch (opcion) {
    case "1":
      alert("Mostrando delincuente menor...");
      window.location.href= "una_estrella.html";
      break;
    case "2":
      alert("Mostrando delincuente en búsqueda municipal...");
      window.location.href="dos_estrellas.html";
      break;
    case "3":
      alert("Mostrando delincuente provincial...");
      window.location.href="tres_estrellas.html";
      break;
    case "4":
      alert("Mostrando delincuente en búsqueda nacional...");
      window.location.href="cuatro_estrellas.html";
      break;
    case "5":
      alert("Mostrando delincuente en búsqueda internacional...");
      window.location.href="cinco_estrellas.html";
      break;
    case "6":
        alert("Busqueda vivo o muerto.....");
        window.location.href="NOTICIAS.HTML";
        break;
   
  }

// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
});
