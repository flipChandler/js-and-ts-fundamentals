function primeiraFuncao() {
    console.log("Hello JS");
}

primeiraFuncao();

function somar(valor1, valor2) {
    return valor1 + valor2;
}

console.log(somar(10, 32));  


/* array */

const nomesArray = ["Maria", "João", "José", "Felipe", "Isabel"];

console.log(nomesArray.length); // 5

nomesArray.push("Joana");
nomesArray.push("Sara");
nomesArray.push("Monica");

console.log(nomesArray);

// splice
nomesArray.splice(1, 3); // a partir do index 1, remova 3

console.log(nomesArray); // [ 'Maria', 'Isabel', 'Joana', 'Sara', 'Monica' ]


// slice

const novoNomesArray = nomesArray.slice(0, 3); // fatia do index 0 até o 3 (ele pega o 0, 1 e 2)

console.log(novoNomesArray); // [ 'Maria', 'Isabel', 'Joana' ]


// find

const usuarios = [
    {id: 1, nome: "Maria", idade: 18},
    {id: 2, nome: "João", idade: 32},
    {id: 3, nome: "Dulce", idade: 90},
    {id: 4, nome: "Agostinho", idade: 41},
    {id: 5, nome: "Tomas", idade: 18},
    {id: 6, nome: "Kennedy", idade: 54},
];

const resultado = usuarios.find((elemento) => { // find first
    return elemento.idade == 41;
});

console.log(resultado); // { id: 4, nome: 'Agostinho', idade: 41 }

// inlay Hints... 

// filter

const resultadoFilter = usuarios.filter((usuario) => usuario.idade == 18);

console.log(resultadoFilter); // [ { id: 1, nome: 'Maria', idade: 18 }, { id: 5, nome: 'Tomas', idade: 18 } ]

// pop - remove o último item

const ultimoItem = usuarios.pop();

console.log(ultimoItem); // { id: 6, nome: 'Kennedy', idade: 54 }

// shift - remove o primeiro item

const primeiroItem = usuarios.shift();

console.log(primeiroItem); // { id: 1, nome: 'Maria', idade: 18 }

// unshift - adiciona no inicio do array

usuarios.unshift({id: 1, nome: "Johnson", idade: 34})

console.log(usuarios); 
/*

[
  { id: 1, nome: 'Johnson', idade: 34 },
  { id: 2, nome: 'João', idade: 32 },
  { id: 3, nome: 'Dulce', idade: 90 },
  { id: 4, nome: 'Agostinho', idade: 41 },
  { id: 5, nome: 'Tomas', idade: 18 }
]

*/

// indexOf

const frutas = ["laranja", "maçã", "uva", "limão", "melancia", "abacaxi"];

const index = frutas.indexOf("limão");
console.log(`O index da fruta é ${index}`); // O index da fruta é 3

// map

const msgFrutasAlteradas = frutas.map((fruta) => `O nome da fruta é ${fruta}`);
console.log(msgFrutasAlteradas);

// foreach
frutas.forEach((fruta) => console.log(`O nome da fruta é ${fruta}`));

// reduce
const carrinhoDeCompras = [
    {produto: "Mouse", preco: 600.1},
    {produto: "Teclado", preco: 120.0},
    {produto: "monitor", preco: 1200.2},
    {produto: "Fone de ouvido", preco: 157.25}
];

const total = carrinhoDeCompras.reduce(
    (previous, currentValue) => previous + currentValue.preco, 0);
console.log(total);




