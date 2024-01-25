"use strict";
/* Annotation e Inference */
const produto = 'Livro';
const preco = 200;
const carro = {
    marca: "Audi",
    portas: 4,
};
const barato = preco < 400 ? 'Barato' : 'Caro';
function somar({ a, b }) {
    return a + b;
}
const nintendo = {
    nome: 'Nintendo',
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = `R$ ${produto.preco}`;
    return produto.preco;
}
console.log(transformarPreco(nintendo));
