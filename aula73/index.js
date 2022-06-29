function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

pessoa.prototype

const pessoa1 = new pessoa('luiz', 'o.');
const data = new date();
console.dir(pessoa1);
console.dir(data);