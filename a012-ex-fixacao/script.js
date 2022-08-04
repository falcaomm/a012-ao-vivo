const prova1 = Number(prompt("Quanto você tirou na prova 1?"))
const prova2 = Number(prompt("Quanto você tirou na prova 2?"))

const media = (prova1 + prova2) / 2
console.log("Sua média é", media, "você está:");

if (media >= 5 && media <= 10) {
    console.log("APROVADO");
} else if (media >= 3 && media < 5) {
    console.log("EM RECUPERAÇÃO");
} else if (media >= 0 && media < 3) {
    console.log("REPROVADO");
} else {
    console.log("Dados inválidos. \nDigite números inteiros entre 0 e 10.");
}