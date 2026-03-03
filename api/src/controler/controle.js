const {
    getAllMusicas,
    getMusicaById,
    getMusicasByNome,
    createMusica,
    updateMusica,
    deleteMusica
} = require('../models/model');

function listarTodas(req, res) {
    const musicas = getAllMusicas();
    res.status(200).json(musicas);
}

function listarPorId(req, res) {
    const id = parseInt(req.params.id);
    const musica = getMusicaById(id);

    if (musica) {
        res.status(200).json(musica);
    } else {
        res.status(404).json({ message: 'Música não encontrada' });
    }
}

function listarPorNome(req, res) {
    const { nome } = req.query; 

    if (!nome) {
        return res.status(400).json({ message: 'Parâmetro ?nome= é obrigatório' });
    }

    const resultados = getMusicasByNome(nome);
    res.status(200).json(resultados);
}

function criarMusica(req, res) {
    const { autor, link } = req.body;

    if (!autor || !link) {
        return res.status(400).json({ message: 'autor e link são obrigatórios' });
    }

    const nova = createMusica({ autor, link });
    res.status(201).json(nova);
}

function atualizarMusica(req, res) {
    const id = parseInt(req.params.id);
    const dados = req.body;

    const musicaAtualizada = updateMusica(id, dados);

    if (musicaAtualizada) {
        res.status(200).json(musicaAtualizada);
    } else {
        res.status(404).json({ message: 'Música não encontrada' });
    }
}

function removerMusica(req, res) {
    const id = parseInt(req.params.id);
    const deletou = deleteMusica(id);

    if (deletou) {
        res.status(204).end();  
    } else {
        res.status(404).json({ message: 'Música não encontrada' });
    }
}

module.exports = {
    listarTodas,
    listarPorId,
    listarPorNome,
    criarMusica,
    atualizarMusica,
    removerMusica
};