var idade = prompt("Coloque sua idade")


var pode = idade >= 18 ? true : false

if (idade > 70) {
    alert("você não pode comprar por conta da sua idade avançada.")
    exit
}

if (pode == false) {
    alert("Você não pode comprar")
    exit
}


if (pode = true) {
    alert("você pode comprar")
    alert("Você sera encaminhado para a página de compras.")
    window.location.href = "index2.html"
}