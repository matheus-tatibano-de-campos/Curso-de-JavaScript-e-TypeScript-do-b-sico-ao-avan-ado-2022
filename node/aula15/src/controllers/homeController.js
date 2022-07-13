

exports.paginaInicial = (req, res) => {
    req.flash('info', 'olá mundo!');
    req.flash('error', 'eita!');
    req.flash('sucess', 'parabens!');
    req.flash('index', ' mundo!');

    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};