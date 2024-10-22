function verificarNome() {
    const nomeInput = document.getElementById('nome').value;
    const mensagemDiv = document.getElementById('mensagem');
    const contagemDiv = document.getElementById('contagem');
    const dialogoDiv = document.getElementById('dialogo');
    const rostoDiv = document.getElementById('rosto');
    mensagemDiv.textContent = '';
    contagemDiv.textContent = '';

    if (nomeInput.toLowerCase() === 'mariana oliveira de souza') {
        mensagemDiv.textContent = 'Bem-vinda, Mariana!';
        iniciarContagem();
    } else if (nomeInput.toLowerCase() === 'mariana') {
        mensagemDiv.textContent = 'Quero o nome completo!';
    } else {
        mensagemDiv.textContent = 'Eu sei que esse não é seu nome. Tente novamente!';
    }
}

function iniciarContagem() {
    let contador = 5;
    const contagemDiv = document.getElementById('contagem');
    const dialogoDiv = document.getElementById('dialogo');
    const rostoDiv = document.getElementById('rosto');
    const continuarBtn = document.getElementById('continuar-btn');
    const body = document.body;
    const intervalo = setInterval(() => {
        contagemDiv.textContent = `Vamos começar: ${contador}`;
        contador--;
        if (contador < 0) {
            clearInterval(intervalo);
            dialogoDiv.style.display = 'none';
            rostoDiv.style.display = 'block';
            continuarBtn.style.display = 'block';
            body.style.backgroundColor = 'black';
        }
    }, 1000);
}

function mostrarMensagemBoB() {
    const continuarBtn = document.getElementById('continuar-btn');
    const mensagemBoB = document.getElementById('mensagemBoB');
    continuarBtn.style.display = 'none';
    mensagemBoB.style.display = 'block';
}

function iniciarPergunta() {
    const mensagemBoB = document.getElementById('mensagemBoB');
    const perguntaDiv = document.getElementById('pergunta');
    mensagemBoB.style.display = 'none';
    perguntaDiv.style.display = 'block';
}

function verificarResposta(resposta) {
    const mensagemResultado = document.getElementById('mensagemResultado');
    const perguntaDiv = document.getElementById('pergunta');
    const telaPreta = document.getElementById('telaPreta');

    if (resposta === 'Marcos Vinícius Farias Silva') {
        mensagemResultado.textContent = 'Resposta correta!';
        mensagemResultado.style.display = 'block';
        perguntaDiv.style.display = 'none';
        telaPreta.style.display = 'flex';
    } else {
        mensagemResultado.textContent = 'Resposta errada! Tente novamente.';
        mensagemResultado.style.display = 'block';
    }
}

function confirmarContinuar() {
    window.location.href = 'http://127.0.0.1:5500/mariana/Mariana.html';
}
