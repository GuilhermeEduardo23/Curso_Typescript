const btnEnviar = document.getElementById('btn-enviar');
const btnLimpar = document.getElementById('btn-limpar');
const form = document.querySelector('.form');
const resultado = document.querySelector('.imcResultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const resultado = getNivelIMC(imc);
    
    const msg = `Seu IMC é ${imc} e seu 
    resultado é ${resultado}.`;
    
    setResultado(msg, true);
});

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc < 18.5) 
        return nivel[0];
    else if(imc >= 18.5 && imc <= 24.9) 
        return nivel[1];
    else if(imc >= 25 && imc <= 29.9) 
        return nivel[2];
    else if(imc >= 30 && imc <= 34.9) 
        return nivel[3];
    else if(imc >= 35 && imc <= 39.9) 
        return nivel[4];
    else 
        return nivel[5];
}

function getIMC(peso, altura) {
    const imc = peso / Math.pow(altura, 2);

    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    resultado.innerHTML = '';
    const p = criarP();
    
    if(isValid) resultado.classList.add('paragrafo-resultado');
    else resultado.classList.add('bad');

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

btnLimpar.addEventListener('click', () => {
    peso.value = '';
    altura.value = '';
    resultado.classList.add('ocultarDisplay');
});