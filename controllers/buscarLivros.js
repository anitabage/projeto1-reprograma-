const livros = require('../database')
const read = require('readline-sync')
const buscarLivros  = () => {
    const opcaoInicial = read.question ('deseja buscar por categoria? S/N').toUpperCase()
    if (opcaoInicial === 'S'){
        const categorias = livros.map(livro => livro.categoria)
        console.table(categorias)

        const inputCategoria = read.question('digite uma categoria conforme tabela acima: ')
        const confirmacao = read.question('tem certeza? S/N' ).toUpperCase()
        if (confirmacao === 'S'){
            const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(livrosFiltrados)

        }



    }


}

module.exports = buscarLivros