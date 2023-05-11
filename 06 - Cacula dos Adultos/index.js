const lista = [1, 2, 1, 6, 9, 8, 12]


let maisnovo = Infinity;
let listaAtualizada = [];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= 18) {
        listaAtualizada.push(lista[i]);
    }
}
for (let i = 0; i < listaAtualizada.length; i++) {
    if (listaAtualizada[i] < maisnovo) {
        maisnovo = listaAtualizada[i];
    }
} if (listaAtualizada.length !== 0) {
    console.log(maisnovo);
} else {
    console.log('CRESCA E APARECA')
}
