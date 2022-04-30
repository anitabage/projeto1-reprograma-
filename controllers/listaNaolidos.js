const livros = require('../database')
const read = require('readline-sync')

const listaNaolidos = () => {
    const opcaoInicial = read.question ('Deseja listar livros não lidos? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const leu = livros.filter(livros => livros.leu === false)
        console.table(leu)
    }
}

module.exports = listaNaolidos