// Adicione o evento DOMContentLoaded para garantir que o código só será executado após o carregamento completo da página.
document.addEventListener("DOMContentLoaded", function () {
  // Carrega o conteúdo do header.html e insere no elemento com o ID 'header-placeholder'
  fetch('arquivos-compartilhados/header.html')
      .then(response => response.text())
      .then(content => {
          const headerPlaceholder = document.getElementById('header-placeholder');
          headerPlaceholder.innerHTML = content;
          if (isHomePage()){
            alternar_href("ilinkpython", "#ipython")
            alternar_href("ilinkc", "#ic++")
            alternar_href("ilinkjava", "#ijava")
            alternar_href("ilinkphp", "#iphp")
            alternar_href("ilinkconexoes", "#iconexoes")
            alternar_href("ilinkrank", "#irank")
        }
        if (window.screen.width > 749) {
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
          }}
        else {
            isubmenu.style.display = 'none'
        }
      });

});

function isHomePage() {
    return window.location.pathname.endsWith("index.html");
}

function alternar_href(id_elemento, href_novo){
    let id_elemento_var = document.getElementById(id_elemento);
    console.log(id_elemento_var)
    id_elemento_var.href = href_novo;

}

  
function mostrar() {
    if (imenu.style.display == 'flex') {
        imenu.style.display = 'none'
    }

    else {
        imenu.style.display = 'flex'
    }
    
}

function mostrarsubmenu(){
    if (window.screen.width > 749) {
        
    }
    else {
        if (isubmenu.style.display == 'none') {
            isubmenu.style.display ='block'
            expandspan.style.animation = 'animacao2 0.5s forwards'
        }
        else {
            expandspan.style.animation = 'animacao3 0.5s forwards'
            isubmenu.style.display = 'none'
        }
    }
}