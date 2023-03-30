var a = {
    nome: "Lincoln",
    sobrenome: "Costa"
}

console.log(a) // Criando um simples objeto

function obj(nome, sobrenome) {

    return { nome: nome, sobrenome: sobrenome, }


}

var a = obj("Lincoln", "Costa")


console.log(a) // Criando uma função simples.


function nomes(nome, sobrenome) {

    this.nome = nome
    this.sobrenome = sobrenome

}

var b = new nomes("Lincoln", "Costa")

console.log(b.nome) //Usando this