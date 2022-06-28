function pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new pessoa('luiz', 'soares');
const p2 = new pessoa('maria', 'dolores');

console.log(p1);
console.log(p2);

