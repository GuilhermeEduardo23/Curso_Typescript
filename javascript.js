const input = document.querySelector('input');
let value = Number(input.value);

const total = localStorage.getItem('total');
value = total;

function totalMudou() {
    localStorage.setItem('total', value);

    const p = document.querySelector('p');
    p.innerText = `Ganho Total: ${value + 100 - value * 0.2}`;

    console.log(p)
}