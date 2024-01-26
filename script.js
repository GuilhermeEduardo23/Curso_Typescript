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
let total = 20;
total = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>R$ ${dados.preco}</p>
            <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
        </div>
    `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
};
preencherDados(computador);
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false,
});
function pintarCategoria(categoria) {
    console.log(categoria);
    if (categoria === "design") {
        console.log("vermelho");
    }
}
pintarCategoria("codigo");
