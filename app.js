
const express = require('express');
const app = express();

// Página inicial
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Bem-vindo ao catálogo de heróis da Marvel e DC!</p>

            <h2>Empresas</h2>
            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Spider-Man">Spider-Man</a></li>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
        </body>
        </html>
    `);
});

// Página da Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>
            <p>A Marvel é uma empresa conhecida por seus personagens e histórias de super-heróis.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Spider-Man">Spider-Man</a></li>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Página da DC
app.get('/dc', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DC</title>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC é uma empresa conhecida por personagens como Batman e Superman.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Rota com dois parâmetros
app.get('/personagem/:empresa/:nome', (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <html>
        <head>
            <title>Personagem</title>
        </head>
        <body>
            <h1>Informações do Personagem</h1>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Personagem:</strong> ${nome}</p>

            <a href="/">Voltar para a página inicial</a>
        </body>
        </html>
    `);
});

// Inicialização do servidor
app.listen(3030, () => {
    console.log('Servidor rodando em http://localhost:3030');
});
