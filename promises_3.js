function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]; // Usando destructuring
    }

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)