
window.sr = ScrollReveal({ reset: false });

sr.reveal('.quadrados', {
    rotate: {x: 80, y: 0, z: 0},
    duration: 1000,
    delay: 500
});

sr.reveal('.card', {
    rotate: {x: 0, y: 80, z: 0},
    duration: 1000,
    delay: 500
});

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
  