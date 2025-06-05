const armadilhas = [];
const premios = [];

function iniciarJogo() {
    let secInicio = document.querySelector('.inicio');
    secInicio.style.display = 'none';

    let dificuldade = document.querySelector('#dificuldade').value;

    let tabela = document.querySelector('table');
    let frase = '';
    let inicio = 1;

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

    if (armadilhas.includes(indice)) {
        td.style.backgroundColor = `#bb0000`;
    }
    
    if (premios.includes(indice)) {
        td.style.backgroundColor = `#00bb00`;
    }
    
    td.innerHTML = indice;
}
