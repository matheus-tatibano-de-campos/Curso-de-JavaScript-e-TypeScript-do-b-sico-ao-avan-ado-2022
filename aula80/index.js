class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

function pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
};


const p1 = new Pessoa('luiz', 'muralha');
console.log(p1)