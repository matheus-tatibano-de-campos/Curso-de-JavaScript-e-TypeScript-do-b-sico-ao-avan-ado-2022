// (condiçao) ? 'valor para verdadeiro' : 'valor para falso';
const pontuaçaoUsuario = 1000;
const nivelUsuario = pontuaçaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);




/*if (pontuaçaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}*/