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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        mostrarCursos(data);
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.map(curso => (document.body.innerHTML += `
            <div>
                <h1 style = color:${curso.nivel === "iniciante" ? "blue" : "red"}>${curso.nome}</h1>
                <p>Horas: ${curso.horas}</p>
                <p>Aulas: ${curso.aulas}</p>
                <p>Gratuito? ${curso.gratuito === false ? "Não" : "Sim"}</p>
                <p>Tags: ${curso.tags.join(', ')}</p>
                <p>ID Aulas: ${curso.idAulas.join(', ')}</p>
                <p>Nível do curso: ${curso.nivel.toUpperCase()}</p>
            </div>
        `));
}
