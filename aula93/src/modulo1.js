export const nome = 'joao';
export const sobrenome = 'oliva';
export const idade = 29;


export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}