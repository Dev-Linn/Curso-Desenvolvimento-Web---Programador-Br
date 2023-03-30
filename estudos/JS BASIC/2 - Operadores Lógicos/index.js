// && só vai retornar true se a variavel booleana for true
// || ou // se um deles for verdadeiro, ele vai retornar verdadeiro
// Negativo

/* treinando &&*/

var a = true
var b = false

var c = a && b

console.log(c) // false pois A não é igual a b


var idade = 25

var menorque30 = idade <= 30
var maiorque20 = idade => 20

console.log("A idade é maior que",
    maiorque20)

console.log("A idade é menor que",
    menorque30)


var idade2 = maiorque20 && menorque30

console.log("Entre 20 e 30", idade2)

/* treinando &&*/


/* treinando ||*/


var idadef = 55

var menor10 = idadef <= 10
var maior65 = idadef >= 65
var trouxe = true

var gratis = menor10 || maior65 || trouxe

console.log("tem direito a gratuidade", gratis)

/* treinando ||*/