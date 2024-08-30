// Carrossel
let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel img');
imagens[indiceAtual].style.display = 'block';

setInterval(() => {
    imagens[indiceAtual].style.display = 'none';
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagens[indiceAtual].style.display = 'block';
}, 3000); // Troca de imagem a cada 3 segundos

// Cronômetro regressivo
const dataInicio = new Date('December 25, 2018 13:40:00').getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = agora - dataInicio;

    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('contagem').innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias<br>` + 
        `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

