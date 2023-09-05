const data = new Date();
data.toLocaleDateString('pt-br');

function adicionarZeroAEsquerda(data) {
    return (data < 10) ? `0${data}` : data;
}

const diaSemana = data.getDay();
const dia = adicionarZeroAEsquerda(data.getDate());
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = adicionarZeroAEsquerda(data.getHours());
const minuto = adicionarZeroAEsquerda(data.getMinutes());

function verificarDiaSemana(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Não encontrado!'];

    return diasSemana[diaSemana];
}

function verificarMes(mes) {
    const nomesMeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return nomesMeses[mes]; 
}

const diaAtualSemana = verificarDiaSemana(diaSemana);
const mesAtual = verificarMes(mes);

function criarP() {
    const p = document.createElement('p');
    return p;
}

function mostrarData() {
    const p = criarP();

    p.innerText = `${diaAtualSemana}, ${dia} de ${mesAtual} de ${ano}.\nAgora são ${hora}:${minuto}`;

    const display = document.querySelector('.container');

    display.appendChild(p);
}

mostrarData();