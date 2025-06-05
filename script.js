const armadilhas = [];
const premios = [];

let rodada = 1;
let dificuldade;
let acertos = 0;
let pontuacaoTotal = 0;

function iniciarJogo() {
    let secInicio = document.querySelector('.inicio');
    secInicio.style.display = 'none';

    dificuldade = document.querySelector('#dificuldade').value;

    plotarElementos();
}

function plotarElementos() {
    let tabela = document.querySelectorAll('table')[0];
    let frase = '';
    let inicio = 1;
    acertos = 0;

    while (armadilhas.length < dificuldade || premios.length < dificuldade) {
        let errado = Number((Math.random() * (100 - 1) + 1).toFixed());
        let certo  = Number((Math.random() * (100 - 1) + 1).toFixed());

        if (!armadilhas.includes(errado) && !premios.includes(errado) && armadilhas.length < dificuldade) {
            armadilhas.push(errado);
        }

        if (!armadilhas.includes(certo) && !premios.includes(certo) && premios.length < dificuldade) {
            premios.push(certo);
        }
    }
    
    for (let i = 0; i < 10; i++) {
        frase += `<tr>`;
        for (let j = 0; j < 10; j++) {
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

    let tabela = document.querySelectorAll('table')[1];

    tabela.innerHTML += `<tr>
                    <td> Usuário </td>
                    <td> ${pontuacaoTotal} </td>
                </tr>`;

    secFinalizar = document.querySelector('.finalizar');
    secFinalizar.style.display = 'flex';
}