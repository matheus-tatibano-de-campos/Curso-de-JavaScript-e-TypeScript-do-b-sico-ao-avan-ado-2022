const numero = Number (prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>a raiz quadrada do seu numero é: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} È inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>È NaN:${isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo:${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima:${Math.round(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais:${numero.toFixed(2)} </p>`;