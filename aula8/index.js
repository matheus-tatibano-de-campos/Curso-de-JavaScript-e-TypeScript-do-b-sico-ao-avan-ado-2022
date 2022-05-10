const nome = 'Matheus';
const sobrenome = 'Tatibano';
const idade = 26;
const peso = 88;
const alturaEmCm = 1.65;
const data = 1995
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}, Kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${data}`);