var express = require("express");
var router = express.Router();

var pontosController = require("../controllers/pontosController");

router.post("/cadastrar", function (req, res) {
    pontosController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    pontosController.listar(req, res);
});

module.exports = router;