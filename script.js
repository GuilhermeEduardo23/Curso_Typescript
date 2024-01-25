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
//console.log(transformarPreco(nintendo));
/* Consertar função - Exercício 01 */
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const frase = ' O gato roeu a roupa do rei de Roma ';
const fraseNormalizada = normalizarTexto(frase);
//console.log(fraseNormalizada);
/* Exercício 02 */
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `Ganho Total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem('total', input.value);
        calcularGanho(value);
    }
}