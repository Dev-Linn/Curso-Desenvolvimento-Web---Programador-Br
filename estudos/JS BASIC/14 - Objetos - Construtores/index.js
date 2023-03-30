function criarAluno(nome, n1, n2) {

    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function() {

        return (this.n1 + this.n2) / 2

    }
}


var aluno1 = new criarAluno("Lincoln", 8, 7)
var aluno2 = new criarAluno("Carlos", 5, 7)
var aluno3 = new criarAluno("Gustavo", 2, 7)
var aluno4 = new criarAluno("Gabriel", 1, 7)
var aluno5 = new criarAluno("Lucas", 0, 7)


console.log(aluno1, aluno2, aluno3, aluno4, aluno5)