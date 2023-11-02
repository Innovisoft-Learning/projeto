var slideIndex = 0;
showSlide(slideIndex);
let modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let textoModal = document.getElementById("texto-modal");
let correcao = "none";
let itens = document.getElementsByClassName("itens");
let caixaItens = document.getElementById("caixa-itens");
let caixaDrop = document.getElementById("caixa-drop");
let ordemCerta = ["item1", "item2", "item3", "item4"];



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
    modal.style.display = "block";
    console.log(botaoClicado.value)
    if (botaoClicado.value == "A") {
        console.log(botaoClicado);
        botaoClicado.innerHTML = "✔";
        textoModal.innerHTML = "Parabéns, você acertou! ✅";
    }
    else {
        botaoClicado.innerHTML = "❌";
        textoModal.innerHTML = "Que pena, você marcou a incorreta. ❌"
    };

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].disabled = "true";
        botoes[i].style = "cursor: not-allowed;"
        botaoClicado.style.color = "green";
    }

    textoModal.style.color = "black";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("botao-confirmar").addEventListener("click", function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    var valoresSelecionados = [];
    var listaCerta = ['opcao2', 'opcao4'];
    var botaoConfirmar = document.getElementById("botao-confirmar");




    for (var i = 0; i < checkboxes.length; i++) {
        valoresSelecionados.push(checkboxes[i].name);
    }

    for (var i = 0; i < allCheckboxes.length; i++) {
        allCheckboxes[i].disabled = "true";
        allCheckboxes[i].style.cursor = "not-allowed";
    }

    if (valoresSelecionados.length == 2) {
        for (var i = 0; i < 2; i++) {
            if (valoresSelecionados[i] == listaCerta[i]) {
                correcao = true;
            }
            else {
                correcao = false;
            }
        }
    }
    else {
        correcao = false;
    }


    modal.style.display = "block";
    textoModal.style.color = "black";
    if (correcao == true){
        textoModal.innerHTML = "Parabéns, você acertou! ✅";
    }

    else {
        textoModal.innerHTML = "Que pena, a resposta está incorreta. ❌"
    }
    
    botaoConfirmar.disabled = true;
    botaoConfirmar.style.cursor = "not-allowed";

});

function verificarResposta() {
    var botao2 = document.getElementById("botao-confirmar2");
    var dropdown = document.getElementById("opcoes-dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    modal.style.display = "block";
    textoModal.style.color = "black";
    botao2.disabled = "true";
    dropdown.disabled = "true";
    botao2.style.cursor = "not-allowed";
    dropdown.style.cursor = "not-allowed";
    if (selectedOption === "a") {
        textoModal.innerHTML = "Parabéns, você acertou! ✅";
    } else {
        textoModal.innerHTML = "Que pena, a resposta está incorreta. ❌"
    }
};

for (i of itens) {
    i.addEventListener("dragstart", function(e){
        let selecionado = e.target;

        caixaDrop.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        caixaDrop.addEventListener("drop", function(e){
            caixaDrop.appendChild(selecionado);
            selecionado = null;
        });
        
        caixaItens.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        caixaItens.addEventListener("drop", function(e){
            caixaItens.appendChild(selecionado);
            selecionado = null;
        });
    })

    
};

function confirmar3 () {
    var botao3 = document.getElementById("botao-confirmar3");

    const caixaDrop = document.getElementById('caixa-drop'); // Obtém a referência à div.
    const elementosArrastaveis = caixaDrop.querySelectorAll('.itens');

// Obtenha os IDs dos elementos arrastáveis na ordem atual.
    const ordemAtual = Array.from(elementosArrastaveis).map(elemento => elemento.id);

    const sequenciaCorreta = JSON.stringify(ordemAtual) === JSON.stringify(ordemCerta);
    console.log(sequenciaCorreta);
    modal.style.display = "block";
    textoModal.style.color = "black";
    botao3.disabled = "true";
    botao3.style.cursor = "not-allowed";
    for (i of ordemCerta) {
        let x = document.getElementById(i);
        console.log(x);
        x.draggable = false;
        console.log(x);
    }

    if (sequenciaCorreta) {
        textoModal.innerHTML = "Parabéns, você acertou! ✅";
    }

    else {
        textoModal.innerHTML = "Que pena, a sequência está incorreta. ❌";
    }

}