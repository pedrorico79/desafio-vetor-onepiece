var pontosModel = require("../models/pontosModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var pontuacao = req.body.pontuacaoServer; // PARAMETRIZAR

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    } else {
        pontosModel.cadastrar(nome,pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function listar(req,res){
    pontosModel.listar().then(function (resultado){
        res.status(200).send(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    listar
}