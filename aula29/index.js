const data = new Date();
const diaSemana = data.getDay();

function verificarDiaSemana(diaSemana) {
    const diaAtual = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let dia;

    switch(diaSemana) {
        case 0:
            return dia = diaAtual[0];
        case 1:
            return dia = diaAtual[1];
        case 2:
            return dia = diaAtual[2];
        case 3:
            return dia = diaAtual[3];
        case 4:
            return dia = diaAtual[4];
        case 5:
            return dia = diaAtual[5];
        case 6:
            return dia = diaAtual[6];
    }
}

const dia = verificarDiaSemana(diaSemana);

console.log(`Olá! Hoje é ${dia}!`);