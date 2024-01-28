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
}*/ 
