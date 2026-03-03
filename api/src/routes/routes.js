const express = require('express');
const router = express.Router();

const {
    listarTodas,
    listarPorId,
    listarPorNome,
    criarMusica,
    atualizarMusica,
    removerMusica
} = require('../controler/controle');

router.get('/', (req, res) => {
    if (req.query.nome) {
        listarPorNome(req, res);
    } else {
        listarTodas(req, res);
    }
});

router.get('/:id', listarPorId);

router.post('/', criarMusica);

router.put('/:id', atualizarMusica);

router.delete('/:id', removerMusica);

module.exports = router;