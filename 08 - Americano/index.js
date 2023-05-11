const numeros = [1, 3, 2, 1]

let quantidadeDeJogadores = numeros.length;
let soma = 0;

for (let i = 0; i < quantidadeDeJogadores; i++) {
    soma += numeros[i];
}
let goleiroEscolhido = soma % quantidadeDeJogadores;
if (goleiroEscolhido === 0) {
    console.log(quantidadeDeJogadores)
} else {
    console.log(goleiroEscolhido)
}