const lista = [2, 3, 4]


let totalAcumulado = 0;

for (let i = 0; i < lista.length; i++) {
    totalAcumulado = totalAcumulado + (lista[i] / lista.length);
} console.log(totalAcumulado);