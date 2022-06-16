const pessoa = {
    nome: 'matheus',
    sobrenome: 'tatibano',
    idade: 26,
    endereco:{
        rua: ' conego luiz',
        numero: 300
    }
};

const {nome, ...resto } = pessoa;
console.log( resto);