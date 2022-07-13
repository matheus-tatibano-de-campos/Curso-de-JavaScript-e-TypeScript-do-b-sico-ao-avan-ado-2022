exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'este é o valor da variavel local';
    next();
};