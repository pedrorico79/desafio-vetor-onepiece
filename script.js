function iniciarJogo() {
    let secInicio = document.querySelector('.inicio');
    secInicio.style.display = 'none';

    let tabela = document.querySelector('table');
    let frase = '';
    let inicio = 1;
    
    for (let i = 0; i < 20; i++) {
        frase += `<tr>`;
        for (let j = 0; j < 20; j++) {
            frase += `<td onclick="exibir(${inicio})" id="td${inicio}"></td>`;
            inicio++;
        }
        frase += `</tr>`;
    }

    tabela.innerHTML = frase;
}

function exibir(indice) {
    let td = document.querySelector(`#td${indice}`);

    td.innerHTML = indice;
}