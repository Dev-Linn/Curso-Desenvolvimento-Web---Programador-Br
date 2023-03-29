const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const nota1 = document.querySelector("#nota1");
    const nota2 = document.querySelector("#nota2");

    const namea = document.querySelector("#namea");
    const nota1a = document.querySelector("#nota1a");
    const nota2a = document.querySelector("#nota2a");

    const nameb = document.querySelector("#nameb");
    const nota1b = document.querySelector("#nota1b");
    const nota2b = document.querySelector("#nota2b");



    const value = name.value;
    const valor1 = parseInt(nota1.value);
    const valor2 = parseInt(nota2.value);

    const valuea = namea.value;
    const valor1a = parseInt(nota1a.value);
    const valor2a = parseInt(nota2a.value);

    const valueb = nameb.value;
    const valor1b = parseInt(nota1b.value);
    const valor2b = parseInt(nota2b.value);

    var media = (valor1 + valor2) / 2;
    var mediaa = (valor1a + valor2a) / 2;
    var mediab = (valor1b + valor2b) / 2;


    function passou(media) {
        if (media >= 7) {
            return "Aprovado"
        } else {
            return "reprovado."
        }

    }

    function passou(mediaa) {
        if (mediaa >= 7) {
            return "Aprovado"
        } else {
            return "reprovado."
        }

    }

    function passou(mediab) {
        if (mediab >= 7) {
            return "Aprovado"
        } else {
            return "reprovado."
        }

    }



    document.getElementById("total").innerHTML = "O nome do aluno é: " +
        value + ", Sua primeira nota é: " + valor1 + ", e sua segunda nota é " + valor2 + ", e sua media é: " + media + " O aluno está: " + passou(media);

    document.getElementById("totala").innerHTML = "O nome do aluno é: " +
        valuea + ", Sua primeira nota é: " + valor1a + ", e sua segunda nota é " + valor2a + ", e sua media é: " + mediaa + " O aluno está: " + passou(mediaa);

    document.getElementById("totalb").innerHTML = "O nome do aluno é: " +
        valueb + ", Sua primeira nota é: " + valor1b + ", e sua segunda nota é " + valor2b + ", e sua media é: " + mediab + " O aluno está: " + passou(mediab);


});