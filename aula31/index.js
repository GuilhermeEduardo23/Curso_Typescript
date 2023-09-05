/*const numeros = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco, sete);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [,[,,seis]] = numeros;
console.log(seis);*/

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Eduardo',
    idade: 25,
    endereco: {
        rua: 'Avenida A',
        numero: 539
    }
};


/*const { nome,  endereco: { rua, numero }} = pessoa;
console.log(nome, resto);*/

const nomes = Array('Guilherme', 'Mário', 'Maria', 'José', 'Ana');

const [guilherme, mario, maria] = nomes;
console.log(guilherme, mario, maria);