function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('Tempo de execução promise...')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => console.timeEnd('Tempo de execução promise...'))