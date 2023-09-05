const criaPessoa = (nome, sobrenome, idade) => {
    return {nome, sobrenome, idade};
}

const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Eduardo',
    idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está digitando...`);
    }
};

pessoa1.fala();