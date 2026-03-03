let musicas = [
    { id: 1, autor: 'Yellowstone Theme',      link: 'https://youtu.be/9ECKaPrAGds' },
    { id: 2, autor: 'The Cowboy In Me',       link: 'https://youtu.be/uJD-NK5MMDk?list=RDuJD-NK5MMDk' },
    { id: 3, autor: 'Lady May',               link: 'https://youtu.be/tiwJadn-Nso?list=RDtiwJadn-Nso' },
];

let nextId = 4; 

function getAllMusicas() {
    return musicas;
}

function getMusicaById(id) {
    return musicas.find(m => m.id === id);
}

function getMusicasByNome(nome) {

    const termo = nome.toLowerCase();
    return musicas.filter(m => m.autor.toLowerCase().includes(termo));
}

function createMusica(dados) {
    const novaMusica = {
        id: nextId++,
        autor: dados.autor,
        link: dados.link
    };
    musicas.push(novaMusica);
    return novaMusica;
}

function updateMusica(id, dados) {
    const musica = getMusicaById(id);
    if (!musica) return null;

    if (dados.autor !== undefined) musica.autor = dados.autor;
    if (dados.link  !== undefined) musica.link  = dados.link;

    return musica;
}

function deleteMusica(id) {
    const index = musicas.findIndex(m => m.id === id);
    if (index === -1) return false;

    musicas.splice(index, 1);
    return true;
}

module.exports = {
    getAllMusicas,
    getMusicaById,
    getMusicasByNome,
    createMusica,
    updateMusica,
    deleteMusica
};