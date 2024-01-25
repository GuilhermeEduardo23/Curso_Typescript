"use strict";
/* Annotation e Inference

const produto = 'Livro';
const preco = 200;

const carro = {
    marca: "Audi",
    portas: 4,
}

const barato = preco < 400 ? 'Barato' : 'Caro';

type numbers = {
    a: number;
    b: number;
}

function somar({a, b}: numbers) {
    return a + b;
}

const nintendo = {
    nome: 'Nintendo',
    preco: "2000",
}

function transformarPreco(produto: {nome: string, preco: string}) {
    produto.preco = `R$ ${produto.preco}`;
    return produto.preco;
}

console.log(transformarPreco(nintendo)); */
/* Consertar função - Exercício 01
function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}

const frase = ' O gato roeu a roupa do rei de Roma ';

const fraseNormalizada = normalizarTexto(frase);

//console.log(fraseNormalizada);

Exercício 02

const input = document.querySelector('input');

const total = localStorage.getItem('total');

if(input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
    const p = document.querySelector('p');

    if(p) {
        p.innerText = `Ganho Total: ${value + 100 - value * 0.2}`;
    }
}

function totalMudou() {
    if(input) {
        const value = Number(input.value);
        localStorage.setItem('total', input.value);
        calcularGanho(value);
    }
} */
/* Tipos Primitivos */
const frase = "Front End";
const preco = 500;
const condi = preco > 100;
console.log(typeof frase === "string" ? 'Frase é uma string' : 'Frase não é uma string');
