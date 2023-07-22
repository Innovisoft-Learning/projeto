// JavaScript para ocultar e exibir o dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdownTrigger = document.querySelector(".cursos-nav");
    const dropdown = document.querySelector(".submenu");
  
    if (dropdownTrigger && dropdown) {
      // Ocultar o dropdown quando a página é rolada
      document.addEventListener("scroll", function () {
        const dropdownIsVisible = window.getComputedStyle(dropdown).display === "block";
        if (dropdownIsVisible) {
          dropdown.style.display = "none";
        }
      });
  
      // Exibir o dropdown quando o mouse passa sobre o item do menu
      dropdownTrigger.addEventListener("mouseover", function () {
        dropdown.style.display = "block";
      });
  
      // Ocultar o dropdown quando o mouse sai do item do menu
      dropdownTrigger.addEventListener("mouseout", function () {
        dropdown.style.display = "none";
      });
    }
});
  
  