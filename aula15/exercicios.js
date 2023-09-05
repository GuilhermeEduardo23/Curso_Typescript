const num1 = document.getElementById('num1');
const spanInteiro = document.getElementById('spanInteiro');
const spanRaizQuadrada = document.getElementById('spanRaizQuadrada');
const spanTrue = document.getElementById('spanTrue');
const spanNaN = document.getElementById('spanNaN');
const spanBaixo = document.getElementById('spanBaixo');
const spanCima = document.getElementById('spanCima');
const spanDecimal = document.getElementById('spanDecimal');

const num = Number(prompt('Digite um número:'));

num1.innerText = num;
spanInteiro.innerText = num;
spanRaizQuadrada.innerText = Math.sqrt(num) ;
spanTrue.innerText = Number.isInteger(num);
spanNaN.innerText = Number.isNaN(num);
spanBaixo.innerText = Math.floor(num);
spanCima.innerText = Math.ceil(num);
spanDecimal.innerText = Number.parseFloat(num).toFixed(2);