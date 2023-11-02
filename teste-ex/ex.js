var slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex";
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}


function botao(botaoClicado) {
    let errados = document.getElementsByClassName("errados");
    let botoes = document.getElementsByClassName("botao-ex");
    //for (let i = 0; i < errados.length; i++) {
    //    errados[i].style.color = "red";
    //    errados[i].style = "border-color: red; background-color: rgb(148, 0, 0);";

    //}
    console.log(botaoClicado.value)
    if (botaoClicado.value == "A"){
        alert("resposta certa");
    }
    else {
        //alert("resposta errada");
        botaoClicado.innerHTML = "X";
        botaoClicado.style = "color: white;";
    };

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].disabled = "true";
        botoes[i].style = "cursor: not-allowed;"
    }
    
}