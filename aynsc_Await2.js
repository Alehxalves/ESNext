function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]; // Usando destructuring
    }

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        if (numerosProibidos.includes(random)) {
            reject('Número repetido!')
        } else {
            resolve(random)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros
    } catch (e) {
        if (tentativas > 9) {
            throw `Não deu certo número de tentativas: ${tentativas}`
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1);
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)