/*
* Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) -valores copiados

Refência (mutável) - array, object, function - pasados por referência
*/

const a = {
    nome: 'luiz',
    sobrenome: 'Otávio'
};

const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
