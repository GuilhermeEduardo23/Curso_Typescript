const comp = 10 >= 11;

console.log(comp);

const arr = [0, 1, 2, 3, 4, 5]

console.log(arr)

const pessoa = {
    nome: 'Guilherme',
    idade: 24
}

console.log(typeof arr);

const usuario = 'Guilherme';
const senha = '123456';

const vaiLogar = usuario === 'Guilherme' && senha === '123456';

if(vaiLogar) 
    console.log('Usuário Logado!');
else
    console.error('Usuário ou senha inválido!');