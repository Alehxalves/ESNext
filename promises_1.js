// let a = 1;
// console.log(a);




const primeiroElemento = array => array[0];
const primeiraLetra = string => string[1]
const letraMinuscula = letra => letra.toUpperCase();

let p = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
