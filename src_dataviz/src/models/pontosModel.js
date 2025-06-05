var database = require("../database/config")

function cadastrar(nome, pontuacao) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, pontuacao) VALUES ('${nome}', '${pontuacao}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(){
    var instrucao = `select nome, pontuacao from usuario order by pontuacao desc;`
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};