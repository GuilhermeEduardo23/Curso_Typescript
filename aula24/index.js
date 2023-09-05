const saudacao = (hora) => {
    const cumprimento = ['Bom dia', 'Boa tarde', 'Boa noite', 'Boa madrugada'];

    if(hora >= 1 && hora <= 11)
        return cumprimento[0];
    else if(hora >= 12 && hora <= 17)
        return cumprimento[1];
    else if(hora >= 18 && hora <= 23)
        return cumprimento[2];
    else
        return cumprimento[3];
}

const diaDaSemana = (data) => {
    const diaDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    switch(data) {
        case 0:
            return diaDaSemana[0];
            break;
        case 1:
            return diaDaSemana[1];
            break;
        case 2:
            return diaDaSemana[2];
            break;
        case 3:
            return diaDaSemana[3];
            break;
        case 4:
            return diaDaSemana[4];
            break;
        case 5:
            return diaDaSemana[5];
            break;
        case 6:
            return diaDaSemana[6];
            break;
    }
}

const hora = new Date();
const horaAtual = hora.getHours();
const data = hora.getDay();

console.log(`${saudacao(horaAtual)}! Hoje é ${diaDaSemana(data)}.`);