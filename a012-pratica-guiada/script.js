const bol1 = false
const bol2 = true
const bol3 = true

// if (bol1) {
//     alert ("Entrei no if sou true")
// } else  {
//     alert ("entrei no else, sou false")
// }

// if (bol1===bol2) {alert("1 e 2 são iguais")} 
// else if (bol2 === bol3) {alert("2 e 3 são iguais")} 
// else if (bol1 === bol3) {alert("1 e 3 são iguais")} 
// else {alert("Nenhuma das condições foi atendida")} 

const idade = 21

if (idade >= 60 || idade >= 16 && idade < 18) {
    alert("O VOTO É FACULTATIVO")
} else if (idade >= 18) {
    alert("PODE E DEVE TIRAR O TÍTULO")
} else { 
    alert("NÃO PODE EMITIR O TÍTULO") 
}

