const numeros = [5, 1, 2, 3, 8, 7, 50, 80, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor =>
    valor * 2
);
console.log(numerosEmDobro);


const pessoas = [
    { nome: 'luiz', idade: 63 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'letícia', idade: 41 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 67 },
];
const nomes = pessoas.map(Object => Object.nome);
console.log(nomes);
const idades = pessoas.map(Object => ({ idade: Object.idade }));
console.log(idades);

const comIds = pessoas.map(function (Object, indice) {
    const newObj = { ...Object };
    newObj.id = indice;
    return newObj;
});
console.log(comIds);
