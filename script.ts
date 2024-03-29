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

/*type NumberOrString = 25 | "25";

let nums: NumberOrString = "25";

interface IProduto {
    nome: string;
    preco: number;
    teclado: boolean;
}

type Produto = {
    nome: string;
    preco: number;
    teclado: boolean;
}

function preencherDados(dados: IProduto) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>R$ ${dados.preco}</p>
            <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
        </div>
    `;
}

const computador: IProduto = {
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

pintarCategoria("codigo");*/

interface IEmpresa {
    nome: string;
    fundacao: number;
    pais: string;
}

interface IProduct {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: IEmpresa;
    empresaMontadora: IEmpresa;
}

/*window.addEventListener('load', fetchProduct);

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data: IProduct = await response.json();
    showProduct(data);
}

function showProduct(data: IProduct) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>Preço: R$ ${data.preco}</p>
            <p>Descrição: ${data.descricao}</p>
            <p>Garantia: ${data.garantia}</p>
            <p>Possui seguro contra acidentes? ${data.seguroAcidentes ? "Sim" : "Não"}</p>
            <p>Empresa Fabricante: ${data.empresaFabricante.nome}</p>
            <p>Fundação: ${data.empresaFabricante.fundacao}</p>
            <p>País: ${data.empresaFabricante.pais}</p>
            <p>Empresa Montadora: ${data.empresaMontadora.nome}</p>
            <p>Fundação: ${data.empresaMontadora.fundacao}</p>
            <p>País: ${data.empresaMontadora.pais}</p>
        </div>
    `;
}

const numeros = [10, 20, 30, 40, 50];

function maiorQue10(numeros: Array<number>) {
    return numeros.filter(n => n > 10);
}

console.log(maiorQue10(numeros));

const valores = [10, 'Taxas', 30, 'Produto', 50, 3];

function filtrarValores(data: Array<string | number>) {
    return data.filter(item => typeof item === "number");
}

console.log(filtrarValores(valores));

const dados = [
    ["Senhor dos Anéis", 80],
    ["Game of Thrones", 120],
];*/

/*interface ICursos {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: Array<string>;
    idAulas: Array<number>;
    nivel: string;
}

async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data: Array<ICursos> = await response.json();

    mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<ICursos>) {
    cursos.map(curso => (
        document.body.innerHTML += `
            <div>
                <h1 style = color:${curso.nivel === "iniciante" ? "blue" : "red"}>${curso.nome}</h1>
                <p>Horas: ${curso.horas}</p>
                <p>Aulas: ${curso.aulas}</p>
                <p>Gratuito? ${curso.gratuito === false ? "Não" : "Sim"}</p>
                <p>Tags: ${curso.tags.join(', ')}</p>
                <p>ID Aulas: ${curso.idAulas.join(', ')}</p>
                <p>Nível do curso: ${curso.nivel.toUpperCase()}</p>
            </div>
        `
    ));
}

import axios from "axios";

interface IDadosApiMoedas {
    code: string;
    name: string;
    high: string;
}

interface ITiposMoedas {
    USDBRL: IDadosApiMoedas;
    EURBRL: IDadosApiMoedas;
    BTCBRL: IDadosApiMoedas;
}

async function ApiMoedas() {
    return (await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')).data as ITiposMoedas;
}

const showData = async (data: Promise<ITiposMoedas>) => {
    const response = await data;
    const result = Object.values(response);
    const nomes: string[] = result.map(nome => nome.name);
    console.log(nomes);
}

showData(ApiMoedas());

class Produto {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const livro = new Produto('A Guerra dos Tronos');

console.log(livro instanceof Produto);

class Livro extends Produto {
    autor: string;
    
    constructor(name: string, autor: string) {
        super(name);
        this.autor = autor;
    }
}

class Jogo extends Produto {
    jogadores: number;

    constructor(name: string, jogadores: number) {
        super(name);
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string) {
    return busca === "O Hobbit" ? new Livro("O Hobbit", "J. R. R. Tolkien") : busca === "Dark Souls" ? new Jogo("Dark Souls", 1) : null;
}

const produto = buscarProduto("Dark Souls");

if(produto instanceof Livro) {
    console.log(produto.autor);
}

if(produto instanceof Jogo) {
    console.log(produto.nome);
}

if(produto instanceof Produto) {
    console.log(produto.nome);
}*/

interface Carro {
    nome: string;
}

const honda: Carro = {
    nome: "Honda",
}