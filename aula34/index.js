const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Eduardo',
    idade: 25
};

const {nome, sobrenome} = pessoa;

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const saudacao = nome === 'Guilherme' ? `Olá ${nome}! Seja Bem-Vindo ao sistema!` : 'Usuário não cadastrado!';

console.log(saudacao);