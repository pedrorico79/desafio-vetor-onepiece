let armadilhas = [];
let premios = [];

let rodada = 1;
let dificuldade;
let acertos = 0;
let pontuacaoTotal = 0;

function iniciarJogo() {
    let secInicio = document.querySelector('.inicio');
    secInicio.style.display = 'none';
    let nome = ipt_nome.value;
    salvarNome(nome);

    dificuldade = document.querySelector('#dificuldade').value;

    timer(dificuldade);
    let temporizador = document.getElementById('temporizador');

    temporizador.style.border = "0.5rem #860000 solid";
    temporizador.style.display = 'flex';

    plotarElementos();
}

function plotarElementos() {
    let tabela = document.querySelectorAll('table')[0];
    let frase = '';
    let inicio = 1;
    acertos = 0;
    let tamanho = dificuldade * dificuldade;

    while (armadilhas.length < dificuldade - 2 || premios.length < dificuldade) {
        let errado = Number((Math.random() * (tamanho- 1) + 1).toFixed());
        let certo = Number((Math.random() * (tamanho - 1) + 1).toFixed());

        if (!armadilhas.includes(errado) && !premios.includes(errado) && armadilhas.length < dificuldade - 2) {
            armadilhas.push(errado);
        }

        if (!armadilhas.includes(certo) && !premios.includes(certo) && premios.length < dificuldade) {
            premios.push(certo);
        }
    }

    for (let i = 0; i < dificuldade; i++) {
        frase += `<tr>`;
        for (let j = 0; j < dificuldade; j++) {
            frase += `<td onclick="exibir(${inicio})" id="td${inicio}"></td>`;

            inicio++;
        }
        frase += `</tr>`;
    }

    console.log(premios, armadilhas)
    tabela.innerHTML = frase;
}

function exibir(indice) {
    let td = document.querySelector(`#td${indice}`);
    var errou = false;
    var acertou = false;

    if (armadilhas.includes(indice)) {
        td.style.backgroundColor = `#bb0000`;
        td.innerHTML = `❌`;
        errou = true;
    } else if (premios.includes(indice)) {
        td.style.backgroundColor = `#00bb00`;
        td.innerHTML = `⭐`;
        acertou = true;
        acertos++;
        pontuacaoTotal += 1;
    } else {
        td.style.backgroundColor = `#111111`;
    }

    if (errou) {
        armadilhas = [];
        premios = [];

        if (rodada < 3) {
            exibirPopUp(`Você errou! Começando rodada ${rodada + 1}`);
            rodada++;
            plotarElementos();
        } else {
            exibirPopUp('Você errou e a rodada 3 finalizou! Exibindo resultados');
            exibirResultados();
        }
    }

    if (acertou && acertos == dificuldade) {
        if (rodada < 3) {
            exibirPopUp(`Você acertou todos! Começando rodada ${rodada + 1}`);
            rodada++;
            armadilhas = [];
            premios = [];
            plotarElementos();
        } else {
            exibirPopUp('Você acertou e a rodada 3 finalizou! Exibindo resultados');
            exibirResultados();
        }
    }
}

function exibirPopUp(mensagem) {
    let popup = document.querySelector('.popup');
    let secMensagem = popup.querySelector('.mensagem');

    popup.style.display = 'flex';
    secMensagem.innerHTML = mensagem;

    setTimeout(() => {
        fecharPopUp();
    }, 4000);
}

function fecharPopUp() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

function exibirResultados() {
    let secJogo = document.querySelector('.jogo');
    secJogo.style.display = 'none';

    let temporizador = document.getElementById('temporizador');
    temporizador.style.display = 'none';

    let tabela = document.querySelectorAll('table')[1];

    let tempo = 300 - timeLeft;

    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    fraseTempo = `${minutos}:${segundos}`;

    tabela.innerHTML += `<tr>
                    <td> ${sessionStorage.NOME_USUARIO} </td>
                    <td> ${pontuacaoTotal} </td>
                    <td> ${fraseTempo} </td>
                </tr>`;

    secFinalizar = document.querySelector('.finalizar');
    secFinalizar.style.display = 'flex';
}

var timeLeft = 300;

function timer(dificuldade) {
    const timerElement = document.getElementById("timer");

    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
            timerElement.innerText = "Tempo esgotado!";
        }
    }, 1000);
}

function salvarNome(nome){
    sessionStorage.NOME_USUARIO = nome;
}