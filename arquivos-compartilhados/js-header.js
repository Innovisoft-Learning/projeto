// Adicione o evento DOMContentLoaded para garantir que o código só será executado após o carregamento completo da página.
document.addEventListener("DOMContentLoaded", function () {
  // Carrega o conteúdo do header.html e insere no elemento com o ID 'header-placeholder'
  fetch('arquivos-compartilhados/header.html')
      .then(response => response.text())
      .then(content => {
          const headerPlaceholder = document.getElementById('header-placeholder');
          headerPlaceholder.innerHTML = content;

          // JavaScript para ocultar e exibir o dropdown
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
});
