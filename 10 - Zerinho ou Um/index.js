const jogadores = [
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
]

let jogadas1 = 0;
let jogadas0 = 0;

for (let item of jogadores) {
  if (item.jogada === 1) {
    jogadas1++;
  } else {
    jogadas0++;
  }
}
if (jogadas1 === 1) {
  for (let item of jogadores) {
    if (item.jogada === 1) {
      console.log(item.nome);
    }
  }
} else if (jogadas0 === 1) {
  for (let item of jogadores) {
    if (item.jogada === 0) {
      console.log(item.nome);
    }
  }
} else {
  console.log("NINGUEM")
}



//   const boolean = inputJogadores.map((objetos) => {
//     return objetos.jogada === 1
// })

// let contadorDeTrue = 0
// let contadorDeFalse = 0

// const contar = boolean.map((boolean) => {
// boolean ? contadorDeTrue++ : contadorDeFalse++
// })

// if(contadorDeTrue === 1) {

// const escolhido = inputJogadores.map((objetos) => {
//         if(objetos.jogada === 1) {
//             return objetos.nome
//         } else {
//             return ''
//         }
//     })
//     while (escolhido.indexOf('') !== -1) {
//         let index = escolhido.indexOf('')
//         escolhido.splice(index, 1)
//     }

// console.log(escolhido[0])

// } else if (contadorDeFalse === 1) {

//     const escolhido2 = inputJogadores.map((objetos) => {
//         if(objetos.jogada === 0) {
//             return objetos.nome
//         } else {
//             return ''
//         }
//     })
//     while (escolhido2.indexOf('') !== -1) {
//         let index = escolhido2.indexOf('')
//         escolhido2.splice(index, 1)
//     }

// console.log(escolhido2[0])

// } else {
//     console.log('NINGUEM')
// }