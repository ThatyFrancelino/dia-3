// Analise os 10 comandos 'if' a seguir e tente prever o que será exibido na tela. Se será exibido a letra A, ou se será exibido a letra B.
// Fique à vontade de rodar o código para verificar se suas respostas estão corretas. 

let variavel1 = 10
let variavel2 = true
let variavel3 = []
let variavel4 = [1,2,3,4]
let variavel5 = "Nome"

//1 - A
if (variavel1 == 10) {
    console.log("A");
} else {
    console.log("B");
}
//2 - B
if (variavel1 > 10) {
    console.log("A");
} else {
    console.log("B");
}
//3 - A
if (variavel1 >= 10) {
    console.log("A");
} else {
    console.log("B");
}
//4 - A
if (variavel2 == true) {
    console.log("A");
} else {
    console.log("B");
}
//5 - A
if (variavel2) {
    console.log("A");
} else {
    console.log("B");
}
//6 - A
if (variavel3) {
    console.log("A");
} else {
    console.log("B");
}
//7 - A
if (variavel4) {
    console.log("A");
} else {
    console.log("B");
}
//8 - A
if (variavel4[0] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//9 - B
if (variavel4[1] == 1) {
    console.log("A");
} else {
    console.log("B");
}
//10 - A
if (typeof(variavel5) == 'string') {
    console.log("A");
} else {
    console.log("B");
}


// tarefa 3.2
//Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. 
//O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, 
//mas não calcula os impostos.
//Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional 
//ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa 
//imprime na tela o valor total do produto.
//Base de dados que o cliente passou para você:

let produtoA = {
    "nome": "camiseta", 
    "valor": 100.00, 
    "internacional": true
}

let produtoB = {
    "nome": "perfume", 
    "valor": 200.00, 
    "internacional": true
}

let produtoC = {
    "nome": "sandália", 
    "valor": 120.00, 
    "internacional": false
}
//Copie essa base para o seu código e escreva um programa que resolve o problema do cliente e exibe as informações dos produtos 
//e o valor aplicado os impostos devidos. Você deve testar o seu código com os 3 produtos.

let valorFinalProdutoA = produtoA.valor*1.12
let valorFinalProdutoB = produtoB.valor*1.12
let valorFinalProdutoC = produtoC.valor*1.2

console.log(valorFinalProdutoA)
console.log(valorFinalProdutoB)
console.log(valorFinalProdutoC)

//

if (produtoA.internacional == true) {
    let valorImpostos = produtoA.valor * 1.2
    console.log(produtoA.nome)
    console.log("é internacional e custa")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoA.valor * 1.12
   console.log(produtoA.nome)
   console.log("é nacional e custa")
   console.log(valorImpostos)
}
//
if (produtoB.internacional == true) {
    let valorImpostos = produtoB.valor * 1.2
    console.log(produtoB.nome)
    console.log("é internacional e custa")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoB.valor * 1.12
   console.log(produtoB.nome)
   console.log("é nacional e custa")
   console.log(valorImpostos)
}
//
if (produtoC.internacional == false) {
    let valorImpostos = produtoC.valor * 1.2
    console.log(produtoC.nome)
    console.log("é internacional e custa")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoC.valor * 1.12
   console.log(produtoC.nome)
   console.log("é nacional e custa")
   console.log(valorImpostos)
}




