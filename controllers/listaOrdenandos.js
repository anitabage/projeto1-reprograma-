const livros = require('../database.js')
const read = require('readline-sync')
const listaOrdenandos = () => {
    const confirmlistaOrdenandos = read.question('Visualizar os livros pelo número crescente de páginas? S/N ').toUpperCase()
    if(confirmlistaOrdenandos === 'S') {
        const livrosOrdenandos = livros.sort((a,b) => {
            return a.paginas - b.paginas;})
            console.table(livrosOrdenandos)
    } else {
        console.log('Tudo bem!')
    }
}
module.exports = listaOrdenandos