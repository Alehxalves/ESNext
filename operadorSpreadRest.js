// Operador ... rest(juntar)/spread(espalhar)

// Usar rest com parâmetro de função
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(1, 2, 3, 4));

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.95 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);








