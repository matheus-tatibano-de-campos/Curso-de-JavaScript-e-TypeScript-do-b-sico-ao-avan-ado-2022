/*
&& -> false && true -> false "o valor mesmo"
|| -> false && true -> true
FALSY 
false
0
'' "" ``
null / undefined
NaN 
*/

//const corUsuario = 'vermelho';
//const corPadrao = corUsuario || 'preto';

//console.log(corUsuario);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || 'Joaozino' || c || d || e);