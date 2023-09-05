/**
Primitivos (imutáveis) = string, number, boolean, undefined, null (bigint, symbol) 
Referência (mutável) - aray, object, function
*/

const a = {
    nome: 'Guilherme',
    sobrenome: 'Eduardo'
};

const b = a;

a.nome = 'João';

console.table(a);
console.table(b);

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Guilherme", available: true},
    {name: "Pedro", available: false},
    {name: "Guilherme", available: true},
    {name: "Guilherme", available: true},
]

console.log(`\n${users[1].name}`)