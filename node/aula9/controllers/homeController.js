exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar form</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('ei sou sua nova rota de POST');
};