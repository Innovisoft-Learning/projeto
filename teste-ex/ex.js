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


function botaoErrado() {
    let errados = document.getElementsByClassName("errados");
    for (let i = 0; i < errados.length; i++) {
        errados[i].style.color = "red";
        errados[i].style = "border-color: red; background-color: rgb(148, 0, 0);";

    }
}