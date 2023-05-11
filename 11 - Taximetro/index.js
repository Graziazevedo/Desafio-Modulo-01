const min = 18
const km = 7.5

const valorPorMinuto = 50;
const valorPorKm = 70;
const descontoTempo = 30;
const descontoKm = 50;
let valortotal = 0;

if (min <= 20) {
    valortotal += valorPorMinuto * min;
} else {
    valortotal += (20 * valorPorMinuto) + ((min - 20) * descontoTempo);
}
if (km <= 10) {
    valortotal += valorPorKm * km;
} else {
    valortotal += (10 * valorPorKm) + ((km - 10) * descontoKm);
}
console.log(valortotal);
