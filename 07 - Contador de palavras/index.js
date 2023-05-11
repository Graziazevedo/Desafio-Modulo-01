let texto = "um texto qualquer";
let array = texto.split(" ");
let textoLimpo = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
        textoLimpo.push(array[i]);
    }
}

console.log(textoLimpo.length); 
