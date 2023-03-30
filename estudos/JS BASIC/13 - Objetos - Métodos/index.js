function calcmedia(n1, n2) {

    (n1 + n2) / 2

}


var aluno = {

    nome: "Lincoln",
    notas: [2, 7],

    media: calcmedia
}



console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))



var aluno1 = {

    nome: "Gustavo",
    notas: [5, 7],

    media: function(n1, n2) {
        return (n1 + n2) / 2

    }
}



console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))