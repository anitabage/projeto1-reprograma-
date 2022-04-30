const livros = require('./database')
console.log(livros)

const read = require('readline-sync')
const buscarLivros = require ('./controllers/buscarLivros')
const listaNaolidos = require('./controllers/listarLivrosNaoLidos')
const listaRecomendados = require('./controllers/listarLivrosRecomendados')
const listaOrdenandos = require('./controllers/listarLivrosOrdenados')
const resposta = read.question(`
========== Menu ==========
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de pagina
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]
`)

switch(resposta){
    case '1':
        //chamar função busarlivro
        buscarLivros()
        break
        case '2':
            //chamar função livrosordenandos
            listaOrdenandos()
            break
            case '3':
                listaRecomendados()
                break
                case '4':
                    listaNaolidos()
                    break

        default:
            console.log('fim do algoritmo')
}