const fs = require('fs');
const path = require('path');


function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {
            conteudo ? resolve(conteudo.toString()) : reject(err)
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
    .catch(e => console.log(e.message))