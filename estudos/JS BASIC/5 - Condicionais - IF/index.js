var idade = prompt("Qual sua idade?")


if (idade > 70) {
    alert("Você não pode tomar essa bebida por conta da sua idade")
    exit

}

if (idade >= 18) {
    alert("Você pode tomar essa bebida.")
}

if (idade < 18) {
    alert("Você não pode tomar essa bebida por ser de menor.")
}