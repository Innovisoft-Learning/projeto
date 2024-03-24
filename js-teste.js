
let originalTexto = 'alert("Olá mundo!")';
let codigoElemento = document.getElementById('codigo');
let isTrocando = false;


function olamundo() {
    alert("Olá mundo!")
    if (!isTrocando) {
        isTrocando = true;
        trocarCaracteres();
        setTimeout(() => {
            codigoElemento.textContent = originalTexto;
            isTrocando = false;
        }, 1000); // Tempo de troca em milissegundos (2 segundos)
    }
}

function trocarCaracteres() {
    let randomTexto = '';
    for (let i = 0; i < originalTexto.length; i++) {
        randomTexto += String.fromCharCode(Math.random() * (126 - 33) + 33); // Gera um caractere aleatório
    }
    codigoElemento.textContent = randomTexto;

    if (isTrocando) {
        setTimeout(trocarCaracteres, 50); // Trocar a cada 50ms
    } else {
        codigoElemento.textContent = originalTexto;
    }
}

function meioScroll(){
    const controle = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 1200,
        triggerElement: '.imagem-fixa',
        triggerHook: 0
    })
    .setPin('.imagem-fixa')
    .addTo(controle);
}

meioScroll();
  


function scrollAppear(){
    var textos = document.querySelectorAll('.texto-contain');
    const textosPosition = [];
    for(const texto of textos) {
        textosPosition.push(texto.getBoundingClientRect().top)
    }
    var screenPosition = innerHeight / 2 + 200;

    for (const posicao of textosPosition) {
        if (posicao < screenPosition) {
            var indice = textosPosition.indexOf(posicao);
            textos[indice].classList.add('texto-appear')

        }
    }
    console.log(textos)
}

window.addEventListener('scroll', scrollAppear);