function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Lais', 'Tavares', 32);
const pessoa3 = criaPessoa('Maria', 'Silva', 33);
const pessoa4 = criaPessoa('Carlos', 'Campos', 86);
const pessoa5 = criaPessoa('Dani', 'Oliveria', 75);

console.log(pessoa1.nome, pessoa2.nome);