// (condição) ? 'Valor se verdadeiro' : 'Valor se falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario > 999 ? 'Usuário VIP.' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);