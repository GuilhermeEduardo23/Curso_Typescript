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
window.addEventListener('load', fetchProduct);
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        showProduct(data);
    });
}
function showProduct(data) {
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
