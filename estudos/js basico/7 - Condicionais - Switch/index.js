var nota1 = 6
var nota2 = 1

var nota = parseInt(nota1) + parseInt(nota2)
var media = parseInt(nota1) + parseInt(nota2) / 2
console.log(media)

var conceito = ""

if (media >= 8) {

    conceito = "excelente"


} else if (media >= 6) {

    conceito = "bom"



} else if (media >= 5) {

    conceito = "ruim"



} else if (media < 5) {
    console.log("O aluno não foi aprovado.")
}



console.log(conceito)



switch (conceito) {
    case "excelente":
        console.log("Parabéns, você é um excelente aluno")
        break
    case "bom":
        console.log("Parabéns, você é um bom aluno")
        break
    case "ruim":
        console.log("Você precisa estuar mais")
        break

    default:
        console.log("Houve algum erro.")

}