const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>ENviar</button>
    </form>
    `);
});


app.post('/', (req, res) => {
    res.send('recebi o formulario');
});

app.get('/contrato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');

});