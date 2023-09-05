function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);