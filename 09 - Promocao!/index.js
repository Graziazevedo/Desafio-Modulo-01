const precos = [200, 150, 50, 100]

let valorAPagar = 0;
let quantidade = precos.length;
let valorDesconto = Math.min(...precos) * 0.5;

for (let preco of precos) {
    valorAPagar += preco;
}
if (quantidade < 3) {
    console.log(valorAPagar);
} else if (quantidade >= 3) {
    console.log(valorAPagar - valorDesconto);
}