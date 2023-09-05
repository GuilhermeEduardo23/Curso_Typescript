function cadastro() {
    const form = document.querySelector('form');

    const pessoas = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = form.querySelector('#nome').value;
        const sobrenome = form.querySelector('#sobrenome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;
        const resultado = document.getElementById('resultado');
        const dados = document.createElement('p');
        const detalhes = document.getElementById('detalhes');

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso, 
            altura: altura
        });

        console.log(pessoas);

        dados.innerHTML = `<strong>Nome:</strong> ${nome}
        <br>
        <strong>Sobrenome:</strong> ${sobrenome}<br>
        <strong>Peso:</strong> ${peso}
        <br>
        <strong>Altura:</strong> ${altura}`;

        resultado.appendChild(dados);
        detalhes.appendChild(dados);
    })
}

cadastro();