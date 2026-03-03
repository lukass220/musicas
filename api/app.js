const express = require('express');
const musicaRoutes = require('./src/routes/routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/musicas', musicaRoutes);  

app.listen(PORT, () => {
    console.log(`Servidor rodando → http://localhost:${PORT}`);
});