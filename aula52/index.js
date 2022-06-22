function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('luiz');
const funcao2 = retornaFuncao('joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());