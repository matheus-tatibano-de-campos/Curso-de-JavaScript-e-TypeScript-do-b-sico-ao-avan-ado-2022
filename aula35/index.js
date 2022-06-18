const pessoa = {
    nome: 'matheus',
    sobrenome: 'tatibano',
    idade: 26,
    cidade: 'capao',
}




for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}