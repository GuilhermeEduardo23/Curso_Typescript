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

/* Tipos Primitivos
const frase = "Front End";
const preco = 500;
const condi = preco > 100;

console.log(typeof frase === "string" ? 'Frase é uma string' : 'Frase não é uma string'); */

/* Union Types
let total: string | number = 200;
total = '300';

function isNumber(value: string | number) {
    if(typeof value === 'number') {
        return true;
    } else {
        return false;
    }
}

if(isNumber("200")) {
    console.log(isNumber(200));
}

const button = document.querySelector('button');

button?.click();*/

/* Exercício 03 
function toNumber(value: number | string) {
    if(typeof value === "number") {
        return value;
    } else if(typeof value === "string") {
        return Number(value);
    } else {
        throw "Value deve ser um número ou uma string";
    }
}

console.log(toNumber(25));*/

/*function verificarVogais(frase: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vogaisContadas = 0;

    for(let i = 0; i < frase.length; i++) {
        for(let j = 0; j < vogais.length; j++) {
            if(frase[i] === vogais[j]) {
                vogaisContadas++;
            }
        }
    }

    return `A frase possui ${vogaisContadas} vogais`;
}

console.log(verificarVogais('O rato roeu a roupa do rei de Roma'));*/

type NumberOrString = string | number;

let total: NumberOrString = 20;
total = "30";

type Produto = {
    nome: string;
    preco: number;
    teclado: boolean;
}

function preencherDados(dados: Produto) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>R$ ${dados.preco}</p>
            <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
        </div>
    `;
}

const computador: Produto = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
}

preencherDados(computador);

preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false,
})

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
    console.log(categoria);

    if(categoria === "design") {
        console.log("vermelho");
    }
}

pintarCategoria("codigo");