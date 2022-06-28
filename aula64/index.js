const numeros = [5, 1, 2, 3, 8, 7, 50, 80, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    { nome: 'luiz', idade: 63 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'letícia', idade: 41 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 67 },
];
const pesssoaComNomeGrande = pessoas.filter(Object => Object.nome.length > 5);
console.log(pesssoaComNomeGrande);

const pesssoaComMaisDeCinquentaAnos = pessoas.filter(Object => Object.idade > 50);
console.log(pesssoaComMaisDeCinquentaAnos);

const NomeTerminaComA = pessoas.filter(Object => {
    return Object.nome.endsWith('a');
});
console.log(NomeTerminaComA);
